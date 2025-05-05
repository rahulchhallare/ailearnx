"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Building, DollarSign } from "lucide-react";
import Link from "next/link";

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const [jobData, setJobData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await fetch(`/api/jobs/${params.id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await res.json();
        console.log("Fetched Job Data:", data); // Debugging log
        setJobData(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching job data:", error);
        setError("Failed to load job details. Please try again later.");
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchJobData();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-500">{error}</h1>
            <Button onClick={() => router.push("/jobs")}>Go Back to Jobs</Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Job Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800">Active</Badge>
              <Badge variant="outline">{jobData.type}</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold">{jobData.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {jobData.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {jobData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {jobData.salary}
                  </div>
                </div>
              </div>
              <Link href={`/jobs/${jobData.id}/apply`}>
                <Button size="lg">Apply Now</Button>
              </Link>
            </div>
          </div>

          {/* Job Details */}
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{jobData.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {jobData.responsibilities.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {jobData.requirements.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {jobData.benefits && jobData.benefits.length > 0 ? (
                    jobData.benefits.map((item: string) => (
                      <li key={item} className="text-muted-foreground">{item}</li>
                    ))
                  ) : (
                    <li className="text-muted-foreground">No benefits listed</li>
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {jobData.tags && jobData.tags.length > 0 ? (
                    jobData.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No skills listed</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Apply Section */}
            <div className="bg-muted rounded-lg p-6 text-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Interested in this role?</h3>
                <p className="text-muted-foreground">
                  Submit your application now and we'll get back to you within 48 hours.
                </p>
              </div>
              <Link href={`/jobs/${jobData.id}/apply`}>
                <Button size="lg">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

