import React from 'react';
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import platess from '@/asserts/whyTent/platess.png'
import smpsplus from '@/asserts/whyTent/smpsplus.png'
import phscale from '@/asserts/whyTent/phscale.png'
import tyentFilters from '@/asserts/whyTent/tyentFilters.png'
import RTR from '@/asserts/whyTent/RTR.png'
import BBB from '@/asserts/whyTent/BBB.png'
import International from '@/asserts/whyTent/International.png'
import Antioxidant  from  '@/asserts/whyTent/Antioxidant.png'
import Chemical  from  '@/asserts/whyTent/Chemical.png'
import doorstep  from  '@/asserts/whyTent/doorstep.png'
import Certified from  '@/asserts/whyTent/Certified.png'
import display from '@/asserts/whyTent/display.png'
import plateSurfaceArea from '@/asserts/whyTent/plateSurfaceArea.png'




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
      color1: '#f8fbfe',
      heading: "Solid Hybrid Mesh Plate Technology",
      description: 'All Tyent Water Ionizers come with standard medical-grade Solid Hybrid Mesh Plate technology. Solid Hybrid Mesh Plate plates offer more strength, durability & more surface area because of Solid Hybrid Mesh Plate design. Our engineers begin the Tyent plate-making process with the thickest and longest plates in the industry, and then they incorporate cutting-edge electrolysis distribution methods for maximum electrical conductivity. Most ionizers have plates that are either solid or mesh. Tyent engineers were not satisfied with either design. Here’s why: Solid plates offer strength but lack premium electrical distribution. Since electricity is drawn to edges (which is why a lightning rod has a pointed edge) a solid plate’s electrical current will only be transmitted around the outer edge of the plate. The edges are key, which is why mesh plates seem ideal; but since they lack durability, they do not meet Tyent’s high standards. Since neither of the available plate styles was sufficient, our Tyent engineers developed the cutting-edge Tyent Solid Hybrid Mesh Plates. The Tyent Solid Hybrid Mesh Plate was engineered according to Faraday’s electrolysis distribution methods.',
      icon : platess
    },
    {
      id: "2",
      color1: '#f8fbfe',
      heading: "Plates with more surface area in the Industry",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
     icon: plateSurfaceArea
    },
    {
      id: "3",
      color1: '#f8fbfe',
      heading: "Patented SMPS PLUS® Power",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon : smpsplus
    },
    {
      id: "4",
      color1: '#f8fbfe',
      heading: "Super Water Capability",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon : phscale
    },
    {
      id: "5",
      color1: '#f8fbfe',
      heading: "Extreme Filtration Capacity",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon : tyentFilters
    },
    {
      id: "6",
      color1: '#f8fbfe',
      heading: "PAST Cleaning System",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    icon : RTR
    },
    {
      id: "7",
      color1: '#f8fbfe',
      heading: "International quality Certifications",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon:International
    },
    {
      id: "8",
      color1: '#f8fbfe',
      heading: "Certified medical device",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon: Certified
    },
    {
      id: "9",
      color1: '#f8fbfe',
      heading: "Better Business Bureau A+ Rating",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon:BBB
    },
    {
      id: "10",
      color1: '#f8fbfe',
      heading: "Highest Antioxidant Production Levels",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon:Antioxidant
    },
    {
      id: "11",
      color1: '#f8fbfe',
      heading: "One-Touch display Technology",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon: display
    },
    {
      id: "12",
      color1: '#f8fbfe',
      heading: "Warranty & doorstep service",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon :doorstep
    },
    {
      id: "13",
      color1: '#f8fbfe',
      heading: "Chemical and Lead-Free",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
      icon : Chemical
    },
    
  ];


  return data;
}

const Page = async () => {
  const data = await fetchData(); // Fetch data inside the component

  const headerData = {
    basic: "Trust, Satisfaction & Transformations",
    preheading: "Hear From Our Real",
    afterheading: "Satisfied Tyent India Customers",
    content:
      "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water. Our cutting-edge water ionizers are designed to provide superior antioxidant support, better hydration, and long-term wellness. But don’t just take our word for it - hear it from those who matter most, our valued customers!",
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
