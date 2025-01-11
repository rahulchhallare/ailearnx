import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm hover:text-primary">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-primary">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://twitter.com/ailearnx" className="text-sm hover:text-primary">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/company/ailearnx" className="text-sm hover:text-primary">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AILearnX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

