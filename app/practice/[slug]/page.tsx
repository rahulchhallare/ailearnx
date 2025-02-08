import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, CheckCircle, HelpCircle, AlertCircle } from 'lucide-react'
import Link from "next/link"

// This would normally come from a database
const practiceData = {
  id: "natural-language-processing",
  title: "Natural Language Processing",
  description: "Practice building chatbots and text classification systems",
  difficulty: "Intermediate",
  estimatedTime: "2-3 hours",
  completionRate: "75%",
  topics: ["Text Processing", "Sentiment Analysis", "NLP"],
  exercises: [
    {
      id: 1,
      title: "Text Classification",
      description: "Implement a basic sentiment analysis classifier",
      status: "not_started",
      points: 100
    },
    {
      id: 2,
      title: "Named Entity Recognition",
      description: "Extract and classify named entities from text",
      status: "not_started",
      points: 150
    },
    {
      id: 3,
      title: "Chatbot Implementation",
      description: "Build a simple rule-based chatbot",
      status: "not_started",
      points: 200
    }
  ],
  resources: [
    {
      title: "NLP Fundamentals Guide",
      type: "documentation",
      link: "#"
    },
    {
      title: "Text Processing Tutorial",
      type: "video",
      link: "#"
    },
    {
      title: "Sample Datasets",
      type: "download",
      link: "#"
    }
  ],
  instructions: [
    "1. Analyze the given text input",
    "2. Classify the sentiment as positive, negative, or neutral",
    "3. Provide explanation for your classification",
    "4. Test your implementation with different examples"
  ]
}

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold">{practiceData.title}</h1>
                <p className="text-muted-foreground">{practiceData.description}</p>
              </div>
              <Badge variant="secondary" className="text-sm">
                {practiceData.difficulty}
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                {practiceData.estimatedTime}
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                Completion Rate: {practiceData.completionRate}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {practiceData.topics.map((topic) => (
                <Badge key={topic} variant="outline">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="exercises">
            <TabsList>
              <TabsTrigger value="exercises">Exercises</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="exercises" className="space-y-4">
              {practiceData.exercises.map((exercise) => (
                <Card key={exercise.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{exercise.title}</CardTitle>
                        <CardDescription>{exercise.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{exercise.points} points</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {exercise.status === 'not_started' ? (
                          <Badge variant="outline">Not Started</Badge>
                        ) : exercise.status === 'in_progress' ? (
                          <Badge variant="secondary">In Progress</Badge>
                        ) : (
                          <Badge variant="default">Completed</Badge>
                        )}
                      </div>
                      <Link href={`/practice/${practiceData.id}/exercise/${exercise.id}`}>
                        <Button>Start Exercise</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              {practiceData.resources.map((resource) => (
                <Card key={resource.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{resource.title}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {resource.type}
                        </Badge>
                      </div>
                      <Button variant="outline" asChild>
                        <Link href={resource.link}>Access Resource</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Click to access this {resource.type} resource
                    </p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Help Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Need Help?</h3>
                  <p className="text-sm text-muted-foreground">
                    If you&apos;re stuck or have questions, our community forum and mentors are here to help.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">Visit Forum</Button>
                    <Button variant="outline" size="sm">Contact Mentor</Button>
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

