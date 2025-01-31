import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, FileUp, Smile } from 'lucide-react'
import Image from "next/image"

// This would normally come from a database
const mentorData = {
  name: "Dr. Sarah Chen",
  role: "AI Research Scientist",
  image: "/placeholder.svg?height=100&width=100",
  status: "Online"
}

const messages = [
  {
    id: 1,
    sender: "mentor",
    content: "Hello! How can I help you today?",
    timestamp: "10:00 AM"
  },
  {
    id: 2,
    sender: "user",
    content: "Hi Dr. Chen, I wanted to discuss our upcoming session topics.",
    timestamp: "10:02 AM"
  },
  {
    id: 3,
    sender: "mentor",
    content: "Of course! What specific areas would you like to focus on?",
    timestamp: "10:03 AM"
  }
]

export default function MessagePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="h-[600px] flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center gap-4">
                <Image
                  src={mentorData.image}
                  alt={mentorData.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{mentorData.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{mentorData.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-sm text-muted-foreground">{mentorData.status}</span>
                </div>
              </div>
            </CardHeader>

            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === 'user'
                            ? 'text-primary-foreground/70'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Chat Input */}
            <CardContent className="border-t p-4">
              <form className="flex items-center gap-4">
                <Button type="button" variant="ghost" size="icon">
                  <FileUp className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit">
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

