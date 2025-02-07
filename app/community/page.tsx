import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, Heart, Share2, ThumbsUp, MessagesSquare } from 'lucide-react'
import Image from "next/image"

export default function CommunityPage() {
  const discussions = [
    {
      title: "Best practices for implementing LLMs",
      author: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Technical Discussion",
      replies: 24,
      likes: 156,
      timeAgo: "2 hours ago"
    },
    {
      title: "Career transition to AI: My journey",
      author: "Michael Kumar",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Career",
      replies: 45,
      likes: 232,
      timeAgo: "5 hours ago"
    },
    {
      title: "Ethics in AI development",
      author: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Ethics",
      replies: 67,
      likes: 189,
      timeAgo: "1 day ago"
    }
  ]

  const groups = [
    {
      name: "AI Beginners",
      members: "2.5k",
      description: "A supportive community for those starting their AI journey",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Machine Learning Experts",
      members: "1.8k",
      description: "Advanced discussions on ML techniques and research",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "AI Ethics & Society",
      members: "1.2k",
      description: "Exploring the societal impact of AI technologies",
      image: "/placeholder.svg?height=100&width=100"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Learning Community</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect, learn, and grow with fellow AI enthusiasts from around the world
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Start Discussion</Button>
              <Button size="lg" variant="outline">Browse Groups</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Users className="w-8 h-8 mx-auto text-primary" />
                <CardTitle>15k+</CardTitle>
                <CardDescription>Active Members</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <MessageSquare className="w-8 h-8 mx-auto text-primary" />
                <CardTitle>10k+</CardTitle>
                <CardDescription>Daily Messages</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Heart className="w-8 h-8 mx-auto text-primary" />
                <CardTitle>5k+</CardTitle>
                <CardDescription>Knowledge Shares</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Popular Discussions */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Popular Discussions</h2>
              <Button variant="ghost">View All</Button>
            </div>
            <div className="grid gap-4">
              {discussions.map((discussion) => (
                <Card key={discussion.title}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Image
                        src={discussion.avatar}
                        alt={discussion.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{discussion.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              by {discussion.author} · {discussion.timeAgo}
                            </p>
                          </div>
                          <Badge>{discussion.category}</Badge>
                        </div>
                        <div className="flex gap-4 mt-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <ThumbsUp className="w-4 h-4" />
                            {discussion.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <MessagesSquare className="w-4 h-4" />
                            {discussion.replies} replies
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Groups */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Popular Groups</h2>
              <Button variant="ghost">View All Groups</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {groups.map((group) => (
                <Card key={group.name} className="group hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Image
                        src={group.image}
                        alt={group.name}
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                      <div>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {group.members} members
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {group.description}
                    </p>
                    <Button className="w-full group-hover:bg-primary">
                      Join Group
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

