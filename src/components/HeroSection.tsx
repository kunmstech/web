import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="w-full min-h-[400px] bg-white">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center">
        <div className="w-full h-[400px] relative">
          <Image
            src="/images/truck-on-weigh-bridge.jpeg"
            alt="Truck on weighbridge"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-6 px-6">
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
      </div>
    </div>
  );
}
