"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Flame,
  Camera,
  ShieldCheck,
  Eye,
} from "lucide-react";

const features = [
  "Continuous zoom thermal imaging technology",
  "Hot target intelligent detection alarm",
  "Automatic fire source centering zoom",
  "Low Lux day & night camera",
  "Excellent auto focus technology",
  "3D positioning function",
  "Preset memory thermal imaging",
  "Universal variable speed PTZ",
  "Anti-rain, anti-salt fog & anti-corrosion",
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
              Advanced thermal imaging system equipped with visible and thermal
              sensors for forest fire detection, long-range surveillance, and
              monitoring in darkness, fog, smoke, and dusty environments.
            </p>

            <div className="flex gap-4">

              <Button size="lg" asChild>
                <a href="/brochure/long-range-cctv.pdf" download>
                  Download Brochure
                </a>
              </Button>
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

      {/* FEATURES */}
      <section className="container py-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Designed for automatic wide-area surveillance with intelligent
            high-temperature detection and real-time monitoring capabilities.
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

      {/* BROCHURE IMAGE */}
      <section className="w-full bg-black">
        <img
          src="/brochure/long-range-cctv-brochure.png"
          alt="Long Range CCTV Brochure"
          className="w-full h-auto block"
        />
      </section>

      {/* APPLICATIONS */}
      <section className="container py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">
            System Applications
          </h2>

          <p className="text-muted-foreground">
            Suitable for various security and monitoring applications.
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
                Early forest fire detection using high-precision thermal imaging
                technology.
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
                Wide-area surveillance across several kilometers in low-light
                environments.
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
                Monitoring for industrial areas, ports, plantations, and other
                strategic facilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TECHNICAL INDICATORS */}
      <section className="container py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Technical Indicators
          </h2>

          <p className="text-muted-foreground">
            Detailed specifications for the thermal imaging and long-range
            surveillance system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT */}
          <Card>
            <CardContent className="p-8 space-y-8">
              {/* Detection */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Detection
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Visible Camera</span>
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
                    <span>
                      High-temperature area occupies 2×2 pixels
                    </span>
                  </div>
                </div>
              </div>

              {/* Alarm */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Alarm System
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Alarm Threshold</span>
                    <span>
                      1~255 adjustable sensitivity levels
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Target Range</span>
                    <span>2×2 ~ 255×255 pixels</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Alarm Target</span>
                    <span>
                      Supports 1–10 targets with automatic over-temperature
                      display
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Alarm Type</span>
                    <span>
                      Video overlay alarm box & pixel coordinates
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Response Time</span>
                    <span>0.1s instant alarm response</span>
                  </div>
                </div>
              </div>

              {/* Visible Camera */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Visible Camera
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Focal Length</span>
                    <span>
                      6.5 ~ 240mm, 37x optical zoom, 16x digital zoom
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>FOV</span>
                    <span>1.86° ～ 61.9°</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Defog</span>
                    <span>
                      Electronic defogging / Optical defogging
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Focus</span>
                    <span>Manual / Auto focus</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Sensor Type</span>
                    <span>
                      1/1.8" Sony Starvis Progressive Scan CMOS
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Total Pixels</span>
                    <span>2688 × 1520, 4MP</span>
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
                <h3 className="text-xl font-semibold mb-4">
                  Thermal Camera
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Focal Length</span>
                    <span>50mm fixed zoom</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>FOV</span>
                    <span>8.8° × 7.0°</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Detector Type</span>
                    <span>Uncooled FPA</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Effective Pixels</span>
                    <span>640 × 480</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Spectral Range</span>
                    <span>8 ～ 14μm</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Temperature Sensitivity</span>
                    <span>≤35mK@F1.0,300K</span>
                  </div>
                </div>
              </div>

              {/* Pan Tilt */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Pan-Tilt
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Rotation</span>
                    <span>360° continuous rotation</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Speed</span>
                    <span>
                      Pan 0.01°~9°/s, Tilt 0.01°~4°/s
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Preset Positions</span>
                    <span>255</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Auto Cruising</span>
                    <span>2 paths, 64 presets each</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Auto Scanning</span>
                    <span>1 scanning line</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Angle Return</span>
                    <span>Supported</span>
                  </div>
                </div>
              </div>

              {/* Environment */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Environmental Indicators
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Operating Temperature</span>
                    <span>-25℃ ～ +55℃</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Storage Temperature</span>
                    <span>-40℃ ～ +65℃</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Protection Grade</span>
                    <span>IP66</span>
                  </div>

                  <div className="flex justify-between gap-4 border-b pb-2">
                    <span>Installation Method</span>
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