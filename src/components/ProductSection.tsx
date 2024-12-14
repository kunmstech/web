"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import { ProductModal } from "./ProductModal";

const products = [
  {
    title: "WEIGHBRIDGE & PLATFORM SCALE",
    image: "/weigh-bridge.jpg",
    description:
      "Accurate and durable solutions for measuring vehicle and goods weight, ensuring efficiency in logistics, manufacturing, and agriculture.",
    detailedDescription:
      "Weighbridge and platform scales are essential tools for accurate weight measurement in industrial, commercial, and agricultural applications. Weighbridges are large-scale systems designed for vehicles, ensuring efficient load management and compliance with weight regulations. Platform scales, on the other hand, provide precise measurements for goods of various sizes, offering durability and versatility for warehouses, manufacturing plants, and logistics. Both solutions enhance operational efficiency and accuracy in weight monitoring.",
  },
  {
    title: "INDICATOR, PLATFORM, FLOORSCALE",
    image: "/images/truck-on-weigh-bridge.jpeg",
    description:
      "Durable solutions for precise weight measurement in industrial and commercial use. Designed for accuracy, efficiency, and heavy-duty performance.",
    detailedDescription:
      "Our indicators, platforms, and floor scales provide comprehensive weighing solutions for various industrial and commercial applications. These systems combine advanced technology with robust construction to ensure accurate measurements and long-term reliability.",
  },
  {
    title: "LOADCELL AND ACCESSORIES",
    image: "/images/truck-on-weigh-bridge.jpeg",
    description:
      "High-precision load cells and accessories designed for accurate weight measurement, durability, and seamless technical support for industrial systems.",
    detailedDescription:
      "Our load cells and accessories represent the pinnacle of weighing technology, offering unmatched precision and reliability for industrial applications. Each component is engineered to provide accurate measurements while maintaining long-term stability and durability.",
  },
  {
    title: "LPG FILLING SCALES",
    image: "/images/truck-on-weigh-bridge.jpeg",
    description:
      "Ensure accurate LPG measurements during filling. They enhance safety, reduce waste, and comply with industry standards often featuring digital displays and automatic shutoffs.",
    detailedDescription:
      "Our LPG filling scales combine precision with safety features to ensure accurate measurements during the filling process. These systems are designed to meet strict industry standards while providing efficient and reliable operation.",
  },
  {
    title: "MANUAL & ELECTRONIC STACKERS",
    image: "/images/truck-on-weigh-bridge.jpeg",
    description:
      "Manual and electronic stackers are used to lift and move goods. Manual stackers are hand-operated for light loads, while electronic stackers are powered for heavier loads and greater efficiency.",
    detailedDescription:
      "Our range of manual and electronic stackers provides versatile solutions for material handling needs. From lightweight manual options to powerful electronic systems, each stacker is designed to maximize efficiency and safety in your operations.",
  },
  {
    title: "MACHINERY AND EQUIPMENT",
    image: "/images/truck-on-weigh-bridge.jpeg",
    description:
      "Tools and machines used for industrial tasks like lifting, loading, and manufacturing, boosting efficiency and safety in sectors such as construction and logistics.",
    detailedDescription:
      "We offer a comprehensive range of industrial machinery and equipment designed to enhance productivity and safety in various sectors. Our solutions are built to meet the demanding requirements of modern industrial operations.",
  },
];

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  return (
    <section className="w-full bg-[#F1F5FF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[#002B5B] text-2xl font-bold mb-8">PRODUCT</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.title}
              className="bg-white border-none shadow-sm"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-4 line-clamp-2 px-5">
                  {product.title}
                </h3>
                <div className="relative w-full h-[200px] mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                  {product.description}
                </p>
                <Button
                  className="bg-[#002B5B] hover:bg-[#002B5B]/90 text-white"
                  onClick={() => setSelectedProduct(product)}
                >
                  Click For More Info
                  <MoveRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedProduct && (
          <ProductModal
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            product={selectedProduct}
          />
        )}
      </div>
    </section>
  );
}
