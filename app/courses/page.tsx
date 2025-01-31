import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Clock, Users, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      title: "AI Product Manager",
      slug: "ai-product-manager",
      description: "Learn to build and manage AI-powered products from concept to launch",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=80",
      duration: "8 weeks",
      students: "2.5k+",
      rating: "4.8",
      price: "$499"
    },
    {
      title: "AI Content Creator",
      slug: "ai-content-creator",
      description: "Master AI tools for content creation, writing, and digital media",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop&auto=format&q=80",
      duration: "6 weeks",
      students: "1.8k+",
      rating: "4.7",
      price: "$399"
    },
    {
      title: "AI Agent Developer",
      slug: "ai-agent-developer",
      description: "Build intelligent AI agents using LLMs and autonomous systems",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop&auto=format&q=80",
      duration: "10 weeks",
      students: "1.2k+",
      rating: "4.9",
      price: "$699"
    },
    {
      title: "AI Digital Marketing",
      slug: "ai-digital-marketing",
      description: "Transform marketing strategies with AI-powered automation and analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format&q=80",
      duration: "7 weeks",
      students: "2.1k+",
      rating: "4.6",
      price: "$449"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Courses</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the latest AI technologies with our industry-leading courses. Learn from experts and advance your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.title} className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="w-full object-cover h-48 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {course.rating}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold">{course.price}</span>
                  <Link href={`/courses/${course.slug}`}>
                    <Button className="w-full">Enroll Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

