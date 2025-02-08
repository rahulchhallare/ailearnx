import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 8, 2024</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
            <p>
              By accessing or using AILearnX, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Use License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our platform for personal, non-commercial purposes.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must not modify or copy the materials</li>
              <li>You must not use the materials for commercial purposes</li>
              <li>You must not attempt to decompile or reverse engineer any software</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Account Responsibilities</h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us of any unauthorized use</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Payment Terms</h2>
            <p>
              Certain features of the platform require payment. You agree to pay all fees and charges associated with your account on the terms described at the time of purchase.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Content Guidelines</h2>
            <p>
              You agree not to post content that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Is unlawful or fraudulent</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains viruses or malicious code</li>
              <li>Harasses or discriminates against others</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the platform at our sole discretion, without notice, for conduct that we believe violates these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground">
              legal@ailearnx.com<br />
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

