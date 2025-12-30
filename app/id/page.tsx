import { FAQSection } from "@/components/layout/id/sections/faq";
import { FeaturesSection } from "@/components/layout/id/sections/features";
import { FooterSection } from "@/components/layout/id/sections/footer";
import { HeroSection } from "@/components/layout/id/sections/hero";
import { PricingSection } from "@/components/layout/id/sections/pricing";
import { ServicesSection } from "@/components/layout/id/sections/services";
import { SponsorsSection } from "@/components/layout/id/sections/sponsors";
import { TestimonialSection } from "@/components/layout/id/sections/testimonial";

export const metadata = {
  title: "Integrasea - Platform Pemantauan AIS & CCTV",
  description: "Integrasea menyediakan AIS Receiver, CCTV untuk pemantauan pelabuhan sesuai peraturan DJPL, serta platform pemantauan kapal secara real-time.",
  openGraph: {
    type: "website",
    url: "https://integrasea.example.com",
    title: "Integrasea - Platform Pemantauan AIS & CCTV",
    description: "Integrasea menyediakan AIS Receiver, CCTV untuk pemantauan pelabuhan sesuai peraturan DJPL, serta platform pemantauan kapal secara real-time.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Integrasea - Platform Pemantauan AIS & CCTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://integrasea.example.com",
    title: "Integrasea - Platform Pemantauan AIS & CCTV",
    description: "Integrasea menyediakan AIS Receiver, CCTV untuk pemantauan pelabuhan sesuai peraturan DJPL, serta platform pemantauan kapal secara real-time.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function HomeId() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
