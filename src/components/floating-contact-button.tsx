"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingContactButtonsProps {
  phoneNumber: string;
  whatsappNumber: string;
}

export function FloatingContactButtons({
  phoneNumber,
  whatsappNumber,
}: FloatingContactButtonsProps) {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I'm interested in your products/services."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <Button
        onClick={handleWhatsApp}
        className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full p-3 shadow-lg"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </Button>
      <Button
        onClick={handleCall}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg"
        aria-label="Place a call"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
}
