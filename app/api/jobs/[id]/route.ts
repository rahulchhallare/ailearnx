import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Fetch job details
    const [jobRows] = await connection.execute("SELECT * FROM jobs WHERE id = ?", [params.id]);

    if (jobRows.length === 0) {
      await connection.end();
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const job = jobRows[0];

    // Fetch job requirements
    const [requirementsRows] = await connection.execute(
      "SELECT requirement FROM job_requirements WHERE job_id = ?",
      [params.id]
    );
    job.requirements = requirementsRows.map((row: any) => row.requirement);

    // Fetch job responsibilities
    const [responsibilitiesRows] = await connection.execute(
      "SELECT responsibility FROM job_responsibilities WHERE job_id = ?",
      [params.id]
    );
    job.responsibilities = responsibilitiesRows.map((row: any) => row.responsibility);

    // Fetch job benefits
    const [benefitsRows] = await connection.execute(
      "SELECT benefit FROM job_benefits WHERE job_id = ?",
      [params.id]
    );
    job.benefits = benefitsRows.map((row: any) => row.benefit);

    // Parse the tags field if it exists
    job.tags = JSON.parse(job.tags || "[]");

    await connection.end();

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error fetching job data:", error);
    return NextResponse.json({ error: "Failed to fetch job data" }, { status: 500 });
  }
}