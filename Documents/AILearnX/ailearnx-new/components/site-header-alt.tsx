import Link from "next/link"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* Inspired by OpenAI's minimalist approach */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16Z"
                stroke="#0052FF"
                strokeWidth="2"
              />
              <path
                d="M16 6C18.7614 6 21 13.1634 21 16C21 18.8366 18.7614 26 16 26C13.2386 26 11 18.8366 11 16C11 13.1634 13.2386 6 16 6Z"
                stroke="#0052FF"
                strokeWidth="2"
              />
              <path
                d="M7 12.5C9.76142 12.5 16 14.7386 16 17.5C16 20.2614 9.76142 22.5 7 22.5C4.23858 22.5 6 20.2614 6 17.5C6 14.7386 4.23858 12.5 7 12.5Z"
                stroke="#0052FF"
                strokeWidth="2"
              />
              <path
                d="M25 12.5C22.2386 12.5 16 14.7386 16 17.5C16 20.2614 22.2386 22.5 25 22.5C27.7614 22.5 26 20.2614 26 17.5C26 14.7386 27.7614 12.5 25 12.5Z"
                stroke="#0052FF"
                strokeWidth="2"
              />
            </svg>
            <div className="flex items-center">
              <span className="text-xl font-bold text-[#0052FF]">AILearn</span>
              <span className="text-xl font-bold text-purple-600">X</span>
            </div>
          </Link>
          {/* Rest of the header content remains the same */}
        </div>
        {/* ... */}
      </div>
    </header>
  )
}

