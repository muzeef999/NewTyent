import React from "react";
import dynamic from "next/dynamic";
import { Col, Row } from "react-bootstrap";
import filter from "@/asserts/filter.png";
import filterbackboor from "@/asserts/filterbackboor.webp";
import Image from "next/image";
import { MdWaterDrop } from "react-icons/md";


const Header = dynamic(() => import("../compoents/Header"), { ssr: false });

export const metadata = {
  title: "Benefit Page",
  description: "Discover the features of Tyent water ionizers.",
};

const waterFilterCards = [
  {
    title: "Calcium Sulfite (CaSO₃)",
    content:
    "Calcium Sulfite (CaSO₃) plays a vital role in Tyent's water filtration system. It offers fast, efficient removal of chlorine, chloramines, and other harmful byproducts, ensuring your water is free from unpleasant tastes, odors, and potential health risks. Its ability to work at all water temperatures and reduce strain on the system makes it an essential component delivering the purest, safest, and healthiest water for your home"
  },
  {
    title: "Carbon Block",
    content:
 "Carbon block is a densely compressed filtration medium made from activated carbon. In Tyent filters, it effectively removes chlorine, volatile organic compounds (VOCs), pesticides, herbicides, and bad odors/tastes. Its high surface area ensures superior contaminant adsorption, delivering cleaner, safer, and better-tasting water for optimal health and wellness."
  },
  {
    title: "TM Ceramic",
    content:
  "TM Ceramic is a specialized filtration material infused with tourmaline mineral. In Tyent filters, it emits negative ions and far-infrared rays, enhancing water’s ionization process and increasing its alkalinity. TM Ceramic also helps in removing bacteria and impurities, ensuring cleaner, healthier, and more mineral-rich water."
  },
  {
    title: "Membrane",
    content:
  "A membrane is a thin, semi-permeable barrier that filters out microorganisms, bacteria, viruses, and fine particles. In Tyent filters, it ensures only pure water molecules pass through, blocking contaminants as small as 0.01 microns. This process guarantees ultra-clean, safe, and healthy drinking water."
  },
  {
    title: "UF (Ultra Filtration)",
    content:
  "UF (Ultra filtration) uses a semi-permeable membrane to remove contaminants like bacteria, viruses, microorganisms, and suspended solids as small as 0.01 microns. In Tyent filters, UF ensures clean, safe, and purified water while retaining essential minerals, providing healthier, chemical-free water for optimal hydration and wellness."
  },
];


const RegularReplacement = [
  {
    title: "Maintain Water Purity",
    content:
     "A clogged filter can't effectively remove contaminants, allowing them to pass through. Regular replacement ensures you continue to receive clean, pure water."
  },
  {
    title: "Protect Your Health",
    content:
     "A used filter can harbor bacteria, viruses, mold, and other microorganisms, posing a serious risk of water contamination. Timely replacement is essential to ensure safe, hygienic water, as a clogged filter becomes a breeding ground for harmful pathogens and micro-fungi."
  },
  {
    title: "Prolong the Ionizer’s Lifespan",
    content:
     "Regular filter changes prevent debris buildup inside the ionizer, protecting its electrodes and other internal components."
  },
  {
    title: "Ensure Proper Ionization",
    content:
     " Clean filters ensure optimal water conductivity, which is essential for maintaining high pH and ORP levels during ionization. Failing to replace filters after reaching their filtration capacity can significantly impact key water properties like -ORP and pH, reducing the effectiveness of the ionized water."
  },
  {
    title: "Sustain Consistent Water Flow",
    content:
     "A clogged filter filled with contaminants restricts water flow, causing delays and longer wait times. Replacing the filter restores smooth, uninterrupted water flow, ensuring optimal performance and convenience."
  },
]

const WaterFilterCards = ({ title, content }) => {
  return (
    <div
      style={{ backgroundColor: "#FFF", height:'270px' }}
      className="d-flex justify-content-center align-items-center custom-card"
    >
      <div className="ml-4 align-items-center">
        <h3 className="m-4 text-start" style={{ color: "#008AC7" }}>
          <b>{title}</b>
        </h3>
        <p className="text-start m-4" style={{ color: "#565959" }}>
          {content}
        </p>
      </div>
    </div>
  );
};



