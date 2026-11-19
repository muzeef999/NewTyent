"use client";
import { usePathname } from "next/navigation";

const excludedPaths = [
  "/nmp-5",
  "/nmp-7",
  "/nmp-9",
  "/nmp-11",
  "/uce-9-plus",
  "/uce-11-plus",
  "/uce-13-plus",
  "/hybrid-h2",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.tyent.co.in/#localbusiness",
  "name": "Tyent India",
  "url": "https://www.tyent.co.in/",
  "telephone": "+91-9966558556",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8-2-277/45, UBI Colony, Near TV9 Office, Road No. 3, Banjara Hills",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500034",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.42085",
    "longitude": "78.43948"
  },
  "areaServed": "India"
};

export default function LocalBusinessSchema() {
  const pathname = usePathname();

  if (excludedPaths.includes(pathname)) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
