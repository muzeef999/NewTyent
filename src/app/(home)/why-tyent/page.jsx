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
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>When it comes to water ionization, one of the most crucial components is the plate design. The effectiveness of a water ionizer is largely determined by the quality, surface area, and strength of its plates.</p>
          <ul>
            <li><strong>Strength:</strong> Tyent plates are the thickest, longest, and have more surface area than any in the industry.</li>
            <li><strong>Durability:</strong> These plates will never break, crumble, or leach.</li>
            <li><strong>Design:</strong> Combines solid plates' strength with mesh plates' conductivity for superior performance.</li>
          </ul>
          <p>Tyent’s Solid Hybrid Mesh Plates are exclusive to their water ionizers and are backed by a 15-year warranty in India and a lifetime warranty in the USA.</p>
        </div>`,
      icon: platess
    },
    {
      id: "2",
      color1: '#f8fbfe',
      heading: "Plates with More Surface Area in the Industry",
      description: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Plates are the core of a water ionizer, and the key factor is their surface area, not their size. Tyent ionizers utilize <strong>Solid Hybrid Mesh Plate technology</strong>, offering:</p>
          <ul>
            <li>Superior strength and durability</li>
            <li>The largest surface area in the industry</li>
            <li>Better overall performance with higher antioxidant production and accurate pH levels</li>
          </ul>
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
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Tyent coined the term “Super Water,” offering a pH range of <strong>2.5 to 11.5*</strong>, ideal for various uses:</p>
          <ul>
            <li><strong>Low pH (2.5 - 3.5):</strong> Antiseptic and all-natural sanitizer for surfaces.</li>
            <li><strong>High pH (11+):</strong> Removes oil-based pesticides, wax from fruits, and stains.</li>
          </ul>
        </div>`,
      icon: phscale
    },
    {
      id: "5",
      color1: '#f8fbfe',
      heading: "Extreme Filtration Capacity",
      description: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Tyent ionizers boast an <strong>extreme filtration capacity</strong>, offering water purity like no other, ensuring the removal of harmful substances while retaining essential minerals.</p>
        </div>`,
      icon: tyentFilters
    },
    {
      id: "6",
      color1: '#f8fbfe',
      heading: "PAST Cleaning System",
      description: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>The <strong>PAST Cleaning System</strong> ensures the longevity of your water ionizer by thoroughly cleaning the plates and maintaining performance efficiency.</p>
        </div>`,
      icon: RTR
    },
    {
      id: "7",
      color1: '#f8fbfe',
      heading: "International Quality Certifications",
      description: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Tyent ionizers are recognized globally, holding multiple <strong>international quality certifications</strong> for their unmatched performance and durability.</p>
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
