"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <section id="contact">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="mb-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={
                theme === "dark"
                  ? "/logo-integrasea-white.png"
                  : "/logo-integrasea-black.png"
              }
              alt="IntegraSea"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Contact</h3>
            <p className="text-sm opacity-80">
              Get in touch for consultation, proposals, or more information
              about our AIS & CCTV monitoring solutions.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Find us</p>
              <p className="opacity-80">
                Taman Berdikari Sentosa B-1D,
                <br />
                Jl. Pemuda, Jakarta Timur 13220
                <br />
                Indonesia
              </p>
            </div>

            <div>
              <p className="font-semibold">Call us</p>
              <Link
                href="tel:08118801117"
                className="opacity-80 hover:opacity-100"
              >
                08118801117
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Mail us</p>
              <Link
                href="mailto:indra@multiintegra.co.id"
                className="opacity-80 hover:opacity-100"
              >
                indra@multiintegra.co.id
              </Link>
            </div>

            <div>
              <p className="font-semibold">Visit us</p>
              <p className="opacity-80">
                Monday - Friday
                <br />
                9AM - 6PM
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <section className="text-center text-sm opacity-80">
          &copy; {currentYear} <span className="font-semibold">Integrasea</span>
          . All rights reserved.
        </section>
      </div>
    </section>
  );
};
