"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import React, { useRef } from "react";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescript-svgrepo-com.svg";
import GithubIcon from "@/assets/icons/github.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import PhpIcon from "@/assets/icons/php.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";
// import ChromeIcon from "@/assets/icons/chrome.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
// import mapImage from "@/assets/images/map.png";
import mapMalangImage from "@/assets/images/map-malang.png";
// import sadrachMemoji from "@/assets/images/memoji-sadrach2.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import Link from "next/link";
import profileImage from "@/assets/images/foto-profile.png";

const toolboxItems = [
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "CSS3",
    iconType: Css3Icon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "PHP",
    iconType: PhpIcon,
  },
  {
    title: "React.js",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Laravel",
    iconType: LaravelIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "20%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "70%",
    top: "30%",
  },
  {
    title: "",
    emoji: "",
    left: "20%",
    top: "10%",
  },
  {
    title: "Coding",
    emoji: "💻",
    left: "50%",
    top: "10%",
  },
  {
    title: "",
    emoji: "",
    left: "35%",
    top: "50%",
  },
  {
    title: "",
    emoji: "",
    left: "10%",
    top: "70%",
  },
  {
    title: "",
    emoji: "",
    left: "45%",
    top: "80%",
  },
  {
    title: "",
    emoji: "",
    left: "25%",
    top: "90%",
  },
  {
    title: "",
    emoji: "",
    left: "60%",
    top: "70%",
  },
  {
    title: "",
    emoji: "",
    left: "80%",
    top: "20%",
  },
  // {
  //   title: "Gaming",
  //   emoji: "🎮",
  //   left: "10%",
  //   top: "35%",
  // },
  // {
  //   title: "Fitness",
  //   emoji: "🏋️‍♀️",
  //   left: "70%",
  //   top: "45%",
  // },
  // {
  //   title: "Hiking",
  //   emoji: "🏔️",
  //   left: "5%",
  //   top: "5%",
  // },
  // {
  //   title: "Photography",
  //   emoji: "📸",
  //   left: "50%",
  //   top: "5%",
  // },
  // {
  //   title: "Music",
  //   emoji: "🎧",
  //   left: "35%",
  //   top: "40%",
  // },
  // {
  //   title: "Painting",
  //   emoji: "🎨",
  //   left: "5%",
  //   top: "65%",
  // },
  // {
  //   title: "Cooking",
  //   emoji: "🍳",
  //   left: "45%",
  //   top: "70%",
  // },
];

export default function About() {
  const constraintRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences"
                className=""
              />
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                description="Explore my interests and hobbies beyond the digital world"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((item, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing"
                    style={{ left: item.left, top: item.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Link
                href={"https://maps.app.goo.gl/3k5bwPwpPpsgz6Zu6"}
                target="_blank"
                className="absolute w-full h-full"
              >
                <Image
                  src={mapMalangImage}
                  alt="Map"
                  className="w-full h-full object-cover object-center"
                />
                {/* <h1 className="absolute left-1/2 -translate-x-1/2 top-5 text-3xl text-slate-50 text-center font-serif">Malang City</h1> */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image
                    src={profileImage}
                    alt="Smile Memoji"
                    className="size-20 filter grayscale scale-[2.1] translate-y-4"
                  />
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
