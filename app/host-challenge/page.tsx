import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Target, Users, Rocket } from 'lucide-react'

export default function HostChallengePage() {
  const benefits = [
    {
      title: "Talent Acquisition",
      description: "Find the best AI talent through skill-based challenges",
      icon: Users
    },
    {
      title: "Brand Visibility",
      description: "Showcase your company to thousands of AI professionals",
      icon: Target
    },
    {
      title: "Innovation",
      description: "Get fresh solutions to your AI challenges",
      icon: Rocket
    }
  ]

  const packages = [
    {
      title: "Basic",
      price: "$999",
      features: [
        "Up to 500 participants",
        "Basic analytics",
        "Standard support",
        "30-day challenge duration",
        "Email notifications"
      ]
    },
    {
      title: "Professional",
      price: "$2499",
      features: [
        "Up to 2000 participants",
        "Advanced analytics",
        "Priority support",
        "60-day challenge duration",
        "Custom branding",
        "API access"
      ],
      recommended: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited participants",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom duration",
        "White-label solution",
        "API access",
        "Custom integration"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Host an AI Challenge</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Launch your own AI challenge and connect with top talent from around the world
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Choose Your Package</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.title} className={pkg.recommended ? "border-primary shadow-lg" : ""}>
                  <CardHeader>
                    <CardTitle>{pkg.title}</CardTitle>
                    <div className="text-3xl font-bold">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={pkg.recommended ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

