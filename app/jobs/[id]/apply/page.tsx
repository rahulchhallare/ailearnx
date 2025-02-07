import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Building, Upload } from 'lucide-react'
import Link from "next/link"

// This would normally come from a database
const jobData = {
  id: "senior-ai-engineer",
  title: "Senior AI Engineer",
  company: "TechCorp AI",
  type: "Full-time"
}

export default function JobApplicationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Application Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{jobData.type}</Badge>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">Apply for {jobData.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="w-4 h-4" />
                <span>{jobData.company}</span>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Current Location</Label>
                  <Input id="location" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/username" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                  <Input id="portfolio" type="url" placeholder="https://" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" type="number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cover">Cover Letter</Label>
                  <Textarea
                    id="cover"
                    placeholder="Tell us why you're interested in this position..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Resume/CV</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center space-y-2">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your resume here, or click to browse
                    </p>
                    <Input
                      id="resume"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <Button variant="outline" onClick={() => document.getElementById('resume')?.click()}>
                      Browse Files
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <Link href={`/jobs/${jobData.id}/apply/success`}>
                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

