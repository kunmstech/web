"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import { ProductModal } from "./ProductModal";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    title: "WEIGHBRIDGE",
    image: "/truck-on-weigh-bridge4.webp",
    description:
      "Accurate and durable solutions for measuring vehicle weight, ensuring efficiency in logistics and compliance with weight regulations.",
    detailedDescription:
      "Weighbridges are large-scale systems designed specifically for vehicles, providing accurate weight measurement to ensure efficient load management and compliance with weight regulations. These tools are indispensable for logistics and manufacturing industries, enabling streamlined operations and precise weight monitoring for heavy-duty applications.",
  },
  {
    title: "PLATFORM SCALE",
    image: "/platform-scale2.jpg",
    description:
      "Versatile and precise solutions for measuring goods of various sizes, enhancing efficiency in warehouses and manufacturing.",
    detailedDescription:
      "Platform scales provide accurate and durable weight measurement solutions for a wide range of goods. Designed for industrial, commercial, and agricultural applications, they are ideal for warehouses, manufacturing plants, and logistics operations. With their robustness and versatility, platform scales contribute to operational accuracy and efficiency in diverse settings.",
  },
  {
    title: "FLOOR SCALE AND INDICATOR",
    image: "/floor-scale4.jpg",
    description:
      "Durable solutions for precise weight measurement in industrial and commercial use. Designed for accuracy, efficiency, and heavy-duty performance.",
    detailedDescription:
      "Our indicators, platforms, and floor scales provide comprehensive weighing solutions for various industrial and commercial applications. These systems combine advanced technology with robust construction to ensure accurate measurements and long-term reliability.",
  },
  {
    title: "LOAD CELL AND ACCESSORIES",
    image: "/load-cell.jpg",
    description:
      "High-precision load cells and accessories designed for accurate weight measurement, durability, and seamless technical support for industrial systems.",
    detailedDescription:
      "Our load cells and accessories represent the pinnacle of weighing technology, offering unmatched precision and reliability for industrial applications. Each component is engineered to provide accurate measurements while maintaining long-term stability and durability.",
  },
  {
    title: "LPG FILLING SCALES",
    image: "/lpg-tank-bulktail.jpg",
    description:
      "Ensure accurate LPG measurements during filling. They enhance safety, reduce waste, and comply with industry standards often featuring digital displays and automatic shutoffs.",
    detailedDescription:
      "Our LPG filling scales combine precision with safety features to ensure accurate measurements during the filling process. These systems are designed to meet strict industry standards while providing efficient and reliable operation.",
  },
  {
    title: "MANUAL & ELECTRONIC STACKERS",
    image: "/electric-stacker2.jpg",
    description:
      "Manual and electronic stackers are used to lift and move goods. Manual stackers are hand-operated for light loads, while electronic stackers are powered for heavier loads and greater efficiency.",
    detailedDescription:
      "Our range of manual and electronic stackers provides versatile solutions for material handling needs. From lightweight manual options to powerful electronic systems, each stacker is designed to maximize efficiency and safety in your operations.",
  },
  // {
  //   title: "MACHINERY AND EQUIPMENT",
  //   image: "/images/truck-on-weigh-bridge.jpeg",
  //   description:
  //     "Tools and machines used for industrial tasks like lifting, loading, and manufacturing, boosting efficiency and safety in sectors such as construction and logistics.",
  //   detailedDescription:
  //     "We offer a comprehensive range of industrial machinery and equipment designed to enhance productivity and safety in various sectors. Our solutions are built to meet the demanding requirements of modern industrial operations.",
  // },
];

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  return (
    <section className="w-full bg-[#F1F5FF] py-16" id="product">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[#002B5B] text-2xl font-bold mb-8">PRODUCT</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.title}
              className="bg-white shadow-sm hover:scale-105 transition-all"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-4 line-clamp-2 px-5">
                  {product.title}
                </h3>
                <div className="relative w-full aspect-square mb-4 shadow border rounded-lg overflow-clip">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                  {product.description}
                </p>
                <div className="flex gap-2 w-full">
                  <Button
                    className="flex-1 bg-[#002B5B] hover:bg-[#002B5B]/90 text-white group"
                    onClick={() => setSelectedProduct(product)}
                  >
                    More Info
                    <MoveRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                  </Button>
                  <Link
                    href={`https://wa.me/2348061719533?text=${encodeURIComponent(
                      `Hi, I'd like more information about the ${product.title}.`
                    )}`}
                    passHref
                    legacyBehavior
                    target="_blank"
                  >
                    <Button
                      className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
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
