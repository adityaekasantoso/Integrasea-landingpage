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
    "Integrasea",
    "PT Multiintegra Teknologi",
    "Vessel Monitoring System",
    "Ship Monitoring System",
    "Maritime Monitoring System",
    "Port Monitoring System",
    "Marine Monitoring Platform",
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
    "Maritime Surveillance",
    "Marine Surveillance System",
    "Port Surveillance System",
    "CCTV Pelabuhan",
    "AIS dan CCTV Integration",
    "Ship Monitoring CCTV",
    "Pelabuhan Monitoring System",
    "Real-time Vessel Tracking",
    "Real-time Ship Monitoring",
    "Fleet Monitoring System",
    "Shipping Monitoring System",
    "Port Management System",
    "Harbor Monitoring System",
    "Maritime Analytics",
    "Ship Movement Tracking",
    "Vessel Traffic Monitoring",
    "Teknologi Maritim Indonesia",
    "Sistem Monitoring Kapal",
    "Tracking Kapal Indonesia",
    "Sistem Pelabuhan Digital",
    "Digitalisasi Pelabuhan",
    "Smart Port System",
    "Solusi Maritim Indonesia",
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
    locale: "en_US",
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
  const whatsappMessage = encodeURIComponent(
    "Halo, saya ingin bertanya terkait sistem AIS/CCTV Integrasea."
  );

  const whatsappUrl = `https://wa.me/628118801117?text=${whatsappMessage}`;

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

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi Integrasea melalui WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="h-8 w-8"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L.04 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.43ZM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.27c0-5.46 4.45-9.9 9.92-9.9 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.89-9.94 9.89Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}