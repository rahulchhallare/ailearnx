import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import Image from "next/image"

export default function EventsPage() {
  const events = [
    {
      title: "AI Summit 2024",
      description: "Join industry leaders for insights into the future of AI",
      image: "/placeholder.svg?height=300&width=600",
      date: "Mar 15, 2024",
      location: "San Francisco, CA",
      attendees: "500+",
      duration: "2 days",
      type: "Conference"
    },
    {
      title: "Machine Learning Workshop",
      description: "Hands-on workshop on implementing ML models",
      image: "/placeholder.svg?height=300&width=600",
      date: "Feb 28, 2024",
      location: "Virtual",
      attendees: "200+",
      duration: "4 hours",
      type: "Workshop"
    },
    {
      title: "AI Ethics Panel Discussion",
      description: "Expert panel on ethical considerations in AI development",
      image: "/placeholder.svg?height=300&width=600",
      date: "Feb 10, 2024",
      location: "New York, NY",
      attendees: "300+",
      duration: "3 hours",
      type: "Panel"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Events</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover upcoming AI conferences, workshops, and networking events
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <Card key={event.title} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4">
                    {event.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {event.attendees} expected
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.duration}
                    </div>
                  </div>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

