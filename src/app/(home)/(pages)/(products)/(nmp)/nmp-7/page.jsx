import ProductSection from '@/app/(home)/compoents/(products)/ProductSection';
import Certifications from '@/app/(home)/compoents/Certifications';
import React from 'react'
import { Container, Table } from 'react-bootstrap';

const page = () => {


  
  const products = [
    {
      src: [
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTNMP1.webp?alt=media&token=522f47f3-2aef-47ef-9ddb-c426ac468fa5",
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTIMAGESNMP3.webp?alt=media&token=a492cd28-e40d-4a0a-a569-2cc647a89eb8",
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTIMAGESNMP2.webp?alt=media&token=b032deee-d922-4b11-946e-81b555e14e56",
      ],
    },
  ]; 

  const specifications = [
    { label: "Model", name: "Tyent NMP-7" },
    { label: "Price", name: "200000" },
    { label: "Electrode/Plates", name: "7" },
    { label: "pH Range", name: "2.5 - 11.5" },
    { label: "ORP Range", name: "Up to -950" },
    { label: "Hydrogen Range", name: "Up to 1550 PPB" },
    { label: "Generates", name: "7 types of water levels" },
    { label: "pH Levels", name: "3 alkaline, 2 acidic, 1 neutral, & 1 Turbo (Strong alkaline 11.5 pH)" },
    { label: "Plate Surface Area", name: "52.9 * 7 = 370.3 sq inches" },
    { label: "Water Generating Capacity", name: "1.5 - 3.0 L/min" },
    { label: "Filters Structure", name: "2 filters (NSF, EPA & ANSI certified)" },
    { label: "Filter Composition", name: "Carbon Block, UF, TM ceramics, Membrane & Calcium sulfite" },
    { label: "Filter Capacity", name: "8500 L" },
    { label: "Dimension (mm)", name: "300(W) * 135(D) * 355(H)" },
    { label: "Weight (kg)", name: "5.2" },
    { label: "Cleaning Type", name: "Auto cleaning system (PAST Technology)" },
    { label: "Display Type", name: "One-touch LCD" },
    { label: "Power Supply", name: "Patented SMPS PLUS power supply" },
    { label: "Power Consumption", name: "Max 220W" },
    { label: "Operating Voltage Range", name: "200 - 240V, 50-60 Hz" },
    { label: "Voice Confirmation", name: "Yes" },
    { label: "Input Water Parameters Required", name: "Input water TDS: 90 - 160, Input water pH: 7 pH, Input water Pressure: 5 - 7 L/Min" },
    { label: "Warranty", name: "3 Years on ionizer & 15 years on electrodes/plates" },
    { label: "General Services", name: "3 services per year, 9 free services in 3 years in warranty period (PAN INDIA)" },
    { label: "Safety Function", name: "Water temperature sensor, Supplying water sensor, Overheating protection sensor, Error indication sensor" },
    { label: "Installation Type", name: "Counter-top/Wall-mounted" },
    { label: "Water Dispensing Method", name: "Tankless System/Touch Button/Fully Automatic" },
    { label: "Electrode Design", name: "Solid-Hybrid mesh plate design (Titanium & Platinum)" },
    { label: "Electrode Material", name: "Platinum-coated Titanium" },
    { label: "Purity of Plates", name: "99.99% (Permelac, Japan)" },
    { label: "Plates Manufacturing", name: "Permelac, Japan" },
    { label: "Additional Use of Chemicals/Salt", name: "No" },
    { label: "Manufacturing Company", name: "Taeyoung E&T Co., Ltd, 908 Ungsang-daero, Yangsan-si, Gyeongsangnam-do, Korea - 50537" }
];
 

  return (
    <div>
      <Container>
        
        

      <ProductSection
        products={products}
        specifications={specifications}
      />



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
