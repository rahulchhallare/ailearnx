import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Clock, ArrowRight, Eye } from 'lucide-react'
import Link from "next/link"

// This would typically come from a database
const registeredCompetitions = [
  {
    id: "ai-innovation-challenge-2024",
    title: "AI Innovation Challenge 2024",
    status: "Registered",
    startDate: "Jan 20, 2024",
    endDate: "Feb 15, 2024",
    progress: "Starting Soon",
    prize: "$10,000"
  },
  {
    id: "llm-hackathon",
    title: "LLM Hackathon",
    status: "In Progress",
    startDate: "Jan 5, 2024",
    endDate: "Jan 20, 2024",
    progress: "Submission Due in 5 days",
    prize: "$5,000"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Registered":
      return "bg-blue-100 text-blue-800"
    case "In Progress":
      return "bg-green-100 text-green-800"
    case "Completed":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function CompetitionsDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">My Competitions</h1>
              <p className="text-muted-foreground mt-1">
                Track your registered competitions and submissions
              </p>
            </div>
            <Link href="/competitions">
              <Button>
                Find Competitions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {registeredCompetitions.map((competition) => (
              <Card key={competition.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg">{competition.title}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{competition.startDate} - {competition.endDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Trophy className="h-4 w-4" />
                            <span>{competition.prize}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getStatusColor(competition.status)}>
                          {competition.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{competition.progress}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/competitions/${competition.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {registeredCompetitions.length === 0 && (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">You haven't registered for any competitions yet.</p>
                <Link href="/competitions">
                  <Button className="mt-4">Browse Competitions</Button>
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

