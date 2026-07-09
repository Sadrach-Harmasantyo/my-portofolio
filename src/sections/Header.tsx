"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
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
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
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

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const getNavItemClass = (id: string) => {
    return twMerge("nav-item", activeSection === id && "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900");
  };

  const getMobileNavItemClass = (id: string) => {
    return twMerge("rounded-xl px-4 py-3 text-sm font-semibold text-white/75 transition duration-300 hover:bg-white/10 hover:text-white", activeSection === id && "bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900");
  };

  return (
    <div className="fixed inset-x-0 top-3 z-50 px-3 md:px-0">
      <div className="flex justify-end md:justify-center">
        <nav className="hidden gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className={getNavItemClass(item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div ref={mobileMenuRef} className="relative md:hidden">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="flex size-20 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition duration-300 hover:bg-white/15"
          >
            <span className="relative flex size-10 flex-col justify-center gap-1.5">
              <span className={twMerge("h-0.5 w-10 rounded-full bg-current transition duration-300", isMobileMenuOpen && "translate-y-2 rotate-45")} />
              <span className={twMerge("h-0.5 w-10 rounded-full bg-current transition duration-300", isMobileMenuOpen && "opacity-0")} />
              <span className={twMerge("h-0.5 w-10 rounded-full bg-current transition duration-300", isMobileMenuOpen && "-translate-y-2 -rotate-45")} />
            </span>
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                id="mobile-navigation"
                initial={{ opacity: 0, scale: 0.12, y: -28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.18, y: -24 }}
                transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.72 }}
                style={{ transformOrigin: "calc(100% - 40px) -52px" }}
                className="fixed right-3 top-[6.5rem] z-[60] flex w-56 flex-col gap-1 rounded-2xl border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                {navItems.map((item) => (
                  <a key={item.id} href={item.href} className={getMobileNavItemClass(item.id)} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
