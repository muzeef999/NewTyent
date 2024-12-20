import React from 'react';
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const FeatureCard = dynamic(() => import("../compoents/FeatureCard"), {srr:false})

export const metadata = {
  title: 'Why Tyent',
  description: 'Discover the features of Tyent water ionizers.',
};

async function fetchData() {
  
  const data = [
    {
      id: "1",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Solid Hybrid Mesh Plate Technology",
      description: 'All Tyent Water Ionizers come with standard medical-grade Solid Hybrid Mesh Plate technology. Solid Hybrid Mesh Plate plates offer more strength, durability & more surface area because of Solid Hybrid Mesh Plate design. Our engineers begin the Tyent plate-making process with the thickest and longest plates in the industry, and then they incorporate cutting-edge electrolysis distribution methods for maximum electrical conductivity. Most ionizers have plates that are either solid or mesh. Tyent engineers were not satisfied with either design. Here’s why: Solid plates offer strength but lack premium electrical distribution. Since electricity is drawn to edges (which is why a lightning rod has a pointed edge) a solid plate’s electrical current will only be transmitted around the outer edge of the plate. The edges are key, which is why mesh plates seem ideal; but since they lack durability, they do not meet Tyent’s high standards. Since neither of the available plate styles was sufficient, our Tyent engineers developed the cutting-edge Tyent Solid Hybrid Mesh Plates. The Tyent Solid Hybrid Mesh Plate was engineered according to Faraday’s electrolysis distribution methods.',
    },
    {
      id: "2",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Plates with more surface area in the Industry",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "3",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Patented SMPS PLUS® Power",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "4",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Super Water Capability",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "5",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Extreme Filtration Capacity",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "6",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "PAST Cleaning System",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "7",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "International quality Certifications",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "8",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Certified medical device",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "9",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Better Business Bureau A+ Rating",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "10",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Highest Antioxidant Production Levels",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "11",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "One-Touch display Technology",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "12",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Warranty & doorstep service",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    {
      id: "13",
      color1: '#eef7fc',
      color2: '#eef7fc',
      heading: "Chemical and Lead-Free",
      description: 'Tyent coined the term “Super Water,” and we are still the ONLY machine with the largest Solid Hybrid Mesh plates and enough power to produce super water without chemicals. Super Water means that Tyent ionizer\'s have a range of 2.5 to 11.5* on the pH scale, while our water ionizers have a range of 10.0 to 4.0* on the pH scale. On the low end of this scale, water with a pH of 2.5 - 3.5 works as an antiseptic and can be used as an all-natural sanitizer on surfaces. On the high end of this scale, water with a pH of 11 and higher is great to use for removing oil-based herbicides, pesticides & wax content from fruits and vegetables. It also can be used for Stain Removal.',
    },
    
  ];


  return data;
}

const Page = async () => {
  const data = await fetchData(); // Fetch data inside the component

  return (
    <>
      <FeatureCard data={data} />
    </>
  );
};

export default Page;
