import React from "react";
import CheckCircleIcon from "@/assets/icons/ui/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/ui/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Link from "next/link";
import { portfolioProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="These are some of the projects I have worked on."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.slice(0, 5).map((project, index) => (
            <Card
              key={index}
              className="px-6 pt-6 pb-0 md:px-8 md:pt-8 lg:pt-10 lg:px-12 sticky"
              style={{ top: `calc(64px + ${index * 30}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="lg:pb-10">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-3xl mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-3 mb-3 md:mt-4 md:mb-4" />
                  <ul className="flex flex-col gap-2">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-xs md:text-sm text-white/50 leading-relaxed"
                      >
                        <CheckCircleIcon className="size-4 md:size-5 flex-shrink-0 mt-0.5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-10 md:h-12 w-full md:w-auto px-5 md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 my-6 lg:my-0 lg:mt-6 hover:bg-emerald-300 transition duration-300">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-xl"
                    />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {portfolioProjects.length > 5 && (
          <div className="flex justify-center mt-16 md:mt-24">
            <Link href="/projects">
              <button className="bg-transparent border border-white/20 text-white h-12 px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition duration-300">
                <span>View All Projects</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
