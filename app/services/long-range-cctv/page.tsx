"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Flame,
  Camera,
  ShieldCheck,
  Eye,
  Radar,
  ScanSearch,
  Trees,
  Siren,
} from "lucide-react";

const solutions = [
  {
    icon: Flame,
    title: "Deteksi Kebakaran",
    description:
      "Mendeteksi titik api dan asap lebih cepat sebelum kebakaran menyebar lebih luas di area perkebunan.",
  },
  {
    icon: Eye,
    title: "Pemantauan Area Luas",
    description:
      "Memantau area perkebunan dari jarak jauh menggunakan thermal camera dan zoom otomatis.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan 24 Jam",
    description:
      "Membantu pengawasan area perkebunan secara terus menerus siang dan malam.",
  },
  {
    icon: Camera,
    title: "Tetap Optimal",
    description:
      "Tetap bekerja optimal pada kondisi gelap, kabut, asap, hujan, dan debu.",
  },
];

const advantages = [
  {
    icon: Radar,
    title: "Thermal Imaging",
    description:
      "Teknologi thermal sensor untuk mendeteksi suhu panas secara akurat.",
  },
  {
    icon: ScanSearch,
    title: "Auto Tracking",
    description:
      "Kamera dapat melakukan tracking otomatis terhadap titik panas dan objek.",
  },
  {
    icon: Trees,
    title: "Cocok Untuk Perkebunan",
    description:
      "Ideal digunakan pada area perkebunan sawit, hutan industri, dan area luas lainnya.",
  },
  {
    icon: Siren,
    title: "Alarm Real-Time",
    description:
      "Sistem alarm otomatis membantu memberikan notifikasi lebih cepat.",
  },
];

const leftSpecifications = [
  {
    title: "Detection System",
    items: [
      ["Visible Camera", "1.5 KM"],
      ["Fire Detection (1m × 1m)", "1 ~ 2 KM"],
      ["Fire Detection (2m × 2m)", "3 ~ 4 KM"],
      ["Alarm Condition", "High-temperature area occupy pixel 2×2"],
    ],
  },
  {
    title: "Alarm System",
    items: [
      ["Alarm Sensitivity", "1~255 adjustable sensitivity levels"],
      ["Target Range", "2×2 ~ 255×255 pixel"],
      ["Alarm Target", "Supports 1-10 simultaneous targets"],
      ["Alarm Type", "Video overlay alarm box & coordinates"],
      ["Response Time", "0.1 second without delay"],
    ],
  },
  {
    title: "Visible Camera",
    items: [
      ["Zoom", "37x optical zoom, 16x digital zoom"],
      ["FOV", "1.86° ～ 61.9°"],
      ["Defog", "Electronic & Optical defogging"],
      ["Focus", "Manual / Auto focus"],
      ["Sensor", '1/1.8" Sony Starvis Progressive Scan CMOS'],
      ["Resolution", "2688 × 1520, 4MP"],
      ["Protocol", "ONVIF, HTTP API, SDK"],
    ],
  },
];

const rightSpecifications = [
  {
    title: "Thermal Camera",
    items: [
      ["Focal Length", "50mm fixed zoom"],
      ["FOV", "8.8° × 7.0°"],
      ["Detector", "Uncooled FPA"],
      ["Pixels", "640 × 480"],
      ["Spectral Range", "8 ～ 14μm"],
      ["Temp Sensitivity", "≤35mK@F1.0,300K"],
    ],
  },
  {
    title: "Pan-Tilt System",
    items: [
      ["Rotation", "360° continuous rotation"],
      ["Speed", "Pan 0.01°~9°/s"],
      ["Preset", "255 preset positions"],
      ["Auto Cruising", "2 paths, 64 points"],
      ["Auto Scanning", "1 scanning line"],
      ["Angle Return", "Supported"],
    ],
  },
  {
    title: "Outdoor Environment",
    items: [
      ["Working Temperature", "-25℃ ～ +55℃"],
      ["Storage Temperature", "-40℃ ～ +65℃"],
      ["Protection", "IP66 Waterproof"],
      ["Installation", "Outdoor base installation"],
      ["Interface", "RJ45 / RS485"],
    ],
  },
];

