import Image from "next/image";
import React from "react";
import memojiImage from "@/assets/images/memoji-computer.png";
// import ArrowDown from "@/assets/icons/arrow-down.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";

export default function Hero() {
  return (
    <section id="home" className="py-32 md:py-48 lg:py-60 relative overflow-hidden">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="33s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="36s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="39s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="45s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="48s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="51s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="54s">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="57s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking behind laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Transforming brilliant ideas into extraordinary digital experiences. We focus on the details, prioritize user comfort, and deliver creative solutions that inspire. Let’s create something amazing together!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          {/* <a href="#projects" className="group relative inline-flex items-center justify-center overflow-hidden border border-white/15 px-6 h-12 rounded-xl bg-gray-900 text-white transition duration-300 ease-out">
            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-white text-gray-900 duration-300 group-hover:translate-x-0">
              <ArrowDown className="size-6 animate-bounce" />
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center gap-2 text-white transition-all duration-300 group-hover:translate-x-full">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center gap-2 text-white">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </span>
            <span className="invisible relative flex items-center gap-2">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </span>
          </a> */}

          <a href="/MyCV.pdf" download="MyCV.pdf" className="group relative inline-flex items-center justify-center overflow-hidden border border-white/15 px-6 h-12 rounded-xl bg-gray-900 text-white transition duration-300 ease-out">
            <span className="flex items-center justify-center gap-4">
              <span className="font-semibold">Explore My CV</span>
              <DownloadIcon className="size-6" />
            </span>
          </a>

          {/* <a href="#contact" className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-gray-100 transition-colors">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a> */}
        </div>
      </div>
    </section>
  );
}
