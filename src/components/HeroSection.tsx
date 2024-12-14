import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="w-full min-h-[calc(100svh-130px)] bg-white" id="hero">
      <div className="w-full grid lg:grid-cols-2 items-center">
        <div className="flex min-h-[50svh] py-5 lg:h-[calc(100svh-100px)] items-start justify-center flex-col max-w-xl gap-6 px-6 lg:order-2">
          <h1 className="text-[#002B5B] text-3xl md:text-4xl font-bold leading-tight">
            KUNMSTECH WEIGH & AUTOMATION LTD
          </h1>

          <p className="text-gray-800 text-lg leading-relaxed">
            High Tech Solution In Sales, Installation & Maintenance Of Digital
            And Analog Weighbridge, Lpg Scales, Weighing Scales, Multimedia
            Packages, Laboratory Equipment & Machinery Lifter In Modern
            Engineering Metrology And Consultancy Service
          </p>

          <Button className="bg-[#002B5B] text-white hover:bg-[#002B5B]/90 w-fit px-8 py-6 text-lg rounded-lg">
            Learn More
          </Button>
        </div>

        <div className="w-full h-[50svh] lg:h-[calc(100svh-100px)] bg-gradient-to-br from-[#002B5B] to-[#010842] relative">
          <Image
            // src="/truck-on-weigh-bridge2.webp"
            src="/truck-on-weigh-bridge1.jpg"
            alt="Truck on weighbridge"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
