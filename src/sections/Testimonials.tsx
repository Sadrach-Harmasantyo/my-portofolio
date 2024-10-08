import React, { Fragment } from "react";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartup",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates.",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Software Engineer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @MegaCorp",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates.",
    avatar: memojiAvatar5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="Don't just take our word for it. See what our clients have to say." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((t, index) => (
                  <Card key={index} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image src={t.avatar} alt={t.name} className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-white/40">{t.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{t.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
