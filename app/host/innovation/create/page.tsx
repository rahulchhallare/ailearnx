import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateInnovationChallengePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create Innovation Challenge</h1>
            <p className="text-muted-foreground">
              Launch an AI innovation challenge to solve real-world problems
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
                    <Label htmlFor="description">Problem Statement</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the problem to be solved..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objectives">Objectives</Label>
                    <Textarea
                      id="objectives"
                      placeholder="List the main objectives of the challenge..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (weeks)</Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="Enter duration"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prize">Prize Pool</Label>
                      <Input
                        id="prize"
                        placeholder="Enter prize amount"
                        type="number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry Focus</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Technical Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Specify technical requirements and constraints..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="evaluation">Evaluation Criteria</Label>
                    <Textarea
                      id="evaluation"
                      placeholder="Define how solutions will be evaluated..."
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

