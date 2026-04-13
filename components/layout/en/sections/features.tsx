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
      "View vessel positions live on the map, including heading, speed, and vessel identity.",
  },
  {
    icon: "Cctv",
    title: "Integrated CCTV Monitoring",
    description:
      "Monitor port areas in real-time with high-quality CCTV, accessible from anywhere.",
  },
  {
    icon: "MapPin",
    title: "Safe Zone Alerts",
    description:
      "Create custom safety zones and receive instant notifications when vessels enter or leave the area.",
  },
  {
    icon: "History",
    title: "Playback Movement History",
    description:
      "Review past vessel routes on the map for analysis and operational planning.",
  },
  {
    icon: "FileText",
    title: "Vessel Activity Data",
    description:
      "Access vessel activity logs and operational events for reporting and analysis.",
  },
  {
    icon: "UserCheck",
    title: "Easy Role Management",
    description:
      "Admins manage the system, while users focus on daily monitoring and operations.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-14 sm:py-22">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Everything You Need to Monitor Vessels
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        A complete AIS and CCTV platform to enhance visibility, security, and
        operational efficiency in ports, TERSUS, and TUKS.
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