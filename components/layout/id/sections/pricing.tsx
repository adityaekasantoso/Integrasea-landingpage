"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface TableItem {
  no: number;
  name: string;
  qty: string;
  unitPrice: string;
  totalPrice: string;
  notes?: string[];
}

interface PlanProps {
  key: string;
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  table: TableItem[];
  summary: {
    subtotal: string;
    vat: string;
    grand: string;
  };
}

const plans: PlanProps[] = [
  {
    key: "basic",
    title: "Paket Basic AIS Receiver",
    popular: 1,
    price: 119900000,
    description:
      "Paket Basic AIS Receiver untuk kebutuhan pemantauan kapal dengan sistem sederhana, hemat biaya, dan mudah diimplementasikan, termasuk perangkat AIS, software monitoring, koneksi internet, instalasi, dan pengiriman.",
    buttonText: "Detail",
    benefitList: [
      "AIS Network Receiver AMEC R150GE",
      "AIS Monitoring Lite Software + ENC S-63",
      "Mini PC dengan Monitor",
      "Perangkat Pendukung Dasar",
      "Internet Starlink dengan IP Publik (VPN)",
      "Instalasi & Konfigurasi Jarak Jauh",
    ],
    table: [
      {
        no: 1,
        name: "AIS Network Receiver AMEC R150GE",
        qty: "1 Set",
        unitPrice: "Rp 35.000.000",
        totalPrice: "Rp 35.000.000",
        notes: ["AIS Receiver", "Antena VHF dengan Kabel 30m", "Antena GPS"],
      },
      {
        no: 2,
        name: "AIS Monitoring Software",
        qty: "1 Set",
        unitPrice: "Rp 35.000.000",
        totalPrice: "Rp 35.000.000",
        notes: [
          "Peta Laut ENC S-63",
          "AIS Monitoring Lite Software",
          "Mini PC dengan Monitor",
        ],
      },
      {
        no: 3,
        name: "Perangkat Pendukung",
        qty: "1 Lot",
        unitPrice: "Rp 7.000.000",
        totalPrice: "Rp 7.000.000",
        notes: [
          "Router Jaringan",
          "Kabel LAN",
          "Kabel Listrik",
          "Aksesoris (cable ties, karet, double tape)",
        ],
      },
      {
        no: 4,
        name: "Perangkat & Langganan Starlink",
        qty: "1 Unit / 1 Tahun",
        unitPrice: "Rp 24.900.000",
        totalPrice: "Rp 24.900.000",
        notes: [
          "Perangkat Starlink",
          "Langganan Starlink",
          "VPN untuk IP Publik",
        ],
      },
      {
        no: 5,
        name: "Instalasi",
        qty: "1 Lot",
        unitPrice: "Rp 15.000.000",
        totalPrice: "Rp 15.000.000",
        notes: [
          "Instalasi & Konfigurasi Jarak Jauh",
          "Belum termasuk biaya instalasi di luar JABODETABEK",
          "Pemasangan perangkat & antena oleh customer",
          "Harga dapat dinegosiasikan sesuai lokasi",
        ],
      },
      {
        no: 6,
        name: "Pengiriman Peralatan",
        qty: "1 Lot",
        unitPrice: "Rp 3.000.000",
        totalPrice: "Rp 3.000.000",
      },
    ],
    summary: {
      subtotal: "Rp 119.900.000",
      vat: "Rp 13.189.000",
      grand: "Rp 133.089.000",
    },
  },

  {
    key: "combo",
    title: "Paket Combo AIS & Surveillance",
    popular: 1,
    price: 199900000,
    description:
      "Paket lengkap AIS Monitoring dan sistem pengawasan untuk kebutuhan pemantauan maritim dan keamanan area, termasuk kamera PTZ CCTV, internet, instalasi, dan pengiriman.",
    buttonText: "Detail",
    benefitList: [
      "AIS Network Receiver AMEC R150GE",
      "Kamera PTZ Outdoor HIKVISION IP66",
      "Sistem CCTV (NVR + Storage)",
      "Mini PC & Monitor Monitoring",
      "Internet Starlink dengan IP Publik (VPN)",
      "Layanan Instalasi",
      "Pengiriman Peralatan",
    ],
    table: [
      {
        no: 1,
        name: "AIS Network Receiver AMEC R150GE",
        qty: "1 Set",
        unitPrice: "Rp 35.000.000",
        totalPrice: "Rp 35.000.000",
        notes: ["AIS Receiver", "Antena VHF dengan Kabel 30m", "Antena GPS"],
      },
      {
        no: 2,
        name: "AIS Monitoring Software",
        qty: "1 Set",
        unitPrice: "Rp 35.000.000",
        totalPrice: "Rp 35.000.000",
        notes: [
          "Peta Laut ENC S-63",
          "AIS Monitoring Lite Software",
          "Mini PC dengan Monitor",
        ],
      },
      {
        no: 3,
        name: "Kamera PTZ Outdoor HIKVISION DS-2SE7C432MW",
        qty: "1 Set",
        unitPrice: "Rp 35.000.000",
        totalPrice: "Rp 35.000.000",
        notes: ["Kamera PTZ", "Tahan Cuaca IP66"],
      },
      {
        no: 4,
        name: "Sistem Monitoring CCTV",
        qty: "1 Set",
        unitPrice: "Rp 26.000.000",
        totalPrice: "Rp 26.000.000",
        notes: [
          "Network Video Recorder (NVR)",
          "Monitor 24 inci",
          "Hard Disk Surveillance 16 TB",
        ],
      },
      {
        no: 5,
        name: "Perangkat Pendukung",
        qty: "1 Lot",
        unitPrice: "Rp 12.000.000",
        totalPrice: "Rp 12.000.000",
        notes: [
          "Router Jaringan",
          "Kabel LAN",
          "Kabel Listrik",
          "Aksesoris",
          "Rack 4U",
          "POE PSU dll",
        ],
      },
      {
        no: 6,
        name: "Koneksi Internet (Starlink)",
        qty: "1 Unit / 1 Tahun",
        unitPrice: "Rp 24.900.000",
        totalPrice: "Rp 24.900.000",
        notes: [
          "Perangkat Starlink",
          "Langganan Starlink",
          "VPN untuk IP Publik",
        ],
      },
      {
        no: 7,
        name: "Instalasi (Tidak Termasuk Transport & Akomodasi)",
        qty: "1 Lot",
        unitPrice: "Rp 27.000.000",
        totalPrice: "Rp 27.000.000",
        notes: [
          "Instalasi & Konfigurasi",
          "Harga menyesuaikan lokasi pemasangan",
        ],
      },
      {
        no: 8,
        name: "Pengiriman Peralatan",
        qty: "1 Lot",
        unitPrice: "Rp 5.000.000",
        totalPrice: "Rp 5.000.000",
      },
    ],
    summary: {
      subtotal: "Rp 199.900.000",
      vat: "Rp 21.989.000",
      grand: "Rp 221.889.000",
    },
  },
  {
    key: "advance",
    title: "Paket Advance AIS & Surveillance",
    popular: 1,
    price: 267700000,
    description:
      "Paket Advance untuk kebutuhan pemantauan maritim dan keamanan tingkat lanjut, dilengkapi AIS profesional, sistem rekaman, kamera PTZ CCTV, perangkat pendukung lengkap, serta opsi koneksi internet satelit.",
    buttonText: "Detail",
    benefitList: [
      "AIS Network Receiver AMEC R150GE",
      "PC Monitoring Performa Tinggi",
      "Kamera PTZ Outdoor IP66",
      "Sistem CCTV dengan Kapasitas Besar",
      "Perangkat Pendukung Lengkap + Backup Daya",
      "Layanan Instalasi Profesional",
      "Koneksi Internet Starlink (Opsional)",
    ],
    table: [
      {
        no: 1,
        name: "AIS Network Receiver AMEC R150GE",
        qty: "1 Set",
        unitPrice: "Rp 35.000.000",
        totalPrice: "Rp 35.000.000",
        notes: ["AIS Receiver", "Antena VHF dengan Kabel 30m", "Antena GPS"],
      },
      {
        no: 2,
        name: "AIS Monitoring Software",
        qty: "1 Set",
        unitPrice: "Rp 85.000.000",
        totalPrice: "Rp 85.000.000",
        notes: ["Peta Laut ENC S-63", "Navi Pro Port Watch Software"],
      },
      {
        no: 3,
        name: "PC Monitoring & Perekaman AIS (1 Tahun)",
        qty: "1 Unit",
        unitPrice: "Rp 25.000.000",
        totalPrice: "Rp 25.000.000",
        notes: [
          "Processor Intel Core i7",
          "RAM 32GB DDR4",
          "SSD 2TB",
          "Perekaman Data AIS 1 Tahun",
        ],
      },
      {
        no: 4,
        name: "Kamera PTZ Outdoor HIKVISION DS-2SE7C432MW",
        qty: "1 Set",
        unitPrice: "Rp 35.000.000",
        totalPrice: "Rp 35.000.000",
        notes: ["Kamera PTZ", "Tahan Cuaca IP66"],
      },
      {
        no: 5,
        name: "Sistem Monitoring CCTV",
        qty: "1 Set",
        unitPrice: "Rp 26.000.000",
        totalPrice: "Rp 26.000.000",
        notes: [
          "Network Video Recorder (NVR)",
          "Monitor 24 inci",
          "Hard Disk Surveillance 16 TB",
        ],
      },
      {
        no: 6,
        name: "Perangkat Pendukung",
        qty: "1 Lot",
        unitPrice: "Rp 21.800.000",
        totalPrice: "Rp 21.800.000",
        notes: [
          "Router Jaringan",
          "Switch Jaringan",
          "Rack 4U",
          "UPS Backup 650W",
          "POE Adapter",
          "Bracket Antena",
          "Bracket CCTV",
          "Box Panel",
        ],
      },
      {
        no: 7,
        name: "Instalasi (Tidak Termasuk Transport & Akomodasi)",
        qty: "1 Lot",
        unitPrice: "Rp 10.000.000",
        totalPrice: "Rp 10.000.000",
        notes: [
          "Instalasi & Konfigurasi",
          "Belum termasuk biaya di luar JABODETABEK",
        ],
      },
      {
        no: 8,
        name: "Modem Satelit untuk Koneksi Internet (Opsional)",
        qty: "1 Set / 1 Tahun",
        unitPrice: "Rp 24.900.000",
        totalPrice: "Rp 24.900.000",
        notes: [
          "Terminal Starlink dengan UPS",
          "Langganan Data Starlink 1 Tahun",
        ],
      },
      {
        no: 9,
        name: "Pengiriman Peralatan",
        qty: "1 Lot",
        unitPrice: "Rp 5.000.000",
        totalPrice: "Rp 5.000.000",
      },
    ],
    summary: {
      subtotal: "Rp 267.700.000",
      vat: "Rp 29.447.000",
      grand: "Rp 297.147.000",
    },
  },
];

