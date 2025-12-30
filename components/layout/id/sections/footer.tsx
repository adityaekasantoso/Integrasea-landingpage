import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        {/* Brand */}
        <div className="mb-10">
          <Link href="#" className="flex font-bold items-center">
            <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
            <h3 className="text-2xl">IntegraSea</h3>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Kontak</h3>

            <p className="text-sm opacity-80">
              Hubungi kami untuk konsultasi, penawaran, atau informasi lebih lanjut tentang solusi pemantauan AIS & CCTV kami.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Alamat</p>
              <p className="opacity-80">
                Taman Berdikari Sentosa B-1D,
                <br />
                Jl. Pemuda, Jakarta Timur 13220
                <br />
                Indonesia
              </p>
            </div>

            <div>
              <p className="font-semibold">Telepon</p>
              <Link
                href="tel:08118801117"
                className="opacity-80 hover:opacity-100"
              >
                08118801117
              </Link>
            </div>
          </div>

          {/* Kolom 3 */}
          <div className="space-y-4 text-sm">
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
              <p className="font-semibold">Kunjungi Kami</p>
              <p className="opacity-80">
                Senin - Jumat
                <br />
                09.00 - 18.00
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <section className="text-center">
          <h3>
            &copy; {currentYear}{" "}
            <span className="font-semibold">IntegraSea</span>. Semua hak
            dilindungi.
          </h3>
        </section>
      </div>
    </section>
  );
};
