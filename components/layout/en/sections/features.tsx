import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Radar",
    title: "Real-Time Vessel Tracking",
    description:
      "Track vessel positions live on the map, complete with course, speed, and identification data.",
  },
  {
    icon: "Cctv",
    title: "Integrated CCTV Monitoring",
    description:
      "Real-time monitoring of port areas through high-quality CCTV streams, accessible from anywhere.",
  },
  {
    icon: "MapPin",
    title: "Guardzone Alerts",
    description:
      "Set up custom guardzones and receive instant alerts when vessels enter or leave these areas.",
  },
  {
    icon: "History",
    title: "Route Playback",
    description:
      "Replay previous vessel movements on the map for operational review and planning.",
  },
  {
    icon: "FileText",
    title: "History Data",
    description:
      "Access detailed logs of vessel activity and operational events for analysis and reporting.",
  },
  {
    icon: "UserCheck",
    title: "Simple Role Management",
    description:
      "Admins manage system settings, while Users handle monitoring and operations.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-14 sm:py-22">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Designed for Reliable Vessel Monitoring
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        A complete AIS and CCTV platform that improves visibility, safety, and
        operational efficiency - built specifically for ports, TERSUS, and TUKS.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex flex-col justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
