<<<<<<< HEAD
=======
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Brain, PenTool, Megaphone, Clock, Users, BarChart } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function CoursesPage() {
  const courses = [
    {
      title: "AI Product Manager",
      description: "Learn to conceptualize, develop, and launch successful AI-powered products",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&h=400&q=80",
      duration: "8 weeks",
      students: "2,500+",
      price: "$999",
      icon: <Brain className="h-6 w-6" />,
      color: "blue",
      features: [
        "Product Strategy & Roadmap",
        "AI Technology Assessment",
        "User Research & Testing",
        "Product Analytics & KPIs",
        "Stakeholder Management",
        "Launch Strategy"
      ]
    },
    {
      title: "AI Content Creator",
      description: "Master the art of creating compelling content using AI tools and techniques",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&h=400&q=80",
      duration: "6 weeks",
      students: "3,000+",
      price: "$799",
      icon: <PenTool className="h-6 w-6" />,
      color: "purple",
      features: [
        "Content Strategy",
        "AI Writing Tools",
        "Image Generation",
        "Video Production",
        "SEO Optimization",
        "Content Distribution"
      ]
    },
    {
      title: "AI Digital Marketing",
      description: "Transform your marketing campaigns with AI-powered strategies and automation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80",
      duration: "10 weeks",
      students: "1,800+",
      price: "$1,299",
      icon: <Megaphone className="h-6 w-6" />,
      color: "green",
      features: [
        "Marketing Automation",
        "Predictive Analytics",
        "Personalization",
        "Campaign Optimization",
        "Customer Segmentation",
        "ROI Measurement"
      ]
    }
  ]

  return (
<<<<<<< HEAD
    <div className="container px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI Career-Focused Courses
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your career with our industry-leading AI courses. Learn from experts and get hands-on experience.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.title} className="flex flex-col">
            <CardHeader>
              <div className="mb-4 relative aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={`rounded-full p-2 bg-${course.color}-100 w-fit mb-2`}>
                {course.icon}
              </div>
              <CardTitle className="text-2xl">{course.title}</CardTitle>
              <CardDescription className="text-base">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{course.students} students</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">What you'll learn:</h4>
                  <ul className="grid gap-2">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BarChart className="h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t pt-4">
              <div className="text-2xl font-bold">{course.price}</div>
              <Button asChild>
                <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  Enroll Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Do I need prior experience?</h3>
            <p className="text-muted-foreground">
              Each course has different prerequisites. Beginner courses assume no prior experience, while intermediate and advanced courses may require basic knowledge.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What's included in the course?</h3>
            <p className="text-muted-foreground">
              All courses include video lectures, hands-on projects, downloadable resources, community access, and a certificate upon completion.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How long do I have access to the course?</h3>
            <p className="text-muted-foreground">
              Once enrolled, you have lifetime access to the course content, including all future updates and improvements. Learn at your own pace without any time pressure.
            </p>
          </div>
        </div>
      </div>
=======
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              AI Career-Focused Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your career with our industry-leading AI courses. Learn from experts and get hands-on experience.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 relative aspect-[3/2] overflow-hidden rounded-lg">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className={`rounded-full p-2 bg-${course.color}-100 w-fit mb-2`}>
                    {course.icon}
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{course.students} students</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">What you'll learn:</h4>
                      <ul className="grid gap-2">
                        {course.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BarChart className="h-4 w-4" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t pt-4">
                  <div className="text-2xl font-bold">{course.price}</div>
                  <Button asChild>
                    <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Enroll Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Do I need prior experience?</h3>
                <p className="text-muted-foreground">
                  Each course has different prerequisites. Beginner courses assume no prior experience, while intermediate and advanced courses may require basic knowledge.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What's included in the course?</h3>
                <p className="text-muted-foreground">
                  All courses include video lectures, hands-on projects, downloadable resources, community access, and a certificate upon completion.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">How long do I have access to the course?</h3>
                <p className="text-muted-foreground">
                  Once enrolled, you have lifetime access to the course content, including all future updates and improvements. Learn at your own pace without any time pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
    </div>
  )
}

