import { Container } from "react-bootstrap";
import ProductCard from "../ProductCard";
import "../collections.css";

import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import hybrid from "@/asserts/Hybrid.webp";
import uce from "@/asserts/Uce.webp";
import soap from "@/asserts/soap/soap.png";
import filter from "@/asserts/filter/filter2.webp";
import bottle from "@/asserts/bottle/bottle-500ml.jpg";
import watergen from "@/asserts/watergen/TIE_N20.webp";

export const metadata = {
  title: "All Water Ionizers | Tyent India – Shop NMP & UCE Range",
  description:
    "Browse all Tyent water ionizers in India. Counter top NMP series & under counter UCE series with hydrogen-rich alkaline water technology.",
  keywords:
    "Tyent water ionizers, NMP-5, NMP-7, NMP-9, NMP-11, UCE-9 Plus, UCE-11 Plus, UCE-13 Plus, Hybrid H2, alkaline water ionizer India",
};

const products = [
  {
    title: "NMP-5",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp5,
    link: "/nmp-5",
    badge: "5 Plates",
    specs: ["ORP: Up to -850*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1550 PPB*"],
    price: "₹ 1,68,000",
  },
  {
    title: "NMP-7",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp5,
    link: "/nmp-7",
    badge: "7 Plates",
    specs: ["ORP: Up to -950*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1550 PPB*"],
    price: "₹ 2,05,000",
  },
  {
    title: "NMP-9",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp9,
    link: "/nmp-9",
    badge: "9 Plates",
    specs: ["ORP: Up to -1050*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 2,38,000",
  },
  {
    title: "NMP-11",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp9,
    link: "/nmp-11",
    badge: "11 Plates",
    specs: ["ORP: Up to -1150*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 2,72,000",
  },
  {
    title: "HYBRID H2",
    subtitle: "Counter Top Twin Cell Hydrogen Water Ionizer",
    image: hybrid,
    link: "/hybrid-h2",
    badge: "Twin Cell",
    specs: ["ORP: Up to -1250*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1850 PPB*"],
    price: "₹ 3,67,000",
  },
  {
    title: "UCE-9 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-9-plus",
    badge: "9 Plates",
    specs: ["ORP: Up to -1050*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 3,25,000",
  },
  {
    title: "UCE-11 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-11-plus",
    badge: "11 Plates",
    specs: ["ORP: Up to -1150*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 3,46,000",
  },
  {
    title: "UCE-13 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-13-plus",
    badge: "13 Plates",
    specs: ["ORP: Up to -1250*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 3,67,000",
  },
  // Home Accessories
  {
    title: "TM-X Beauty Soap",
    subtitle: "Disinfection & Sterilization Soap",
    image: soap,
    link: "/soap",
    badge: "Home Accessory",
    specs: ["Weight: 80g", "High grade oil & natural glycerin", "Disinfection & sterilization"],
    price: "₹ 999",
  },
  {
    title: "Tyent Filter",
    subtitle: "Replacement Filter for Tyent Ionizers",
    image: filter,
    link: "/filter-1",
    badge: "Home Accessory",
    specs: [".01 Micron filtration", "NSF & EPA certified", "Dual filtration system"],
    price: "Price on request",
  },
  {
    title: "Water Bottle",
    subtitle: "Tyent Hydrogen Water Bottle",
    image: bottle,
    link: "/water-bottle-1",
    badge: "Home Accessory",
    specs: ["500ml capacity", "BPA-free material", "Portable design"],
    comingSoon: true,
  },
  // Industrial Applications
  {
    title: "Sterilizing Water Generator",
    subtitle: "Electrolyzed Sterilizing Water Generator – TIE-N15WR",
    image: watergen,
    link: "/Sterilizing-water-generator",
    badge: "Industrial",
    specs: ["Electrolyzed sterilizing water", "Commercial & industrial use", "Size: 545(W) × 225(D) × 470(H) mm"],
    price: "₹ 6,49,000",
  },
];

export default function AllIonizers() {
  return (
    <Container>
      <div className="collection-hero">
        <h1>All Ionizers</h1>
        <p>
          Explore our complete range of Tyent water ionizers — from compact countertop models
          to sleek under-counter systems. Powered by advanced Japanese technology and
          USFDA-certified materials for hydrogen-rich alkaline water.
        </p>
      </div>

      <div className="collection-grid">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </Container>
  );
}
