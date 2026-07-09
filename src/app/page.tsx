"use client";

import React, { useEffect, useRef, useState } from "react";
import About from "@/sections/About";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape";
import WorkExperience from "@/sections/WorkExperience";

type TrailPoint = {
  id: number;
  x: number;
  y: number;
  angle: number;
  width: number;
};

type SparkParticle = {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  size: number;
  delay: number;
};

export default function Home() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [sparkParticles, setSparkParticles] = useState<SparkParticle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoved, setIsMouseMoved] = useState(false);
  const lastTrailTimeRef = useRef(0);
  const lastMousePositionRef = useRef<{ x: number; y: number } | null>(null);
  const sparkIdRef = useRef(0);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    const handleMouseMove = (e: MouseEvent) => {
      if (isCoarsePointer) {
        return;
      }

      if (!isMouseMoved) {
        setIsMouseMoved(true);
      }

      setMousePosition({ x: e.clientX, y: e.clientY });

      const previousPosition = lastMousePositionRef.current ?? {
        x: e.clientX,
        y: e.clientY,
      };
      const deltaX = e.clientX - previousPosition.x;
      const deltaY = e.clientY - previousPosition.y;
      const distance = Math.hypot(deltaX, deltaY);
      const now = Date.now();
      lastMousePositionRef.current = { x: e.clientX, y: e.clientY };

      if (now - lastTrailTimeRef.current > 28 && distance > 2) {
        const newTrail = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          angle: Math.atan2(deltaY, deltaX),
          width: Math.min(58, 28 + distance * 0.7),
        };

        setTrail((prev) => [...prev.slice(-14), newTrail]);
        lastTrailTimeRef.current = now;

        setTimeout(() => {
          setTrail((prev) => prev.filter((t) => t.id !== newTrail.id));
        }, 650);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (isCoarsePointer) {
        return;
      }

      const particles = Array.from({ length: 10 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 10 + Math.random() * 0.24;

        return {
          id: sparkIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          angle,
          distance: 20 + Math.random() * 22,
          size: 3 + Math.random() * 4,
          delay: index * 10,
        };
      });

      setSparkParticles((prev) => [...prev, ...particles]);

      setTimeout(() => {
        const particleIds = new Set(particles.map((particle) => particle.id));
        setSparkParticles((prev) => prev.filter((particle) => !particleIds.has(particle.id)));
      }, 700);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isMouseMoved]);

  return (
    <div className="relative">
      {isMouseMoved && (
        <div
          className="fixed pointer-events-none z-[70] size-4 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 opacity-80 shadow-[0_0_18px_rgba(56,189,248,0.55)] mix-blend-screen"
          style={{
            transform: `translate3d(${mousePosition.x - 8}px, ${mousePosition.y - 8}px, 0)`,
          }}
        />
      )}

      {trail.map((t) => (
        <div
          key={t.id}
          className="fixed pointer-events-none z-[70] -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${t.x}px`,
            top: `${t.y}px`,
            transform: `translate(-50%, -50%) rotate(${t.angle}rad)`,
          }}
        >
          <div
            className="h-2 rounded-full bg-gradient-to-r from-emerald-300/0 via-emerald-300/70 to-sky-400/90 animate-comet-trail"
            style={{ width: `${t.width}px` }}
          />
        </div>
      ))}

      {sparkParticles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[70]"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: `translate(-50%, -50%) rotate(${particle.angle}rad)`,
          }}
        >
          <div
            className="rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 shadow-[0_0_14px_rgba(110,231,183,0.65)] animate-spark-burst"
            style={
              {
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}ms`,
                "--spark-distance": `${particle.distance}px`,
              } as React.CSSProperties
            }
          />
        </div>
      ))}

      <Header />
      <Hero />
      <TechStack />
      <Education />
      <WorkExperience />
      <Projects />
      <Tape />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
