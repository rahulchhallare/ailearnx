import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, Clock, Target, Rocket, CheckCircle } from 'lucide-react'

export default function HostChallengePage() {
  const challengeTypes = [
    {
      title: "AI Innovation Challenge",
      description: "Create innovative AI solutions for real-world problems",
      icon: Rocket,
      features: ["Multiple rounds", "Expert judging", "Mentorship support"]
    },
    {
      title: "Hackathon",
      description: "Intensive coding competition with specific AI focus",
      icon: Trophy,
      features: ["24-48 hour format", "Team participation", "Live workshops"]
    },
    {
      title: "Research Competition",
      description: "Present novel AI research and methodologies",
      icon: Target,
      features: ["Paper submission", "Peer review", "Conference presentation"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Host an AI Challenge</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create engaging AI challenges and competitions for the global community
            </p>
          </div>

          {/* Challenge Types */}
          <div className="grid md:grid-cols-3 gap-6">
            {challengeTypes.map((type) => (
              <Card key={type.title} className="group hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 group-hover:bg-primary">
                    Select
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Challenge Form */}
          <Card>
            <CardHeader>
              <CardTitle>Challenge Details</CardTitle>
              <CardDescription>
                Fill in the details for your AI challenge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Challenge Title</label>
                  <Input placeholder="Enter challenge title" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea placeholder="Describe your challenge" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Start Date</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Date</label>
                    <Input type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Prize Pool</label>
                  <Input placeholder="Enter prize amount" type="number" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Maximum Participants</label>
                  <Input placeholder="Enter maximum participants" type="number" />
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Create Challenge</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Global Reach</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with AI enthusiasts and professionals worldwide
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Flexible Timeline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Set custom durations and milestone deadlines
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Real-time Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track participation and engagement metrics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

