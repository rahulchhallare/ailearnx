import Link from "next/link"
<<<<<<< HEAD
import Image from "next/image"
import { GraduationCap, Trophy, Briefcase, Code } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container px-4">
      {/* Hero Section */}
      <div className="py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Hero content */}
          <div className="lg:w-1/2 lg:pt-8">
            <h1 className="text-6xl font-bold tracking-tight text-blue-600 mb-6">
              Master AI.
              <br />
              Build the Future.
            </h1>
            <p className="text-xl text-gray-600">
              Join the world's largest AI learning platform. Learn, compete, and land your dream AI job.
            </p>
          </div>

          {/* Features Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {/* Feature cards */}
            {/* AI Courses */}
            <Link 
              href="/courses"
              className="group relative overflow-hidden rounded-xl p-6 bg-[#F0F7FF] hover:bg-[#E5F1FF] transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-blue-100 p-3 w-fit mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-blue-600 mb-2">AI Courses</h2>
                <p className="text-gray-600">Learn from industry experts</p>
              </div>
            </Link>

            {/* Competitions */}
            <Link 
              href="/competitions"
              className="group relative overflow-hidden rounded-xl p-6 bg-[#FFF8E0] hover:bg-[#FFF4CC] transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-yellow-100 p-3 w-fit mb-4">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <h2 className="text-xl font-semibold text-yellow-600 mb-2">Competitions</h2>
                <p className="text-gray-600">Solve real AI challenges</p>
              </div>
            </Link>

            {/* AI Jobs */}
            <Link 
              href="/jobs"
              className="group relative overflow-hidden rounded-xl p-6 bg-[#F0FFF4] hover:bg-[#E5FFE9] transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-green-100 p-3 w-fit mb-4">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-green-600 mb-2">AI Jobs</h2>
                <p className="text-gray-600">Find your next role</p>
              </div>
            </Link>

            {/* Practice */}
            <Link 
              href="/practice"
              className="group relative overflow-hidden rounded-xl p-6 bg-[#F5F0FF] hover:bg-[#EEE5FF] transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-purple-100 p-3 w-fit mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-purple-600 mb-2">Practice</h2>
                <p className="text-gray-600">Sharpen your skills</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Who's using AILearnX? Section */}
      <div className="py-24 border-t">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Who's using AILearnX?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals, companies, and institutions leveraging AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Enthusiasts & Professionals */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold p-6 border-b">AI Enthusiasts & Professionals</h3>
            <p className="px-6 pt-4 text-gray-600">Learn, practice, and advance your AI career</p>
            <div className="relative h-64 mt-4">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80"
                alt="AI Enthusiasts and Professionals collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Companies & Recruiters */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold p-6 border-b">Companies & Recruiters</h3>
            <p className="px-6 pt-4 text-gray-600">Find top AI talent through challenges</p>
            <div className="relative h-64 mt-4">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                alt="Companies and Recruiters handshake"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Educational Institutions */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold p-6 border-b">Educational Institutions</h3>
            <p className="px-6 pt-4 text-gray-600">Empower students with practical AI skills</p>
            <div className="relative h-64 mt-4">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                alt="Educational Institutions learning environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by Industry Leaders Section */}
      <div className="py-24 border-t">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading companies trust AILearnX to find and develop AI talent
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center">
            {/* Google */}
            <div className="w-28 h-10 relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Meta */}
            <div className="w-28 h-10 relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                alt="Meta Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Microsoft */}
            <div className="w-28 h-10 relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                alt="Microsoft Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Amazon */}
            <div className="w-28 h-10 relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* IBM */}
            <div className="w-28 h-10 relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM Logo"
                fill
                className="object-contain"
=======
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
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
      </main>
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
    </div>
  )
}

