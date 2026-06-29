import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oglas-ai.vercel.app"),
  title: {
    default: "Oglas AI | Custom Software & AI Solutions in Dubai",
    template: "%s | Oglas AI",
  },
  description:
    "Dubai-based custom software and AI solutions partner for ERP, payroll automation, computer vision, workflow automation, marketing automation, and decision intelligence.",
  openGraph: {
    title: "Oglas AI",
    description:
      "Custom software and AI integrated solutions for companies in the UAE and global markets.",
    url: "https://oglas-ai.vercel.app",
    siteName: "Oglas AI",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${arabic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
