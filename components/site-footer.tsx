import { Brain, Mail, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AILearnX</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Master AI, build the future. Join the world's largest AI learning platform.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@ailearnx.com">support@ailearnx.com</a>
              </div>
              <div className="flex space-x-4">
                <Link href="https://x.com/AI_LearnX_" className="hover:opacity-80">
                  <Twitter className="h-5 w-5" style={{ color: '#1DA1F2' }} />
                </Link>
                <Link href="https://www.linkedin.com/company/ailearnx/" className="hover:opacity-80">
                  <Linkedin className="h-5 w-5" style={{ color: '#0A66C2' }} />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61570843979864" className="hover:opacity-80">
                  <Facebook className="h-5 w-5" style={{ color: '#1877F2' }} />
                </Link>
                <Link href="https://www.instagram.com/ailearnx" className="hover:opacity-80">
                  <Instagram className="h-5 w-5" style={{ color: '#E4405F' }} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link></li>
              <li>
                <Link href="/host/course/create" className="text-sm text-muted-foreground hover:text-primary">
                  Create a Course
                </Link>
              </li>
              <li><Link href="/challenges" className="text-sm text-muted-foreground hover:text-primary">Challenges</Link></li>
              <li><Link href="/host-challenges" className="text-sm text-muted-foreground hover:text-primary">Host Challenges</Link></li>
              <li><Link href="/jobs" className="text-sm text-muted-foreground hover:text-primary">Jobs</Link></li>
              <li><Link href="/mentorship" className="text-sm text-muted-foreground hover:text-primary">Mentorship</Link></li>
              <li><Link href="/practice" className="text-sm text-muted-foreground hover:text-primary">Practice</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/community" className="text-sm text-muted-foreground hover:text-primary">Community</Link></li>
              <li><Link href="/events" className="text-sm text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link href="/help" className="text-sm text-muted-foreground hover:text-primary">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li><Link href="/community" className="text-sm text-muted-foreground hover:text-primary">Community</Link></li>
              <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-primary">Resources</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AILearnX. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

