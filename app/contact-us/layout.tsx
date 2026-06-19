import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SAMARTHWAVE HOSPITALITY & SERVICES. Contact us for housekeeping, manpower supply, and comprehensive facility management inquiries.",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
