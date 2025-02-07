import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from "next/link"

// This would normally come from a database
const jobData = {
  title: "Senior AI Engineer",
  company: "TechCorp AI"
}

export default function ApplicationSuccessPage() {
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
                <h1 className="text-2xl font-bold">Application Submitted!</h1>
                <p className="text-muted-foreground">
                  Your application for {jobData.title} at {jobData.company} has been successfully submitted.
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>We'll review your application and get back to you within 48 hours.</p>
                  <p>You'll receive a confirmation email shortly.</p>
                </div>
                <div className="space-y-2">
                  <Link href="/dashboard/applications">
                    <Button className="w-full gap-2">
                      View Application Status
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/jobs">
                    <Button variant="outline" className="w-full">
                      Browse More Jobs
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

