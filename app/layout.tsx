import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import LenisScroll from "@/components/LenisScroll";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "SAMARTHWAVE HOSPITALITY & SERVICES - Premier Facility Management",
  description: "Leading facility management services provider offering housekeeping, pantry services, technical services, manpower supply, and comprehensive staffing solutions.",
  keywords: "facility management, housekeeping services, pantry services, manpower supply, Mumbai facility services, cleaning services, technical services",
  authors: [{ name: "SAMARTHWAVE HOSPITALITY & SERVICES PVT LTD" }],
  openGraph: {
    title: "SAMARTHWAVE HOSPITALITY & SERVICES - Premier Facility Management",
    description: "Professional facility management and staffing solutions",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable}`}>
      <body className={poppins.className}>
        <LenisScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </LenisScroll>
      </body>
    </html>
  );
}
