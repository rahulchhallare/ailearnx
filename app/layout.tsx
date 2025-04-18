'use client' // Mark this file as a Client Component

import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react" // Import SessionProvider

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider> {/* Wrap the application with SessionProvider */}
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}



import './globals.css'
