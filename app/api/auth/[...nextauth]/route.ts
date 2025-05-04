import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import mysql from "mysql2/promise";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID ?? "",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (!email || !password) {
          return null;
        }

        try {
          const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
          });

          const [rows] = await connection.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
          );

          await connection.end();

          if (rows.length > 0) {
            const user = rows[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
              return { id: user.id, name: user.name, email: user.email };
            }
          }
        } catch (error) {
          console.error("Error during user authentication:", error);
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id,
        name: token.name,
        email: token.email,
      };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name
        token.email = user.email
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Export named HTTP methods
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // Export GET and POST handlers
