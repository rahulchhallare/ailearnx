import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Clock, Award } from 'lucide-react'
import Image from "next/image"

export default function ChallengesPage() {
  const challenges = [
    {
      title: "AI Image Generation Challenge",
      company: "TechCorp AI",
      deadline: "7 days left",
      participants: "234",
      prize: "$5,000",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Computer Vision", "Deep Learning"]
    },
    {
      title: "NLP Innovation Challenge",
      company: "Language AI Labs",
      deadline: "14 days left",
      participants: "156",
      prize: "$3,000",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["NLP", "Machine Learning"]
    },
    {
      title: "AI Ethics Hackathon",
      company: "AI Ethics Institute",
      deadline: "21 days left",
      participants: "89",
      prize: "$4,000",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Ethics", "AI Policy"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Challenges</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participate in cutting-edge AI challenges and compete with the best minds globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <Card key={challenge.title} className="overflow-hidden">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{challenge.title}</CardTitle>
                  <CardDescription>{challenge.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {challenge.deadline}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {challenge.participants} participants
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      {challenge.prize}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {challenge.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">Join Challenge</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

