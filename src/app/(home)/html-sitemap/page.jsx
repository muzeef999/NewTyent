import Link from "next/link";
import { Container } from "react-bootstrap";
import "./htmlSitemap.css";

export const metadata = {
  title: "HTML Sitemap | Tyent India",
  description:
    "Browse the complete HTML sitemap of Tyent India. Find all pages including products, blogs, policies, and more.",
};

const sitemapData = [
  {
    heading: "Home",
    links: [{ name: "Home", url: "/" }],
  },
  {
    heading: "Company",
    links: [
      { name: "About Us", url: "/our-story" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    heading: "Products",
    links: [
      { name: "Tyent NMP-5", url: "/nmp-5" },
      { name: "Tyent NMP-7", url: "/nmp-7" },
      { name: "Tyent NMP-9", url: "/nmp-9" },
      { name: "Tyent NMP-11", url: "/nmp-11" },
      { name: "UCE-11 Plus", url: "/uce-11-plus" },
      { name: "UCE-13 Plus", url: "/uce-13-plus" },
      { name: "H2 Hybrid", url: "/hybrid-h2" },
    ],
  },
  {
    heading: "Policies & Legal",
    links: [
      { name: "Cancellation & Returns Policy", url: "/Cancellation_Returns" },
      { name: "Terms of Use", url: "/Terms_of_Use" },
      { name: "Security Policy", url: "/Security" },
      { name: "Privacy Policy", url: "/Privacy" },
    ],
  },
  {
    heading: "Technical Information",
    links: [
      { name: "Tyent vs Kangen", url: "/tyentvskangen" },
      { name: "Tyent's Solid Hybrid Mesh Plates", url: "/solid-hybrid-mesh-plates" },
      { name: "Tyent's Patented SMPS PLUS", url: "/patented-SMPS-plus" },
      { name: "Tyent's .01 Micron Filters", url: "/0.1-micron-filters" },
    ],
  },
  {
    heading: "Customers",
    links: [
      { name: "Usage Instructions", url: "/7-types-of-Tyent-water" },
      { name: "Benefits", url: "/benefits" },
      { name: "Testimonials", url: "/testimonials" },
      { name: "Why Tyent", url: "/why-tyent" },
    ],
  },
];

export default function HtmlSitemap() {
  return (
    <div className="sitemap-page">
      <Container>
        <h1 className="sitemap-title">
          HTML <span className="sitemap-highlight">Sitemap</span>
        </h1>

        {sitemapData.map((section, index) => (
          <div key={index} className="sitemap-section">
            <h2 className="sitemap-heading">{section.heading}</h2>
            <ul className="sitemap-list">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
}
