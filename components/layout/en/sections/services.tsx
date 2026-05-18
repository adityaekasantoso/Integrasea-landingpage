"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

const serviceList: ServiceProps[] = [
  {
    icon: "Satellite",
    title: "AIS Receiver",
    description: "Reliable AMEC R150GE AIS Receiver with industrial standards.",
    image: "/ais-receiver.png",
    route: "/services/ais-receiver",
  },
  {
    icon: "Cctv",
    title: "PTZ CCTV & NVR",
    description: "Day & night PTZ CCTV for port monitoring.",
    image: "/cctv.png",
    route: "/services/cctv-nvr",
  },
  {
    icon: "Eye",
    title: "Long Range CCTV",
    description:
      "CCTV with up to 10 NM range for enhanced security and surveillance.",
    image: "/long-range-cctv.png",
    route: "/services/long-range-cctv",
  },
  {
    icon: "Unplug",
    title: "I-Motion Integration",
    description:
      "Seamless integration with I-Motion DJPL without additional subscription fees.",
    image: "/i-motion.png",
    route: "/services/i-motion",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-14 sm:py-22">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Services</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Integrated Services for Modern Port Operations
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            We provide AIS and CCTV solutions designed to improve visibility,
            security, and operational efficiency all in one integrated platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {serviceList.map(
            ({ icon, title, description, image, route }, index) => (
              <Card
                key={title}
                className="bg-muted/50 hover:bg-background transition-all delay-75 group/number overflow-hidden"
              >
                <div className="overflow-hidden rounded-t-lg h-40 relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-60"
                  />
                </div>

                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={32}
                      color="currentColor"
                      className="mb-6 text-primary"
                    />

                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground space-y-4">
                  <p>{description}</p>

                  <Button
                    className="w-full"
                    onClick={() => (window.location.href = route)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
