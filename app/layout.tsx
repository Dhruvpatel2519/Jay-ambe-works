import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jay Ambe Works | Digital Marketing & Web Development Agency",
    template: "%s | Jay Ambe Works",
  },
  description:
    "Jay Ambe Works builds growth-focused websites, SEO campaigns, paid ads, and digital systems for ambitious businesses.",
  keywords: [
    "Jay Ambe Works",
    "digital marketing agency",
    "web development agency",
    "SEO services",
    "Next.js website development",
    "business audit",
  ],
  authors: [{ name: "Jay Ambe Works" }],
  creator: "Jay Ambe Works",
  openGraph: {
    title: "Jay Ambe Works | Digital Marketing & Web Development Agency",
    description:
      "Premium web development, SEO, paid media, and conversion strategy for growing businesses.",
    url: "https://jayambeworks.com",
    siteName: "Jay Ambe Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Ambe Works",
    description:
      "Digital marketing and web development for businesses ready to grow with clarity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
