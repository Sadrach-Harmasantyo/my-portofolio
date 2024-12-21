import React from "react";
// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import kbmdsiProfileWebsite from "@/assets/images/kbmdsi-website.png";
import porosProfileWebsite from "@/assets/images/poros-website.png";
import notesWebsite from "@/assets/images/notes-website.png";
import pokemonWebsite from "@/assets/images/pokemon-website.png";
import gymWebsite from "@/assets/images/gym-website.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "KBMDSI FILKOM UB",
    year: "2024",
    title: "KBMDSI FILKOM UB Profile Website",
    results: [
      { title: "Developed a dynamic and visually appealing website using ReactJS, JavaScript, TailwindCSS, and Framer Motion." },
      { title: "Designed and implemented user-friendly interfaces to enhance usability and accessibility." },
      { title: "Collaborated with team members to align the website with the organization’s goals and vision." },
    ],
    link: "https://kbmdsi.ub.ac.id/",
    image: kbmdsiProfileWebsite,
  },
  {
    company: "POROS FILKOM UB",
    year: "2024",
    title: "POROS FILKOM UB Profile Website",
    results: [
      { title: "Built a modern and scalable website using Next.js, TypeScript, and TailwindCSS." },
      { title: "Enhanced the organization’s web interface for improved user experience." },
      { title: "Ensured a seamless user experience through collaboration with team members and adherence to organizational objectives." },
    ],
    link: "https://poros-web-home-3-0.vercel.app/",
    image: porosProfileWebsite,
  },
  {
    company: "Individual Project",
    year: "2024",
    title: "Pokemon Website",
    results: [
      { title: "Built a dynamic and interactive Pokémon website using React Vite, JavaScript, Redux and PokeAPI V2." },
      { title: "Implemented efficient search functionality and seamless pagination for browsing Pokémon data." },
      { title: "Enhanced user experience with skeleton loaders during data fetching." },
    ],
    link: "https://pokeapiv2app.netlify.app/",
    image: pokemonWebsite,
  },
  {
    company: "Individual Project",
    year: "2024",
    title: "Gym Exercise Website",
    results: [
      { title: "Utilized ReactJS for interactivity, MaterialUI for responsive design, and RapidAPI for real-time exercise data integration." },
      { title: "Implemented search functionality and displayed tailored exercise recommendations based on muscle groups." },
    ],
    link: "https://gymxcercise.netlify.app/",
    image: gymWebsite,
  },
  {
    company: "Individual Project",
    year: "2024",
    title: "Static Notes Website",
    results: [
      { title: "Built using React, Vite, and TypeScript for a modern web development approach." },
      { title: "Implemented features to add, read, delete, and archive notes for efficient note management." },
      { title: 'Developed a static Notes Website as the final project for Dicoding\'s "Belajar Membuat Aplikasi Web dengan React" course.' },
    ],
    link: "https://notes-react-roan.vercel.app/",
    image: notesWebsite,
  },
  // {
  //   company: "Acme Corp",
  //   year: "2022",
  //   title: "Dark Saas Landing Page",
  //   results: [{ title: "Enhanced user experience by 40%" }, { title: "Improved site speed by 50%" }, { title: "Increased mobile traffic by 35%" }],
  //   link: "https://youtu.be/4k7IdSLxh6w",
  //   image: darkSaasLandingPage,
  // },
  // {
  //   company: "Innovative Co",
  //   year: "2021",
  //   title: "Light Saas Landing Page",
  //   results: [{ title: "Boosted sales by 20%" }, { title: "Expanded customer reach by 35%" }, { title: "Increased brand awareness by 15%" }],
  //   link: "https://youtu.be/7hi5zwO75yc",
  //   image: lightSaasLandingPage,
  // },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [{ title: "Enhanced user experience by 40%" }, { title: "Improved site speed by 50%" }, { title: "Increased mobile traffic by 35%" }],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="These are some of the projects I have worked on." />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card key={index} className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky" style={{ top: `calc(64px + ${index * 50}px)` }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Link href={project.link} target="_blank" className="absolute top-0 left-0 w-full h-full">
                    <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-xl" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
