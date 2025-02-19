"use client";

import React, { useState, useEffect } from "react";
import About from "@/sections/About";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Tape from "@/sections/Tape";

export default function Home() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    []
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastTrailTime, setLastTrailTime] = useState<number>(0);
  const [isMouseMoved, setIsMouseMoved] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseMoved) {
        setIsMouseMoved(true);
      }

      setMousePosition({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      if (now - lastTrailTime > 50) {
        const newTrail = { x: e.clientX, y: e.clientY, id: now };
        setTrail((prev) => [...prev, newTrail]);
        setLastTrailTime(now);

        setTimeout(() => {
          setTrail((prev) => prev.filter((t) => t.id !== newTrail.id));
        }, 500);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastTrailTime, isMouseMoved]);

  return (
    <div className="relative">
      {isMouseMoved && (
        <div
          className="fixed pointer-events-none z-50 w-4 h-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full opacity-75"
          style={{
            transform: `translate(${mousePosition.x - 8}px, ${
              mousePosition.y - 8
            }px)`,
          }}
        />
      )}

      {trail.map((t) => (
        <div
          key={t.id}
          className="fixed pointer-events-none z-40 w-4 h-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full opacity-80 animate-fade-out"
          style={{
            left: `${t.x - 8}px`,
            top: `${t.y - 8}px`,
          }}
        />
      ))}

      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
