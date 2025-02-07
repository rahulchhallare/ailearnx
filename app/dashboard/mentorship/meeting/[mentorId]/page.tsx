import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, VideoIcon, MonitorUp, MessageSquare, Users, Settings, MicOff, VideoOff } from 'lucide-react'
import Image from "next/image"

// This would normally come from a database
const mentorData = {
  name: "Dr. Sarah Chen",
  role: "AI Research Scientist",
  image: "/placeholder.svg?height=100&width=100"
}

export default function MeetingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Meeting Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src={mentorData.image}
                alt={mentorData.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">Meeting with {mentorData.name}</h1>
                <p className="text-muted-foreground">{mentorData.role}</p>
              </div>
            </div>
            <Button variant="destructive">Leave Meeting</Button>
          </div>

          {/* Meeting Content */}
          <div className="grid grid-cols-4 gap-6">
            {/* Main Video */}
            <Card className="col-span-3">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted rounded-lg">
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">HD</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-medium">Dr. Sarah Chen</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Self Video */}
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted rounded-lg">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-medium">You</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Meeting Controls */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-center items-center gap-4">
                <Button variant="outline" size="lg" className="rounded-full">
                  <MicOff className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  <VideoOff className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  <MonitorUp className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  <Users className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

