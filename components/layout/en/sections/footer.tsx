"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="space-y-8">
      <div className="max-w-5xl mx-auto">
        <div className="p-6 md:p-8 rounded-2xl bg-primary text-primary-foreground flex flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-lg md:text-xl font-bold">
              Need more information?
            </h2>
            <p className="text-sm opacity-90 mt-1">
              Our sales team is ready to assist you.
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition whitespace-nowrap shrink-0">
                Contact Us
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-3xl p-4">
              <DialogHeader>
                <DialogTitle className="text-center text-xl">
                  Please complete the form below
                </DialogTitle>
              </DialogHeader>

              <iframe
                src="https://form.jotform.com/260968414792065"
                className="w-full h-[600px] border-none rounded-lg"
                scrolling="no"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="p-8 md:p-10 bg-card border border-secondary rounded-2xl space-y-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-integrasea-black.png"
              alt="Integrasea Logo"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 text-sm">
            {/* Product By */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">Product by</p>

              <div className="flex items-center gap-3">
                <img
                  src="/mitg.png"
                  alt="Multiintegra"
                  className="h-[50px] object-contain"
                />
                <img
                  src="/iso.png"
                  alt="ISO"
                  className="h-[50px] object-contain opacity-80"
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Address</p>
                <p className="opacity-80">
                  Taman Berdikari Sentosa B-1D
                  <br />
                  Jl. Pemuda, East Jakarta 13220
                </p>
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <Link
                  href="tel:08118801117"
                  className="opacity-80 hover:opacity-100"
                >
                  08118801117
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Email</p>
                <Link
                  href="mailto:indra@multiintegra.co.id"
                  className="opacity-80 hover:opacity-100"
                >
                  indra@multiintegra.co.id
                </Link>
              </div>

              <div>
                <p className="font-semibold">Office Hours</p>
                <p className="opacity-80">
                  Monday - Friday
                  <br />
                  09:00 AM - 06:00 PM (WIB)
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="text-center text-sm opacity-70">
            &copy; {currentYear}{" "}
            <span className="font-semibold">Integrasea</span>. All rights
            reserved.
          </div>
        </div>
      </div>
    </section>
  );
};
