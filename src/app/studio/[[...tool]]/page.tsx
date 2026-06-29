import type { Metadata, Viewport } from "next";
import { SanityStudio } from "@/components/sanity-studio";

export const metadata: Metadata = {
  referrer: "same-origin",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function StudioPage() {
  return <SanityStudio />;
}
