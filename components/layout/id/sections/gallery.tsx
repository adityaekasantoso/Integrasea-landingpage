"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageProps {
  image: string;
}

const imageList: ImageProps[] = [
  { image: "/gallery/1.jpeg" },
  { image: "/gallery/6.jpeg" },
  { image: "/gallery/3.jpeg" },
  { image: "/gallery/4.jpeg" },
  { image: "/gallery/5.jpeg" },
  { image: "/gallery/2.jpeg" },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Galeri</h2>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Dokumentasi Instalasi
        </h2>
      </div>

      <Carousel
        opts={{ align: "start" }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {imageList.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt="gallery"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
