import React from "react";
import kbmdsiProfileWebsite from "@/assets/images/kbmdsi-website.png";
import porosProfileWebsite from "@/assets/images/poros-website.png";
import pokemonWebsite from "@/assets/images/pokemon-website.png";
import gymWebsite from "@/assets/images/gym-website.png";
import onlineCourseWebsite from "@/assets/images/online-course-website.png";
import rentOfficeWebsite from "@/assets/images/rent-office-website.png";
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
      {
        title:
          "Developed a dynamic and visually appealing website using ReactJS, JavaScript, TailwindCSS, and Framer Motion.",
      },
      {
        title:
          "Designed and implemented user-friendly interfaces to enhance usability and accessibility.",
      },
      {
        title:
          "Collaborated with team members to align the website with the organization’s goals and vision.",
      },
    ],
    link: "https://kbmdsi.ub.ac.id/",
    image: kbmdsiProfileWebsite,
  },
  {
    company: "POROS FILKOM UB",
    year: "2024",
    title: "POROS FILKOM UB Profile Website",
    results: [
      {
        title:
          "Built a modern and scalable website using Next.js, TypeScript, and TailwindCSS.",
      },
      {
        title:
          "Enhanced the organization’s web interface for improved user experience.",
      },
      {
        title:
          "Ensured a seamless user experience through collaboration with team members and adherence to organizational objectives.",
      },
    ],
    link: "https://poros-web-home-3-0.vercel.app/",
    image: porosProfileWebsite,
  },
  {
    company: "Individual Project",
    year: "2024",
    title: "Pokemon Website",
    results: [
      {
        title:
          "Built a dynamic and interactive Pokémon website using React Vite, JavaScript, Redux and PokeAPI V2.",
      },
      {
        title:
          "Implemented efficient search functionality and seamless pagination for browsing Pokémon data.",
      },
      {
        title:
          "Enhanced user experience with skeleton loaders during data fetching.",
      },
    ],
    link: "https://pokeapiv2app.netlify.app/",
    image: pokemonWebsite,
  },
  {
    company: "Individual Project",
    year: "2024",
    title: "Gym Exercise Website",
    results: [
      {
        title:
          "Utilized ReactJS for interactivity, MaterialUI for responsive design, and RapidAPI for real-time exercise data integration.",
      },
      {
        title:
          "Implemented search functionality and displayed tailored exercise recommendations based on muscle groups.",
      },
    ],
    link: "https://gymxcercise.netlify.app/",
    image: gymWebsite,
  },
  {
    company: "Individual Project",
    year: "2025",
    title: "Rent Office Website",
    results: [
      {
        title:
          "Built a Rent Office Website using Laravel 11, ReactJS 18, and FilamentPHP, featuring office search, booking, and payment integration.",
      },
      {
        title:
          "Developed an admin dashboard with FilamentPHP to manage transactions, office data, and notifications via SMS/WhatsApp.",
      },
    ],
    link: "https://github.com/Sadrach-Harmasantyo/laravel-rent-office",
    image: rentOfficeWebsite,
  },
  {
    company: "Individual Project",
    year: "2025",
    title: "Online Course Website",
    results: [
      {
        title:
          "Developed an online course platform using Laravel 11, Breeze, and Spatie Permission, enabling secure role-based access for students, teachers, and admins.",
      },
      {
        title:
          "Implemented a subscription-based system, allowing students to access premium courses in data science, programming, and more.",
      },
    ],
    link: "https://github.com/Sadrach-Harmasantyo/laravel-online-course-platform",
    image: onlineCourseWebsite,
  },
];

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
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${index * 50}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 my-8 lg:my-0 lg:mt-8">
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
      </div>
    </section>
  );
}
