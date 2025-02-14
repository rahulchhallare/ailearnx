import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from 'next-auth/providers/linkedin'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID ?? '',
      clientSecret: process.env.LINKEDIN_SECRET ?? '',
      authorization: {
        params: {
          client_id: process.env.LINKEDIN_ID,
          scope: 'profile openid',
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  }
})

export { handler as GET, handler as POST }
