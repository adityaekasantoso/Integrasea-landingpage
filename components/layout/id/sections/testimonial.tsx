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
    userName: "Manajer Operasional Pelabuhan",
    comment:
      "IntegraSea membantu kami memantau pergerakan kapal secara real-time. Tim kami bisa mengambil keputusan lebih cepat dan risiko tabrakan di area pelabuhan bisa diminimalkan.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rizky Pratama",
    userName: "Supervisor Otoritas Pelabuhan",
    comment:
      "Sistem AIS dan CCTV terintegrasi membuat pemantauan jadi jauh lebih mudah. Dashboard mudah digunakan, data lengkap, dan sangat akurat.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maria Angela",
    userName: "Kepala Keamanan & Pengawasan",
    comment:
      "Dengan notifikasi otomatis, kami bisa mendeteksi aktivitas mencurigakan lebih cepat. Tim dukungan IntegraSea responsif dan sangat profesional.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Budi Santoso",
    userName: "Petugas Keselamatan Maritim",
    comment:
      "Platform ini meningkatkan keselamatan navigasi di zona operasional kami. Integrasi data cuaca, lalu lintas kapal, dan rekaman CCTV sangat membantu saat investigasi.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Nur Aisyah",
    userName: "Manajer IT",
    comment:
      "Proses pemasangan berjalan lancar dan terencana dengan baik. Sistem stabil, mudah ditingkatkan, dan sangat memenuhi kebutuhan operasional pelabuhan kami.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimoni
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Apa Kata Klien Kami
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
