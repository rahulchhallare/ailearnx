import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, FileText, MessageSquare, CheckCircle, Download } from 'lucide-react'
import Link from "next/link"

export default function CourseDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">AI Product Manager</h1>
              <p className="text-muted-foreground">Master AI product development</p>
            </div>
            <Progress value={33} className="w-32" />
          </div>

          <Tabs defaultValue="curriculum">
            <TabsList>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="curriculum" className="space-y-6">
              {/* Module 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Module 1: Introduction to AI Product Management</CardTitle>
                  <CardDescription>Learn the fundamentals of AI product management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Play className="w-4 h-4" />
                      <span>1.1 Understanding AI Technologies</span>
                      <CheckCircle className="w-4 h-4 ml-auto text-green-500" />
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Play className="w-4 h-4" />
                      <span>1.2 Role of an AI Product Manager</span>
                      <CheckCircle className="w-4 h-4 ml-auto text-green-500" />
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Play className="w-4 h-4" />
                      <span>1.3 Product Development Lifecycle</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Module 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Module 2: User Research and Problem Definition</CardTitle>
                  <CardDescription>Learn effective research methods for AI products</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Play className="w-4 h-4" />
                      <span>2.1 Identifying User Needs</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Play className="w-4 h-4" />
                      <span>2.2 Problem Statement Development</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Play className="w-4 h-4" />
                      <span>2.3 Market Analysis</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle>Course Resources</CardTitle>
                  <CardDescription>Download supplementary materials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <FileText className="w-4 h-4" />
                    <span>AI Product Management Handbook</span>
                    <Download className="w-4 h-4 ml-auto" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Project Templates</span>
                    <Download className="w-4 h-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discussions">
              <Card>
                <CardHeader>
                  <CardTitle>Course Discussions</CardTitle>
                  <CardDescription>Engage with fellow learners</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Start New Discussion
                    </Button>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start gap-4">
                          <MessageSquare className="w-4 h-4 mt-1" />
                          <div>
                            <h4 className="font-semibold">Best practices for AI product roadmap?</h4>
                            <p className="text-sm text-muted-foreground">
                              Started by John Doe • 5 replies
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start gap-4">
                          <MessageSquare className="w-4 h-4 mt-1" />
                          <div>
                            <h4 className="font-semibold">How to validate AI solutions?</h4>
                            <p className="text-sm text-muted-foreground">
                              Started by Jane Smith • 3 replies
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

