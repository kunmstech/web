"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImageSlideshow } from "./ImageSlideshow";
import { Button } from "./ui/button";

const images = [
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Digital display unit",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Load cell equipment",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Packaging machinery",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Weighbridge installation",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Animal weighing cage",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Platform details",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Standing scale",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Maintenance work",
    category: "team",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Weighbridge installation site",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Platform details",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Standing scale",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Maintenance work",
    category: "team",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Weighbridge installation site",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Platform details",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Standing scale",
    category: "equipment",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Maintenance work",
    category: "team",
  },
  {
    src: "/images/truck-on-weigh-bridge.jpeg",
    alt: "Weighbridge installation site",
    category: "equipment",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [category, setCategory] = React.useState<string>("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const imagesPerPage = 9;

  const filteredImages = React.useMemo(() => {
    return category === "all"
      ? images
      : images.filter((img) => img.category === category);
  }, [category]);

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const currentImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#002B5B] text-2xl font-bold">
            GALLERY & EQUIPMENTS
          </h2>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-[#F1F5FF]">
                  Equipment
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setCategory("all")}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory("equipment")}>
                  Equipment
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-[#F1F5FF]">
                  Team
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setCategory("team")}>
                  Team
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "outline"}
                className={currentPage === i + 1 ? "bg-[#002B5B]" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {selectedImage !== null && (
          <ImageSlideshow
            images={filteredImages}
            currentIndex={selectedImage}
            isOpen={selectedImage !== null}
            onClose={() => setSelectedImage(null)}
            onNavigate={setSelectedImage}
          />
        )}
      </div>
    </div>
  );
}
