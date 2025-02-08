import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, FileText, Video, Download, ExternalLink } from 'lucide-react'
import Link from "next/link"

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Fundamentals Guide",
      description: "A comprehensive guide to understanding AI basics",
      type: "Guide",
      format: "PDF",
      icon: Book,
      downloadable: true
    },
    {
      title: "Machine Learning Tutorials",
      description: "Step-by-step tutorials for ML implementation",
      type: "Tutorial",
      format: "Video",
      icon: Video,
      downloadable: false
    },
    {
      title: "AI Ethics Whitepaper",
      description: "Research paper on ethical considerations in AI",
      type: "Whitepaper",
      format: "PDF",
      icon: FileText,
      downloadable: true
    }
  ]

  const categories = [
    "Guides & Tutorials",
    "Research Papers",
    "Case Studies",
    "Templates",
    "Tools & Software",
    "Datasets"
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our collection of AI learning resources, tools, and materials
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource.title} className="group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <resource.icon className="h-5 w-5 text-primary" />
                        <CardTitle>{resource.title}</CardTitle>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge>{resource.type}</Badge>
                      <Badge variant="outline">{resource.format}</Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      {resource.downloadable ? (
                        <>
                          <Download className="h-4 w-4" />
                          Download
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4" />
                          View
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 text-center space-y-4">
            <h2 className="text-2xl font-semibold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive new resources and updates
            </p>
            <Button size="lg">Subscribe Now</Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

