import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, BarChart, Clock, CheckCircle } from 'lucide-react'
import Link from "next/link"

export default function PracticePage() {
  const challenges = [
    {
      title: "Natural Language Processing",
      description: "Practice building chatbots and text classification systems",
      difficulty: "Intermediate",
      estimatedTime: "2-3 hours",
      completionRate: "75%",
      topics: ["Text Processing", "Sentiment Analysis", "NLP"]
    },
    {
      title: "Computer Vision Basics",
      description: "Learn image classification and object detection",
      difficulty: "Beginner",
      estimatedTime: "1-2 hours",
      completionRate: "85%",
      topics: ["Image Processing", "CNN", "OpenCV"]
    },
    {
      title: "Reinforcement Learning",
      description: "Build AI agents that learn from environment interactions",
      difficulty: "Advanced",
      estimatedTime: "4-5 hours",
      completionRate: "60%",
      topics: ["Q-Learning", "Policy Gradients", "RL"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Practice AI</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharpen your AI skills with hands-on practice problems and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <Card key={challenge.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {challenge.title}
                  </CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {challenge.estimatedTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <BarChart className="w-4 h-4" />
                        {challenge.difficulty}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {challenge.completionRate}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {challenge.topics.map((topic) => (
                        <Badge key={topic} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/practice/${challenge.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full">Start Practice</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

