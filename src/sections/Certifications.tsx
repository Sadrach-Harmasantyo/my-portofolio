import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React, { Fragment } from "react";
import LearnReactCertificate from "@/assets/images/sertifikat_course_belajar membuat aplikasi web dengan react-1.png";
import LearnBasicJavascript from "@/assets/images/sertifikat_course_belajar dasar pemrograman javascript-1.png";
import LearnBasicFrontend from "@/assets/images/sertifikat_course_belajar membuat frontend web untuk pemula-1.png";
import LearnBasicWeb from "@/assets/images/sertifikat_course_belajar dasar pemrograman web-1.png";
import Link from "next/link";

const certifications = [
  {
    title: "Belajar Dasar Pemrograman Web",
    company: "Dicoding Indonesia",
    credentialID: "QLZ9V3Y2MX5D",
    timeStart: "Sep 17, 2023",
    timeEnd: "Sep 17, 2026",
    link: "https://www.dicoding.com/certificates/QLZ9V3Y2MX5D",
    image: LearnBasicWeb,
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    company: "Dicoding Indonesia",
    credentialID: "2VX34K7JNZYQ",
    timeStart: "Sep 28, 2023",
    timeEnd: "Sep 28, 2026",
    link: "https://www.dicoding.com/certificates/2VX34K7JNZYQ",
    image: LearnBasicJavascript,
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    company: "Dicoding Indonesia",
    credentialID: "MRZMYN3QLZYQ",
    timeStart: "Oct 5, 2023",
    timeEnd: "Oct 5, 2026",
    link: "https://www.dicoding.com/certificates/MRZMYN3QLZYQ",
    image: LearnBasicFrontend,
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    company: "Dicoding Indonesia",
    credentialID: "JMZV4GMQJXN9",
    timeStart: "Sep 29, 2024",
    timeEnd: "Sep 29, 2027",
    link: "https://www.dicoding.com/certificates/JMZV4GMQJXN9",
    image: LearnReactCertificate,
  },
];

export default function Certifications() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Certifications" title="My Achievements" description="A showcase of certifications that validate my skills and expertise." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {certifications.map((certification, index) => (
                  <Link key={index} href={certification.link} target="_blank">
                    <Card key={index} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300 space-y-3">
                      <div>
                        <h1 className="font-semibold">{certification.title}</h1>
                        <h2 className="text-sm text-white/40">
                          {certification.company} (valid until {certification.timeEnd})
                        </h2>
                      </div>
                      <Image src={certification.image} alt={certification.title} className="max-h-full" />
                    </Card>
                  </Link>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
