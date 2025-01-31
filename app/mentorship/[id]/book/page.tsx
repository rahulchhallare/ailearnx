import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, CalendarIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// This would normally come from a database
const mentorData = {
  id: "dr-sarah-chen",
  name: "Dr. Sarah Chen",
  role: "AI Research Scientist",
  company: "DeepMind",
  expertise: ["Machine Learning", "Neural Networks"],
  rating: "4.9",
  image: "/placeholder.svg?height=200&width=200",
  sessionPrice: "$150",
  sessionLength: "60 minutes"
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM"
]

export default function BookSessionPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl font-bold">Book a Mentorship Session</h1>
            <p className="text-muted-foreground">
              Schedule your one-on-one session with {mentorData.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mentor Info */}
            <Card>
              <CardHeader>
                <CardTitle>Mentor Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Image
                    src={mentorData.image}
                    alt={mentorData.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{mentorData.name}</h3>
                    <p className="text-muted-foreground">{mentorData.role} at {mentorData.company}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{mentorData.rating} rating</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mentorData.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Session Length:</span>
                    <span className="font-semibold">{mentorData.sessionLength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-semibold">{mentorData.sessionPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle>Session Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Select Date</Label>
                      <Calendar
                        mode="single"
                        selected={new Date()}
                        className="rounded-md border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Available Time Slots</Label>
                      <RadioGroup defaultValue={timeSlots[0]}>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot) => (
                            <div key={slot} className="flex items-center space-x-2">
                              <RadioGroupItem value={slot} id={slot} />
                              <Label htmlFor={slot} className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {slot}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="topic">Session Topic</Label>
                      <Input
                        id="topic"
                        placeholder="What would you like to discuss?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals">Your Goals</Label>
                      <Textarea
                        id="goals"
                        placeholder="What do you hope to achieve from this session?"
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="background">Your Background</Label>
                      <Textarea
                        id="background"
                        placeholder="Brief description of your experience and current skill level"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-semibold">Session Fee</p>
                        <p className="text-sm text-muted-foreground">60-minute session</p>
                      </div>
                      <p className="text-2xl font-bold">{mentorData.sessionPrice}</p>
                    </div>
                    <Link href={`/mentorship/${mentorData.id}/book/success`}>
                      <Button type="submit" className="w-full" size="lg">
                        Confirm Booking
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

