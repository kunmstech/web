"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageSlideshowProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageSlideshow({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageSlideshowProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl bg-black/95 border-none">
        <DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:text-white/80 z-50"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogHeader>
        <div className="relative aspect-video">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
            onClick={() =>
              onNavigate(
                currentIndex === 0 ? images.length - 1 : currentIndex - 1
              )
            }
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
            onClick={() =>
              onNavigate(
                currentIndex === images.length - 1 ? 0 : currentIndex + 1
              )
            }
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
