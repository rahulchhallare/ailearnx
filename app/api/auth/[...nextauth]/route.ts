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

        if (!email || !password) {
          return null
        }

        try {
          const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
          })

          const [rows] = await connection.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
          )

          await connection.end()

          if (rows.length > 0) {
            const user = rows[0]

            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (isPasswordValid) {
              return { id: user.id, name: user.name, email: user.email }
            }
          }
        } catch (error) {
          console.error("Error during user authentication:", error)
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
      // Add user data to the session object
      session.user = {
        ...session.user,
        id: token.id,
        name: token.name,
        email: token.email,
      }
      return session
    },
    async jwt({ token, user }) {
      // Add user data to the JWT token
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    async redirect({ url, baseUrl }) {
      // Redirect to the dashboard after login
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

