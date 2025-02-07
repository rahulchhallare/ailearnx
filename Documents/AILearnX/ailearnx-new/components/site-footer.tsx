import Link from "next/link"
<<<<<<< HEAD
import { Brain } from 'lucide-react'
=======
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
<<<<<<< HEAD
            <div className="flex items-center gap-0 mb-4">
              <Brain className="h-8 w-8 text-[#0052FF] mr-2" />
              <span className="text-xl font-bold text-[#0052FF]">AILearn</span>
              <span className="text-xl font-bold text-purple-600">X</span>
=======
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">AILearnX</span>
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
            </div>
            <p className="text-gray-600 mb-4">
              Master AI, build the future. Join the world's largest AI learning platform.
            </p>
            <div className="text-gray-600 mb-4">
              <a href="mailto:support@ailearnx.com">support@ailearnx.com</a>
            </div>
            <div className="flex space-x-4">
<<<<<<< HEAD
=======
              {/* Twitter/X */}
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
              <Link href="#" className="hover:opacity-80">
                <svg className="h-6 w-6" fill="#000000" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
<<<<<<< HEAD
=======
              {/* LinkedIn */}
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
              <Link href="#" className="hover:opacity-80">
                <svg className="h-6 w-6" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
<<<<<<< HEAD
=======
              {/* Facebook */}
              <Link href="#" className="hover:opacity-80">
                <svg className="h-6 w-6" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="hover:opacity-80">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C9.284 2 8.944 2.012 7.877 2.058C6.813 2.104 6.086 2.278 5.45 2.525C4.792 2.779 4.24 3.123 3.678 3.678C3.123 4.24 2.779 4.792 2.525 5.45C2.278 6.086 2.104 6.813 2.058 7.877C2.012 8.944 2 9.284 2 12C2 14.716 2.012 15.056 2.058 16.123C2.104 17.187 2.278 17.914 2.525 18.55C2.779 19.208 3.123 19.76 3.678 20.322C4.24 20.877 4.792 21.221 5.45 21.475C6.086 21.722 6.813 21.896 7.877 21.942C8.944 21.988 9.284 22 12 22C14.716 22 15.056 21.988 16.123 21.942C17.187 21.896 17.914 21.722 18.55 21.475C19.208 21.221 19.76 20.877 20.322 20.322C20.877 19.76 21.221 19.208 21.475 18.55C21.722 17.914 21.896 17.187 21.942 16.123C21.988 15.056 22 14.716 22 12C22 9.284 21.988 8.944 21.942 7.877C21.896 6.813 21.722 6.086 21.475 5.45C21.221 4.792 20.877 4.24 20.322 3.678C19.76 3.123 19.208 2.779 18.55 2.525C17.914 2.278 17.187 2.104 16.123 2.058C15.056 2.012 14.716 2 12 2Z" fill="url(#instagram-gradient)"/>
                  <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15Z" fill="white"/>
                  <path d="M17.5 6.75C17.5 7.44036 16.9404 8 16.25 8C15.5596 8 15 7.44036 15 6.75C15 6.05964 15.5596 5.5 16.25 5.5C16.9404 5.5 17.5 6.05964 17.5 6.75Z" fill="white"/>
                  <defs>
                    <linearGradient id="instagram-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FEC053"/>
                      <stop offset="50%" stopColor="#F2203E"/>
                      <stop offset="100%" stopColor="#B729A8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
>>>>>>> 8135c6a911582fb28db8744739a01c2b0e12830a
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link></li>
              <li><Link href="/create-course" className="text-gray-600 hover:text-gray-900">Create a Course</Link></li>
              <li><Link href="/challenges" className="text-gray-600 hover:text-gray-900">Challenges</Link></li>
              <li><Link href="/host-challenges" className="text-gray-600 hover:text-gray-900">Host Challenges</Link></li>
              <li><Link href="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="/community" className="text-gray-600 hover:text-gray-900">Community</Link></li>
              <li><Link href="/events" className="text-gray-600 hover:text-gray-900">Events</Link></li>
              <li><Link href="/help" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

