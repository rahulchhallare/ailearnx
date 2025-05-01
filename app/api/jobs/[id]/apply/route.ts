import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import { Readable } from "stream";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import mysql from "mysql2/promise";

export const dynamic = 'force-dynamic';

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
      uploadDir: path.join(process.cwd(), "uploads"), // Directory to save uploaded files
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
    const resumePath = resumeFile?.filepath || null; // Get the file path or set to null if not available

    console.log("Resume file path:", resumePath);

    // Further processing logic here...
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
      sanitizeValue( `${fields.firstName} ${fields.lastName}`.trim()), // Concatenated applicant name (string)
      sanitizeValue(fields.email), // Email (string)
      sanitizeValue(fields.phone), // Phone (string or null)
      sanitizeValue(fields.location), // Location (string or null)
      sanitizeValue(fields.linkedin), // LinkedIn URL (string or null)
      sanitizeValue(fields.portfolio), // Portfolio URL (string or null)
      sanitizeValue(fields.experience, "int"), // Experience (integer)
      sanitizeValue(fields.coverLetter), // Cover letter (string or null)
      sanitizeValue(resumePath), // Resume file path (string or null)
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