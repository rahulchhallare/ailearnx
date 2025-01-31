'use client'

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle, RotateCcw } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

// This would normally come from a database based on the exercise ID
const exerciseData = {
  id: 1,
  title: "Text Classification",
  description: "Implement a basic sentiment analysis classifier",
  instructions: `
    1. Analyze the given text input
    2. Classify the sentiment as positive, negative, or neutral
    3. Provide explanation for your classification
    4. Test your implementation with different examples
  `,
  sampleInput: "The new AI features are amazing and have greatly improved my workflow!",
  testCases: [
    {
      input: "I love this product, it's fantastic!",
      expectedOutput: "Positive"
    },
    {
      input: "This service is terrible, would not recommend.",
      expectedOutput: "Negative"
    }
  ]
}

export default function ExercisePage() {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // Here you would normally send the code to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      router.push(`/practice/natural-language-processing/exercise/${exerciseData.id}/success`)
    } catch (error) {
      console.error('Error submitting code:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setCode("")
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Exercise Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold">{exerciseData.title}</h1>
                <p className="text-muted-foreground">{exerciseData.description}</p>
              </div>
              <Link href="/practice">
                <Button variant="outline">Exit Exercise</Button>
              </Link>
            </div>
          </div>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="prose prose-sm">
                  {exerciseData.instructions.split('\n').map((line, index) => (
                    <p key={index} className="text-muted-foreground">
                      {line.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coding Area */}
          <Card>
            <CardHeader>
              <CardTitle>Your Implementation</CardTitle>
              <CardDescription>Write your solution below</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="# Write your code here..."
                  className="font-mono min-h-[300px]"
                />
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    onClick={handleReset}
                    disabled={isSubmitting}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Cases */}
          <Card>
            <CardHeader>
              <CardTitle>Test Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exerciseData.testCases.map((testCase, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">Test Case {index + 1}</p>
                        <p className="text-sm text-muted-foreground">Input: {testCase.input}</p>
                        <p className="text-sm text-muted-foreground">Expected: {testCase.expectedOutput}</p>
                      </div>
                      <Badge variant="outline">Not Run</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-yellow-100 p-3">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Stuck? Get Help</h3>
                  <p className="text-sm text-muted-foreground">
                    Check out the resources or ask for help in our community forum.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">View Resources</Button>
                    <Button variant="outline" size="sm">Ask Question</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

