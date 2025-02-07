import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Shield, Lock, Settings } from 'lucide-react'

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      icon: Shield,
      examples: [
        "Session cookies",
        "Authentication cookies",
        "Security cookies"
      ]
    },
    {
      title: "Performance Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
      icon: Settings,
      examples: [
        "Analytics cookies",
        "Load balancing cookies",
        "Response time tracking"
      ]
    },
    {
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization.",
      icon: Cookie,
      examples: [
        "Language preference cookies",
        "Theme preference cookies",
        "User settings cookies"
      ]
    },
    {
      title: "Targeting Cookies",
      description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
      icon: Lock,
      examples: [
        "Advertisement cookies",
        "Social media cookies",
        "Behavioral tracking cookies"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: January 8, 2024</p>
          </div>

          {/* Introduction */}
          <section className="space-y-4">
            <p>
              This Cookie Policy explains how AILearnX ("we", "us", and "our") uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies are and why we use 
              them, as well as your rights to control our use of them.
            </p>
            <p>
              By continuing to use our site, you are agreeing to our use of cookies as described in this policy.
            </p>
          </section>

          {/* What are cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              They are widely used by website owners in order to make their websites work, or to work more efficiently, 
              as well as to provide reporting information.
            </p>
          </section>

          {/* Types of Cookies */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Types of Cookies We Use</h2>
            <div className="grid gap-6">
              {cookieTypes.map((type) => (
                <Card key={type.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <type.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{type.description}</p>
                    <div>
                      <p className="font-medium mb-2">Examples:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        {type.examples.map((example) => (
                          <li key={example} className="text-muted-foreground">
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How to control cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How to Control Cookies</h2>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject 
              cookies, you may still use our website though your access to some functionality and areas of our 
              website may be restricted.
            </p>
            <div className="mt-4">
              <Button>Manage Cookie Preferences</Button>
            </div>
          </section>

          {/* Updates to policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use 
              or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy 
              regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at:
            </p>
            <p className="text-muted-foreground">
              privacy@ailearnx.com<br />
              AILearnX Inc.<br />
              123 AI Street<br />
              San Francisco, CA 94105
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

