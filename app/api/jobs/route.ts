import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute("SELECT * FROM jobs");
    await connection.end();

    // Parse the `tags` field from JSON string to an array
    const jobs = rows.map((job: any) => ({
      ...job,
      tags: JSON.parse(job.tags || "[]"), // Safely parse tags or default to an empty array
    }));

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}