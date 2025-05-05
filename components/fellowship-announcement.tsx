"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Loader2 } from "lucide-react"
import Image from "next/image"
import { subscribeToUpdates, type SubscribeResult } from "@/app/actions/subscribe"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center h-10 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Subscribing...
        </>
      ) : (
        "Subscribe"
      )}
    </button>
  )
}

export function FellowshipAnnouncement() {
  const [result, setResult] = useState<SubscribeResult | null>(null)
  const [email, setEmail] = useState("")

  async function handleSubmit(formData: FormData) {
    const result = await subscribeToUpdates(formData)
    setResult(result)

    if (result.success) {
      setEmail("")
    }

    // Clear message after 5 seconds
    setTimeout(() => {
      setResult(null)
    }, 5000)
  }

  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-r from-slate-50 to-slate-100 border-y border-slate-200">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden"
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 mb-2">
                    Announcement
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                    AILearnX has been selected in the
                    <span className="text-blue-600"> Perplexity AI Business Fellowship</span>
                  </h3>
                  <p className="mt-2 text-slate-600">
                    This prestigious fellowship enables us to bring you cutting-edge AI learning experiences and
                    business solutions that will give you a competitive advantage in today's rapidly evolving market.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 p-3">
                <Image
                  src="/images/perplexity-logo.png"
                  alt="Perplexity AI Logo"
                  width={160}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Email subscription form */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <form action={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    <span className="block text-base font-semibold text-blue-600">
                      Be the first to access exclusive AI insights
                    </span>
                    Join our fellowship journey and receive early access to breakthrough AI techniques
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-grow">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <SubmitButton />
                  </div>

                  {/* Result message */}
                  {result && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className={`text-sm mt-2 ${result.success ? "text-green-600" : "text-red-600"}`}
                    >
                      {result.message}
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
