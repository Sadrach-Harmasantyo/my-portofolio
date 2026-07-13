"use client";

import React, { useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/ui/star.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

const educationHighlights = [
  "Maintained a GPA of 3.94/4.00 over eight semesters, with coursework focused on computer science, information systems, and business concepts.",
  "Worked as a Student Employee Web Developer at the Information Systems Laboratory, Faculty of Computer Science, contributing to web-based system development.",
  "Served as a Practicum Teaching Assistant for the Database Administration course, supporting students in database tools, security, backup and recovery, concurrency, and high availability concepts.",
  "Actively participated in student organizations, including KBMDSI as a Frontend Web Developer, POROS as a Frontend Web and Internal Division member, and RAION as an Apps and Internal Programmer.",
];

const focusAreas = ["Software Development", "Business Concepts", "Collaborative Teamwork", "Problem Solving", "Leadership"];
const highlightRevealRanges = [
  [0.06, 0.3],
  [0.32, 0.52],
  [0.54, 0.74],
  [0.76, 0.92],
] as const;

function AnimatedLetter({ char, start, progress }: { char: string; start: number; progress: MotionValue<number> }) {
  const color = useTransform(progress, [start, start + 0.025], ["rgba(255,255,255,0.14)", "rgba(255,255,255,0.95)"]);

  return (
    <motion.span style={{ color }} className="inline">
      {char}
    </motion.span>
  );
}

function AnimatedText({ text, start, end, progress }: { text: string; start: number; end: number; progress: MotionValue<number> }) {
  const characters = Array.from(text);
  const stagger = (end - start) / Math.max(characters.length, 1);

  return (
    <>
      {characters.map((char, charIndex) => (
        <AnimatedLetter key={`${char}-${charIndex}`} char={char} start={Math.min(start + charIndex * stagger, end)} progress={progress} />
      ))}
    </>
  );
}

function AnimatedHighlight({ item, index, progress }: { item: string; index: number; progress: MotionValue<number> }) {
  const [start, end] = highlightRevealRanges[index] ?? [0.06, 0.3];
  const iconColor = useTransform(progress, [start, start + 0.08], ["rgba(110,231,183,0.28)", "rgba(110,231,183,0.9)"]);
  const iconRotate = useTransform(progress, [start, start + 0.12], [-70, 210]);

  return (
    <div className="flex gap-5">
      <motion.span className="mt-0.5 inline-flex size-8 flex-shrink-0 items-center justify-center" style={{ color: iconColor }}>
        <motion.span className="inline-flex size-8 items-center justify-center origin-center" style={{ rotate: iconRotate }}>
          <StarIcon className="size-8" />
        </motion.span>
      </motion.span>
      <motion.p className="text-sm md:text-base leading-7">
        <AnimatedText text={item} start={start} end={end} progress={progress} />
      </motion.p>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 45%"],
  });
  const focusText = focusAreas.join(" / ");

  return (
    <section id="education" className="scroll-mt-28 py-16 lg:py-24" ref={sectionRef}>
      <div className="container">
        <div className="hidden lg:block">
          <SectionHeader eyebrow="Academic Foundation" title="Education" description="My academic background and campus roles that shaped my engineering fundamentals." />
        </div>
        <div className="lg:mt-16 max-w-6xl mx-auto lg:pt-10 md:px-7 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.55fr] gap-10 lg:gap-16">
            <div className="mx-auto max-w-sm text-center lg:sticky lg:top-28 lg:mx-0 lg:max-w-none lg:self-start lg:pr-10 lg:text-left">
              <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-xs font-bold uppercase tracking-[0.18em] text-transparent">Aug 2022 - Aug 2026</p>
              <h3 className="font-serif text-3xl md:text-5xl text-emerald-300 mt-6 leading-tight">
                Information
                <br />
                System
              </h3>
              <p className="font-semibold text-white text-lg mt-6">Brawijaya University</p>
              <p className="text-white/55 text-base mt-2">GPA: 3.94 / 4.00</p>
            </div>

            <div className="">
              <div className="flex flex-col gap-5">
                {educationHighlights.map((item, index) => (
                  <AnimatedHighlight key={item} item={item} index={index} progress={scrollYProgress} />
                ))}
              </div>

              <motion.p className="mt-9 text-sm md:text-base leading-7">
                <AnimatedText text={focusText} start={0.92} end={1} progress={scrollYProgress} />
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
