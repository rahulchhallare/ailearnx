import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
    try {
        // Connect to the database
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        // Query to fetch all events
        const [rows] = await connection.execute(
            `SELECT id, title, description, image, date, location, attendees, duration, type, event_url
             FROM events
             ORDER BY date ASC`
        );

        await connection.end();

        // Return the events as JSON
        return NextResponse.json(rows);
    } catch (error) {
        console.error("Error fetching events:", error);
        return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
    }
}