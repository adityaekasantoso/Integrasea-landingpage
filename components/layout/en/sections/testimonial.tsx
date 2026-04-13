"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Indra Saputra",
    userName: "Port Operations Manager",
    comment:
      "Integrasea makes monitoring ship positions easy in real-time. Our team always knows the exact location of every vessel.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rizky Pratama",
    userName: "Harbor Supervisor",
    comment:
      "Integrasea integrates AIS and CCTV in a single dashboard. All information is clear and easily accessible for the team.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maria Angela",
    userName: "Head of Security & Monitoring",
    comment:
      "Integrasea provides automatic notifications for each vessel. This helps our team track ship movements quickly.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Budi Santoso",
    userName: "Maritime Safety Officer",
    comment:
      "Integrasea displays ship position data in real-time. Our team can make operational decisions faster.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dwi Hartanto",
    userName: "Port Control Officer",
    comment:
      "Integrasea enables faster team coordination. Ship positions are always visible clearly on the dashboard.",
    rating: 4.7,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Siti Rahma",
    userName: "Logistics Manager",
    comment:
      "Integrasea helps plan ship logistics more accurately. All ship position information is available in real-time.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
