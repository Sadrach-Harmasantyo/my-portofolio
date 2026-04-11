"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/about/book-cover.png";
import React, { useRef } from "react";
import Image from "next/image";
import mapMalangImage from "@/assets/images/about/map-malang.png";
import CardHeader from "@/components/CardHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import profileImage from "@/assets/images/shared/foto-profile.png";

const hobbies = [
  { title: "Gaming", emoji: "🎮", left: "10%", top: "20%" },
  { title: "Fitness", emoji: "🏋️‍♀️", left: "70%", top: "30%" },
  { title: "Culinary", emoji: "🍽️", left: "20%", top: "10%" },
  { title: "Coding", emoji: "💻", left: "50%", top: "10%" },
  { title: "Travel", emoji: "✈️", left: "35%", top: "50%" },
];

const musics = [
  {
    title: "Lofi Hip Hop Radio",
    artist: "Lofi Girl",
    url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
  },
  {
    title: "Coding Mode",
    artist: "Spotify Playlist",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS",
  },
  {
    title: "Deep Focus",
    artist: "Spotify Playlist",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ",
  },
  {
    title: "Chill Vibes",
    artist: "Lofi Beats",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWTvNyxOwkztu",
  }
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
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 flex flex-col">
              <CardHeader
                title="My Playlist"
                description="The soundtrack that fuels my focus and coding sessions."
                className="pb-0"
              />
              <div className="px-6 flex-1 pt-2 pb-6 flex flex-col gap-3 overflow-y-auto scrollbar-hide [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
                {musics.map((music, index) => (
                  <Link
                    href={music.url}
                    target="_blank"
                    key={index}
                    className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-white/80 group-hover:text-white transition-colors">{music.title}</span>
                      <span className="text-sm text-white/50">{music.artist}</span>
                    </div>
                    <div className="size-8 flex-shrink-0 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-400/20 group-hover:-translate-y-1 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-emerald-300">
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
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
