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
// import Testimonials from "@/sections/Testimonials";

export default function Home() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    []
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastTrailTime, setLastTrailTime] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update posisi lingkaran yang selalu mengikuti mouse
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Tambahkan jejak hanya jika sudah melewati jeda waktu tertentu
      const now = Date.now();
      if (now - lastTrailTime > 50) {
        // Set jeda ke 100ms
        const newTrail = { x: e.clientX, y: e.clientY, id: now };
        setTrail((prev) => [...prev, newTrail]);
        setLastTrailTime(now);

        // Hapus jejak setelah 500ms
        setTimeout(() => {
          setTrail((prev) => prev.filter((t) => t.id !== newTrail.id));
        }, 500);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastTrailTime]);

  return (
    <div className="relative">
      {/* Lingkaran yang selalu mengikuti mouse */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full opacity-75"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${
            mousePosition.y - 8
          }px)`,
        }}
      />

      {/* Jejak mouse */}
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
      {/* <Testimonials /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
