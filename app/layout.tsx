import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AILearnX - Master AI, Build the Future',
  description: 'Join the world\'s largest AI learning platform. Learn, compete, and land your dream AI job.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}

