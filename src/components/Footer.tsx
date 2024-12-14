import Image from "next/image";
import Link from "next/link";
import { Facebook, Globe, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-[#002B5B] text-white py-16 overflow-hidden"
      id="contact"
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#002B5B]/80 to-[#002B5B]"
        style={{
          //   backgroundImage: 'url("/images/truck-on-weigh-bridge.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo-typography-white.png"
            alt="KUNMSTECH"
            width={300}
            height={60}
            className="h-[60px] w-auto"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12 text-sm">
          <Link
            href="https://facebook.com/kunmstech"
            className="flex items-center gap-2 hover:text-white/80"
          >
            <Facebook className="h-5 w-5" />
            kunmstech
          </Link>
          <Link
            href="https://Kunmstechweighing.com"
            className="flex items-center gap-2 hover:text-white/80"
          >
            <Globe className="h-5 w-5" />
            Kunmstechweighing.com
          </Link>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 flex-shrink-0" />
            <span>08124196160, 08101735448, 08072580372</span>
          </div>
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-4">Lagos Office:</h3>
            <p className="text-white/90">
              Abeokuta Expressway, Abucon Bus stop,
              <br />
              Opposite Master Energy Filling Station,
              <br />
              Alagbado, Lagos.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-4">Kano Office</h3>
            <p className="text-white/90">
              327, Aminu Kano Way,
              <br />
              Beside Fantiya Mosque,
              <br />
              Goron Dutse, Kano State.
            </p>
          </div>
        </div>

        {/* Registration & Company Name */}
        <div className="space-y-4 mb-12">
          <p className="text-white/90">RC: #1913783</p>
          <h2 className="text-2xl font-bold">
            KUNMSTECH WEIGH & AUTOMATION LTD
          </h2>
        </div>

        {/* Copyright */}
        <div className="text-sm text-white/80">
          Copyright © {new Date().getFullYear()} Ralph Concept Company Inc.
        </div>
      </div>
    </footer>
  );
}
