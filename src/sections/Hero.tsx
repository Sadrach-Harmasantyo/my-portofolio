import Image from "next/image";
import React from "react";
import DownloadIcon from "@/assets/icons/download.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
import profileImage from "@/assets/images/foto-profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-32 md:py-48 lg:py-60 relative overflow-hidden"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="33s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="36s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="39s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="45s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="48s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="51s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="54s">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="57s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image
            priority
            src={profileImage}
            className="filter grayscale size-[200px] scale-[1.3]"
            alt="Sadrach Harmasantyo Profile Picture"
          />
          <div className="bg-gray-950 border border-gray-800 px-5 py-1.5 inline-flex items-center gap-4 rounded-lg relative z-10">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hi, I&apos;m Sadrach Harmasantyo
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I started as a Frontend Engineer, crafting seamless user
            experiences. Now, as a Fullstack Developer, I bring ideas to life
            end-to-end with clean code and scalable solutions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="/CV-Sadrach Harmasantyo.pdf"
            download="CV-Sadrach Harmasantyo.pdf"
            className="group relative inline-flex items-center justify-center overflow-hidden border border-white/15 px-6 h-12 rounded-xl bg-gray-900 text-white transition duration-300 ease-out"
          >
            <span className="flex items-center justify-center gap-4">
              <span className="font-semibold">Explore My CV</span>
              <DownloadIcon className="size-6" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
