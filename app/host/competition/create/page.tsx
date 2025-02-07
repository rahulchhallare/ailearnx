'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateCompetitionPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would normally send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      router.push('/host/competition/create/success')
    } catch (error) {
      console.error('Error creating competition:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create AI Competition</h1>
            <p className="text-muted-foreground">
              Set up a new AI competition for the community
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Competition Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Competition Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter competition title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your competition..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <Input
                        id="endDate"
                        type="date"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prize">Prize Pool</Label>
                    <Input
                      id="prize"
                      placeholder="Enter prize amount"
                      type="number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxParticipants">Maximum Participants</Label>
                    <Input
                      id="maxParticipants"
                      placeholder="Enter maximum number of participants"
                      type="number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Competition Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select competition type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ml">Machine Learning</SelectItem>
                        <SelectItem value="nlp">Natural Language Processing</SelectItem>
                        <SelectItem value="cv">Computer Vision</SelectItem>
                        <SelectItem value="rl">Reinforcement Learning</SelectItem>
                        <SelectItem value="ai-ethics">AI Ethics</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rules">Rules and Guidelines</Label>
                    <Textarea
                      id="rules"
                      placeholder="Enter competition rules and guidelines..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    disabled={isSubmitting}
                  >
                    Save as Draft
                  </Button>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating..." : "Create Competition"}
                  </Button>
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

