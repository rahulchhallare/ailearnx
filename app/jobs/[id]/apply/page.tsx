"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building, Upload } from "lucide-react";

export default function JobApplicationPage({ params }: { params: { id: string } }) {
  const [jobData, setJobData] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    coverLetter: "",
  });
  const router = useRouter();

  // Fetch job data from the backend
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await fetch(`/api/jobs/${params.id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await res.json();
        setJobData(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted"); // Debugging log

    const dataToSend = { ...formData, jobId: params.id };

    console.log("Data to Send:", dataToSend); // Debugging log

    try {
      const res = await fetch(`/api/jobs/${params.id}/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend), // Ensure the body is properly stringified
      });

      console.log("Response status:", res.status); // Debugging log

      if (!res.ok) {
        throw new Error("Failed to submit application");
      }

      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred while submitting your application. Please try again.");
    }
  };

  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Application Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{jobData.type}</Badge>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">Apply for {jobData.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="w-4 h-4" />
                <span>{jobData.company}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {jobData.tags && jobData.tags.length > 0 ? (
                  jobData.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No tags available</p>
                )}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Current Location</Label>
                  <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" name="linkedin" type="url" value={formData.linkedin} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                  <Input id="portfolio" name="portfolio" type="url" value={formData.portfolio} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" name="experience" type="number" value={formData.experience} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cover">Cover Letter</Label>
                  <Textarea
                    id="cover"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you're interested in this position..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

