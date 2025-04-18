'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Search, ChevronDown, Plus, Briefcase } from 'lucide-react'
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useState } from "react"

export function SiteHeader() {
  const { data: session } = useSession() // Get session data
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // State for dropdown

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto h-16 flex items-center justify-between gap-4">
        {/* Logo and Search */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AILearnX
            </span>
          </Link>
          <div className="hidden md:flex relative max-w-[320px]">
            <div className="absolute inset-y-0 left-2 flex items-center">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <Input 
              placeholder="Search AI Opportunities" 
              className="pl-8 bg-gray-50/50 border-gray-200 focus:border-blue-200 focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            href="/courses" 
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Courses
          </Link>
          <Link 
            href="/jobs" 
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Jobs
          </Link>
          <Link 
            href="/competitions" 
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Competitions
          </Link>
          <Link 
            href="/mentorship" 
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Mentorship
          </Link>
          <Link 
            href="/events" 
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Events
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="hidden md:inline-flex items-center gap-1 border-gray-200 hover:border-blue-200 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
            asChild
          >
            <Link href="/host">
              <Plus className="h-4 w-4" /> Host
            </Link>
          </Button>
          <Button 
            variant="default"
            className="hidden lg:inline-flex items-center gap-2 bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200"
            asChild
          >
            <Link href="/business">
              <Briefcase className="h-4 w-4" />
              For Business
            </Link>
          </Button>

          {/* Profile Section */}
          {!session ? (
            <>
              <Button 
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button 
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          ) : (
            <div className="relative">
              <button
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{session.user?.name || "User"}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-800">{session.user?.name || "N/A"}</p>
                    <p className="text-xs text-gray-500">{session.user?.email || "N/A"}</p>
                  </div>
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        View Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        Settings
                      </Link>
                    </li>
                  </ul>
                  <div className="border-t border-gray-200">
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
