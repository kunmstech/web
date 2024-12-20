import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FloatingContactButtons } from "@/components/floating-contact-button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kunmstech Weighing And Automation",
  description:
    "High Tech Solution In Sales, Installation & Maintenance OfDigital And Analog Weighbridge, Lpg Scales, WeighingScales, Multimedia Packages, Laboratory Equipment &Machinery Lifter In Modern Engineering Metrology AndConsultancy Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingContactButtons
          phoneNumber="+2348124196160"
          whatsappNumber="+2348124196160"
        />
      </body>
    </html>
  );
}