const EssentialInAWater = [
  {
    title:"Removes Harmful Contaminants",
    content:"Filters capture impurities such as pharmaceutical waste, microplastics, biological contaminants, nitrates, arsenic, chlorine, lead, mercury, and other heavy metals, ensuring that only pure, safe water enters the ionization chamber."
  },
  {
    title:"Enhances Water Taste and Odor",
    content:"Filtration eliminates unpleasant tastes and odors caused by chemicals like chlorine, making water more refreshing and enjoyable."
  },
  {
    title:"Protects The Ionize  Process",
    content:"Clean water is essential for effective ionization. Contaminants can hinder the ionization process, affecting water's pH, ORP, and antioxidant benefits."
  },
  {
    title:"Prevents Internal Damage",
    content:"Impurities can build up inside the ionizer, causing damage to its electrodes and internal components. Filters act as a protective barrier, extending the ionizer's lifespan."
  },
] 


const benefits = [
  {
    title: "Maintain Water Purity",
    content:
      "A clogged filter can't effectively remove contaminants, allowing them to pass through. Regular replacement ensures you continue to receive clean, pure water.",
  },
  {
    title: "Protect Your Health",
    content:
      "A used filter can harbor bacteria, viruses, mold, and other microorganisms, posing a serious risk of water contamination. Timely replacement is essential to ensure safe, hygienic water, as a clogged filter becomes a breeding ground for harmful pathogens and micro-fungi.",
  },
  {
    title: "Prolong the Ionizer's Lifespan",
    content:
      "Regular filter changes prevent debris buildup inside the ionizer, protecting its electrodes and other internal components.",
  },
  {
    title: "Ensure Proper Ionization",
    content:
      "Clean filters ensure optimal water conductivity, which is essential for maintaining high pH and ORP levels during ionization. Failing to replace filters after reaching their filtration capacity can significantly impact key water properties like -ORP and pH, reducing the effectiveness of the ionized water.",
  },
  {
    title: "Sustain Consistent Water Flow",
    content:
      "A clogged filter filled with contaminants restricts water flow, causing delays and longer wait times. Replacing the filter restores smooth, uninterrupted water flow, ensuring optimal performance and convenience.",
  },
];

