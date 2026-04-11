"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CheckCircleIcon from "@/assets/icons/ui/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/ui/arrow-up-right.svg";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/data/projects";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
};

export default function ProjectsAll() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <main className="pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="My Portfolio"
            title="All Projects"
            description="Explore the full collection of projects I have worked on over the years."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-24"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {portfolioProjects.slice(0, visibleCount).map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="flex">
              <Card className="flex flex-col h-full overflow-hidden group hover:shadow-2xl hover:shadow-emerald-300/10 transition-all duration-500 w-full relative">

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/5 to-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image Container */}
                <Link href={project.link} target="_blank" className="relative h-64 md:h-72 w-full overflow-hidden block border-b-2 border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white font-bold bg-white/20 px-6 py-3 rounded-full flex items-center gap-2 border border-white/30 backdrop-blur-md">
                      View Live <ArrowUpRightIcon className="size-4" />
                    </span>
                  </div>
                </Link>

                {/* Content Container */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow relative z-10">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text mb-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl mt-2 group-hover:text-emerald-300 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 my-5 group-hover:border-white/10 transition-colors duration-300" />

                  <ul className="flex flex-col gap-3 mb-4 flex-grow">
                    {project.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-relaxed"
                      >
                        <CheckCircleIcon className="size-5 flex-shrink-0 text-emerald-300/50 group-hover:text-emerald-300 transition-colors duration-300 mt-0.5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-20"
        >
          {visibleCount < portfolioProjects.length && (
            <button 
              onClick={handleLoadMore}
              className="bg-white text-gray-950 h-12 px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-emerald-300 transition duration-300 group"
            >
              <span>Load More</span>
            </button>
          )}

          <Link href="/">
            <button className="bg-transparent border border-white/20 text-white h-12 px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:border-emerald-300 transition duration-300 group">
              <span className="group-hover:text-emerald-300 transition-colors duration-300">Back to Home</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
