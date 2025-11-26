import React from "react";
import { Container, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
import platess from "@/asserts/whyTent/platess.webp";
import smpsplus from "@/asserts/whyTent/smpsplus.webp";
import phscale from "@/asserts/whyTent/phscale.webp";
import tyentFilters from "@/asserts/filterbackboor.webp";
import RTR from "@/asserts/whyTent/RTR.webp";
import BBB from "@/asserts/whyTent/BBB.webp";
import International from "@/asserts/whyTent/International.webp";
import Antioxidant from "@/asserts/whyTent/Antioxidant.webp";
import Chemical from "@/asserts/whyTent/Chemical.webp";
import doorstep from "@/asserts/whyTent/doorstep.webp";
import design  from "@/asserts/whyTent/design.webp";
import Certified from "@/asserts/whyTent/Certified.webp";
import display from "@/asserts/whyTent/display.webp";
import plateSurfaceArea from "@/asserts/whyTent/plateSurfaceArea.webp";

import why from "@/asserts/whyTyeny.png";
const Header = dynamic(() => import("../compoents/Header"), { ssr: false });
const FeatureCard = dynamic(() => import("../compoents/FeatureCard"), {
  srr: false,
});

export const metadata = {
  title: "Why Choose Tyent? Best Alkaline Water Ionizer",
  description: "Learn about Tyent's patented SMPS Plus and Hybrid Mesh Plates. We are recognized as a best alkaline water purifier in India for quality and innovation.",
};

async function fetchData() {
  const data = [
    {
      id: "1",
      color1: "#f8fbfe",
      heading: "Solid Hybrid Mesh Plate Technology",
      description: `
        <div style="line-height: 1.6;">
         <p>
    When it comes to water ionization, one of the most crucial components is the plate design. The effectiveness of a water ionizer is largely determined by the quality, surface area, and strength of its plates. All Tyent Water Ionizers feature medical-grade Solid Hybrid Mesh Plate technology, offering the strength of solid plates and the extensive surface area of mesh designs. Our engineers designed Tyent plates to be the thickest, longest, and with more surface area in the industry, incorporating advanced electrolysis distribution for superior conductivity.
  </p>

  <p>
    While most ionizers use either solid or mesh plates, Tyent’s engineers found both designs lacking. Solid plates are strong but have poor electrical distribution, as electricity tends to flow around the outer edge like a lightning rod. Mesh plates provide more edges for better electrical distribution but are not durable enough to last.
  </p>

  <p>
    To overcome these limitations, Tyent developed the Solid Hybrid Mesh Plate, designed according to Faraday’s electrolysis principles. This unique plate combines the strength of solid plates with the superior conductivity of mesh design. Small holes are drilled into the solid plate to increase surface area for electrolysis, then the plate is dipped multiple times in platinum and baked for enhanced performance.
  </p>

  <p>
    Tyent’s Solid Hybrid Mesh Plates offer the best of both worlds: unmatched strength and exceptional electrolysis power. These plates will never break, crumble, or leach and are exclusive to Tyent water ionizers.
  </p>

  <p>
    The plates are sourced from Permelac, a renowned Japanese company founded in 1969 and known for producing the industry's strongest plates. Tyent backs these plates with a 15-year warranty in India and a lifetime warranty in the USA. Made from titanium and coated with platinum, these plates undergo multiple dipping and baking processes for unmatched durability. Tyent is also the only ionizer brand that proudly discloses its plate manufacturer.
  </p>

  <h3>Strength + Durability + More Surface Area + More Antioxidants = Solid Hybrid Mesh Plates</h3>
        </div>`,
      icon: platess,
    },
    {
      id: "2",
      color1: "#f8fbfe",
      heading: "Largest Plate Surface Area in the Industry",
      description: `
        <div style="line-height: 1.6;">
          <p>
          Plates are the core of a water ionizer, and the key factor is their surface area, not their height, width, or diameter. For instance, the size of a plate doesn’t directly impact the production of antioxidants. Some brands claim to have the largest plates, yet produce lesser antioxidants (-ORP). Tyent water ionizers utilize Solid Hybrid Mesh Plate technology, offering superior strength, durability and largest surface area in the industry, enabling higher antioxidant production and more accurate pH levels, delivering better overall performance. 
          </p>
        </div>`,
      icon: plateSurfaceArea,
    },
    {
      id: "3",
      color1: "#f8fbfe",
      heading: "Patented SMPS PLUS® Power",
      description: `
        <div style="line-height: 1.6; color: #2ebb46 !important">
           <h5>Three Types of Power Supplies Used in Water Ionizers</h5>

  <p>The following are the three types of power supplies used in water ionizers:</p>

  <ol>
    <li>The older technology - Power Supply Unit's (PSU's) Transformer</li>
    <li>The power technology - Switch Mode Power Supply (SMPS)</li>
    <li>The Patented technology - Patented SMPS PLUS Power supply</li>
  </ol>

  <h2>Transformers</h2>
  <p>The older linear power supply units - known as PSUs with heavy transformers - are hefty and prone to overheating. Due to their simplicity, linear PSU’s do not allow for voltage adjustability. The technology behind linear PSU’s was developed in the early 1900’s. This ancient circuit design is less efficient than newer technology. However, some ionizer companies still use PSU’s simply because they are less expensive.</p>

  <h2>SMPS</h2>
  <p>SMPS's are an updated version of transformers. SMPS is the same technology used in flat-panel televisions, audio systems, laptops, computers, and other modern electronic devices. Compared to linear PSUs, SMPS units are lighter, smaller, and more efficient overall. SMPS also has a limitation to voltage adjustability.</p>

  <h2>SMPS PLUS</h2>
  <p>Tyent engineers wanted a better solution for our customers. They pooled their extensive knowledge and expertise and enhanced a traditional SMPS to work specifically in a water ionizer. The unit they created was named SMPS Plus. Tyent’s SMPS Plus gives you 55 adjustable power settings so you can create the perfect glass of alkaline water. The power and efficiency of SMPS Plus enables Tyent ionizer to create strong alkaline and acidic water without using chemicals from 11.5 pH to 2.5 pH.</p>

        </div>`,
      icon: smpsplus,
    },
    {
      id: "4",
      color1: "#f8fbfe",
      heading: "Extreme filtration capability",
      description: `
        <div style="line-height: 1.6;">
         <p>Ionized, hydrogen-rich alkaline water is highly beneficial, but its effectiveness depends on the purity of your drinking water. Tyent Water Ionizers feature two .01 micron filters, creating a multi-stage, customized system designed to remove impurities, bacteria, viruses, contaminants, and heavy metals from your tap water.
</p>
<p>
Our Tyent-filters use .01 micron filter media, similar to those used in kidney dialysis machines, and are the largest in the industry. The increased size of our filters ensures even greater water purity. Tyent water ionizers effectively eliminate contaminants, viruses, bacteria, and microorganisms.
</p>
<p>
As water passes lengthwise through the filters, the extended length provides more filtration media for the water to pass through, resulting in even purer water. Tyent stands as the industry leader in water filtration technology.
</p>
        
        </div>`,
      icon: tyentFilters,
    },
    {
      id: "5",
      color1: "#f8fbfe",
      heading: "Automated PAST cleaning system",
      description: `
        <div style="line-height: 1.6;">
             <p>
            Tyent Water Ionizers use an automated Polarity Anti Scale Technology (PAST)- one of the most advanced cleaning systems in the industry. This automated cleaning cycle is triggered by both a timer and an internal sensor to ensure minimal mineral scale buildup on the electrodes for long-term performance. Better cleaning means longer-lasting components and healthier water. 
             </p>
        </div>`,
      icon: RTR,
    },
    {
      id: "6",
      color1: "#f8fbfe",
      heading: "Largest one touch display",
      description: `
        <div style="line-height: 1.6;">
         <p>Tyent water ionizers stand out as the only ionizers in the industry featuring true one-touch longest display technology. Designed with modern customer needs in mind, Tyent’s advanced one-touch display ensures a simplified and user-friendly experience. With a single touch on the intuitive touch control panel, users can easily select their desired pH level and enjoy clean, healthy water whenever they want.
</p>
<p>

Tyent water ionizers are so simple to use that they’re perfect for children, seniors, and everyone in between. The one-touch display also allows users to auto-clean, select the required water quantity, and access many other convenient features. 
</p>
<p>
For anyone looking for a cutting-edge, easy-to-use water ionizer, Tyent’s one-touch longest display is unmatched in both functionality and convenience.
</p>
        </div>`,
      icon: display,
    },
    {
      id: "7",
      color1: "#f8fbfe",
      heading: "International Quality Certifications",
      description: `
        <div>
        <p><strong>Tyent Water Ionizers</strong> are built with <em>cutting-edge technology, superior craftsmanship,</em> and the highest safety standards. Our products undergo rigorous testing and are certified by internationally recognized organizations, ensuring <strong>purity, safety, and performance</strong>.</p>
        
        <h3 style="color: #0077cc;">Globally Recognized Certifications</h3>
        <ul style="list-style: none; padding: 0;">
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">ISO 9001 & ISO 14001 Certified</strong> - Ensuring <em>premium quality control</em> and <em>eco-friendly manufacturing practices</em>.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">FDA-Approved Components</strong> - Tyent uses <em>medical-grade materials</em> that meet FDA safety standards.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">CE Certification (Europe)</strong> - Indicates compliance with <em>European health, safety, and environmental protection standards</em>.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">NSF/ANSI Standards</strong> - Certified for water safety, filtration quality, and performance reliability.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">US-FDA (American FDA) Approved</strong> - Recognized by the American Food & Drug Administration for high safety and quality in water ionization.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">KFDA (Korean FDA) Approved</strong> - Recognized by the Korean Food & Drug Administration for high safety and quality in water ionization.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">UL Certification</strong> - Ensures electrical safety and durability, meeting stringent US safety standards.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">WQA (Water Quality Association) Certification</strong> - Verifies the effectiveness of filtration technology and water purity.</li>
        </ul>
        
        <h3 style="color: #0077cc;">Why Certifications Matter?</h3>
        <ul>
            <li>✔ Guaranteed safe and clean alkaline hydrogen-rich water.</li>
            <li>✔ Assured long-lasting performance with medical-grade materials.</li>
            <li>✔ Internationally recognized quality and safety standards.</li>
        </ul>
        
        <p><strong>Tyent – Setting the Global Standard for Water Ionization! 💧🌎</strong></p>
        </div>`,
      icon: International,
    },
    {
      id: "8",
      color1: "#f8fbfe",
      heading: "Certified Medical Device",
      description: `
        <div style="line-height: 1.6;">
          <p><strong>Tyent Water Ionizers</strong> are <em>certified medical devices</em> by the <strong>American Ministry of Food and Drug Safety (USFDA)</strong> and the <strong>South Korean Ministry of Food and Drug Safety (MFDS)</strong>. Trusted by thousands of doctors worldwide, they play a crucial role in <em>preventing and managing various health conditions</em>.</p>
        
        <h3 style="color: #0077cc;">Unmatched Quality & Safety Certifications</h3>
        <ul style="list-style: none; padding: 0;">
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">USFDA Certified Medical Device</strong> – Recognized for its health benefits and medical-grade quality.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">MFDS Certified Medical Device</strong> – Recognized for its health benefits and medical-grade quality.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">ISO 9001 & ISO 14001</strong> – Ensuring top-tier quality control and eco-friendly manufacturing.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">ISO 13485</strong> – Compliance with international medical device standards.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">GMP Certified</strong> – Manufactured under Good Manufacturing Practices for superior safety and consistency.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">FTA & Innobiz Certified</strong> – Acknowledging innovation and advanced technology in water ionization.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">UL Listed (E334893)</strong> – Meeting the highest safety standards set by Underwriters Laboratories (UL).</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">CSA Certified</strong> – Recognized by the Canadian Standards Association for electrical safety.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">ANSI & IEC Compliance</strong> – Adhering to global safety and performance regulations.</li>
        </ul>
        
        <p><strong>Tyent’s certifications ensure <em>superior water quality, medical-grade safety, and cutting-edge technology</em>, making our ionizers the <em>most trusted choice for safe, healthy, and effective alkaline water</em>.</strong></p>
        
        <p style="font-size: 1.2em; font-weight: bold; color: #0077cc;">Tyent – The Gold Standard in Water Ionization! 💧</p>
   
        </div>`,
      icon: Certified,
    },
    {
      id: "9",
      color1: "#f8fbfe",
      heading: "Better Business Bureau A+ Rating",
      description: `
        <div style="line-height: 1.6, color:#FFF">
         <h5>A+ Rating from the Better Business Bureau (BBB)</h5>

  <p>An A+ rating from the Better Business Bureau (BBB) is a coveted achievement for companies, symbolizing a commitment to excellence. The BBB’s mission is to foster an ethical marketplace where buyers and sellers can trust one another. As a highly respected organization, the BBB evaluates businesses based on its rigorous Standards of Trust.</p>

  <p>Tyent is proud to hold an A+ rating from the BBB, reflecting our dedication to integrity, customer service, and quality.</p>

        </div>`,
      icon: BBB,
    },
    {
      id: "10",
      color1: "#f8fbfe",
      heading: "Tyent Aesthetics",
      description: `
        <div style="line-height: 1.6;">
          <p><strong>Tyent Water Ionizers</strong> are not just high-performance medical devices—they are designed to complement modern lifestyles with their sleek, sophisticated, and futuristic aesthetics. Engineered to blend seamlessly into any kitchen or commercial space, Tyent ionizers combine cutting-edge technology with premium design elements for an unmatched user experience.</p>
        
        <h3 style="color: #0077cc;">Premium Design Features</h3>
        <ul style="list-style: none; padding: 0;">
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">Sleek & Modern Look</strong> – Crafted with high-quality stainless steel and polished finishes to enhance your kitchen’s elegance.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">Intuitive Touchscreen Interface</strong> – Advanced smart touch displays with high-resolution screens for effortless control and a futuristic feel.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">Compact & Space-Saving</strong> – Designed to fit seamlessly on countertops or under the sink without cluttering your space.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">LED Accent Lighting</strong> – Aesthetically pleasing soft LED indicators add a touch of luxury while enhancing visibility.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">High-End Build Quality</strong> – Made with durable, medical-grade materials for a premium feel and long-lasting performance.</li>
            <li style="margin: 10px 0; font-size: 1.1em;">✅ <strong style="color: #0077cc;">Customizable Finish Options</strong> – Available in classic stainless steel, matte black, and elegant white to match your kitchen decor.</li>
        </ul>
        
        <p><strong>Tyent doesn’t just revolutionize hydration—it elevates your space with style and sophistication.</strong></p>
        
        <p style="font-size: 1.2em; font-weight: bold; color: #0077cc;">Experience the perfect blend of technology, luxury, and innovation with Tyent! 💎💧</p>
  
        </div>`,
      icon: design,
    },
    
  ];

  return data;
}

const Page = async () => {
  const data = await fetchData(); // Fetch data inside the component

  const headerData = {
    basic: "Trusted Worldwide, ❤ in India!",
    preheading: "Tyent Water ionizer",
    afterheading: "The Only Choice",
    img: "path/to/image.jpg", // Add image URL if needed
    animatedText: "Purity, Performance, Perfection", // Pass the animated text here
  };



  return (
    <>
      <Header
        basic={headerData.basic}
        preheading={headerData.preheading}
        afterheading={headerData.afterheading}
        content={headerData.content}
        img={why}
        animatedText={headerData.animatedText}
      />
      <FeatureCard data={data} />
    </>
  );
};

export default Page;
