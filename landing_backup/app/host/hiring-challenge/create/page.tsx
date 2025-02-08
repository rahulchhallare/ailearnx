import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateHiringChallengePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create Hiring Challenge</h1>
            <p className="text-muted-foreground">
              Set up a skill-based challenge to identify top AI talent
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Challenge Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Challenge Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter challenge title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Enter company name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position to Fill</Label>
                    <Input
                      id="position"
                      placeholder="Enter job position"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Challenge Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the challenge and its objectives..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (hours)</Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="Enter duration"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="positions">Number of Positions</Label>
                      <Input
                        id="positions"
                        type="number"
                        placeholder="Enter number of positions"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Required Skills</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary skill" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ml">Machine Learning</SelectItem>
                        <SelectItem value="dl">Deep Learning</SelectItem>
                        <SelectItem value="nlp">Natural Language Processing</SelectItem>
                        <SelectItem value="cv">Computer Vision</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="format">Challenge Format</Label>
                    <Textarea
                      id="format"
                      placeholder="Describe the challenge format and rules..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="evaluation">Evaluation Criteria</Label>
                    <Textarea
                      id="evaluation"
                      placeholder="Define how candidates will be evaluated..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="benefits">Benefits</Label>
                    <Textarea
                      id="benefits"
                      placeholder="List benefits for successful candidates..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Launch Challenge</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

