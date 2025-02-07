import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock, Users, Award } from 'lucide-react'
import Image from "next/image"
import Link from "next/link";

export default function CompetitionsPage() {
  const competitions = [
    {
      id: "ai-innovation-challenge-2024",
      title: "AI Innovation Challenge 2024",
      description: "Build innovative AI solutions for real-world problems",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop&auto=format&q=80",
      deadline: "7 days left",
      participants: "500+",
      prize: "$10,000",
      tags: ["Machine Learning", "Innovation"],
      status: "Active"
    },
    {
      id: "llm-hackathon",
      title: "LLM Hackathon",
      description: "Create powerful applications using large language models",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=400&fit=crop&auto=format&q=80",
      deadline: "15 days left",
      participants: "300+",
      prize: "$5,000",
      tags: ["NLP", "LLM"],
      status: "Active"
    },
    {
      id: "computer-vision-challenge",
      title: "Computer Vision Challenge",
      description: "Develop cutting-edge computer vision solutions",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&auto=format&q=80",
      deadline: "30 days left",
      participants: "400+",
      prize: "$7,500",
      tags: ["Computer Vision", "Deep Learning"],
      status: "Active"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Competitions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase your AI skills, compete with the best, and win exciting prizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {competitions.map((competition) => (
              <Card key={competition.title} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={competition.image}
                    alt={competition.title}
                    width={400}
                    height={200}
                    className="w-full object-cover h-48"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-500">
                    {competition.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    {competition.title}
                  </CardTitle>
                  <CardDescription>{competition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {competition.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {competition.deadline}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {competition.participants}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {competition.prize}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link href={`/competitions/${competition.id}`}>
                    <Button className="w-full">Register Now</Button>
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

