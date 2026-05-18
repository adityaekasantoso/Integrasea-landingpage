"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Camera, ShieldCheck, Eye } from "lucide-react";

const features = [
  "Continuous zoom thermal imaging technology",
  "Hot target intelligent detection alarm",
  "Automatic fire source centering zoom",
  "Low Lux day & night camera",
  "Excellent auto focus technology",
  "3D located function",
  "Preset memory thermal imaging",
  "Universal variable speed PTZ",
  "Anti rain, anti salt fog & anti corrosion",
];

export default function LongRangeCCTVPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-3 tracking-wider">
              LONG RANGE CCTV
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Dual Sensor Thermal Imaging System
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Sistem thermal imaging dengan kamera visible dan thermal sensor
              untuk deteksi kebakaran hutan, pengawasan area luas, serta
              monitoring dalam kondisi gelap, kabut, asap, dan debu.
            </p>

            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="/brochure/long-range-cctv.pdf" download>
                  Download Brosur
                </a>
              </Button>{" "}
            </div>
          </div>

          <div>
            <img
              src="/long-range-cctv2.png"
              alt="Long Range CCTV"
              className="w-full rounded-2xl shadow-xl border"
            />
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="container py-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Fitur Utama</h2>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Sistem dirancang untuk pemantauan area luas secara otomatis dengan
            kemampuan deteksi suhu tinggi dan monitoring real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-muted/40 border">
              <CardContent className="p-6 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-primary mt-1" />

                <div>
                  <p className="font-medium">{feature}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full bg-black">
        <img
          src="/brochure/long-range-cctv-brochure.png"
          alt="Long Range CCTV Brochure"
          className="w-full h-auto block"
        />
      </section>
      <section className="container py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Aplikasi Sistem</h2>

          <p className="text-muted-foreground">
            Cocok digunakan untuk berbagai kebutuhan keamanan dan monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border">
            <CardContent className="p-8 text-center">
              <Flame className="mx-auto mb-4 w-10 h-10 text-primary" />

              <h3 className="font-semibold text-xl mb-3">
                Forest Fire Prevention
              </h3>

              <p className="text-muted-foreground">
                Deteksi dini kebakaran hutan dengan thermal imaging berpresisi
                tinggi.
              </p>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-8 text-center">
              <Eye className="mx-auto mb-4 w-10 h-10 text-primary" />

              <h3 className="font-semibold text-xl mb-3">
                Long Range Monitoring
              </h3>

              <p className="text-muted-foreground">
                Pemantauan area luas hingga beberapa kilometer dalam kondisi
                minim cahaya.
              </p>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-8 text-center">
              <Camera className="mx-auto mb-4 w-10 h-10 text-primary" />

              <h3 className="font-semibold text-xl mb-3">
                Security Surveillance
              </h3>

              <p className="text-muted-foreground">
                Pengawasan area industri, pelabuhan, perkebunan, dan area
                strategis lainnya.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TECHNICAL */}
      {/* TECHNICAL INDICATORS */}
      <section className="container py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Technical Indicators</h2>

          <p className="text-muted-foreground">
            Detail spesifikasi sistem thermal imaging dan long range
            surveillance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT */}
          <Card>
            <CardContent className="p-8 space-y-8">
              {/* Detection */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Detection</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Visible camera</span>
                    <span>1.5 KM</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Fire (1m × 1m)</span>
                    <span>1 ~ 2 KM</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Fire (2m × 2m)</span>
                    <span>3 ~ 4 KM</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Alarm Condition</span>
                    <span>High-temperature area occupy pixel 2×2</span>
                  </div>
                </div>
              </div>

              {/* Alarm */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Alarm System</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Alarm threshold value</span>
                    <span>1~255 grade adjustable alarm sensitivity</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Target range</span>
                    <span>2×2 ~ 255×255 pixel</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Alarm target</span>
                    <span>
                      Can set 1-10 unit alarm target, auto display over-temp
                      target
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Alarm type</span>
                    <span>
                      Video superposition alarm box & pixel coordinates
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Information algorithm</span>
                    <span>0.1S alarm response without delay</span>
                  </div>
                </div>
              </div>

              {/* Visible Camera */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Visible Camera</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Focal length</span>
                    <span>6.5 ~ 240mm, 37x optical zoom, 16x digital zoom</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>FOV</span>
                    <span>1.86° ～ 61.9°</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Defog</span>
                    <span>Electronic defogging / Optical defogging</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Focus</span>
                    <span>Manual focus / auto focus</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Sensor type</span>
                    <span>1/1.8" Sony Starvis Progressive Scan CMOS</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Total pixels</span>
                    <span>2688 × 1520, 4MP</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Coding format</span>
                    <span>.265/H.264B/H.264M/ H.264H/MJPEG</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>API</span>
                    <span>
                      ONVIF(Profile S, Profile G, Profile T), HTTP API, SDK
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Network protocol</span>
                    <span>
                      IPv4, IPv6, HTTP, HTTPS, TCP, UDP, RTSP, RTCP, RTP, ARP,
                      NTP, FTP, DHCP, PPPoE, DNS, DDNS, UPnP, IGMP, ICMP, SNMP,
                      SMTP, QoS, 802.1x, Bonjour
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>API</span>
                    <span>ONVIF(Profile S/G/T), HTTP API, SDK</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT */}
          <Card>
            <CardContent className="p-8 space-y-8">
              {/* Thermal Camera */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Thermal Camera</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Focal length</span>
                    <span>50mm fixed zoom</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>FOV</span>
                    <span>8.8° × 7.0°</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Detector type</span>
                    <span>Uncooled FPA</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Effective pixels</span>
                    <span>640 × 480</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Spectral range</span>
                    <span>8 ～ 14μm</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Temp sensitivity</span>
                    <span>≤35mK@F1.0,300K</span>
                  </div>
                </div>
              </div>

              {/* Pan Tilt */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Pan-Tilt</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Angle</span>
                    <span>Horizontal 360° continuous rotation</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Speed</span>
                    <span>Pan 0.01°~9°/s, Tilt 0.01°~4°/s</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Preset bit</span>
                    <span>255</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Auto cruising</span>
                    <span>2 paths, 64 bits each path</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Auto scanning</span>
                    <span>1 line</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Angle return</span>
                    <span>Support</span>
                  </div>
                </div>
              </div>

              {/* Interface */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Interface</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Power supply interface</span>
                    <span>Waterproof power supply</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Network interface</span>
                    <span>1×10Base-T/100Base-TX, RJ45</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Other interface</span>
                    <span>RS485</span>
                  </div>
                </div>
              </div>

              {/* Environment */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Environment Indicators
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Working temp</span>
                    <span>-25℃ ～ +55℃</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Storage temp</span>
                    <span>-40℃ ～ +65℃</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Protection grade</span>
                    <span>IP66</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Installation method</span>
                    <span>Outdoor base installation</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
