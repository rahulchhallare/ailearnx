import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">AILearnX</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/courses" className="text-sm font-medium hover:text-primary">
            Courses
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Button asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

