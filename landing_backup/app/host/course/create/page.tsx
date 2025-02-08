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

export default function CreateCoursePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would normally send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      router.push('/host/course/create/success')
    } catch (error) {
      console.error('Error creating course:', error)
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
            <h1 className="text-3xl font-bold">Create New Course</h1>
            <p className="text-muted-foreground">
              Design and launch your own AI course for the community
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Course Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter course title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your course..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (weeks)</Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="Enter duration in weeks"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        placeholder="Enter course price"
                        type="number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Course Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course category" />
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
                    <Label htmlFor="prerequisites">Prerequisites</Label>
                    <Textarea
                      id="prerequisites"
                      placeholder="Enter course prerequisites..."
                      className="min-h-[100px]"
                      
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="curriculum">Curriculum</Label>
                    <Textarea
                      id="curriculum"
                      placeholder="Enter course curriculum..."
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
                    {isSubmitting ? "Creating..." : "Create Course"}
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

