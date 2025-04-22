import NextAuth from "next-auth"
import LinkedInProvider from 'next-auth/providers/linkedin'
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
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID ?? '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? '',
      authorization: {
        url: "https://www.linkedin.com/oauth/v2/authorization",
        params: {
          scope: 'profile', // Use only the profile scope
          response_type: 'code',
        },
      },
      token: "https://www.linkedin.com/oauth/v2/accessToken", // Token endpoint
      userinfo: "https://api.linkedin.com/v2/me", // Userinfo endpoint
      profile(profile) {
        console.log("LinkedIn profile response:", profile) // Debug log for LinkedIn profile
        return {
          id: profile.id, // LinkedIn provides `id` as the unique identifier
          name: `${profile.localizedFirstName} ${profile.localizedLastName}` || null, // Combine first and last name
          email: null, // LinkedIn does not provide email by default without `r_emailaddress` scope
          image: null, // LinkedIn does not provide profile picture without additional permissions
        }
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {}

        console.log("Credentials received:", { email, password: !!password }) // Debug log for received credentials

        if (!email || !password) {
          console.error("Missing email or password") // Debug log for missing credentials
          return null
        }

        try {
          console.log("Connecting to the database...") // Debug log for database connection
          const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
          })

          console.log("Executing query to find user by email...") // Debug log for query execution
          const [rows] = await connection.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
          )

          await connection.end()
          console.log("Database connection closed.") // Debug log for closing the connection

          if (rows.length > 0) {
            const user = rows[0]
            console.log("User found:", user) // Debug log for found user

            const isPasswordValid = await bcrypt.compare(password, user.password)
            console.log("Password validation result:", isPasswordValid) // Debug log for password validation

            if (isPasswordValid) {
              return { id: user.id, name: user.name, email: user.email }
            } else {
              console.error("Invalid password") // Debug log for invalid password
            }
          } else {
            console.error("No user found with the provided email") // Debug log for no user found
          }
        } catch (error) {
          console.error("Error during user authentication:", error) // Debug log for authentication error
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      console.log("Session callback triggered:", { session, token }) // Debug log for session callback
      session.user = {
        ...session.user,
        id: token.id,
        name: token.name,
        email: token.email,
      }
      return session
    },
    async jwt({ token, user }) {
      console.log("JWT callback triggered:", { token, user }) // Debug log for JWT callback
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback triggered:", { url, baseUrl }) // Debug log for redirect callback
      if (url === baseUrl || url === `${baseUrl}/` || url === `${baseUrl}/login`) {
        return '/dashboard' // Redirect to dashboard if no specific URL is provided or redirected to login
      }
      if (url.startsWith(baseUrl)) {
        return url // Allow redirects within the same base URL
      }
      return baseUrl // Default fallback
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }

