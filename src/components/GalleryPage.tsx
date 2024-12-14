"use client";

import * as React from "react";
import Image from "next/image";
import { ImageSlideshow } from "./ImageSlideshow";
import { Button } from "./ui/button";
import { Pagination } from "./pagination";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  category: string[];
}
export const images: ImageItem[] = [
  {
    id: 1,
    src: "/animal-scale1.jpg",
    alt: "Animal Scale 1",
    category: ["scales", "agriculture"],
  },
  {
    id: 2,
    src: "/animal-scale2.jpg",
    alt: "Animal Scale 2",
    category: ["scales", "agriculture"],
  },
  {
    id: 3,
    src: "/electric-stacker1.jpg",
    alt: "Electric Stacker 1",
    category: ["equipment", "industrial"],
  },
  {
    id: 4,
    src: "/electric-stacker2.jpg",
    alt: "Electric Stacker 2",
    category: ["equipment", "industrial"],
  },
  {
    id: 5,
    src: "/electronic-load-cell1.jpg",
    alt: "Electronic Load Cell 1",
    category: ["equipment", "industrial", "load-cells"],
  },
  {
    id: 6,
    src: "/electronic-load-cell2.jpg",
    alt: "Electronic Load Cell 2",
    category: ["equipment", "industrial", "load-cells"],
  },
  {
    id: 7,
    src: "/electronic-load-cell3.jpg",
    alt: "Electronic Load Cell 3",
    category: ["equipment", "industrial", "load-cells"],
  },
  {
    id: 8,
    src: "/electronic-load-cell4.jpg",
    alt: "Electronic Load Cell 4",
    category: ["equipment", "industrial", "load-cells"],
  },
  {
    id: 9,
    src: "/floor-scale1.jpg",
    alt: "Floor Scale 1",
    category: ["scales", "industrial"],
  },
  {
    id: 10,
    src: "/floor-scale2.jpg",
    alt: "Floor Scale 2",
    category: ["scales", "industrial"],
  },
  {
    id: 11,
    src: "/floor-scale3.jpg",
    alt: "Floor Scale 3",
    category: ["scales", "industrial"],
  },
  {
    id: 12,
    src: "/floor-scale4.jpg",
    alt: "Floor Scale 4",
    category: ["scales", "industrial"],
  },
  {
    id: 13,
    src: "/led-score-board.jpg",
    alt: "LED Score Board",
    category: ["equipment", "display"],
  },
  {
    id: 14,
    src: "/load-cell.jpg",
    alt: "Load Cell",
    category: ["equipment", "industrial", "load-cells"],
  },
  {
    id: 15,
    src: "/micro-balance1.jpg",
    alt: "Micro Balance 1",
    category: ["scales", "laboratory"],
  },
  {
    id: 16,
    src: "/micro-balance2.jpg",
    alt: "Micro Balance 2",
    category: ["scales", "laboratory"],
  },
  {
    id: 17,
    src: "/micro-balance3.jpg",
    alt: "Micro Balance 3",
    category: ["scales", "laboratory"],
  },
  {
    id: 18,
    src: "/platform-scale1.jpg",
    alt: "Platform Scale 1",
    category: ["scales", "industrial"],
  },
  {
    id: 19,
    src: "/platform-scale2.jpg",
    alt: "Platform Scale 2",
    category: ["scales", "industrial"],
  },
  {
    id: 20,
    src: "/platform-scale3.jpg",
    alt: "Platform Scale 3",
    category: ["scales", "industrial"],
  },
  {
    id: 21,
    src: "/setup.jpg",
    alt: "Setup",
    category: ["equipment", "installation"],
  },
  ...Array.from({ length: 41 }, (_, i) => ({
    id: 22 + i,
    src: `/staffs${i + 1}.jpg`,
    alt: `Staff ${i + 1}`,
    category: ["staffs", "company"],
  })),
  ...Array.from({ length: 9 }, (_, i) => ({
    id: 63 + i,
    src: `/truck-on-weigh-bridge${i + 1}.jpg`,
    alt: `Truck on Weigh Bridge ${i + 1}`,
    category: ["scales", "transportation", "weigh-bridge"],
  })),
  ...Array.from({ length: 46 }, (_, i) => ({
    id: 72 + i,
    src: `/weigh-bridge${i + 1}.jpg`,
    alt: `Weigh Bridge ${i + 1}`,
    category: ["scales", "industrial", "weigh-bridge"],
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 118 + i,
    src: `/weighing-indicator${i + 1}.jpg`,
    alt: `Weighing Indicator ${i + 1}`,
    category: ["equipment", "display"],
  })),
];

const allCategories = [
  "equipment",
  "display",
  "accessories",
  "staffs",
  "weigh-bridge",
  "scales",
  "industrial",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );

  const [currentPage, setCurrentPage] = React.useState(1);
  const imagesPerPage = 9;

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const filteredImages = React.useMemo(() => {
    return selectedCategories.length === 0
      ? images
      : images.filter((img) =>
          img.category.some((cat) => selectedCategories.includes(cat))
        );
  }, [selectedCategories]);

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const currentImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <div className="w-full py-16 px-4" id="gallery">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-3">
          <h2 className="text-[#002B5B] text-2xl font-bold">
            GALLERY & EQUIPMENTS
          </h2>
          <div className="flex gap-1 flex-wrap justify-center ">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategories.includes(category) ? "default" : "outline"
                }
                onClick={() => toggleCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
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
