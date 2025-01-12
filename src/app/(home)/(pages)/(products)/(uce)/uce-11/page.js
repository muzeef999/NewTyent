import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import Certifications from "@/app/(home)/compoents/Certifications";


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
      { label: "Model", name: "Tyent UCE-11 plus" },
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
    <div style={{background: 'repeating-linear-gradient(#f8fbfe, #d9d9d9, #f8fbfe 550px)'}}>
      <Container>
        <ProductSection products={products} specifications={specifications} />
      </Container>

      <Container>
      <Row>
        <Col xs={12} md={6}></Col>
        <Col xs={12} md={6}>
         <p>Introducing </p>
          <h2>TYENT UCE-13 PLUS</h2>
        <p>The <b>Tyent UCE-13 PLUS</b> is a best-selling, space-saving flagship under counter water ionizer, crafted to elevate your high-end kitchen with its advanced technology and sleek, aesthetic design. Its compact form and modern look blend seamlessly into premium kitchen spaces, while the intuitive Tyent faucet, featuring a touch and jog dial, makes operation effortlessly smooth. </p>
        <p>Equipped with 9 Japanese solid hybrid mesh plates/electrodes from Permelac, Japan (since 1969), made of titanium and coated in platinum for 99.9% purity, Offering seven different water levels, it generates selective antioxidant-rich molecular hydrogen up to 1800 PPB and -ORP up to -1050. Backed by a 3-year machine warranty, a 15-years plates/electrode warranty, and a 45+ year lifespan.</p>
        </Col>
      </Row>
      </Container>


      <Container>
        <h2
          className="text-center mb-4"
          style={{
            color: "#000",
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
                    color: "#000",
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