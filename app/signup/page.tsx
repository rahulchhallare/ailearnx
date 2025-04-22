'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Brain, Github, Mail } from 'lucide-react'
import Link from "next/link"
import { toast } from "sonner"
import { Toaster } from "sonner"

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<{[key: string]: boolean}>({
    email: false,
    google: false,
    github: false
  })

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup form submitted") // Debugging log
    setIsLoading((prev) => ({ ...prev, email: true }))

    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const firstName = formData.get('firstName') as string
      const lastName = formData.get('lastName') as string
      const email = formData.get('email') as string
      const password = formData.get('password') as string
      const confirmPassword = formData.get('confirmPassword') as string

      // Validate passwords match
      if (password !== confirmPassword) {
        toast.error("Passwords do not match")
        return
      }

      // Send POST request to the signup API
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Show error toast if signup fails
        toast.error(data.error || "Failed to create account")
        return
      }

      // Show success toast
      toast.success("Account created successfully!")

      // Delay redirection to allow toast to display
      setTimeout(() => {
        router.push('/login')
      }, 2000) // 2-second delay
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading((prev) => ({ ...prev, email: false }))
    }
  }

  const handleGoogleSignup = async () => {
    setIsLoading(prev => ({ ...prev, google: true }))
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/dashboard')
    } catch (error) {
      toast.error("Failed to sign up with Google")
    } finally {
      setIsLoading(prev => ({ ...prev, google: false }))
    }
  }

  const handleGithubSignup = async () => {
    setIsLoading(prev => ({ ...prev, github: true }))
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/dashboard')
    } catch (error) {
      toast.error("Failed to sign up with GitHub")
    } finally {
      setIsLoading(prev => ({ ...prev, github: false }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <Brain className="w-12 h-12 mx-auto text-primary" />
            <h1 className="text-2xl font-bold mt-4">Create your account</h1>
            <p className="text-muted-foreground mt-2">Join the world's largest AI learning platform</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

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
                    placeholder="Create a password"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <Button
                  className="w-full"
                  type="submit"
                  disabled={isLoading.email}
                >
                  {isLoading.email ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleGithubSignup}
                  disabled={isLoading.github}
                >
                  <Github className="w-4 h-4 mr-2" />
                  {isLoading.github ? "Signing up..." : "Sign up with GitHub"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleGoogleSignup}
                  disabled={isLoading.google}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {isLoading.google ? "Signing up..." : "Sign up with Google"}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <div className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="text-center text-xs text-muted-foreground">
            By clicking "Create Account" or signing up, you agree to our{" "}
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            {" "}and{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <Toaster position="top-center" />
    </div>
  )
}
