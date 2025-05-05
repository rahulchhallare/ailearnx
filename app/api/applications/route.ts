import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust the path as needed

export async function GET(req: Request) {
  try {
    // Get the session to retrieve the user's ID
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Connect to the database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Fetch applications for the logged-in user
    const [rows] = await connection.execute(
      `
      SELECT 
        applications.id,
        applications.status,
        applications.applied_at AS appliedDate,
        jobs.title AS jobTitle,
        jobs.company,
        jobs.id AS jobId
      FROM job_applications AS applications
      JOIN jobs ON applications.job_id = jobs.id
      WHERE applications.user_id = ?
      ORDER BY applications.applied_at DESC
      `,
      [userId]
    );

    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}