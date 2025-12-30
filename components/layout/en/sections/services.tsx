import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const serviceList: ServiceProps[] = [
  {
    icon: "Satellite",
    title: "AIS Receiver",
    description: "Reliable AMEC R150GE AIS Receiver with industrial power and 4U rack.",
    image: "https://integrasea.com/images/1024/14014632/AISSet.jpeg",
  },
  {
    icon: "Cctv",
    title: "PTZ CCTV, NVR",
    description: "Day & Night PTZ CCTV for terminal monitoring with 1-year recording.",
    image: "https://integrasea.com/images/976/14114303/WhatsAppImage2025-01-26at5.52.08AM.jpeg",
  },
  {
    icon: "Eye",
    title: "Long Range CCTV",
    description: "CCTV coverage up to 10 NM for enhanced security and surveillance.",
    image: "https://integrasea.com/images/976/14114388/WhatsAppImage2025-02-14at7.18.45PM.jpeg",
  },
  {
    icon: "Unplug",
    title: "I-Motion Integration",
    description: "Seamless integration with I-Motion DJPL, no subscription fees.",
    image: "https://integrasea.com/images/976/14015264/Screenshot2025-02-11at10.47.16PM.png",
  },
];


export const ServicesSection = () => {
  return (
    <section id="services" className="container py-14 sm:py-22">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Services
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Integrated Services for Modern Port Operations
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            We provide AIS and CCTV solutions designed to enhance visibility, security, and operational efficiencyDesigned for Reliable Vessel Monitoring all in a single unified platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {serviceList.map(({ icon, title, description, image }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <div className="overflow-hidden rounded-t-lg h-40 relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover  transition-opacity duration-300 group-hover:opacity-60"
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

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
