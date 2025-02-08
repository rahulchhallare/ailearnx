'use client'

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Brain, GraduationCap, Trophy, Briefcase, Code } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { CompanyLogo } from "@/components/company-logo"

export default function Home() {
  const companyLogos = [
    {
      name: "Google",
      logo: "/companies/google.svg",
      color: "#4285F4"
    },
    {
      name: "Microsoft",
      logo: "/companies/microsoft.svg",
      color: "#00A4EF"
    },
    {
      name: "Amazon",
      logo: "/companies/amazon.svg",
      color: "#FF9900"
    },
    {
      name: "IBM",
      logo: "/companies/ibm.svg",
      color: "#1F70C1"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Master AI. <br />
                Build the Future.
              </h1>
              <p className="text-xl text-gray-600">
                Join the world's largest AI learning platform. Learn, compete, and land your dream AI job.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/courses" 
                className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl hover:shadow-lg transition-all duration-200 border border-blue-100">
                <GraduationCap className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-blue-900">AI Courses</h3>
                <p className="text-sm text-blue-600/80">Learn from industry experts</p>
              </Link>
              <Link href="/competitions" 
                className="group p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl hover:shadow-lg transition-all duration-200 border border-amber-100">
                <Trophy className="h-8 w-8 text-amber-600 mb-2" />
                <h3 className="font-semibold text-amber-900">Competitions</h3>
                <p className="text-sm text-amber-600/80">Solve real AI challenges</p>
              </Link>
              <Link href="/jobs" 
                className="group p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl hover:shadow-lg transition-all duration-200 border border-emerald-100">
                <Briefcase className="h-8 w-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold text-emerald-900">AI Jobs</h3>
                <p className="text-sm text-emerald-600/80">Find your next role</p>
              </Link>
              <Link href="/events" 
                className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl hover:shadow-lg transition-all duration-200 border border-purple-100">
                <Code className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="font-semibold text-purple-900">Events</h3>
                <p className="text-sm text-purple-600/80">Join AI workshops & meetups</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Segments */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Who's using AILearnX?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals, companies, and institutions leveraging AI technology
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-200">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">AI Enthusiasts & Professionals</h3>
              <p className="text-gray-600 mb-4">Learn, practice, and advance your AI career</p>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="AI Professionals collaborating in a modern office"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-[240px] group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-200">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Companies & Recruiters</h3>
              <p className="text-gray-600 mb-4">Find top AI talent through challenges</p>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="Corporate team in a business meeting"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-[240px] group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-200">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Educational Institutions</h3>
              <p className="text-gray-600 mb-4">Empower students with practical AI skills</p>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="Students learning in a modern classroom"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-[240px] group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Leading companies trust AILearnX to find and develop AI talent
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companyLogos.map((company) => (
              <CompanyLogo 
                key={company.name}
                logo={company.logo}
                name={company.name}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}