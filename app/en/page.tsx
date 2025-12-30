import { FAQSection } from "@/components/layout/en/sections/faq";
import { FeaturesSection } from "@/components/layout/en/sections/features";
import { FooterSection } from "@/components/layout/en/sections/footer";
import { HeroSection } from "@/components/layout/en/sections/hero";
import { PricingSection } from "@/components/layout/en/sections/pricing";
import { ServicesSection } from "@/components/layout/en/sections/services";
import { SponsorsSection } from "@/components/layout/en/sections/sponsors";
import { TestimonialSection } from "@/components/layout/en/sections/testimonial";

export const metadata = {
  title: "Integrasea - AIS & CCTV Monitoring Platform",
  description: "Integrasea menyediakan AIS Receiver, CCTV port monitoring sesuai peraturan DJPL, dan platform pemantauan kapal real-time.",
  openGraph: {
    type: "website",
    url: "https://integrasea.example.com",
    title: "Integrasea - AIS & CCTV Monitoring Platform",
    description: "Integrasea menyediakan AIS Receiver, CCTV port monitoring sesuai peraturan DJPL, dan platform pemantauan kapal real-time.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Integrasea - AIS & CCTV Monitoring Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://integrasea.example.com",
    title: "Integrasea - AIS & CCTV Monitoring Platform",
    description: "Integrasea menyediakan AIS Receiver, CCTV port monitoring sesuai peraturan DJPL, dan platform pemantauan kapal real-time.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function HomeEn() {
  return (
    <>
      <HeroSection
      />
      <SponsorsSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FooterSection
      />
    </>
  );
}
