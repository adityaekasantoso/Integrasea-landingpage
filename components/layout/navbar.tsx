"use client";

import { Menu } from "lucide-react";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
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
  const [language, setLanguage] = React.useState<"id" | "en">("id");
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

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
      window.location.href = "/en" + currentPath + currentHash;
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
      <div className="flex items-center gap-3 cursor-default">
        <Image
          src={
            theme === "dark"
              ? "/logo-integrasea-white.png"
              : "/logo-integrasea-black.png"
          }
          alt="IntegraSea"
          width={150}
          height={40}
          className="h-7 w-auto object-contain"
        />
      </div>

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
                    <Image
                      src={
                        theme === "dark"
                          ? "/logo-integrasea-white.png"
                          : "/logo-integrasea-black.png"
                      }
                      alt="IntegraSea"
                      width={150}
                      height={40}
                      className="h-7 w-auto object-contain"
                    />
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
                        {language === "en"
                          ? route.labelEn
                          : route.labelId}
                      </a>
                    </Button>
                  ))}

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
        </NavigationMenuList>
      </NavigationMenu>

      {mounted && (
        <div className="hidden lg:flex items-center gap-2">
          <ToggleTheme />
          <Button size="sm" variant="outline" onClick={handleLanguageToggle}>
            {language.toUpperCase()}
          </Button>
        </div>
      )}
    </header>
  );
};
