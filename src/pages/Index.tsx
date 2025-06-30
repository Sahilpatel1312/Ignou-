"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import CourseCard from "@/components/CourseCard";
import CounsellingForm from "@/components/CounsellingForm";
import { Button } from "@/components/ui/button"; // Added this import

const dummyCourses = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    type: "UG" as const,
    description: "A comprehensive undergraduate program in computer applications.",
    duration: "3 Years",
    eligibility: "10+2 with Maths/Computer Science",
    fees: "₹40,000/year",
  },
  {
    title: "Master of Business Administration (MBA)",
    type: "PG" as const,
    description: "An advanced postgraduate program focusing on business management.",
    duration: "2 Years",
    eligibility: "Bachelor's Degree",
    fees: "₹60,000/year",
  },
  {
    title: "Bachelor of Arts (BA)",
    type: "UG" as const,
    description: "A flexible undergraduate program covering various arts subjects.",
    duration: "3 Years",
    eligibility: "10+2",
    fees: "₹15,000/year",
  },
  {
    title: "Master of Computer Applications (MCA)",
    type: "PG" as const,
    description: "A postgraduate program for advanced studies in computer applications.",
    duration: "2 Years",
    eligibility: "BCA/Bachelor's Degree with Maths",
    fees: "₹50,000/year",
  },
  {
    title: "Bachelor of Commerce (B.Com)",
    type: "UG" as const,
    description: "An undergraduate program focused on commerce and business studies.",
    duration: "3 Years",
    eligibility: "10+2",
    fees: "₹18,000/year",
  },
  {
    title: "Master of Arts (MA) - English",
    type: "PG" as const,
    description: "A postgraduate program specializing in English literature and language.",
    duration: "2 Years",
    eligibility: "Bachelor's Degree",
    fees: "₹25,000/year",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Your Gateway to IGNOU Online Courses
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Explore a wide range of online Undergraduate and Postgraduate programs from IGNOU. Get free counseling and admission assistance.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Explore Courses
        </Button>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Featured IGNOU Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {dummyCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      {/* Counselling Form Section */}
      <section id="counselling" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Need Guidance? Get Free Counselling!
          </h2>
          <CounsellingForm />
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;