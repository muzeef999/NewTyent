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
import design from "@/asserts/whyTent/design.webp";
import Certified from "@/asserts/whyTent/Certified.webp";
import display from "@/asserts/whyTent/display.webp";
import plateSurfaceArea from "@/asserts/whyTent/plateSurfaceArea.webp";
import Head from "next/head";


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
        When it comes to water ionizers, electrode/plate technology plays a vital role in performance, durability, and ionization efficiency. Most water ionizers use either solid or mesh electrodes, but both designs have limitations-solid plates lack efficient electrical distribution, while mesh plates compromise on strength and longevity. Seeking the perfect balance of strength, surface area, and durability, Tyent engineers redesigned plate technology from the ground up to create the industry-exclusive Tyent's Solid Hybrid Mesh Electrodes.
      </p>
      <p>
        Tyent Water Ionizers feature Japanese medical-grade Solid Hybrid Mesh Plates, engineered using Faraday’s electrolysis principles for superior conductivity and powerful electrolysis. Crafted from medical-grade titanium and enhanced with multiple platinum dipping and baking processes, these plates deliver unmatched safety, performance, and durability. Sourced from Permelac Japan (est. 1969), they never leach, break, or crumble and are backed by a 15-year warranty in India, positioning Tyent as a leader in advanced water ionization technology
      </p>
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
          Plates are the core of a water ionizer, and surface area, not height, width, or diameter, determines true performance. Large or more numerous plates don’t always produce higher antioxidants or better -ORP levels, which is why many ionizers in the market fail to deliver optimum molecular hydrogen or selective antioxidant benefits. Tyent Water Ionizers feature exclusive Japanese Solid Hybrid Mesh Plate technology, engineered using Faraday’s electrolysis principles for maximum surface area, superior strength, and long-lasting durability. This advanced design ensures improved electrical conductivity with more surface area resulting in higher antioxidant production, , accurate pH balance, and consistently superior water ionization, delivering healthier, better-tasting water. 
          </p>
        </div>`,
      icon: plateSurfaceArea,
    },
    {
      id: "3",
      color1: "#f8fbfe",
      heading: "Patented SMPS PLUS® Power",
      description: `
        <div style="line-height: 1.6;">

  <p>Older linear power supply units (PSUs) with heavy transformers are bulky, prone to overheating, and inefficient. Developed in the early 1900s, these PSUs lack voltage adjustability, yet some water ionizer brands still use them because they are cheaper.  Some other water Ionizers use SMPS (Switch Mode Power Supply) technology, the same efficient, lightweight technology found in flat-screen TVs, laptops, and modern electronics. </p>

 

  <p>Compared to linear PSUs, SMPS units are lighter, smaller and more efficient overall.  Tyent engineers enhanced traditional SMPS specifically for water ionizers, creating the Patented SMPS PLUS. With 55 adjustable power settings, SMPS PLUS delivers precise energy for producing all pH levels including strong alkaline and acidic water naturally, without chemicals, providing superior performance, efficiency, and durability in every glass of water.</p>

        </div>`,
      icon: smpsplus,
    },
    {
      id: "4",
      color1: "#f8fbfe",
      heading: "Extreme filtration capability",
      description: `
        <div style="line-height: 1.6;">
         <p>Hydrogen-rich alkaline water offers numerous health benefits, but its effectiveness depends on the purity of your drinking water. Tyent Water Ionizers use a multi-stage filtration system with dual 0.01-micron filters, designed to remove impurities, bacteria, viruses, heavy metals, nano-plastics, nano-viruses, and pharmaceutical residues, ensuring your water is not just healthy but truly pure.
</p>
<p>
Tyent filters use 0.01-micron filter media, similar to those in kidney dialysis machines, and are the largest in the industry, providing superior filtration. Water flows lengthwise through the extended filter media, maximizing contaminant removal for cleaner, safer, and better-tasting water. With this advanced technology, Tyent leads the industry in water filtration and purification. Tyent filters are NSF, EPA & ANSI Certified.
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
        
        <!--
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
        -->
        </div>`,
      icon: International,
    },
    {
      id: "8",
      color1: "#f8fbfe",
      heading: "Certified Medical Device",
      description: `
        <div style="line-height: 1.6;">
          <p><strong>Tyent Water Ionizers</strong> are <em>certified medical devices</em> by the <strong>American Ministry of Food and Drug Safety (USFDA)</strong> and the <strong>South Korean Ministry of Food and Drug Safety (MFDS)</strong>. Trusted by thousands of doctors worldwide, they play a crucial role in <em>preventing and managing various he condition
            <!--
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
        
        <p><strong>Tyent's certifications ensure <em>superior water quality, medical-grade safety, and cutting-edge technology</em>, making our ionizers the <em>most trusted choice for safe, healthy, and effective alkaline water</em>.</strong></p>
        
        <p style="font-size: 1.2em; font-weight: bold; color: #0077cc;">Tyent – The Gold Standard in Water Ionization! 💧</p>
   ld; color: #0077cc;">Tyent – The Gold Standard in Water Ionization! 💧</p>
        -->
   
        </div>`,
      icon: Certified,
    },
    {
      id: "9",
      color1: "#f8fbfe",
      heading: "Better Business Bureau A+ Rating",
      description: `
        <div style="line-height: 1.6, color:#FFF">
         <p>A+ Rating from the Better Business Bureau (BBB)</p>

  <p>An A+ rating from the Better Business Bureau (BBB) is a coveted achievement for companies, symbolizing a commitment to excellence. The BBB's mission is to foster an ethical marketplace where buyers and sellers can trust one another. As a highly respected organization, the BBB evaluates businesses based on its rigorous Standards of Trust.</p>

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
        <!--
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
      -->
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

      <>
        <Head>
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          />
        </Head>


        {/* AMP Google Ads + GA + Conversion */}
        <amp-analytics type="gtag" data-credentials="include">
          <script type="application/json">
            {`
          {
            "vars": {
              "gtag_id": "G-T94BNYD8RB",
              "config": {
                "G-T94BNYD8RB": { "groups": "default" },
                "AW-802308772": { "groups": "default" }
              }
            },
            "triggers": {
              "downloadConversion": {
                "on": "click",
                "selector": "#downloadBtn",
                "vars": {
                  "event_name": "conversion",
                  "send_to": ["AW-802308772/gmjyCLODuIMYEKSFyf4C"]
                }
              }
            }
          }
          `}
          </script>
        </amp-analytics>


        {/* <Header
        basic={headerData.basic}
        preheading={headerData.preheading}
        afterheading={headerData.afterheading}
        content={headerData.content}
        img={why}
        animatedText={headerData.animatedText}
      /> */}

        <div className="text-center position-relative">
          <div className="text-center">
          <h1 className="bg-heading-text-two-main">Trusted Worldwide</h1>
        <h3 className="fw-bold subtitle-tight">Why Choose Tyent</h3>
          </div>
        </div>


        <FeatureCard data={data} />
      </>
    </>
  );
};

export default Page;
