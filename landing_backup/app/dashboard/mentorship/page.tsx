import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Video, MessageSquare } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// This would normally come from a database
const upcomingSessions = [
  {
    id: "session-1",
    mentor: {
      name: "Dr. Sarah Chen",
      role: "AI Research Scientist",
      image: "/placeholder.svg?height=100&width=100"
    },
    date: "January 15, 2024",
    time: "10:00 AM",
    duration: "60 minutes",
    status: "Upcoming"
  },
  {
    id: "session-2",
    mentor: {
      name: "James Wilson",
      role: "AI Product Manager",
      image: "/placeholder.svg?height=100&width=100"
    },
    date: "January 20, 2024",
    time: "2:00 PM",
    duration: "60 minutes",
    status: "Upcoming"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Upcoming":
      return "bg-blue-100 text-blue-800"
    case "Completed":
      return "bg-green-100 text-green-800"
    case "Cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function MentorshipDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">My Mentorship Sessions</h1>
              <p className="text-muted-foreground mt-1">
                Track your upcoming and past mentorship sessions
              </p>
            </div>
            <Link href="/mentorship">
              <Button>
                Find Mentors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {upcomingSessions.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <Image
                        src={session.mentor.image}
                        alt={session.mentor.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg">{session.mentor.name}</h3>
                          <p className="text-muted-foreground">{session.mentor.role}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge className={getStatusColor(session.status)}>
                            {session.status}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{session.time} ({session.duration})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/mentorship/message/${session.mentor.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                      </Link>
                      <Link href={`/dashboard/mentorship/meeting/${session.mentor.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="default" size="sm">
                          <Video className="h-4 w-4 mr-1" />
                          Join Meeting
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {upcomingSessions.length === 0 && (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">You don't have any upcoming sessions.</p>
                <Link href="/mentorship">
                  <Button className="mt-4">Find a Mentor</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

