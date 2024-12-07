"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const navItems = [
  { name: "PRODUCT", href: "#" },
  // { name: "CERTIFICATE", href: "#" },
  { name: "EQUIPMENT", href: "#" },
  { name: "ABOUT US", href: "#" },
  { name: "CONTACT US", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-[#002B5B] py-4 px-4 w-full top-0 z-50">
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-around items-center w-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden w-full flex justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#002B5B] border-none w-[300px] p-0"
            >
              <div className="flex flex-col gap-4 p-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white absolute right-4 top-4"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-white/80 transition-colors font-medium py-2 px-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
