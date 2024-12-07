import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#002B5B] text-2xl font-bold mb-12">WHO WE ARE</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
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
              download={"Kunmstech_Company_Brochure.pdf"}
              href="/Kunmstech_Company_Brochure.pdf"
              className="bg-[#002B5B] hover:bg-[#002B5B]/90 text-white gap-2 flex"
            >
              <Download className="h-4 w-4" />
              Download Company Brochure
            </Link>
          </div>

          <div className="relative w-full h-[500px] lg:h-[600px]">
            <Image
              src="/images/truck-on-weigh-bridge.jpeg"
              alt="Industrial weighing facility"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
