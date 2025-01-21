import React from 'react';
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import platess from '@/asserts/whyTent/platess.webp'
import smpsplus from '@/asserts/whyTent/smpsplus.webp'
import phscale from '@/asserts/whyTent/phscale.webp'
import tyentFilters from '@/asserts/whyTent/tyentFilters.webp'
import RTR from '@/asserts/whyTent/RTR.webp'
import BBB from '@/asserts/whyTent/BBB.webp'
import International from '@/asserts/whyTent/International.webp'
import Antioxidant  from  '@/asserts/whyTent/Antioxidant.webp'
import Chemical  from  '@/asserts/whyTent/Chemical.webp'
import doorstep  from  '@/asserts/whyTent/doorstep.webp'
import Certified from  '@/asserts/whyTent/Certified.webp'
import display from '@/asserts/whyTent/display.webp'
import plateSurfaceArea from '@/asserts/whyTent/plateSurfaceArea.webp'




import why from '@/asserts/whyTyeny.png'
const Header = dynamic(() => import("../compoents/Header"), {ssr: false});
const FeatureCard = dynamic(() => import("../compoents/FeatureCard"), {srr:false})

export const metadata = {
  title: 'Why Tyent',
  description: 'Discover the features of Tyent water ionizers.',
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
      icon: platess
    },
    {
      id: "2",
      color1: '#f8fbfe',
      heading: "Plates with More Surface Area in the Industry",
      description: `
        <div style="line-height: 1.6;">
          <p>
          Plates are the core of a water ionizer, and the key factor is their surface area, not their height, width, or diameter. For instance, the size of a plate doesn’t directly impact the production of antioxidants. Some brands claim to have the largest plates, yet produce lesser antioxidants (-ORP). Tyent water ionizers utilize Solid Hybrid Mesh Plate technology, offering superior strength, durability and largest surface area in the industry, enabling higher antioxidant production and more accurate pH levels, delivering better overall performance. 
          </p>
        </div>`,
      icon: plateSurfaceArea
    },
    {
      id: "3",
      color1: '#f8fbfe',
      heading: "Patented SMPS PLUS® Power",
      description: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Tyent uses the revolutionary <strong>SMPS PLUS® Power</strong>, which allows for 55 adjustable power settings to deliver the perfect glass of alkaline water.</p>
          <ol>
            <li><strong>Transformers:</strong> Older and less efficient technology.</li>
            <li><strong>SMPS:</strong> Modern, efficient, and lightweight technology but with limited voltage adjustability.</li>
            <li><strong>SMPS PLUS:</strong> Enhanced SMPS technology providing unmatched power and efficiency for creating strong alkaline and acidic water without chemicals.</li>
          </ol>
        </div>`,
      icon: smpsplus
    },
    {
      id: "4",
      color1: '#f8fbfe',
      heading: "Super Water Capability",
      description: `
        <div style="line-height: 1.6;">
         <p>
         Ionized, hydrogen-rich alkaline water is highly beneficial, but its effectiveness depends on the purity of your drinking water. Tyent Water Ionizers feature two .01 micron filters, creating a multi-stage, customized system designed to remove impurities, bacteria, viruses, contaminants, and heavy metals from your tap water.

Our Tyent-filters use .01 micron filter media, similar to those used in kidney dialysis machines, and are the largest in the industry. The increased size of our filters ensures even greater water purity. Tyent water ionizers effectively eliminate contaminants, viruses, bacteria, and microorganisms.

As water passes lengthwise through the filters, the extended length provides more filtration media for the water to pass through, resulting in even purer water. Tyent stands as the industry leader in water filtration technology.

         </p>
        </div>`,
      icon: phscale
    },
    {
      id: "5",
      color1: '#f8fbfe',
      heading: "Extreme Filtration Capacity",
      description: `
        <div style="line-height: 1.6;">
             <p>
             Tyent Water Ionizers use an automated Polarity Anti Scale Technology (PAST)- one of the most advanced cleaning systems in the industry. This automated cleaning cycle is triggered by both a timer and an internal sensor to ensure minimal mineral scale buildup on the electrodes for long-term performance. Better cleaning means longer-lasting components and healthier water.
             </p>
        </div>`,
      icon: tyentFilters
    },
    {
      id: "6",
      color1: '#f8fbfe',
      heading: "PAST Cleaning System",
      description: `
        <div style="line-height: 1.6;">
        <p>Tyent water ionizers stand out as the only ionizers in the industry featuring true one-touch longest display technology. Designed with modern customer needs in mind, Tyent’s advanced one-touch display ensures a simplified and user-friendly experience. With a single touch on the intuitive touch control panel, users can easily select their desired pH level and enjoy clean, healthy water whenever they want.</p>
        <p>Tyent water ionizers are so simple to use that they’re perfect for children, seniors, and everyone in between. The one-touch display also allows users to auto-clean, select the required water quantity, and access many other convenient features. </p>
        <p>For anyone looking for a cutting-edge, easy-to-use water ionizer, Tyent’s one-touch longest display is unmatched in both functionality and convenience.</p>
        </div>`,
      icon: RTR
    },
    {
      id: "7",
      color1: '#f8fbfe',
      heading: "International Quality Certifications",
      description: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p></p>
        <p></p>
        </div>`,
      icon: International
    },
    {
      id: "8",
      color1: '#f8fbfe',
      heading: "Certified Medical Device",
      description: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Tyent ionizers are <strong>certified as medical devices</strong>, ensuring safety and effectiveness for household and professional use.</p>
        </div>`,
      icon: Certified
    },
    {
      id: "9",
      color1: '#f8fbfe',
      heading: "Better Business Bureau A+ Rating",
      description: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>With a <strong>BBB A+ Rating</strong>, Tyent ensures trust and quality for its customers globally.</p>
        </div>`,
      icon: BBB
    }
  ];
  

  return data;
}

const Page = async () => {
  const data = await fetchData(); // Fetch data inside the component

  const headerData = {
    basic: "Trust, Satisfaction & Transformations",
    preheading: "Hear From Our Real",
    afterheading: "Satisfied Tyent India Customers",
    img: "path/to/image.jpg", // Add image URL if needed
    animatedText: "Health, Wellness, Transformation", // Pass the animated text here
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
