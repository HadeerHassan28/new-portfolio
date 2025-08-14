import AboutContaier from "@/components/About/AboutContaier";
import { Navigation } from "@/components/nav";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-primary">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="container mx-auto px-4">
          <AboutContaier />
        </div>
      </div>
    </div>
  );
}
