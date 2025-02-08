import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock, Users, Award, Calendar, Target, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// This would normally come from a database
const competitionData = {
  id: "ai-innovation-challenge-2024",
  title: "AI Innovation Challenge 2024",
  description: "Build innovative AI solutions for real-world problems",
  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop&auto=format&q=80",
  deadline: "Feb 15, 2024",
  participants: "500+",
  prize: "$10,000",
  registrationFee: "$50",
  startDate: "Jan 20, 2024",
  endDate: "Feb 15, 2024",
  tags: ["Machine Learning", "Innovation"],
  overview: "Join us for the biggest AI innovation challenge of 2024. Showcase your skills, compete with the best, and win exciting prizes.",
  requirements: [
    "Basic understanding of AI/ML concepts",
    "Familiarity with Python programming",
    "Access to a computer with internet connection",
    "Ability to work in a team or individually"
  ],
  timeline: [
    {
      date: "Jan 20, 2024",
      event: "Challenge Kickoff"
    },
    {
      date: "Jan 25, 2024",
      event: "Submission of Initial Proposals"
    },
    {
      date: "Feb 10, 2024",
      event: "Final Submission Deadline"
    },
    {
      date: "Feb 15, 2024",
      event: "Winners Announcement"
    }
  ],
  prizes: [
    {
      place: "1st Place",
      reward: "$5,000 + Mentorship Program"
    },
    {
      place: "2nd Place",
      reward: "$3,000 + AI Development Tools"
    },
    {
      place: "3rd Place",
      reward: "$2,000 + Online Courses"
    }
  ]
}

export default function CompetitionDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Badge variant="outline">Registration Open</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{competitionData.title}</h1>
                <p className="text-xl text-muted-foreground">{competitionData.description}</p>
              </div>
              <Link href={`/competitions/${competitionData.id}/register`}>
                <Button size="lg">Register Now</Button>
              </Link>
            </div>
          </div>

          {/* Competition Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={competitionData.image}
              alt={competitionData.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Quick Info */}
          <div className="grid sm:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Trophy className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="font-semibold">{competitionData.prize}</p>
                <p className="text-sm text-muted-foreground">Total Prize Pool</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="font-semibold">{competitionData.participants}</p>
                <p className="text-sm text-muted-foreground">Participants</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="font-semibold">{competitionData.deadline}</p>
                <p className="text-sm text-muted-foreground">Registration Deadline</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="w-8 h-8 mx-auto text-primary mb-2" />
                <p className="font-semibold">{competitionData.registrationFee}</p>
                <p className="text-sm text-muted-foreground">Registration Fee</p>
              </CardContent>
            </Card>
          </div>

          {/* Competition Details */}
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{competitionData.overview}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {competitionData.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitionData.timeline.map((item) => (
                    <div key={item.event} className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">{item.event}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitionData.prizes.map((prize) => (
                    <div key={prize.place} className="flex items-center gap-4">
                      <Trophy className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">{prize.place}</p>
                        <p className="text-sm text-muted-foreground">{prize.reward}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Register Section */}
          <div className="bg-muted rounded-lg p-6 text-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Ready to participate?</h3>
              <p className="text-muted-foreground">
                Join the challenge and showcase your AI innovation skills
              </p>
            </div>
            <Link href={`/competitions/${competitionData.id}/register`}>
              <Button size="lg">Register Now</Button>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

