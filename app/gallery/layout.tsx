import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View the gallery of SAMARTHWAVE HOSPITALITY & SERVICES. See our team in action providing premier facility management and technical services.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
