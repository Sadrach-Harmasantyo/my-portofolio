import React from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sadrach-harmasantyo",
  },
  {
    title: "GitHub",
    href: "https://github.com/Sadrach-Harmasantyo",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/sadrach_h",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black_0%,transparent)] -z-10"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; {new Date().getFullYear()} Sadrach Harmasantyo. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((item, index) => (
              <a key={index} href={item.href} target="_blank" className="inline-flex items-center gap-1.5 ">
                <span className="font-semibold">{item.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
