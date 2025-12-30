import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Radar",
    title: "Pelacakan Kapal Real-Time",
    description:
      "Lihat posisi kapal secara langsung di peta, lengkap dengan arah, kecepatan, dan identitas kapal.",
  },
  {
    icon: "Cctv",
    title: "Monitoring CCTV Terpadu",
    description:
      "Pantau area pelabuhan secara real-time dengan CCTV berkualitas tinggi, bisa diakses dari mana saja.",
  },
  {
    icon: "MapPin",
    title: "Peringatan Zona Aman",
    description:
      "Buat zona aman sendiri dan dapatkan notifikasi instan saat kapal masuk atau keluar area tersebut.",
  },
  {
    icon: "History",
    title: "Putar Ulang Pergerakan",
    description:
      "Tinjau kembali rute kapal sebelumnya di peta untuk analisis atau perencanaan operasional.",
  },
  {
    icon: "FileText",
    title: "Data Aktivitas Kapal",
    description:
      "Akses riwayat kegiatan kapal dan kejadian operasional untuk laporan dan analisis.",
  },
  {
    icon: "UserCheck",
    title: "Manajemen Peran Mudah",
    description:
      "Admin mengatur sistem, sementara pengguna fokus pada pemantauan dan operasi sehari-hari.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-14 sm:py-22">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Fitur
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Semua yang Anda Butuhkan untuk Memantau Kapal
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Platform AIS dan CCTV lengkap untuk meningkatkan visibilitas, keamanan, dan efisiensi operasional di pelabuhan, TERSUS, dan TUKS.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex flex-col justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
