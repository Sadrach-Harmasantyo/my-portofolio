"use client";

import React from "react";
import JavascriptIcon from "@/assets/icons/tech/square-js.svg";
import TypescriptIcon from "@/assets/icons/tech/typescript-svgrepo-com.svg";
import GithubIcon from "@/assets/icons/tech/github.svg";
import Html5Icon from "@/assets/icons/tech/html5.svg";
import Css3Icon from "@/assets/icons/tech/css3.svg";
import ReactIcon from "@/assets/icons/tech/react.svg";
import TailwindIcon from "@/assets/icons/tech/tailwind.svg";
import PhpIcon from "@/assets/icons/tech/php.svg";
import LaravelIcon from "@/assets/icons/tech/laravel.svg";
import NextIcon from "@/assets/icons/tech/nextjs.svg";
import VueIcon from "@/assets/icons/tech/vue.svg";
import NuxtIcon from "@/assets/icons/tech/nuxtjs.svg";
import MySQLIcon from "@/assets/icons/tech/mysql.svg";
import PostgreSQLIcon from "@/assets/icons/tech/postgresql.svg";
import GitIcon from "@/assets/icons/tech/git.svg";
import ShadcnIcon from "@/assets/icons/tech/shadcn.svg";
import AntDesignIcon from "@/assets/icons/tech/antdesign.svg";
import TechStackMarquee from "@/components/TechStackMarquee";

const techStackItems = [
  { title: "HTML5", iconType: Html5Icon },
  { title: "CSS3", iconType: Css3Icon },
  { title: "TailwindCSS", iconType: TailwindIcon },
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "TypeScript", iconType: TypescriptIcon },
  { title: "PHP", iconType: PhpIcon },
  { title: "React.js", iconType: ReactIcon },
  { title: "Next.js", iconType: NextIcon },
  { title: "Vue.js", iconType: VueIcon },
  { title: "Nuxt.js", iconType: NuxtIcon },
  { title: "Laravel", iconType: LaravelIcon },
  { title: "MySQL", iconType: MySQLIcon},
  { title: "PostgreSQL", iconType: PostgreSQLIcon},
  { title: "Shadcn UI", iconType: ShadcnIcon },
  { title: "Ant Design", iconType: AntDesignIcon },
  { title: "Git", iconType: GitIcon },
  { title: "Github", iconType: GithubIcon },
];

export default function TechStack() {
  return (
    <section className="pt-0 pb-24 lg:pt-10 overflow-x-clip">
      <div className="flex flex-col gap-6 md:px-10 lg:px-20">
        <TechStackMarquee
          items={techStackItems}
          className=""
        />
        <TechStackMarquee
          items={techStackItems}
          className=""
          reverse
        />
      </div>
    </section>
  );
}
