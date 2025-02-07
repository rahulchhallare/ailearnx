import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Building, DollarSign, Clock, GraduationCap, Users } from 'lucide-react'
import Link from "next/link"

// This would normally come from a database
const jobData = {
  id: "senior-ai-engineer",
  title: "Senior AI Engineer",
  company: "TechCorp AI",
  location: "San Francisco, CA",
  type: "Full-time",
  salary: "$150k - $200k",
  experience: "5+ years",
  description: "We're looking for a Senior AI Engineer to join our growing team. You'll be responsible for leading AI development projects and implementing cutting-edge machine learning solutions.",
  responsibilities: [
    "Design and implement machine learning models",
    "Lead technical architecture discussions",
    "Mentor junior engineers",
    "Collaborate with product and research teams",
    "Drive innovation in AI/ML technologies"
  ],
  requirements: [
    "5+ years of experience in AI/ML development",
    "Strong background in Python, TensorFlow, and PyTorch",
    "Experience with large-scale ML systems",
    "PhD or MS in Computer Science or related field",
    "Proven track record of delivering AI solutions"
  ],
  benefits: [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "401(k) matching",
    "Flexible work hours",
    "Remote work options",
    "Professional development budget"
  ],
  tags: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning"]
}

export default function JobDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Job Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Badge variant="outline">{jobData.type}</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold">{jobData.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {jobData.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {jobData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {jobData.salary}
                  </div>
                </div>
              </div>
              <Link href={`/jobs/${jobData.id}/apply`}>
                <Button size="lg">Apply Now</Button>
              </Link>
            </div>
          </div>

          {/* Job Details */}
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{jobData.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {jobData.responsibilities.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {jobData.requirements.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {jobData.benefits.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {jobData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Apply Section */}
            <div className="bg-muted rounded-lg p-6 text-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Interested in this role?</h3>
                <p className="text-muted-foreground">
                  Submit your application now and we'll get back to you within 48 hours.
                </p>
              </div>
              <Link href={`/jobs/${jobData.id}/apply`}>
                <Button size="lg">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

