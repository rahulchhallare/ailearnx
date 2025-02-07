import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, Target, Globe, Rocket } from 'lucide-react'
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "100,000+" },
    { label: "Courses", value: "500+" },
    { label: "Mentors", value: "1,000+" },
    { label: "Countries", value: "150+" }
  ]

  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of AI education and technology",
      icon: Rocket
    },
    {
      title: "Accessibility",
      description: "Making AI education accessible to everyone",
      icon: Globe
    },
    {
      title: "Community",
      description: "Building a global community of AI enthusiasts",
      icon: Users
    },
    {
      title: "Excellence",
      description: "Maintaining high standards in everything we do",
      icon: Target
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Empowering the Future of AI
                </h1>
                <p className="text-xl text-muted-foreground">
                  AILearnX is on a mission to democratize AI education and create the next generation of AI innovators.
                </p>
                <Button size="lg">Join Our Mission</Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="About AILearnX"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="text-muted-foreground mt-2">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <p className="text-muted-foreground mt-2">
                Meet the people behind AILearnX
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="text-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Team Member ${member}`}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold">Team Member {member}</h3>
                  <p className="text-sm text-muted-foreground">Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

