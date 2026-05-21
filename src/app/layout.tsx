import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/sora";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.cenkserigrafiboyalari.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "CENK SERİGRAFİ BOYALARI",
  title: "CENK SERİGRAFİ BOYALARI | Endüstriyel Baskı Boyaları",
  description:
    "Cenk Serigrafi Boyaları; serigrafi, tekstil, poşet, eldiven, tişört ve endüstriyel baskı boyalarında premium kalite üretim ve özel renk çözümleri sunar.",
  keywords: [
    "serigrafi boyaları",
    "endüstriyel baskı boyaları",
    "tekstil baskı boyaları",
    "poşet baskı boyaları",
    "özel renk üretimi",
    "Cenk Serigrafi Boyaları",
  ],
  openGraph: {
    title: "CENK SERİGRAFİ BOYALARI",
    description:
      "Premium görünüm, yüksek kalite üretim ve endüstriyel baskı çözümleri.",
    url: siteUrl,
    siteName: "CENK SERİGRAFİ BOYALARI",
    images: [
      {
        url: "/cenk-logo-cropped.png",
        width: 966,
        height: 934,
        alt: "Cenk Serigrafi Boyaları logosu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CENK SERİGRAFİ BOYALARI",
    description:
      "Serigrafi ve endüstriyel baskı sektörüne yüksek kaliteli boya üretimi.",
    images: ["/cenk-logo-cropped.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#060814] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
