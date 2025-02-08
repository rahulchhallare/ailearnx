import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Code, BookOpen, Users, Briefcase, GraduationCap, Award, PartyPopper, Presentation } from 'lucide-react'
import Link from "next/link"

export default function HostPage() {
  const engagingOpportunities = [
    {
      title: "AI Competitions",
      description: "Host AI challenges and competitions for the community",
      icon: Trophy,
      link: "/host/competition/create",
      action: "Create Competition"
    },
    {
      title: "Innovation Challenges",
      description: "Launch innovation challenges to solve real-world AI problems",
      icon: Code,
      link: "/host/innovation/create",
      action: "Create Challenge"
    },
    {
      title: "AI Workshops",
      description: "Host workshops and training sessions on AI technologies",
      icon: BookOpen,
      link: "/host/workshop",
      action: "Create Workshop"
    },
    {
      title: "Hackathons",
      description: "Organize AI hackathons and coding challenges",
      icon: Code,
      link: "/host/hackathon",
      action: "Create Hackathon"
    }
  ]

  const hiringOpportunities = [
    {
      title: "AI Jobs",
      description: "Post AI job opportunities and find top talent",
      icon: Briefcase,
      link: "/host/job/create",
      action: "Post Job"
    },
    {
      title: "AI Internships",
      description: "Hire AI interns and fresh talent",
      icon: GraduationCap,
      link: "/host/internship",
      action: "Post Internship"
    },
    {
      title: "Hiring Challenges",
      description: "Create skill-based hiring challenges",
      icon: Award,
      link: "/host/hiring-challenge/create",
      action: "Create Challenge"
    }
  ]

  const OpportunityCard = ({ title, description, icon: Icon, link, action }) => (
    <Card className="group hover:border-primary transition-colors">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="mt-1">{description}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Link href={link}>
          <Button className="w-full group-hover:bg-primary">
            {action}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Host an Opportunity</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your opportunity category from below
            </p>
          </div>

          {/* For Engaging Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">For Engaging</h2>
              <span className="text-muted-foreground">your target audience</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engagingOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.title} {...opportunity} />
              ))}
            </div>
          </div>

          {/* For Hiring Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">For Hiring</h2>
              <span className="text-muted-foreground">the right talent</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hiringOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.title} {...opportunity} />
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 text-center space-y-6">
            <h2 className="text-2xl font-semibold">Need Help?</h2>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="space-x-2">
                <Presentation className="h-5 w-5" />
                <span>Schedule a Demo</span>
              </Button>
              <Button variant="outline" size="lg" className="space-x-2">
                <PartyPopper className="h-5 w-5" />
                <span>Contact Sales</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

