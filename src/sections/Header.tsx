"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/projects") {
      setActiveSection("projects");
      return;
    }

    const handleScroll = () => {
      // Jika posisi masih paling atas (belum di-scroll berarti), kosongkan menu aktif
      if (window.scrollY < 10) {
        setActiveSection("");
        return;
      }

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        // Offset by 200px to trigger just slightly before the section reaches the exact top
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });

      // Override for the last section: if user scrolls to the absolute bottom of the page,
      // it means the last section is fully visible but might not reach the exact top threshold.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          current = lastSection.getAttribute("id") || current;
        }
      }

      setActiveSection(current);
    };

    // Run once to set the initial section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const getNavItemClass = (id: string) => {
    return twMerge(
      "nav-item",
      activeSection === id && "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
    );
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50 px-2 sm:px-0">
      <nav className="flex gap-0.5 sm:gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur max-w-full overflow-x-auto scrollbar-hide">
        <a href="/" className={getNavItemClass("home")}>
          Home
        </a>
        <a href="/#experience" className={getNavItemClass("experience")}>
          Experience
        </a>
        <a href="/#projects" className={getNavItemClass("projects")}>
          Projects
        </a>
        <a href="/#about" className={getNavItemClass("about")}>
          About
        </a>
        <a href="/#contact" className={getNavItemClass("contact")}>
          Contact
        </a>
      </nav>
    </div>
  );
}
