import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import Image from "next/image";

export default async function EventsPage() {
    let events = [];

    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/events`, {
            cache: "no-store", // Disable caching for fresh data
        });

        if (!res.ok) {
            throw new Error("Failed to fetch events");
        }

        events = await res.json();
    } catch (error) {
        console.error("Error fetching events:", error);
    }

    console.log(events);

    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />
            <main className="container mx-auto px-4 py-12">
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold">AI Events</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Discover upcoming AI conferences, workshops, and networking events
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        {events.length > 0 ? (
                            events.map((event: any) => (
                                <Card key={event.id} className="overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src={event.image} // Use the path directly from the database
                                            alt={event.title}
                                            width={600}
                                            height={300}
                                            className="w-full h-48 object-cover"
                                        />
                                        <Badge className="absolute top-4 right-4">{event.type}</Badge>
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{event.title}</CardTitle>
                                        <CardDescription>{event.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                {new Date(event.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                {event.location}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4" />
                                                {event.attendees} expected
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                {event.duration}
                                            </div>
                                        </div>
                                        <a href={event.event_url} target="_blank" rel="noopener noreferrer">
                                            <Button className="w-full">Register Now</Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <p className="text-center text-muted-foreground">No events available at the moment.</p>
                        )}
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}

