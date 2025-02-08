import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function CompetitionCreateSuccessPage() {
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
                <h1 className="text-2xl font-bold">Competition Created!</h1>
                <p className="text-muted-foreground">
                  Your AI competition has been successfully created and is now live.
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>You can now manage your competition and track submissions.</p>
                  <p>We'll notify you when participants start registering.</p>
                </div>
                <div className="space-y-2">
                  <Link href="/dashboard/competitions">
                    <Button className="w-full gap-2">
                      View Competition Dashboard
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/host">
                    <Button variant="outline" className="w-full">
                      Create Another Competition
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

