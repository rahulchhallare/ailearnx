import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Trophy, Upload } from 'lucide-react'
import Link from "next/link"

// This would normally come from a database
const competitionData = {
  id: "ai-innovation-challenge-2024",
  title: "AI Innovation Challenge 2024",
  registrationFee: "$50"
}

export default function CompetitionRegistrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Registration Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline">Registration Form</Badge>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">Register for {competitionData.title}</h1>
              <p className="text-muted-foreground">
                Complete the form below to participate in the challenge
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle>Participant Information</CardTitle>
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
                  <Label>Participation Type</Label>
                  <RadioGroup defaultValue="individual">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Individual</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="team" id="team" />
                      <Label htmlFor="team">Team</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">AI/ML Experience Level</Label>
                  <RadioGroup defaultValue="beginner">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner">Beginner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate">Intermediate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <Label htmlFor="advanced">Advanced</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background">Technical Background</Label>
                  <Textarea
                    id="background"
                    placeholder="Briefly describe your experience with AI/ML..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Motivation to Participate</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Why do you want to participate in this challenge?"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Resume/CV (Optional)</Label>
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
                    />
                    <Button variant="outline" onClick={() => document.getElementById('resume')?.click()}>
                      Browse Files
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-semibold">Registration Fee</p>
                      <p className="text-sm text-muted-foreground">One-time payment</p>
                    </div>
                    <p className="text-2xl font-bold">{competitionData.registrationFee}</p>
                  </div>
                  <Link href={`/competitions/${competitionData.id}/register/success`}>
                    <Button type="submit" className="w-full" size="lg">
                      Complete Registration
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

