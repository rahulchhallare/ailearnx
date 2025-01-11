import Link from "next/link"
import { Brain, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-0">
              <Brain className="h-8 w-8 text-[#0052FF] mr-2" />
              <span className="text-2xl font-bold text-[#0052FF]">AILearn</span>
              <span className="text-2xl font-bold text-purple-600">X</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center space-x-1">
            <div className="relative w-[280px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search AI Opportunities"
                className="pl-8 rounded-lg border-gray-200"
              />
            </div>
          </div>
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="/courses" className="text-sm font-medium">
            Courses
          </Link>
          <Link href="/jobs" className="text-sm font-medium">
            Jobs
          </Link>
          <Link href="/competitions" className="text-sm font-medium">
            Competitions
          </Link>
          <Link href="/mentorship" className="text-sm font-medium">
            Mentorship
          </Link>
          <Link href="/practice" className="text-sm font-medium">
            Practice
          </Link>
          <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/host">+ Host</Link>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-yellow-400 text-yellow-600 hover:bg-yellow-50" 
            asChild
          >
            <Link href="/business">For Business</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