const Page = () => {
  const headerData = {
    basic: "Purest, Healthiest & Safest Water",
    preheading: "Advanced Design",
    afterheading: "With Tyent's .01 Micron Dual Filters",
    content:
      "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water.",
    img: filter,
    animatedText: "NO Nano Virus, NO Micro Plastics, NO Contamimation",
  };

  return (
    <div>
      <Header {...headerData} />

      <div className="container">
        {/* Intro Section */}
        <Row>
          <Col md={8} className="d-flex align-items-center" data-aos="fade-right">
          <div>
            <p>
            Experience the <b>Purest, Healthiest,</b> and <b>Safest Water</b> with Tyent’s .01 Micron Filtration. Turn your dream of drinking water that is safe, healthy, and free from contaminants into reality with Tyent’s advanced .01 Micron filtration technology. 
            </p>
            <p>
            Tyent's advanced <b>.01 Micron Extreme Filtration system</b> sets a new standard for water purification. This powerful dual, over sized, multi-stage filtration removes everyday contaminants like sediment, chlorine, chlorinates, and heavy metals. But it doesn’t stop there.
            </p>
            <p>
            Independent 3rd-party lab testing confirms that <b>Tyent's</b> filtration eliminates hundreds of harmful toxins, including herbicides, pesticides, pharmaceuticals, and other dangerous pollutants. This filtration level is the same used in kidney dialysis machines, ensuring hospital-grade purity for your drinking water. With <b>Tyent’s .01 Micron filtration,</b> you get the purest, healthiest, and safest water available today, free from harmful contaminants. Experience better health and wellness with every sip!
            </p>
            </div>
          </Col>
          <Col md={4}  data-aos="zoom-in" className="d-flex justify-content-center align-items-center">
          <div style={{width:'70%'}}>
          <Image src={filter} alt={"Tyent's .01 Micron Filtration"} layout="responsive"  />
          </div>
          </Col>
          <p><MdWaterDrop color="#008AC7"/>&nbsp;ANSI, EPA & ANSI certified.</p>
          <p><MdWaterDrop color="#008AC7"/>&nbsp;Longest filters in the Industry ensuring best filtration for safest and purest water.</p>
          <p><MdWaterDrop color="#008AC7"/>&nbsp;NO Microplastics, NO Pharmaceuticals, NO Herbicides, NO Pesticides, NO Chlorine, NO heavy metals, NO Non-Metallic Contaminants, NO Biological impurities, NO Arsenic, NO Lead, NO Nitrate and other harmful pollutants, ensuring every sip is pure and clean.</p>
        </Row>

       <br/>
       <br/>
        {/* Water Filter Cards */}
        <Row className="d-flex flex-wrap g-3">
          {waterFilterCards.map((iconItem, index) => (
            <Col key={index} md={index < 2 ? 6 : 4} xs={12} sm={12}  data-aos="flip-left">
              <WaterFilterCards
                title={iconItem.title}
                content={iconItem.content}
              />
            </Col>
          ))}
        </Row>
        <br/>
        <br/>
        <h2 className="text-center"><b>Why Filters are Essential in a Water Ionizer and <br/> Their Importance ?</b></h2>
        <p className="text-center">Water ionizers are designed to produce clean, healthy, and hydrogen-rich alkaline water. However, without effective <br/> filtration, the water may still contain harmful contaminants like chlorine, heavy metals, bacteria, and pesticides. Here's <br/> why filters are crucial in a water ionizer</p>
         <br/>
         
        <Row className="d-flex flex-wrap g-3">
          {EssentialInAWater.map((iconItem, index) => (
            <Col key={index} md={index === 0 ? 6 : index === 1 || index === 2 ? 3 : 4}>
              <WaterFilterCards
                title={iconItem.title}
                content={iconItem.content}
              />
            </Col>
          ))}
        </Row>


        <br/>
        <h2 className="text-center"><b>Why Regular Replacement of Filters in <br/> Water Ionizers is Necessary ?</b></h2>
        <p className="text-center">Over time, water ionizer filters become saturated with trapped contaminants, reducing their effectiveness. <br/> Here's why it's essential to replace them regularly:</p>
        <br/>


        {/* Regular Replacement */}
        <Row className="d-flex flex-wrap g-3">
          {RegularReplacement.map((iconItem, index) => (
            <Col key={index} md={index < 3 ? 4 : index === 3 ? 7 : 5}>
              <WaterFilterCards
                title={iconItem.title}
                content={iconItem.content}
              />
            </Col>
          ))}
        </Row>

        <br/>
        <br/>

        <Row>
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <div style={{width:'80%'}}>
          <Image src={filterbackboor} alt={"Tyent's .01 Micron Filtration"} layout="responsive"  />
          </div>
          </Col>
          <Col md={8} className="d-flex align-items-center justify-content-center">

          <div>
            <h3 style={{color:'#008AC7'}}><b>How Often Should Filters Be Replaced ?</b></h3>
            <p>
            Filter replacement frequency depends on water quality, usage, and the ionizer's filtration capacity. Regular filter changes are essential to maintain optimal performance, ensuring stable pH and -ORP levels, cleaner water, consistent health benefits, and an extended lifespan for your water ionizer.
            </p>
            </div>
          </Col>
          
        </Row>
        
        <br/>
          <br/>

          <Row>
        
          <Col md={6} className="d-flex align-items-center justify-content-center">

          <div>
            <h3>Molecular Hydrogen - <b style={{color:'#008AC7', fontSize:'40px'}}>An emerging medical as</b></h3>
            <p>
            Filters are just like kidneys of a water ionizer, ensuring pure, safe, and high-quality alkaline water. Regular replacement is crucial to maintain purity, protect your health, and sustain optimal ionizer performance. For best results, follow the manufacturer’s filter replacement schedule and invest in high-quality filters for your water ionizer.
            </p>
            </div>
          </Col>

          <Col md={6} className="d-flex justify-content-center align-items-center">
          <div style={{width:'60%'}}>
          <Image src={filter} alt={"Tyent's .01 Micron Filtration"} layout="responsive"  />
          </div>
          </Col>
          
        </Row>

      </div>
    </div>
  );
};

export default Page;
