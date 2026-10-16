import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "iScripts — Customizable Ready-Made Software Platforms for Startups & Businesses",
  description:
    "Launch your marketplace, on-demand service, or ecommerce platform with ready-made, unencrypted software you can customize and scale to fit your business vision.",
  keywords: [
    "marketplace software",
    "multi-vendor ecommerce",
    "on-demand services script",
    "software customization",
    "turnkey software platforms",
    "iScripts MultiCart",
    "iScripts UberforX",
    "iScripts Locologic",
    "iScripts NetMenus",
    "white-label software"
  ],
  authors: [{ name: "Armia Systems, Inc / iScripts" }],
  openGraph: {
    title: "iScripts — Customizable Ready-Made Software Platforms",
    description:
      "Ready to start. Built to become yours. Launch turnkey marketplaces, delivery management, and on-demand platforms with full source code flexibility.",
    url: "https://www.iscripts.com",
    siteName: "iScripts",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
