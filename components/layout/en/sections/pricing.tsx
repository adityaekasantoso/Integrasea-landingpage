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
    title: "Basic AIS Receiver Package",
    popular: 0,
    price: 119900000,
    description:
      "Basic AIS Receiver package designed for vessel monitoring with a simple system, cost-efficient, and easy to implement, including AIS devices, monitoring software, internet connection, installation, and delivery.",
    buttonText: "View Details",
    benefitList: [
      "AIS Network Receiver AMEC R150GE",
      "AIS Monitoring Lite Software + ENC S-63",
      "Mini PC with Monitor",
      "Basic Supporting Equipment",
      "Starlink Internet with Public IP (VPN)",
      "Remote Installation & Configuration",
    ],
    table: [
      {
        no: 1,
        name: "AIS Network Receiver AMEC R150GE",
        qty: "1 Set",
        unitPrice: "Rp 35,000,000",
        totalPrice: "Rp 35,000,000",
        notes: ["AIS Receiver", "VHF Antenna with 30m Cable", "GPS Antenna"],
      },
      {
        no: 2,
        name: "AIS Monitoring Software",
        qty: "1 Set",
        unitPrice: "Rp 35,000,000",
        totalPrice: "Rp 35,000,000",
        notes: ["AIS Monitoring Lite Software", "Mini PC with Monitor"],
      },
      {
        no: 3,
        name: "Supporting Equipment",
        qty: "1 Lot",
        unitPrice: "Rp 7,000,000",
        totalPrice: "Rp 7,000,000",
        notes: [
          "Network Router",
          "LAN Cable",
          "Power Cable",
          "Accessories (cable ties, rubber, double tape)",
        ],
      },
      {
        no: 4,
        name: "Starlink Device & Subscription",
        qty: "1 Unit / 1 Year",
        unitPrice: "Rp 24,900,000",
        totalPrice: "Rp 24,900,000",
        notes: [
          "Starlink Device",
          "Starlink Subscription",
          "VPN for Public IP",
        ],
      },
      {
        no: 5,
        name: "Installation",
        qty: "1 Lot",
        unitPrice: "Rp 15,000,000",
        totalPrice: "Rp 15,000,000",
        notes: [
          "Remote Installation & Configuration",
          "Does not include installation costs outside JABODETABEK",
          "Device & antenna installation by customer",
          "Price negotiable based on location",
        ],
      },
      {
        no: 6,
        name: "Equipment Delivery",
        qty: "1 Lot",
        unitPrice: "Rp 3,000,000",
        totalPrice: "Rp 3,000,000",
      },
    ],
    summary: {
      subtotal: "Rp 119,900,000",
      vat: "Rp 13,189,000",
      grand: "Rp 133,089,000",
    },
  },

  {
    key: "combo",
    title: "Combo AIS & Surveillance Package",
    popular: 1,
    price: 199900000,
    description:
      "Complete package combining AIS Monitoring and surveillance systems for maritime monitoring and area security, including PTZ cameras, CCTV, internet connection, installation, and delivery.",
    buttonText: "View Details",
    benefitList: [
      "AIS Network Receiver AMEC R150GE",
      "AIS Monitoring Software + ENC S-63",
      "Outdoor PTZ Camera HIKVISION IP66",
      "CCTV System (NVR + Storage)",
      "Mini PC & Monitoring Display",
      "Starlink Internet with Public IP (VPN)",
      "Installation Service",
      "Equipment Delivery",
    ],
    table: [
      {
        no: 1,
        name: "AIS Network Receiver AMEC R150GE",
        qty: "1 Set",
        unitPrice: "Rp 35,000,000",
        totalPrice: "Rp 35,000,000",
        notes: ["AIS Receiver", "VHF Antenna with 30m Cable", "GPS Antenna"],
      },
      {
        no: 2,
        name: "AIS Monitoring Software",
        qty: "1 Set",
        unitPrice: "Rp 35,000,000",
        totalPrice: "Rp 35,000,000",
        notes: ["AIS Monitoring Lite Software", "Mini PC with Monitor"],
      },
      {
        no: 3,
        name: "Outdoor PTZ Camera HIKVISION DS-2SE7C432MW",
        qty: "1 Set",
        unitPrice: "Rp 35,000,000",
        totalPrice: "Rp 35,000,000",
        notes: ["PTZ Camera", "Weatherproof IP66"],
      },
      {
        no: 4,
        name: "CCTV Monitoring System",
        qty: "1 Set",
        unitPrice: "Rp 26,000,000",
        totalPrice: "Rp 26,000,000",
        notes: [
          "Network Video Recorder (NVR)",
          "24-inch Monitor",
          "16 TB Surveillance Hard Disk",
        ],
      },
      {
        no: 5,
        name: "Supporting Equipment",
        qty: "1 Lot",
        unitPrice: "Rp 12,000,000",
        totalPrice: "Rp 12,000,000",
        notes: [
          "Network Router",
          "LAN Cable",
          "Power Cable",
          "Accessories",
          "4U Rack",
          "POE PSU, etc.",
        ],
      },
      {
        no: 6,
        name: "Internet Connection (Starlink)",
        qty: "1 Unit / 1 Year",
        unitPrice: "Rp 24,900,000",
        totalPrice: "Rp 24,900,000",
        notes: [
          "Starlink Device",
          "Starlink Subscription",
          "VPN for Public IP",
        ],
      },
      {
        no: 7,
        name: "Installation (Excludes Transport & Accommodation)",
        qty: "1 Lot",
        unitPrice: "Rp 27,000,000",
        totalPrice: "Rp 27,000,000",
        notes: [
          "Installation & Configuration",
          "Price adjusted based on installation location",
        ],
      },
      {
        no: 8,
        name: "Equipment Delivery",
        qty: "1 Lot",
        unitPrice: "Rp 5,000,000",
        totalPrice: "Rp 5,000,000",
      },
    ],
    summary: {
      subtotal: "Rp 199,900,000",
      vat: "Rp 21,989,000",
      grand: "Rp 221,889,000",
    },
  },

  {
    key: "advance",
    title: "Advance AIS & Surveillance Package",
    popular: 1,
    price: 267700000,
    description:
      "Advanced package for high-level maritime monitoring and security, equipped with professional AIS, recording systems, PTZ cameras, CCTV, complete supporting equipment, and optional satellite internet connection.",
    buttonText: "View Details",
    benefitList: [
      "AIS Network Receiver AMEC R150GE",
      "Professional AIS Software (ENC S-63)",
      "High-Performance Monitoring PC",
      "Outdoor PTZ Camera IP66",
      "High-Capacity CCTV System",
      "Complete Supporting Equipment + Power Backup",
      "Professional Installation Service",
      "Starlink Internet Connection (Optional)",
    ],
    table: [
      {
        no: 1,
        name: "AIS Network Receiver AMEC R150GE",
        qty: "1 Set",
        unitPrice: "Rp 35,000,000",
        totalPrice: "Rp 35,000,000",
        notes: ["AIS Receiver", "VHF Antenna with 30m Cable", "GPS Antenna"],
      },
      {
        no: 2,
        name: "AIS Monitoring Software",
        qty: "1 Set",
        unitPrice: "Rp 85,000,000",
        totalPrice: "Rp 85,000,000",
        notes: ["Navi Pro Port Watch Software"],
      },
      {
        no: 3,
        name: "AIS Monitoring & Recording PC (1 Year)",
        qty: "1 Unit",
        unitPrice: "Rp 25,000,000",
        totalPrice: "Rp 25,000,000",
        notes: [
          "Intel Core i7 Processor",
          "32GB DDR4 RAM",
          "2TB SSD",
          "1-Year AIS Data Recording",
        ],
      },
      {
        no: 4,
        name: "Outdoor PTZ Camera HIKVISION DS-2SE7C432MW",
        qty: "1 Set",
        unitPrice: "Rp 35,000,000",
        totalPrice: "Rp 35,000,000",
        notes: ["PTZ Camera", "Weatherproof IP66"],
      },
      {
        no: 5,
        name: "CCTV Monitoring System",
        qty: "1 Set",
        unitPrice: "Rp 26,000,000",
        totalPrice: "Rp 26,000,000",
        notes: [
          "Network Video Recorder (NVR)",
          "24-inch Monitor",
          "16 TB Surveillance Hard Disk",
        ],
      },
      {
        no: 6,
        name: "Supporting Equipment",
        qty: "1 Lot",
        unitPrice: "Rp 21,800,000",
        totalPrice: "Rp 21,800,000",
        notes: [
          "Network Router",
          "Network Switch",
          "4U Rack",
          "650W UPS Backup",
          "POE Adapter",
          "Antenna Bracket",
          "CCTV Bracket",
          "Panel Box",
        ],
      },
      {
        no: 7,
        name: "Installation (Excludes Transport & Accommodation)",
        qty: "1 Lot",
        unitPrice: "Rp 10,000,000",
        totalPrice: "Rp 10,000,000",
        notes: [
          "Installation & Configuration",
          "Does not include costs outside JABODETABEK",
        ],
      },
      {
        no: 8,
        name: "Satellite Modem for Internet Connection (Optional)",
        qty: "1 Set / 1 Year",
        unitPrice: "Rp 24,900,000",
        totalPrice: "Rp 24,900,000",
        notes: [
          "Starlink Terminal with UPS",
          "1-Year Starlink Data Subscription",
        ],
      },
      {
        no: 9,
        name: "Equipment Delivery",
        qty: "1 Lot",
        unitPrice: "Rp 5,000,000",
        totalPrice: "Rp 5,000,000",
      },
    ],
    summary: {
      subtotal: "Rp 267,700,000",
      vat: "Rp 29,447,000",
      grand: "Rp 297,147,000",
    },
  },
];

export const PricingSection = () => {
  const [openPlan, setOpenPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="container py-14 sm:py-22">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing Packages
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the right solution for your port
      </h2>

      <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Flexible packages designed for AIS and CCTV monitoring needs.
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

                <DialogContent className="max-w-5xl">
                  <DialogHeader>
                    <DialogTitle>{plan.title} Price Details</DialogTitle>
                  </DialogHeader>

                  <div className="max-h-[60vh] overflow-auto pr-2 space-y-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-14 text-center">NO</TableHead>
                          <TableHead>DESCRIPTION</TableHead>
                          <TableHead className="text-center">QTY</TableHead>
                          <TableHead className="text-right">
                            UNIT PRICE
                          </TableHead>
                          <TableHead className="text-right">
                            TOTAL PRICE
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
                            VAT 11%
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
