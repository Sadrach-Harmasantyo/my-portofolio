"use client";

import React, { useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import CheckCircleIcon from "@/assets/icons/ui/check-circle.svg";
import { motion, useScroll, useTransform } from 'framer-motion';

const workExperiences = [
  {
    role: "Developer Intern",
    company: "Telkom Indonesia",
    duration: "Mar 2026 - Present",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Contributed to the Netmonk project, a system designed for network monitoring.",
      "Developed 5+ features to enhance customer satisfaction and improve unit test coverage.",
      "Utilized modern technologies including React.js, Vue.js, Next.js, Nuxt.js, JavaScript, TypeScript, and Pinia.",
    ]
  },
  {
    role: "Frontend Engineer Intern",
    company: "DOT Indonesia",
    duration: "Jul 2025 - Nov 2025",
    location: "Malang, Indonesia",
    responsibilities: [
      "Contributed to three enterprise-scale projects: PAMA Opex Capex, PAMA OTC, and PAMA Tax System.",
      "Developed and enhanced 10+ features to improve user experience and interface functionality.",
      "Utilized modern front-end technologies including React.js, Next.js, Ant Design (AntD), TypeScript, and TanStack Query.",
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Study First Indonesia",
    duration: "Jun 2025 - Aug 2025",
    location: "Malang, Indonesia",
    responsibilities: [
      "Developed and enhanced user interfaces using WordPress Elementor to improve website usability and visual consistency.",
      "Contributed to the development of 5+ web pages, resulting in 100+ page visits and increased user engagement.",
      "Managed 50+ participants during online tryout sessions on the StudyFirst website, ensuring smooth technical execution and user experience.",
    ]
  },
  {
    role: "Student Employee Web Developer",
    company: "Information Systems Laboratory Faculty of Computer Science Brawijaya University",
    duration: "Feb 2025 - May 2025",
    location: "Malang, Indonesia",
    responsibilities: [
      "Developed a Student Employee Monitoring System using Laravel and Filament for student employee attendances and logbooks and drafted a system documentation book for the Student Employee Monitoring System.",
      "Built an E-commerce Website for MSMEs (Micro, Small, and Medium Enterprises) using Laravel, Filament, and Livewire, designed to help local businesses expand digital presence and streamline online sales.",
    ]
  }
];

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position within the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Calculate line height based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="pb-16 lg:py-24" ref={containerRef}>
      <div className="container">
        <SectionHeader
          eyebrow="My Career Journey"
          title="Work Experience"
          description="A timeline of my professional roles and contributions."
        />

        <div className="relative mt-10 md:mt-20">
          {/* Timeline Track Container with Fade Edges */}
          <div
            className="absolute left-8 md:left-1/3 top-0 bottom-0 w-1 -translate-x-1/2 z-0"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
            }}
          >
            {/* Background Timeline Track */}
            <div className="absolute inset-0 bg-gray-800 rounded-full" />

            {/* Animated Flowing Line */}
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-emerald-300 to-sky-400 rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {workExperiences.map((exp, index) => {
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full">

                  {/* Dot on the Timeline */}
                  <div className="absolute left-8 top-12 md:left-1/3 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-gray-900 border-4 border-emerald-300 z-20 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />

                  {/* Left Box: Meta Information */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.1 }}
                    className="w-full md:w-1/3 pl-20 md:pl-0 md:pr-12 md:text-right flex flex-col md:items-end pt-10 md:pt-0"
                  >
                    <h3 className="font-serif text-2xl lg:text-3xl text-emerald-300">
                      {exp.role}
                    </h3>
                    <div className="inline-flex font-bold uppercase tracking-widest text-sm text-white mt-2">
                      {exp.company}
                    </div>
                    <div className="text-white/60 text-sm mt-4 font-semibold flex items-center md:justify-end gap-2">
                      <span>{exp.duration}</span>
                    </div>
                    <div className="text-white/50 text-sm mt-1">
                      {exp.location}
                    </div>
                  </motion.div>

                  {/* Right Box: Responsibilities (Description) */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
                    className="w-full md:w-2/3 pl-20 md:pl-12 mt-6 md:mt-0"
                  >
                    <Card className="p-6 md:p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-300/10 transition-all duration-500 group relative z-10 w-full overflow-hidden">

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/5 to-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <ul className="flex flex-col gap-3 relative z-20">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm md:text-base text-white/50 group-hover:text-white/70 transition-colors duration-300"
                          >
                            <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0 text-emerald-300/50 group-hover:text-emerald-300 transition-colors duration-300" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
