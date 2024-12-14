"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    image: string;
    detailedDescription: string;
  };
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-[#F1F5FF]">
        <DialogHeader className="p-6 space-y-4">
          {/* <Button
            variant="ghost"
            className="absolute right-4 top-4 bg-[#002B5B] hover:bg-[#002B5B]/90 text-white p-2"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button> */}
          <DialogTitle className="text-2xl font-bold text-center">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="prose prose-sm max-w-none">
            {product.detailedDescription}
          </div>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
