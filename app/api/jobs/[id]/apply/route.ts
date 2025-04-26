import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    console.log("Request received"); // Debugging log

    // Retrieve the session
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id; // Extract user_id from the session

    // Parse the JSON body
    const body = await req.json();
    console.log("Received Fields:", body); // Debugging log

    if (!body.jobId || !body.firstName || !body.lastName || !body.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Connect to the database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Insert the application data into the database
    const query = `
      INSERT INTO job_applications (job_id, user_id, applicant_name, email, phone, location, linkedin_url, portfolio_url, experience, cover_letter)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      body.jobId,
      userId, // Use the user_id from the session
      `${body.firstName} ${body.lastName}`.trim(), // Concatenate first_name and last_name
      body.email,
      body.phone || null,
      body.location || null,
      body.linkedin || null,
      body.portfolio || null,
      body.experience || null,
      body.coverLetter || null,
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