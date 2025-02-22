import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import pool from "@/lib/db/mysql"

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = await req.json()
    
    // Log the received data
    console.log('Received signup data:', { firstName, lastName, email });

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    try {
      // Check if user exists
      const [existingUsers] = await pool.query(
        'SELECT id FROM users WHERE email = ?',
        [email]
      )

      console.log('Existing users check:', existingUsers);

      if ((existingUsers as any[]).length > 0) {
        return NextResponse.json(
          { message: "User already exists" },
          { status: 400 }
        )
      }

      // Hash password
      const hashedPassword = await hash(password, 12)

      // Create user
      const name = `${firstName} ${lastName}`
      const [result] = await pool.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword]
      )

      console.log('Insert result:', result);

      return NextResponse.json({
        message: "Account created successfully",
        userId: (result as any).insertId
      })
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { message: "Database error: " + (dbError as Error).message },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json(
      { message: "Error creating account: " + (error as Error).message },
      { status: 500 }
    )
  }
}
