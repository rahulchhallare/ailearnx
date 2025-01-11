import Link from "next/link"
import { GraduationCap, Trophy, Briefcase, Code } from 'lucide-react'
import { SiteHeader } from "@/components/site-header"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12 px-8">
          {/* Hero and Features Section in same row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {/* Hero Section - Left Side */}
            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tight text-blue-600">
                Master AI.
                <br />
                Build the Future.
              </h1>
              <p className="text-xl text-gray-600">
                Join the world's largest AI learning platform. Learn, compete, and land your dream AI job.
              </p>
            </div>

            {/* Features Grid - Right Side */}
            <div className="grid grid-cols-2 gap-4">
              {/* AI Courses */}
              <Link 
                href="/courses"
                className="group relative overflow-hidden rounded-xl p-6 bg-[#F8FAFF]"
              >
                <div className="flex flex-col h-full">
                  <div className="rounded-full bg-blue-100 p-3 w-fit">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold mt-4 text-blue-600">AI Courses</h2>
                  <p className="text-gray-600 mt-2">Learn from industry experts</p>
                </div>
              </Link>

              {/* Competitions */}
              <Link 
                href="/competitions"
                className="group relative overflow-hidden rounded-xl p-6 bg-[#FFF8E0]"
              >
                <div className="flex flex-col h-full">
                  <div className="rounded-full bg-yellow-100 p-3 w-fit">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h2 className="text-xl font-semibold mt-4 text-yellow-600">Competitions</h2>
                  <p className="text-gray-600 mt-2">Solve real AI challenges</p>
                </div>
              </Link>

              {/* AI Jobs */}
              <Link 
                href="/jobs"
                className="group relative overflow-hidden rounded-xl p-6 bg-[#F8FFF8]"
              >
                <div className="flex flex-col h-full">
                  <div className="rounded-full bg-green-100 p-3 w-fit">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold mt-4 text-green-600">AI Jobs</h2>
                  <p className="text-gray-600 mt-2">Find your next role</p>
                </div>
              </Link>

              {/* Practice */}
              <Link 
                href="/practice"
                className="group relative overflow-hidden rounded-xl p-6 bg-[#FBF8FF]"
              >
                <div className="flex flex-col h-full">
                  <div className="rounded-full bg-purple-100 p-3 w-fit">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold mt-4 text-purple-600">Practice</h2>
                  <p className="text-gray-600 mt-2">Sharpen your skills</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Who's using section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-4">Who's using AILearnX?</h2>
            <p className="text-center text-gray-600 mb-12">
              Join thousands of professionals, companies, and institutions leveraging AI technology
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold mb-2">AI Enthusiasts & Professionals</h3>
                <p className="text-gray-600 mb-4">Learn, practice, and advance your AI career</p>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="AI Professionals collaborating"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold mb-2">Companies & Recruiters</h3>
                <p className="text-gray-600 mb-4">Find top AI talent through challenges</p>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Professional business meeting"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold mb-2">Educational Institutions</h3>
                <p className="text-gray-600 mb-4">Empower students with practical AI skills</p>
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="Modern educational setting"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-4">Trusted by Industry Leaders</h2>
            <p className="text-center text-gray-600 mb-12">
              Leading companies trust AILearnX to find and develop AI talent
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                alt="Microsoft"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

