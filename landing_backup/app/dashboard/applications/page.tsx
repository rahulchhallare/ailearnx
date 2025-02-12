import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, ArrowRight, Eye } from 'lucide-react'
import Link from "next/link"

// This would typically come from a database
const applications = [
  {
    id: "app-1",
    jobTitle: "Senior AI Engineer",
    company: "TechCorp AI",
    status: "Under Review",
    appliedDate: "2024-01-08",
    jobId: "senior-ai-engineer"
  },
  {
    id: "app-2",
    jobTitle: "AI Product Manager",
    company: "Innovation Labs",
    status: "Screening",
    appliedDate: "2024-01-05",
    jobId: "ai-product-manager"
  },
  {
    id: "app-3",
    jobTitle: "Machine Learning Researcher",
    company: "AI Research Institute",
    status: "Interview Scheduled",
    appliedDate: "2024-01-03",
    jobId: "machine-learning-researcher"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Under Review":
      return "bg-blue-100 text-blue-800"
    case "Screening":
      return "bg-yellow-100 text-yellow-800"
    case "Interview Scheduled":
      return "bg-green-100 text-green-800"
    case "Rejected":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">My Applications</h1>
              <p className="text-muted-foreground mt-1">
                Track and manage your job applications
              </p>
            </div>
            <Link href="/jobs">
              <Button>
                Browse More Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {applications.map((application) => (
              <Card key={application.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg">{application.jobTitle}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span>{application.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getStatusColor(application.status)}>
                          {application.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Applied on {new Date(application.appliedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/jobs/${application.jobId}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Job
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {applications.length === 0 && (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">You haven't applied to any jobs yet.</p>
                <Link href="/jobs">
                  <Button className="mt-4">Browse Jobs</Button>
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