export default function LongRangeCCTVPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border bg-muted/40 px-4 py-2 text-xs font-medium tracking-wide mb-6">
              LONG RANGE CCTV
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              CCTV Thermal Deteksi Api & Asap
            </h1>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Solusi CCTV thermal imaging untuk membantu deteksi kebakaran,
              pemantauan area perkebunan, dan pengawasan jarak jauh secara
              real-time. Tetap optimal digunakan pada kondisi gelap, kabut,
              asap, hujan, dan debu.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-xl px-8 h-12 font-medium"
                asChild
              >
                <a href="/brochure/long-range-cctv.pdf" download>
                  Download Brosur
                </a>
              </Button>
            </div>
          </div>

          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-muted/30 p-4">
            <CardContent className="p-0">
              <img
                src="/long-range-cctv3.png"
                alt="Long Range CCTV"
                className="w-full h-auto rounded-xl object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Solusi Pemantauan Perkebunan
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
            Membantu pemantauan area perkebunan secara real-time untuk
            meningkatkan keamanan dan mendeteksi potensi kebakaran lebih cepat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="group rounded-3xl overflow-hidden border bg-gradient-to-b from-background to-muted/40 transition-all duration-300"
              >
                <CardContent className="p-7 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container py-10 space-y-8">
        <Card className="overflow-hidden rounded-3xl border max-w-6xl mx-auto bg-muted/30 p-4 md:p-6">
          <CardContent className="p-0">
            <img
              src="/product/long-range-cctv/coverage.png"
              alt="Coverage Area"
              className="w-full h-auto object-cover rounded-xl"
            />
          </CardContent>
        </Card>

        <Card className="overflow-hidden rounded-3xl border max-w-6xl mx-auto bg-muted/30 p-4 md:p-6">
          <CardContent className="p-0">
            <img
              src="/product/long-range-cctv/example.png"
              alt="Long Range CCTV"
              className="w-full h-auto object-cover rounded-xl"
            />
          </CardContent>
        </Card>
      </section>

      <section className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Keunggulan Sistem
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
            Teknologi thermal imaging modern untuk membantu monitoring area
            perkebunan secara lebih cepat, aman, dan efisien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="border-1 rounded-3xl bg-gradient-to-b from-background to-muted/40"
              >
                <CardContent className="p-7">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container py-24">
        <Card className="border-0 rounded-3xl overflow-hidden shadow-2xl bg-primary text-primary-foreground">
          <CardContent className="p-10 md:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                  Monitoring Area Lebih Cepat & Efisien
                </h2>

                <p className="text-primary-foreground/80 text-base leading-relaxed mb-8">
                  Solusi CCTV thermal imaging untuk membantu deteksi kebakaran,
                  pemantauan area luas, dan pengawasan keamanan secara real-time
                  selama 24 jam.
                </p>

                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-xl"
                  asChild
                >
                  <a href="/brochure/long-range-cctv.pdf" download>
                    Download Brosur
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-3xl font-bold mb-2">4 KM</h3>

                  <p className="text-sm text-primary-foreground/80">
                    Jangkauan deteksi api
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-3xl font-bold mb-2">24/7</h3>

                  <p className="text-sm text-primary-foreground/80">
                    Monitoring tanpa henti
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-3xl font-bold mb-2">IP66</h3>

                  <p className="text-sm text-primary-foreground/80">
                    Tahan air dan debu
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-3xl font-bold mb-2">360°</h3>

                  <p className="text-sm text-primary-foreground/80">
                    Rotasi kamera penuh
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Spesifikasi Long Range CCTV
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
            Sistem thermal imaging dengan kemampuan deteksi api, pemantauan
            jarak jauh, dan pengawasan area perkebunan secara real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="rounded-3xl overflow-hidden border bg-background">
            <div className="bg-primary text-primary-foreground px-8 py-6">
              <h3 className="text-2xl font-bold">Detection & Visible Camera</h3>

              <p className="text-sm opacity-80 mt-2">
                Sistem deteksi api dan kamera pengawasan jarak jauh
              </p>
            </div>

            <CardContent className="p-8 space-y-10">
              {leftSpecifications.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-5">
                    {section.title}
                  </h4>

                  <div className="space-y-4">
                    {section.items.map(([label, value], itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between gap-6 rounded-xl border bg-muted/30 p-4"
                      >
                        <span className="font-medium">{label}</span>

                        <span className="text-sm text-muted-foreground text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-3xl overflow-hidden border bg-background">
            <div className="bg-primary text-primary-foreground px-8 py-6">
              <h3 className="text-2xl font-bold">
                Thermal Camera & Environment
              </h3>

              <p className="text-sm opacity-80 mt-2">
                Thermal sensor dan spesifikasi penggunaan outdoor
              </p>
            </div>

            <CardContent className="p-8 space-y-10">
              {rightSpecifications.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-5">
                    {section.title}
                  </h4>

                  <div className="space-y-4">
                    {section.items.map(([label, value], itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between gap-6 rounded-xl border bg-muted/30 p-4"
                      >
                        <span className="font-medium">{label}</span>

                        <span className="text-sm text-muted-foreground text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
