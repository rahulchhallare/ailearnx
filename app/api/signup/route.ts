import { NextResponse } from "next/server"
import mysql from "mysql2/promise"
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, password } = body

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Concatenate firstName and lastName to create the name
    const name = `${firstName} ${lastName}`

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Connect to the MySQL database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })

    // Check if the email already exists
    const [existingUser] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    )

    if (existingUser.length > 0) {
      await connection.end()
      return NextResponse.json(
        { error: "Email is already registered" },
        { status: 400 }
      )
    }

    // Insert the new user into the database
    await connection.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    )

    // Close the database connection
    await connection.end()

    return NextResponse.json(
      { message: "Account created successfully!" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error during user registration:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
