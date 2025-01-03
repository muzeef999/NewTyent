import dynamic from 'next/dynamic';
import React from 'react'
import smps from '@/asserts/smps.png'
import { Col, Row } from 'react-bootstrap';
const Header = dynamic(() => import("../compoents/Header"), { ssr: false });



const RegularReplacement = [
  {
    title: "Increased Surface Area",
    content:
  "The hybrid mesh design maximizes surface area, allowing for more effective electrolysis. This results in the production of higher quantities of hydrogen-rich alkaline water, offering enhanced health benefits such as improved hydration and powerful antioxidant properties."
    },
  {
    title: "Durability and Longevity",
    content:
 "Made from high-grade titanium and platinum, Tyent’s plates are resistant to corrosion and wear, ensuring long-lasting performance and minimal maintenance. These plates are built to withstand the rigors of continuous use."
  },
  {
    title: "Improved Efficiency",
    content:
  "The hybrid design ensures that water flows efficiently across the plate surface, maximizing ionization while reducing energy consumption. This leads to faster and more efficient production of alkaline water."
  },
  {
    title: "15 Year warranty",
    content:
  "Tyent offers an industry-leading 15-year warranty on its plates, reflecting the company’s commitment to quality and durability. This extended warranty ensures long-term peace of mind, guaranteeing that Tyent’s advanced plates remain functional and effective for years, providing exceptional value and minimizing the need for costly replacements or maintenance."
  },
  {
    title: "Superior Ionization Power",
    content:
 "Combining the strength of solid plates with the efficient mesh design, Tyent’s plates deliver unparalleled ionization power, resulting in superior water quality compared to traditional plate designs."
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

const page = () => {

     const headerData = {
            basic: "Trust, Satisfaction & Transformations",
            preheading: "Hear From Our Real",
            afterheading: "Satisfied Tyent India Customers",
            content:
              "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water.",
            img: smps,
            animatedText: "Health, Wellness, Transformation",
          };
  
          return (
    <div>
        <Header {...headerData} />
        <div className='container'>
            <Row>
              <Col md={6} className='d-flex justify-content-center align-items-center'>
              <div>
                <p>Electrodes or plates are one of the most important components of a water ionizer. These plates are typically made of metals like titanium and are coated with a specialized material like platinum, which helps to facilitate the ionization process. When water passes over the plates, an electric current is passed through the water, creating a separation of positive and negative ions.</p>
                <p>The design, number, and quality of the plates used in a water ionizer play a crucial role in determining the effectiveness and efficiency of the ionization process. A well-designed plate system with more plates typically offers a higher ionization potential, resulting in the production of more hydrogen-rich alkaline water. Additionally, the quality of the materials used for the plates influences their durability and long-term performance.</p>
                <p>It’s important to choose a water ionizer with an advanced plate design and high-quality electrodes to ensure optimal hydrogen-rich alkaline water production. This not only enhances health benefits but also provides long-term cost savings by reducing reliance on expensive bottled water.</p>
              </div>
              </Col>
              <Col md={6}></Col>
            </Row>
 
            <br/>
            <br/>
            <Row>
            <Col md={6} className='d-flex jjustify-content-center align-items-center'>
            <div className='m-4'>
              <h1 style={{color:'#008AC7'}}><b>Types of Electrodes/Plates:</b></h1>
              <h5>Solid Hybrid mesh plate, Mesh plate & Solid plate</h5>
              </div>
            </Col>
              <Col md={6} className='d-flex justify-content-center align-items-center'>
                <div>
                  <p>
                  Tyent is a recognized leader in water ionizer technology, known for its cutting-edge electrode designs. At the heart of Tyent's innovation are its Solid Hybrid Mesh Plates, Tyent plates are designed based on Faraday's law of equal distribution, using a unique hybrid mesh technology. This innovative design involves transforming a solid plate into a hybrid mesh, combining the strength and durability of solid plates with the efficiency of mesh. The result is an optimal balance for water ionization, delivering superior performance and longevity.
                  </p>
                </div>
              </Col>
            </Row>

            <br/>
            <br/>

            <h2 className='text-center'>The<b style={{color:'#008AC7'}}> Advantage</b> of Tyent’s Solid <br/> Hybrid Mesh Plates</h2>
        <p className='text-center'>Tyent’s use of advanced Japanese technology ensures that its plates are some of the most effective in the industry. Sourced from <br/> Permelec, a prestigious Japanese company (Since 1969) specializing in high-quality electrodes, Tyent's plates benefit from <br/> superior manufacturing processes that make them durable, efficient, and reliable for long-term use.</p>
         <br/>
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
        <h2 className='text-center'>Why Say<b style={{color:'red'}}> No</b> to Solid Plates and Mesh Plates?</h2>
        <p className='text-center'>While both solid and mesh plates have their own advantages, each has limitations that Tyent's Solid Hybrid Mesh Plates aim to overcome:</p>
       <br/>
       <Row>
       <Col
            md={6}
            className="d-flex justify-content-center alin-items-center"
            style={{ backgroundColor: "#f2f2f2", color: "#000", aspectRatio:'1/1'}}
          >
            <div style={{ padding: "60px" }}>
              <h2 style={{ fontWeight: 600 }}>Solid Plates</h2>
              <p style={{ fontSize: "18px" }}>
              Traditional solid plates have a large surface area and are the oldest and strongest technology in water ionizers. However, they do not ionize the water effectively because the ionization happens unevenly, mainly only at the edges. This results in lower hydrogen production and fewer antioxidants (-ORP). Over time, solid plates also get scale buildup, which affects their performance and requires regular cleaning. They are also bulky and consume more power to give the same ionization, leading to higher energy bills and less efficient water purification compared to newer technologies.
              </p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center alin-items-center"
            style={{ backgroundColor: "#008AC7", color: "#FFF", aspectRatio:'1/1' }}
          >
            <div style={{ padding: "60px" }}>
              <h2 style={{ fontWeight: 600 }}>Mesh Plates</h2>
              <p style={{ fontSize: "18px" }}>
              Mesh plates are generally more efficient for ionization because they have a larger surface area, allowing for better water flow and more effective electrolysis. However, their performance is limited by the unorganized design of the mesh, which can cause uneven ionization and lower hydrogen production (-ORP/antioxidants). While mesh plates are more efficient than solid plates, they don’t provide the same ionization power and production of hydrogen/antioxidants as solid hybrid mesh plates, reducing their effectiveness. Also, some mesh plates may wear out faster, affecting their long-term durability and performance.
              </p>
            </div>
          </Col>
          
        </Row>
        

        </div>
    </div>
  )
}

export default page