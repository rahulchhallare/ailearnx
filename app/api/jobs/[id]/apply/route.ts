import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import mysql from "mysql2/promise";
import { Readable } from "stream";
import fs from "fs";

// AWS S3 Configuration
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
const bucketName = process.env.AWS_S3_BUCKET_NAME!;

export const runtime = "nodejs"; // Specify the runtime environment
export const dynamic = "force-dynamic"; // Ensure the route is dynamic

// Helper function to sanitize values
function sanitizeValue(value: any, type: "string" | "int" = "string") {
  if (value === undefined || value === null) {
    return null;
  }
  if (type === "int") {
    return parseInt(value, 10) || null; // Convert to integer or return null if invalid
  }
  return String(value).trim(); // Convert to string and trim whitespace
}

// Helper function to convert the Request object to a Node.js IncomingMessage-like object
function requestToIncomingMessage(req: Request): Readable {
  const readable = new Readable({
    read() {},
  });

  const reader = req.body?.getReader();
  if (reader) {
    (async () => {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          readable.push(null); // End the stream
          break;
        }
        readable.push(value); // Push data to the stream
      }
    })();
  } else {
    readable.push(null); // End the stream if no body
  }

  // Mimic IncomingMessage headers and method
  readable.headers = Object.fromEntries(req.headers.entries());
  readable.method = req.method;

  return readable;
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id; // Extract user_id from the session

    const form = new IncomingForm({
      keepExtensions: true, // Keep file extensions
    });

    // Convert the Request object to an IncomingMessage-like object
    const incomingMessage = requestToIncomingMessage(req);

    const data = await new Promise((resolve, reject) => {
      form.parse(incomingMessage, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    console.log("Parsed Data:", data); // Debugging log
    const { fields, files } = data;
    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume; // Handle array or single object

    let resumeUrl = null;

    // Upload the file to S3 if it exists
    if (resumeFile) {
      const fileStream = fs.createReadStream(resumeFile.filepath);
      const fileKey = `resumes/${Date.now()}_${resumeFile.originalFilename}`;

      const uploadParams = {
        Bucket: bucketName,
        Key: fileKey,
        Body: fileStream,
        ContentType: resumeFile.mimetype,
      };

      const uploadResult = await s3.send(new PutObjectCommand(uploadParams));
      console.log("S3 Upload Result:", uploadResult);

      resumeUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
    }

    console.log("Resume URL:", resumeUrl);

    // Connect to the database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Insert the application data into the database
    const query = `
      INSERT INTO job_applications (job_id, user_id, applicant_name, email, phone, location, linkedin_url, portfolio_url, experience, cover_letter, resume_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      sanitizeValue(fields.jobId, "int"), // Job ID (integer)
      sanitizeValue(userId, "int"), // User ID (integer)
      sanitizeValue(`${fields.firstName} ${fields.lastName}`.trim()), // Concatenated applicant name (string)
      sanitizeValue(fields.email), // Email (string)
      sanitizeValue(fields.phone), // Phone (string or null)
      sanitizeValue(fields.location), // Location (string or null)
      sanitizeValue(fields.linkedin), // LinkedIn URL (string or null)
      sanitizeValue(fields.portfolio), // Portfolio URL (string or null)
      sanitizeValue(fields.experience, "int"), // Experience (integer)
      sanitizeValue(fields.coverLetter), // Cover letter (string or null)
      sanitizeValue(resumeUrl), // Resume file URL (string or null)
    ];

    const [result] = await connection.execute(query, values);
    console.log("Database Insert Result:", result); // Debugging log

    await connection.end();

    return NextResponse.json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error saving application:", error);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }
}