export const PricingSection = () => {
  const [openPlan, setOpenPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="container py-14 sm:py-22">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Paket Harga
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Pilih Solusi yang Tepat untuk Pelabuhan Anda
      </h2>

      <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Paket fleksibel untuk kebutuhan pemantauan AIS dan CCTV.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.key}
            className={`flex flex-col h-full ${
              plan.popular === PopularPlan.YES
                ? "border-primary border-[1.5px]"
                : ""
            }`}
          >
            <CardHeader className="flex flex-col gap-4">
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div>
                <span className="text-3xl font-bold">
                  Rp {plan.price.toLocaleString("id-ID")}
                </span>
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="space-y-2">
                {plan.benefitList.map((b) => (
                  <div key={b} className="flex text-sm">
                    <Check className="text-primary mr-2 h-4 w-4" /> {b}
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-3">
              <Dialog
                open={openPlan === plan.key}
                onOpenChange={(open) => setOpenPlan(open ? plan.key : null)}
              >
                <DialogTrigger asChild>
                  <Button className="w-full">{plan.buttonText}</Button>
                </DialogTrigger>

                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Detail Harga {plan.title}</DialogTitle>
                  </DialogHeader>

                  <div className="max-h-[60vh] overflow-auto pr-2 space-y-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-14 text-center">NO</TableHead>
                          <TableHead>DESKRIPSI</TableHead>
                          <TableHead className="text-center">QTY</TableHead>
                          <TableHead className="text-right">
                            HARGA SATUAN
                          </TableHead>
                          <TableHead className="text-right">
                            HARGA TOTAL
                          </TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {plan.table.map((row) => (
                          <TableRow key={row.no}>
                            <TableCell className="text-center font-semibold">
                              {row.no}
                            </TableCell>

                            <TableCell className="font-semibold">
                              {row.name}

                              {row.notes && (
                                <div className="text-sm font-medium text-muted-foreground mt-1">
                                  {row.notes.map((n, i) => (
                                    <div key={i}>- {n}</div>
                                  ))}
                                </div>
                              )}
                            </TableCell>

                            <TableCell className="text-center">
                              {row.qty}
                            </TableCell>

                            <TableCell className="text-right">
                              {row.unitPrice}
                            </TableCell>

                            <TableCell className="text-right">
                              {row.totalPrice}
                            </TableCell>
                          </TableRow>
                        ))}

                        <TableRow>
                          <TableCell colSpan={4} className="text-right">
                            Sub Total
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            {plan.summary.subtotal}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell colSpan={4} className="text-right">
                            PPN 11%
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            {plan.summary.vat}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell
                            colSpan={4}
                            className="text-right font-bold"
                          >
                            Grand Total
                          </TableCell>
                          <TableCell className="text-right font-bold">
                            {plan.summary.grand}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
