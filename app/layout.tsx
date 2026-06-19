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
  metadataBase: new URL('https://samarthwavehospitality.com'),
  title: {
    default: "SAMARTHWAVE HOSPITALITY & SERVICES | Premier Facility Management",
    template: "%s | SAMARTHWAVE",
  },
  description: "Leading facility management services provider offering housekeeping, pantry services, technical services, manpower supply, and comprehensive staffing solutions across India.",
  keywords: "facility management, housekeeping services, pantry services, manpower supply, Mumbai facility services, cleaning services, technical services, staffing solutions India, soft service model, staffing model",
  authors: [{ name: "SAMARTHWAVE HOSPITALITY & SERVICES PVT LTD" }],
  openGraph: {
    title: "SAMARTHWAVE HOSPITALITY & SERVICES | Premier Facility Management",
    description: "Professional facility management and staffing solutions tailored to your business.",
    url: 'https://samarthwavehospitality.com',
    siteName: 'SAMARTHWAVE',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'SAMARTHWAVE Logo',
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMARTHWAVE HOSPITALITY & SERVICES",
    description: "Professional facility management and staffing solutions tailored to your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SAMARTHWAVE HOSPITALITY & SERVICES",
              "image": "https://samarthwavehospitality.com/icon.png",
              "url": "https://samarthwavehospitality.com",
              "telephone": "+919510401702",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C6/82 old c type Koparli Rd Near R k Desai College",
                "addressLocality": "Vapi",
                "postalCode": "396195",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
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
