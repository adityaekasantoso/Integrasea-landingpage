import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Integrasea - Vessel Monitoring System",
    template: "%s | Integrasea",
  },
  description:
    "Integrasea is a vessel monitoring system designed to provide real-time tracking, maritime surveillance, and operational insights for ports and shipping industries.",

  keywords: [
    // Brand
    "Integrasea",
    "PT Multiintegra Teknologi",

    // Core Product
    "Vessel Monitoring System",
    "Ship Monitoring System",
    "Maritime Monitoring System",
    "Port Monitoring System",
    "Marine Monitoring Platform",

    // AIS Related
    "AIS",
    "AIS Tracking",
    "AIS Receiver",
    "AIS Base Station",
    "AIS Monitoring System",
    "AIS Vessel Tracking",
    "AIS Ship Tracking",
    "AIS Maritime System",
    "AIS Port Monitoring",
    "AIS Pelabuhan",
    "AIS Indonesia",
    "AIS DJPL",
    "AIS CCTV DJPL",
    "Pasang AIS Receiver",
    "Instalasi AIS",
    "Instalasi AIS Pelabuhan",
    "Pemasangan AIS",
    "Pemasangan AIS Murah",
    "Jasa Instalasi AIS",
    "Vendor AIS Indonesia",

    // Surveillance & Security
    "Maritime Surveillance",
    "Marine Surveillance System",
    "Port Surveillance System",
    "CCTV Pelabuhan",
    "AIS dan CCTV Integration",
    "Ship Monitoring CCTV",
    "Pelabuhan Monitoring System",

    // Operations & Analytics
    "Real-time Vessel Tracking",
    "Real-time Ship Monitoring",
    "Fleet Monitoring System",
    "Shipping Monitoring System",
    "Port Management System",
    "Harbor Monitoring System",
    "Maritime Analytics",
    "Ship Movement Tracking",
    "Vessel Traffic Monitoring",

    // Industry Keywords
    "Teknologi Maritim Indonesia",
    "Sistem Monitoring Kapal",
    "Tracking Kapal Indonesia",
    "Sistem Pelabuhan Digital",
    "Digitalisasi Pelabuhan",
    "Smart Port System",
    "Solusi Maritim Indonesia",

    // Market Intent (High Conversion)
    "Sistem Monitoring Kapal Indonesia",
    "Jasa Monitoring Kapal",
    "Vendor Vessel Monitoring System",
    "Solusi AIS Indonesia",
    "Implementasi AIS Pelabuhan",
    "Sistem Tracking Kapal Real-time",
  ],

  authors: [{ name: "PT Multiintegra Technology Group" }],
  creator: "PT Multiintegra Technology Group",

  metadataBase: new URL("https://integrasea.com"),

  openGraph: {
    title: "Integrasea - Vessel Monitoring System",
    description:
      "Real-time vessel monitoring and maritime analytics platform for ports and shipping operations.",
    url: "https://integrasea.co.id",
    siteName: "Integrasea",
    images: [
      {
        url: "/logo-integrasea-black.png",
        width: 1200,
        height: 630,
        alt: "Integrasea Vessel Monitoring System",
      },
    ],
    locale: "en_`US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Integrasea - Vessel Monitoring System",
    description:
      "Advanced vessel monitoring system for real-time maritime operations.",
    images: ["/logo-integrasea-black.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen w-full bg-background overflow-x-hidden",
          inter.className,
        )}
      >
        <Navbar />
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
