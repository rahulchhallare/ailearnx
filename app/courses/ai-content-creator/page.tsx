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
  slug: "ai-content-creator",
  title: "AI Content Creator",
  description: "Master AI tools for content creation, writing, and digital media",
  image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop&auto=format&q=80",
  duration: "6 weeks",
  students: "1.8k+",
  rating: "4.7",
  price: "$399",
  instructor: {
    name: "Emily Chen",
    role: "Senior Content Strategist",
    company: "Digital AI Labs",
    image: "/placeholder.svg?height=100&width=100"
  },
  whatYoullLearn: [
    "AI Writing Tools and Platforms",
    "Content Strategy with AI",
    "Image Generation and Editing",
    "Video Content Creation",
    "SEO Optimization with AI",
    "Social Media Content Automation",
    "Content Performance Analysis",
    "Ethical AI Content Creation"
  ],
  curriculum: [
    {
      title: "Module 1: Introduction to AI Content Creation",
      lessons: [
        "Understanding AI Content Tools",
        "Content Creation Workflow",
        "AI Writing Assistants"
      ]
    },
    {
      title: "Module 2: Visual Content Creation",
      lessons: [
        "AI Image Generation",
        "Photo Editing with AI",
        "Video Content Creation"
      ]
    },
    {
      title: "Module 3: Content Strategy",
      lessons: [
        "Content Planning",
        "SEO Integration",
        "Performance Analytics"
      ]
    }
  ]
}

export default function CoursePage() {
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
                  <Link href={`/courses/${courseData.slug}/enroll`}>
                    <Button className="w-full" size="lg">
                      Enroll Now
                    </Button>
                  </Link>
                  <div className="space-y-4 border-t pt-4">
                    <h4 className="font-semibold">This course includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        <span>20 hours on-demand video</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>15 downloadable resources</span>
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

