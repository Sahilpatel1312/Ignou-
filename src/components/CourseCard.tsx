"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap } from "lucide-react";

interface CourseCardProps {
  title: string;
  type: "UG" | "PG";
  description: string;
  duration: string;
  eligibility: string;
  fees: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  type,
  description,
  duration,
  eligibility,
  fees,
}) => {
  return (
    <Card className="w-full max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <Badge variant={type === "UG" ? "default" : "secondary"}>
            {type}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center">
          <BookOpen className="mr-2 h-4 w-4 text-gray-500" />
          <span>
            <span className="font-medium">Duration:</span> {duration}
          </span>
        </div>
        <div className="flex items-center">
          <GraduationCap className="mr-2 h-4 w-4 text-gray-500" />
          <span>
            <span className="font-medium">Eligibility:</span> {eligibility}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-2">Fees:</span> {fees}
        </div>
        <Button className="w-full mt-4">View Details</Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;