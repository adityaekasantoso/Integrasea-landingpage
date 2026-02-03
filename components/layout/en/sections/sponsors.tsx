"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface SponsorItem {
  logo: string;
  name: string;
}

const sponsors: SponsorItem[] = [
  {
    logo: "/logos/harita.png",
    name: "Harita Group",
  },
  {
    logo: "/logos/sumbawajutaraya.png",
    name: "Pamapersada Group",
  },
  {
    logo: "/logos/adaro.png",
    name: "Adaro Group",
  },
  {
    logo: "/logos/dishub.png",
    name: "Distrik Navigasi - Hubla",
  },
  {
    logo: "/logos/indonesiapower.png",
    name: "PLN Indonesia Power",
  },
  {
    logo: "/logos/bayan.png",
    name: "Bayan ",
  },
  {
    logo: "/logos/neo.png",
    name: "Neo Energy",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto sm:pb-32">
      <div className="mx-auto mt-20">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ logo, name }) => (
            <div key={name} className="flex items-center gap-4 md:gap-6">
              <img
                src={logo}
                alt={name}
                className="h-14 md:h-20 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
