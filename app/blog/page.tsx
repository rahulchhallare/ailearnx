import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of AI: Trends to Watch in 2024",
      description: "Explore the emerging trends that will shape the AI landscape in the coming year",
      image: "/placeholder.svg?height=300&width=600",
      date: "Jan 5, 2024",
      readTime: "5 min read",
      category: "Trends"
    },
    {
      title: "Building Ethical AI Systems",
      description: "A comprehensive guide to implementing ethical considerations in AI development",
      image: "/placeholder.svg?height=300&width=600",
      date: "Jan 3, 2024",
      readTime: "8 min read",
      category: "Ethics"
    },
    {
      title: "Getting Started with Machine Learning",
      description: "A beginner's guide to understanding and implementing machine learning",
      image: "/placeholder.svg?height=300&width=600",
      date: "Jan 1, 2024",
      readTime: "10 min read",
      category: "Tutorial"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Insights & Updates</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tutorials, and insights in AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden group">
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

