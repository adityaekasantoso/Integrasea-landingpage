"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { ToggleTheme } from "./toogle-theme";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";

interface RouteProps {
  href: string;
  labelId: string;
  labelEn: string;
}

const routeList: RouteProps[] = [
  { href: "#services", labelId: "Layanan", labelEn: "Services" },
  { href: "#testimonials", labelId: "Testimoni", labelEn: "Testimonials" },
  { href: "#pricing", labelId: "Harga", labelEn: "Pricing" },
  { href: "#faq", labelId: "FAQ", labelEn: "FAQ" },
  { href: "#contact", labelId: "Kontak", labelEn: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<"id" | "en">("id");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const path = window.location.pathname;
    if (path.startsWith("/en")) {
      setLanguage("en");
    } else {
      setLanguage("id");
    }
  }, []);

  const handleLanguageToggle = () => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    if (language === "id") {
      const newPath = "/en" + currentPath;
      window.location.href = newPath + currentHash;
    } else {
      const newPath = currentPath.replace("/en", "") || "/";
      window.location.href = newPath + currentHash;
    }
  };

  const getLink = (href: string) => {
    if (href.startsWith("#")) return href;
    return language === "en" ? "/en" + href : href;
  };

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      {/* Logo */}
      <div className="font-bold text-lg flex items-center cursor-default">
        <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
        IntegraSea
      </div>

      {/* Mobile Menu (hanya < lg) */}
      {mounted && (
        <div className="flex items-center lg:hidden gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <div className="flex items-center cursor-default">
                      <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                      IntegraSea
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routeList.map((route) => (
                    <Button
                      key={route.href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base"
                    >
                      <a href={getLink(route.href)}>
                        {language === "en" ? route.labelEn : route.labelId}
                      </a>
                    </Button>
                  ))}

                  <Button
                    variant="ghost"
                    className="justify-start text-base"
                    onClick={() => setIsPortfolioOpen(true)}
                  >
                    {language === "en" ? "Portfolio" : "Portofolio"}
                  </Button>

                  {/* Tombol bahasa hanya di panel mobile */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="justify-start text-base mt-2"
                    onClick={handleLanguageToggle}
                  >
                    {language.toUpperCase()}
                  </Button>
                </div>
              </div>

              <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                <Separator className="mb-2" />
                <ToggleTheme />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      )}

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {routeList.map((route) => (
            <NavigationMenuItem key={route.href}>
              <NavigationMenuLink asChild>
                <a href={getLink(route.href)} className="text-base px-3">
                  {language === "en" ? route.labelEn : route.labelId}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <Button
              variant="ghost"
              className="text-base px-3"
              onClick={() => setIsPortfolioOpen(true)}
            >
              {language === "en" ? "Portfolio" : "Portofolio"}
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Desktop Dark Mode + Language (hanya ≥ lg) */}
      {mounted && (
        <div className="hidden lg:flex items-center gap-2">
          <ToggleTheme />
          <Button size="sm" variant="outline" onClick={handleLanguageToggle}>
            {language.toUpperCase()}
          </Button>
        </div>
      )}

      {/* Portfolio Dialog */}
      <Dialog open={isPortfolioOpen} onOpenChange={setIsPortfolioOpen}>
        <DialogContent className="max-w-7xl w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader className="mb-2">
            <DialogTitle className="text-xl font-bold">
              {language === "en" ? "Portfolio" : "Portofolio"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 space-y-6">
            <p className="text-base leading-relaxed">
              {language === "en"
                ? "MultiIntegra Technology Group is a leading ICT System Integrator and Solution Provider, trusted for delivering end-to-end, high-performance technology solutions. Our strength lies in a team of over 100 qualified technicians and more than 25 certified, well-trained engineers supported by a modern R&D center, advanced testing facilities, and in-house software development capabilities."
                : "MultiIntegra Technology Group adalah integrator sistem ICT terkemuka dan penyedia solusi, dipercaya dalam menyediakan solusi teknologi menyeluruh dan berkinerja tinggi. Kekuatan kami terletak pada tim lebih dari 100 teknisi berkualifikasi dan lebih dari 25 insinyur bersertifikat, didukung pusat R&D modern, fasilitas pengujian canggih, dan kemampuan pengembangan perangkat lunak internal."}
            </p>

            <div>
              <p className="font-semibold mb-2">
                {language === "en"
                  ? "Our group includes:"
                  : "Grup kami mencakup:"}
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>PT MultiIntegra</li>
                <li>PT Panorama Graha Teknologi</li>
                <li>PT MultiIntegra Digital</li>
                <li>PT MultiIntegra Medika</li>
              </ul>
            </div>

            <p className="text-base leading-relaxed">
              {language === "en"
                ? "We bring together innovation, technical precision, and local expertise to deliver integrated solutions that meet the evolving needs of businesses across industries."
                : "Kami memadukan inovasi, presisi teknis, dan keahlian lokal untuk menghadirkan solusi terintegrasi yang memenuhi kebutuhan bisnis yang terus berkembang di berbagai industri."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-center">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <p className="text-2xl font-bold">2005</p>
                <p className="text-sm">
                  {language === "en" ? "Year Established" : "Tahun Berdiri"}
                </p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <p className="text-2xl font-bold">350+</p>
                <p className="text-sm">
                  {language === "en"
                    ? "Total Installations"
                    : "Total Instalasi"}
                </p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <p className="text-2xl font-bold">120+</p>
                <p className="text-sm">
                  {language === "en" ? "Major Projects" : "Proyek Utama"}
                </p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <p className="text-2xl font-bold">100+</p>
                <p className="text-sm">
                  {language === "en"
                    ? "Professional Staff"
                    : "Staf Profesional"}
                </p>
              </div>
            </div>

            <div className="overflow-auto mt-6">
              <img
                src="/project-site.png"
                alt="Project Overview"
                className="w-full h-auto rounded-lg border border-secondary"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="font-semibold mb-2">
                {language === "en" ? "Project Gallery" : "Galeri Proyek"}
              </p>
              <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                {Array.from({ length: 8 }).map((_, i) => (
                  <img
                    key={i}
                    src="/project-site.png"
                    alt={`Project ${i + 1}`}
                    className="w-64 h-40 object-cover rounded-lg border border-secondary flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="font-semibold mb-4 text-lg">
                {language === "en" ? "Our Customers" : "Pelanggan Kami"}
              </p>
              <div className="flex justify-center space-x-8 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                {[
                  "adaro",
                  "bayan",
                  "dishub",
                  "harita",
                  "indonesiapower",
                  "neo",
                  "sumbawajutaraya",
                ].map((logo) => (
                  <img
                    key={logo}
                    src={`/logos/${logo}.png`}
                    alt={logo}
                    className="h-12 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button onClick={() => setIsPortfolioOpen(false)}>
              {language === "en" ? "Close" : "Tutup"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};
