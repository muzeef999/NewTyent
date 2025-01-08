import ProductSection from '@/app/(home)/compoents/(products)/ProductSection';
import Certifications from '@/app/(home)/compoents/Certifications';
import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import "@/app/style/Uce.css"



const RegularReplacement = [
    {
      title: "Patented SMPS PLUS power supply",
      content:
    "The hybrid mesh design maximizes surface area, allowing for more effective electrolysis. This results in the production of higher quantities of hydrogen-rich alkaline water, offering enhanced health benefits such as improved hydration and powerful antioxidant properties."
      },
    {
      title: "Automated/Past cleaning system",
      content:
   "Made from high-grade titanium and platinum, Tyent’s plates are resistant to corrosion and wear, ensuring long-lasting performance and minimal maintenance. These plates are built to withstand the rigors of continuous use."
    },
    {
      title: "ECO mode",
      content:
   "The Tyent water ionizer’s features Eco Mode, enhancing energy efficiency with up to 99% savings. It reduces power consumption by automatically turning off the LCD backlight during idle periods, ensuring optimal performance while conserving electricity."
    },
    {
      title: "One touch LCD display",
      content:
    "Tyent offers an industry-leading 15-year warranty on its plates, reflecting the company’s commitment to quality and durability. This extended warranty ensures long-term peace of mind, guaranteeing that Tyent’s advanced plates remain functional and effective for years, providing exceptional value and minimizing the need for costly replacements or maintenance."
    }
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
  

const page = () => {



    const handleTab = (index) => {
        setCurrentIndex(index);
      };
    
      const products = [
        {
          src: [
            "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/uce%2FWhatsApp%20Image%202023-05-13%20at%2010.05.26.webp?alt=media&token=69fe99c8-1125-4a2f-9a0a-1b640548b3a5",
            "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/uce%2FWhatsApp%20Image%202023-05-09%20at%2001.25.53.webp?alt=media&token=0e1f17b2-013c-4fa3-ba3a-96c11177b740",
          ],
        },
      ]; 
    
      const specifications = [
        { label: "Model", name: "Tyent UCE-9 plus" },
        { label: "Price", name: "325000" },
        { label: "Electrode/Plates", name: "5" },
        { label: "pH Range", name: "2.5 - 11.5" },
        { label: "ORP Range", name: "Up to -1050" },
        { label: "Hydrogen Range", name: "Up to 1800 PPB" },
        { label: "Generates", name: "7 types of water levels" },
        {
          label: "pH Levels",
          name: "3 alkaline, 2 acidic, 1 neutral, & 1 Turbo (Strong alkaline 11.5 pH)",
        },
        { label: "Plate Surface Area", name: "52.9 * 5 = 264.5 sq inches" },
        { label: "Water Generating Capacity", name: "1.5 - 3.0 L/min" },
        {
          label: "Filters Structure",
          name: "2 filters (NSF, EPA & ANSI certified)",
        },
        {
          label: "Filter Composition",
          name: "Carbon Block, UF, TM ceramics, Membrane & Calcium sulfite",
        },
        { label: "Filter Capacity", name: "8500 L" },
        { label: "Dimension (mm)", name: "300(W) * 135(D) * 355(H)" },
        { label: "Weight (kg)", name: "5.2" },
        { label: "Cleaning Type", name: "Auto cleaning system (PAST Technology)" },
        { label: "Display Type", name: "One-touch LCD" },
        { label: "Power Supply", name: "Patented SMPS PLUS power supply" },
        { label: "Power Consumption", name: "Max 220W" },
        { label: "Operating Voltage Range", name: "200 - 240V, 50-60 Hz" },
        { label: "Voice Confirmation", name: "Yes" },
        {
          label: "Input Water Parameters Required",
          name: "Input water TDS: 90 - 160, Input water pH: 7 pH, Input water Pressure: 5 - 7 L/Min",
        },
        {
          label: "Warranty",
          name: "3 Years on ionizer & 15 years on electrodes/plates",
        },
        {
          label: "General Services",
          name: "3 services per year, 9 free services in 3 years in warranty period (PAN INDIA)",
        },
        {
          label: "Safety Function",
          name: "Water temperature sensor, Supplying water sensor, Overheating protection sensor, Error indication sensor",
        },
        { label: "Installation Type", name: "Counter-top/Wall-mounted" },
        {
          label: "Water Dispensing Method",
          name: "Tankless System/Touch Button/Fully Automatic",
        },
        {
          label: "Electrode Design",
          name: "Solid-Hybrid mesh plate design (Titanium & Platinum)",
        },
        { label: "Electrode Material", name: "Platinum-coated Titanium" },
        { label: "Purity of Plates", name: "99.99% (Permelac, Japan)" },
        { label: "Plates Manufacturing", name: "Permelac, Japan" },
        { label: "Additional Use of Chemicals/Salt", name: "No" },
        {
          label: "Manufacturing Company",
          name: "Taeyoung E&T Co., Ltd, 908 Ungsang-daero, Yangsan-si, Gyeongsangnam-do, Korea - 50537",
        },
      ];
  return (
    <div>
        <Container>
        <ProductSection
        products={products}
        specifications={specifications}
      />

</Container>





<div className='backgrounduce'>

<div className='container'>

<Row className='custom-card'>
    <Col md={6}></Col>
    <Col md={6} style={{aspectRatio:'1/1'}}>
    <div>

    <h3 className="text-start" style={{ color: "#008AC7" }}><b>Fixed quantity discharge function</b></h3>
<p>Tyent water ionizers are engineered for modern convenience, featuring the Fixed
Quantity Discharge function. It dispenses precise amounts of 0.5L, 1.0L, or 1.5L,
making hydration and cooking effortless and accurate for daily use</p>


<h3 className="text-start" style={{ color: "#008AC7" }}><b>Automatic Stop Function</b></h3>

<p>Water outflow will stop to prevent overflow or flooding. there is no need to wait if the unit automatically shuts off. You can resume its use immediately
</p>
<h3 className=" text-start" style={{ color: "#008AC7" }}><b>Temperature sensor</b></h3>

<p>This unit is equipped with a temperature sensor which prevents the accidental inflow of hot water.</p>
    </div>
    
    
    </Col>
</Row>

<br/>


<Row className="g-3">
  <Col md={8}>
    <Row>
      {RegularReplacement.map((iconItem, index) => (
        <Col style={{marginBottom:'12px'}} key={index} md={index < 2 ? 6 : index === 3 ? 7 : 5}>
          <WaterFilterCards
            title={iconItem.title}
            content={iconItem.content}
          />
        </Col>
      ))}
    </Row>
  </Col>
  <Col md={4}></Col>
</Row>

</div>
</div>


<Container>
<h2
          className="text-center mb-4"
          style={{
            color: "#008AC7",
            fontWeight: "600",
            fontSize: "2rem", // Default for large screens
          }}
        >
          Tyent UCE-9 plus Specification's
        </h2>

        <Table className="custom-table" hover responsive>
          <tbody>
            {specifications.map((item, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008AC7",
                    textAlign: "left",
                    padding: "10px",
                  }}
                >
                  {item.label}
                </td>
                <td
                  style={{
                    fontSize: "16px",
                    color: "#333",
                    textAlign: "left",
                    padding: "10px",
                  }}
                >
                  : {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Certifications />
        </Container>
    </div>
  )
}

export default page