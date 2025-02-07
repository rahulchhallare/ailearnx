import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
<<<<<<< HEAD
import { SiteHeader } from '@/components/site-header'
=======
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
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
<<<<<<< HEAD
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
=======
        {children}
        <SiteFooter />
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
      </body>
    </html>
  )
}

