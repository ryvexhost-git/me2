import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "ME2SPA | Luxury Massage & Therapy in Kondotty, Kerala",
  description: "Rejuvenate your body & mind with authentic relaxing therapies. Premium spa experience with professional therapists near Calicut Airport.",
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "ME2SPA",
  "description": "Luxury therapeutic body massage and wellness sanctuary in Kondotty, Kerala.",
  "telephone": "+918086777555",
  "email": "contact@me2spa.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Calicut Airport Road",
    "addressLocality": "Kondotty",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "10:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "22:00"
    }
  ],
  "priceRange": "₹₹"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0C0A0D] text-[#F8F0F4] font-sans antialiased selection:bg-[#D48FB1]/30 selection:text-[#FFF]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
