import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star, Clock, BookOpen } from 'lucide-react'
import Image from "next/image"
import Link from "next/link";

export default function MentorshipPage() {
  const mentors = [
    {
      id: "dr-sarah-chen",
      name: "Dr. Sarah Chen",
      role: "AI Research Scientist",
      company: "DeepMind",
      expertise: ["Machine Learning", "Neural Networks"],
      rating: "4.9",
      students: "124",
      image: "/placeholder.svg?height=200&width=200",
      availability: "2 slots available"
    },
    {
      id: "james-wilson",
      name: "James Wilson",
      role: "AI Product Manager",
      company: "Google AI",
      expertise: ["AI Product Strategy", "MLOps"],
      rating: "4.8",
      students: "98",
      image: "/placeholder.svg?height=200&width=200",
      availability: "1 slot available"
    },
    {
      id: "dr-michael-kumar",
      name: "Dr. Michael Kumar",
      role: "AI Ethics Researcher",
      company: "Stanford AI Lab",
      expertise: ["AI Ethics", "Responsible AI"],
      rating: "4.9",
      students: "156",
      image: "/placeholder.svg?height=200&width=200",
      availability: "3 slots available"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Mentorship Program</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn directly from industry experts and accelerate your AI career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <Card key={mentor.name} className="overflow-hidden">
                <CardHeader className="text-center">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={120}
                    height={120}
                    className="mx-auto rounded-full"
                  />
                  <CardTitle>{mentor.name}</CardTitle>
                  <CardDescription>{mentor.role} at {mentor.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {mentor.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {mentor.students} mentees
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    <Clock className="inline h-4 w-4 mr-1" />
                    {mentor.availability}
                  </div>
                  <Link href={`/mentorship/${mentor.id}/book`}>
                    <Button className="w-full">Book Session</Button>
                  </Link>
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

