import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Building, DollarSign } from "lucide-react";
import Link from "next/link";

export default async function JobsPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const res = await fetch(`${apiUrl}/api/jobs`, {
    cache: "no-store", // Disable caching for fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const jobs = await res.json();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">AI Jobs</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your next role in AI. Connect with leading companies hiring AI talent.
            </p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job: any) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        {job.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Building className="w-4 h-4" />
                        {job.company}
                      </CardDescription>
                    </div>
                    <Link href={`/jobs/${job.id}`}>
                      <Button>Apply Now</Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <Badge>{job.type}</Badge>
                    </div>
                    <p className="text-sm">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

