'use client'

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Brain, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"
import { toast } from "sonner"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({
    email: false,
    google: false,
    linkedin: false,
  })

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading((prev) => ({ ...prev, email: true }))

    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const email = formData.get('email') as string
      const password = formData.get('password') as string

      const result = await signIn('credentials', {
        email,
        password,
        redirect: false, // Prevent automatic redirect
      })

      if (result?.error) {
        toast.error("Invalid credentials")
        return
      }

      // Redirect to dashboard after successful login
      router.push('/dashboard')
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading((prev) => ({ ...prev, email: false }))
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading((prev) => ({ ...prev, google: true }))
    try {
      const result = await signIn('google', {
        callbackUrl: '/dashboard',
        redirect: false, // Prevent automatic redirect
      })

      if (result?.error) {
        toast.error("Failed to sign in with Google")
        return
      }

      // Redirect to dashboard after successful login
      router.push('/dashboard')
    } catch (error) {
      toast.error("Failed to sign in with Google")
    } finally {
      setIsLoading((prev) => ({ ...prev, google: false }))
    }
  }

  const handleLinkedInSignIn = async () => {
    setIsLoading((prev) => ({ ...prev, linkedin: true }))
    try {
      const result = await signIn('linkedin', {
        callbackUrl: '/dashboard',
        redirect: false, // Prevent automatic redirect
      })

      if (result?.error) {
        toast.error("Failed to sign in with LinkedIn")
        return
      }

      // Redirect to dashboard after successful login
      router.push('/dashboard')
    } catch (error) {
      toast.error("Failed to sign in with LinkedIn")
    } finally {
      setIsLoading((prev) => ({ ...prev, linkedin: false }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <Brain className="w-12 h-12 mx-auto text-primary" />
            <h1 className="text-2xl font-bold mt-4">Welcome back to AILearnX</h1>
            <p className="text-muted-foreground mt-2">Login to continue your AI learning journey</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={isLoading.email}
                >
                  {isLoading.email ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleLinkedInSignIn}
                  disabled={isLoading.linkedin}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  {isLoading.linkedin ? "Signing in..." : "LinkedIn"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading.google}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {isLoading.google ? "Signing in..." : "Google"}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <div className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="text-center space-y-2">
            <Link href="/forgot-password" className="text-sm text-muted-foreground hover:underline">
              Forgot your password?
            </Link>
            <p className="text-xs text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
