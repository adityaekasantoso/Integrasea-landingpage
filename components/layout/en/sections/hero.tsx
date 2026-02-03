"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/lib/utils";

const heroImages = {
  light: [
    "/1-light.png",
    "/2-light.png",
    "/3-light.png",
    "/4-light.png",
    "/5-light.png",
    "/6-light.png",
    "/7-light.png",
    "/8-light.png",
    "/9-light.png",
  ],
  dark: [
    "/1-dark.png",
    "/2-dark.png",
    "/3-dark.png",
    "/4-dark.png",
    "/5-dark.png",
    "/6-dark.png",
    "/7-dark.png",
    "/8-dark.png",
    "/9-dark.png",
  ],
};

export const HeroSection = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = theme === "dark" ? heroImages.dark : heroImages.light;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen -mt-16 pt-16 bg-[url('/bg.png')] bg-cover bg-top bg-no-repeat overflow-hidden">
      <div className="absolute inset-0 bg-background/70 dark:bg-background/85" />

      <div className="relative container mx-auto">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
          <div className="text-center space-y-8">
            <Badge
              variant="outline"
              className="text-sm py-2 border-slate-400 text-slate-700 dark:border-slate-600 dark:text-slate-300"
            >
              <span className="mr-2">
                <Badge className="bg-emerald-500 text-white dark:bg-emerald-600 dark:text-slate-100 border-none">
                  NEW
                </Badge>
              </span>
              <span>Real-Time Ship Monitoring Platform</span>
            </Badge>

            <h1 className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-slate-100">
              AIS Receiver & CCTV for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFA500] via-[#FF7F50] to-[#FF4500] dark:from-[#FFB347] dark:via-[#FF8C42] dark:to-[#FF5733] animate-gradient">
                TERSUS & TUKS
              </span>
            </h1>

            <p className="max-w-screen-sm mx-auto text-xl text-slate-600 dark:text-slate-400">
              Monitor ship movements, port activities, and waterways in
              real-time with an integrated monitoring system.
            </p>

            <Button
              onClick={() =>
                window.open("https://wa.me/628118801117", "_blank")
              }
              className="font-bold bg-slate-900 dark:bg-slate-100 text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 group/arrow"
            >
              Schedule a Consultation
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative group mt-14 w-full flex flex-col items-center">
            <div className="relative w-full md:w-[1200px] h-[250px] md:h-[655px]">
              <div className="absolute inset-0 rounded-xl bg-slate-700 dark:bg-slate-400 shadow-xs border-8 border-slate-700 dark:border-slate-300 overflow-hidden">
                {images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Ship Monitoring"
                    fill
                    priority={index === 0}
                    className={cn(
                      "absolute inset-0 object-cover object-top transition-opacity duration-1000 ease-in-out",
                      index === currentIndex ? "opacity-100" : "opacity-0",
                    )}
                  />
                ))}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-white/10 to-transparent" />
              </div>
            </div>

            <div className="relative mt-0 flex flex-col items-center -translate-y-3">
              <div className="w-6 h-16 bg-slate-700 dark:bg-gray-300 rounded-sm shadow-inner mt-2" />
              <div className="w-56 h-4 bg-slate-700 dark:bg-gray-300 rounded-md shadow-md mt-1" />
              <div className="w-72 h-6 bg-slate-700/30 dark:bg-gray-300/30 rounded-full mt-2 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
      `}</style>
    </section>
  );
};
