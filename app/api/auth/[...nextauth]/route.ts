import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import mysql from "mysql2/promise"
import bcrypt from "bcrypt"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {}

        if (!email || !password) {
          return null // Return null if credentials are missing
        }

        try {
          // Connect to the MySQL database
          const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
          })

          // Query the users table for the provided email
          const [rows] = await connection.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
          )

          // Close the database connection
          await connection.end()

          // Check if a user was found and validate the password
          if (rows.length > 0) {
            const user = rows[0]

            // Compare the provided password with the hashed password in the database
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (isPasswordValid) {
              // Return the user object if authentication is successful
              return { id: user.id, name: user.name, email: user.email }
            }
          }
        } catch (error) {
          console.error("Error during user authentication:", error)
        }

        // Return null if authentication fails
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after successful sign in
      return url.startsWith(baseUrl) ? url : '/dashboard'
    },
  },
})

export { handler as GET, handler as POST }

