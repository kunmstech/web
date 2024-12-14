import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="w-full" id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-start min-h-screen border-b">
        <div className="lg:max-w-xl flex ml-auto my-auto pl-10 min-h-screen items-center">
          <div className="space-y-12">
            <h2 className="text-[#002B5B] text-2xl font-bold mb-12">
              WHO WE ARE
            </h2>
            <div>
              <h3 className="text-2xl font-bold mb-4">VISION</h3>
              <p className="text-gray-800 leading-relaxed">
                Our mission is to add value to weighing technology and
                manufacturing industries in Nigeria and other part of the world
                through offering valuable technical support and professional
                service. And to become one of the leading high tech service
                provider in modern weighing metrology.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">PRISM</h3>
              <p className="text-gray-800 leading-relaxed">
                It is simply an approach to performance management which is
                designed to take account of interest of all stakeholders, such
                as clients/customers, employees, legislation, and local
                communities. It is based on the principle that the performance
                of an organization depends on how effective it meets the needs
                and requirement of all its stakeholders. It recognizes the need
                to work with stakeholders to ensure their needs are met
              </p>
            </div>
            <Link
              download={"others/brochure.pdf"}
              href="/others/brochure.pdf"
              className="bg-[#002B5B] hover:bg-[#002B5B]/90 text-white gap-1 w-48 px-2 flex items-center justify-center py-2 rounded-lg"
            >
              <Download className="shrink-0 h-4 w-4" />
              Download Brochure
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[500px] lg:h-screen">
          <Image
            src="/weigh-bridge21.jpg"
            alt="Industrial weighing facility"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
