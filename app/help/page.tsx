import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { HelpCircle, Search, Book, MessageCircle, FileText, Phone } from 'lucide-react'

export default function HelpPage() {
  const categories = [
    {
      title: "Getting Started",
      description: "New to AILearnX? Learn the basics here",
      icon: Book,
      articles: ["Platform Overview", "Account Setup", "Navigation Guide"]
    },
    {
      title: "Courses & Learning",
      description: "Everything about our learning platform",
      icon: FileText,
      articles: ["Course Access", "Certificates", "Progress Tracking"]
    },
    {
      title: "Technical Support",
      description: "Technical issues and troubleshooting",
      icon: HelpCircle,
      articles: ["Common Issues", "System Requirements", "Bug Reports"]
    },
    {
      title: "Community & Discussion",
      description: "Connect with other learners",
      icon: MessageCircle,
      articles: ["Forum Guidelines", "Posting Rules", "Moderation"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to your questions and get the support you need
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for help articles..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Card key={category.title} className="group hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                          {article}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <div className="text-center space-y-4 mt-12">
            <h2 className="text-2xl font-semibold">Still need help?</h2>
            <p className="text-muted-foreground">Our support team is available 24/7 to assist you</p>
            <Button size="lg" className="gap-2">
              <Phone className="h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

