"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CounsellingForm: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Counselling form submitted!");
    toast({
      title: "Form Submitted!",
      description: "We have received your inquiry and will get back to you soon.",
    });
    // You might want to clear the form fields here
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Get Free Counselling</CardTitle>
        <CardDescription>Fill out the form below and our experts will guide you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="Your Name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@example.com" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="e.g., +91 9876543210" required />
          </div>
          <div>
            <Label htmlFor="courseInterest">Course of Interest</Label>
            <Input id="courseInterest" type="text" placeholder="e.g., MBA, BCA" />
          </div>
          <div>
            <Label htmlFor="message">Your Message (Optional)</Label>
            <Textarea id="message" placeholder="Tell us more about your needs..." rows={3} />
          </div>
          <Button type="submit" className="w-full">Submit Inquiry</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CounsellingForm;