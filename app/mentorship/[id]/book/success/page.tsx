import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import Link from "next/link"

// This would normally come from a database
const sessionData = {
  mentorName: "Dr. Sarah Chen",
  date: "January 15, 2024",
  time: "10:00 AM",
  duration: "60 minutes"
}

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="rounded-full bg-green-100 w-16 h-16 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Session Booked!</h1>
                <p className="text-muted-foreground">
                  Your mentorship session with {sessionData.mentorName} has been confirmed
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{sessionData.date} at {sessionData.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Duration: {sessionData.duration}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>You'll receive a confirmation email with meeting details shortly.</p>
                  <p>Please make sure to add this to your calendar.</p>
                </div>
                <div className="space-y-2">
                  <Link href="/dashboard/mentorship">
                    <Button className="w-full gap-2">
                      View My Sessions
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/mentorship">
                    <Button variant="outline" className="w-full">
                      Find More Mentors
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

