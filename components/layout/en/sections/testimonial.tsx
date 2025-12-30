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
    userName: "Harbor Operations Manager",
    comment:
      "IntegraSea helps us monitor vessel movements in real time. Our team can make quicker decisions and significantly reduce collision risks around the port area.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rizky Pratama",
    userName: "Port Authority Supervisor",
    comment:
      "The integrated AIS and CCTV system makes monitoring much easier. The dashboard is simple to use, yet the data is complete and highly accurate.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maria Angela",
    userName: "Security & Surveillance Lead",
    comment:
      "With automated alerts, we detect suspicious activities much faster. The IntegraSea support team is responsive and very professional.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Budi Santoso",
    userName: "Marine Safety Officer",
    comment:
      "The platform improves navigation safety across our operational zones. Integration between weather data, vessel traffic, and CCTV records is extremely helpful during investigations.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Nur Aisyah",
    userName: "IT Manager",
    comment:
      "Deployment was smooth and well-planned. The system is stable, scalable, and meets the operational needs of our port very well.",
    rating: 5.0,
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
              <Card className="bg-muted/50 dark:bg-card">
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
