import React from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import ProjectsAll from "@/sections/ProjectsAll";

export const metadata = {
  title: "All Projects | Sadrach Harmasantyo",
  description: "A complete list of my professional and personal projects.",
};

export default function ProjectsPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <ProjectsAll />
      </div>
      <Footer />
    </div>
  );
}
