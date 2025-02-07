import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Star, CheckCircle, Play, Download, Trophy } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// This would normally come from a database
const courseData = {
  slug: "ai-product-manager",
  title: "AI Product Manager",
  description: "Learn to build and manage AI-powered products from concept to launch",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=80",
  duration: "8 weeks",
  students: "2.5k+",
  rating: "4.8",
  price: "$499",
  instructor: {
    name: "Sarah Chen",
    role: "Senior AI Product Manager",
    company: "TechCorp AI",
    image: "/placeholder.svg?height=100&width=100"
  },
  whatYoullLearn: [
    "Fundamentals of AI Product Management",
    "User Research and Problem Definition",
    "AI Solution Architecture",
    "Product Strategy and Roadmap",
    "Working with AI Development Teams",
    "Product Launch and Iteration",
    "Ethics in AI Product Development",
    "Measuring Success and Analytics"
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to AI Product Management",
      lessons: [
        "Understanding AI Technologies",
        "Role of an AI Product Manager",
        "Product Development Lifecycle"
      ]
    },
    {
      title: "Module 2: User Research and Problem Definition",
      lessons: [
        "Identifying User Needs",
        "Problem Statement Development",
        "Market Analysis"
      ]
    },
    {
      title: "Module 3: AI Solution Architecture",
      lessons: [
        "Technical Requirements",
        "Data Strategy",
        "Model Selection"
      ]
    }
  ]
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{courseData.title}</h1>
              <p className="text-xl text-muted-foreground">{courseData.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {courseData.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {courseData.students} enrolled
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  {courseData.rating} rating
                </div>
              </div>
            </div>

            {/* Course Preview */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={courseData.image}
                alt={courseData.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  Watch Preview
                </Button>
              </div>
            </div>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {courseData.whatYoullLearn.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {courseData.curriculum.map((module, index) => (
                  <div key={module.title} className="space-y-4">
                    <h3 className="font-semibold">{module.title}</h3>
                    <div className="space-y-2">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson}
                          className="flex items-center gap-2 p-3 rounded-lg bg-muted/50"
                        >
                          <Play className="w-4 h-4" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{courseData.price}</div>
                    <p className="text-muted-foreground">Full course access</p>
                  </div>
                  <Link href={`/courses/${params.slug}/enroll`}>
                    <Button className="w-full" size="lg">
                      Enroll Now
                    </Button>
                  </Link>
                  <div className="space-y-4 border-t pt-4">
                    <h4 className="font-semibold">This course includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        <span>24 hours on-demand video</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>12 downloadable resources</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

