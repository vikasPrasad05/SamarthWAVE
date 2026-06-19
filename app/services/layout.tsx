import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore SAMARTHWAVE's comprehensive facility management solutions, including housekeeping, pantry management, technical services, and complete staffing solutions.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
