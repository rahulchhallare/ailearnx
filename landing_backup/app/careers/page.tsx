import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, Building } from 'lucide-react'

export default function CareersPage() {
  const benefits = [
    "Competitive salary and equity",
    "Remote-first culture",
    "Health insurance",
    "Learning & development budget",
    "Flexible working hours",
    "Regular team retreats"
  ]

  const openings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      title: "AI Content Creator",
      department: "Content",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years"
    },
    {
      title: "AI Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years"
    },
    {
      title: "Community Manager",
      department: "Community",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Join the AILearnX Team</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Help us democratize AI education and shape the future of learning
              </p>
              <Button size="lg">View Open Positions</Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Join Us?</h2>
              <p className="text-muted-foreground mt-2">
                We offer competitive benefits and a great work environment
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit}>
                  <CardHeader>
                    <CardTitle className="text-lg">{benefit}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Open Positions</h2>
              <p className="text-muted-foreground mt-2">
                Find your next role at AILearnX
              </p>
            </div>
            <div className="grid gap-6">
              {openings.map((job) => (
                <Card key={job.title}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5" />
                          {job.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          <Building className="inline h-4 w-4 mr-1" />
                          {job.department}
                        </CardDescription>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline">
                        {job.experience}
                      </Badge>
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

