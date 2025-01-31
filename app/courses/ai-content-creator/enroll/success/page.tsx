import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function EnrollmentSuccessPage() {
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
                <h1 className="text-2xl font-bold">Enrollment Successful!</h1>
                <p className="text-muted-foreground">
                  You now have full access to the AI Content Creator course.
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <Link href="/dashboard/courses">
                  <Button className="w-full gap-2">
                    Go to Course
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" className="w-full">
                    Browse More Courses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

