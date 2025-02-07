import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Users, Target, BarChart, CheckCircle, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function BusinessPage() {
  const solutions = [
    {
      title: "AI Talent Acquisition",
      description: "Find and hire top AI talent through our platform",
      icon: Users,
      features: ["Skill-based assessment", "Custom challenges", "Talent analytics"]
    },
    {
      title: "Employee Training",
      description: "Upskill your workforce with AI courses and certifications",
      icon: Brain,
      features: ["Customized learning paths", "Progress tracking", "Team analytics"]
    },
    {
      title: "Innovation Challenges",
      description: "Launch AI challenges to solve your business problems",
      icon: Target,
      features: ["Problem definition", "Expert evaluation", "IP protection"]
    }
  ]

  const stats = [
    { label: "AI Professionals", value: "50,000+" },
    { label: "Companies", value: "1,000+" },
    { label: "Success Rate", value: "92%" },
    { label: "Countries", value: "120+" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge>For Business</Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Transform Your Business with AI Talent
                </h1>
                <p className="text-xl text-muted-foreground">
                  Access top AI talent, upskill your workforce, and drive innovation through our enterprise solutions.
                </p>
                <div className="flex gap-4">
                  <Link href="/business/get-started">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format&q=80"
                  alt="Business Solutions"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Solutions</h2>
              <p className="text-muted-foreground mt-2">
                Comprehensive AI solutions for your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <Card key={solution.title}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        {solution.title === "AI Talent Acquisition" && (
                          <Image
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&auto=format&q=80"
                            alt="AI Talent Acquisition"
                            fill
                            className="object-cover"
                          />
                        )}
                        {solution.title === "Employee Training" && (
                          <Image
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop&auto=format&q=80"
                            alt="Employee Training"
                            fill
                            className="object-cover"
                          />
                        )}
                        {solution.title === "Innovation Challenges" && (
                          <Image
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop&auto=format&q=80"
                            alt="Innovation Challenges"
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <ul className="space-y-2">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

