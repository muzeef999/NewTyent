import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import dynamic from "next/dynamic";
import AskyourQuery from "@/asserts/contact/AskyourQuery.webp";
import DealerEnquiry from "@/asserts/contact/DealerEnquiry.webp";
import productDemo from "@/asserts/contact/productDemo.webp";
import ServiceRequest from "@/asserts/contact/ServiceRequest.webp";
import Image from "next/image";
import contactUsBanner from "@/asserts/contactUsBanner.png";

const Header = dynamic(() => import("../compoents/Header"), {
  ssr: false,
});

export const metadata = {
  title: "Contact Tyent - Get in Touch with Us",
  description:
    " Have questions? Contact Tyent for inquiries about our water ionizers, services, and support.",
};

const headerData = {
  preheading: "Trust, Care & Commitment",
  afterheading: "We're happy to help!",
  img: contactUsBanner,
  animatedText: "Have Questions ?, Need Assistance ? ",
};

const InfoCard = ({ icon: Icon, title, text }) => (
  <Col xs={12} md={4} style={{ padding: "20px" }}>
    <div className="custom-card">
      <p
        className="m-0"
        style={{ fontSize: "20px", fontWeight: 600, padding: "10px" }}
      >
        {title}
      </p>
      <div className="d-flex align-items-top">
        <div className="contennticon p-1">
          <Icon
            size={20}
            style={{
              backgroundColor: "#008ac7",
              color: "#FFF",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        </div>
        <div className="content align-items-top">
          <div
            className="text p-1"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </div>
  </Col>
);

const Page = () => {
  const items = [
    { src: productDemo, alt: "Product Demo", title: "Product Demo" },
    { src: DealerEnquiry, alt: "Dealer Enquiry", title: "Dealer Enquiry" },
    { src: ServiceRequest, alt: "Service Request", title: "Service Request" },
    { src: AskyourQuery, alt: "Ask your Query", title: "Ask your Query" },
  ];

  return (
    <div>
      <Header
        basic={headerData.basic}
        preheading={headerData.preheading}
        afterheading={headerData.afterheading}
        content={headerData.content}
        img={headerData.img}
        animatedText={headerData.animatedText} // Passing dynamic animated text
      />
      <Container>
        <div className="section-spacing">
          <h3
            className="m-0 text-center"
            style={{ color: "#008AC7", fontWeight: "600" }}
            data-aos="fade-down"
          >
            You can find us here!{" "}
          </h3>
          <p className="text-center" style={{ fontSize: "20px" }}>
            We would love to connect with you
          </p>
          <br />
          <Row className="g-4">
            {items.map((item, index) => (
              <Col
                key={index}
                md={3}
                sm={6}
                xs={6}
                className="text-center"
                data-aos="zoom-in"
              >
                <div>
                  <a href="#top-section" style={{ textDecoration: "none" }}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="responsive"
                      priority
                      style={{
                        borderRadius: "20px",
                        userSelect: "all",
                        pointerEvents: "auto",
                      }}
                    />
                    <h5 className="mt-3">
                      <b style={{ color: "#008AC7" }}>{item.title}</b>
                    </h5>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="section-spacing" data-aos="fade-up">
          {/* First Row */}
          <Row>
            {" "}
            {/* Added grid gap and bottom margin for row */}
            <InfoCard
              icon={CiLocationOn}
              title="Corporate Head office:"
              text="8-277/45, UBI Colony,
           Banjara Hills Rd Number 3, Hyderabad, Telangana - 500034.
           Landmark:  Near TV9 news office"
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent Delhi"
              text="INTERIOR IMPEX,
SHOP NO. 08, 1/8, WHS,
KIRTI NAGAR, NEW DELHI, 
Central Delhi, Delhi-110015."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent Mumbai"
              text={`Mahadev Enterprises, 
Room no 2 , Merry building, 
Liberty garden no 3, 
Near moreshwar dham Building,
Malad west Mumbai - 400064.`}
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent Ahmadabad"
              text="Akshar Commercants Private Limited,
F 504, Sahajanand Homes,
Chenpur Road, Nr IOC Patrol Pump, 
New Ranip, Ahmedabad- 382470."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent Sikhar RJ"
              text={`Kanha enterprises
Near Surajmal gate,
Piprali chowk, 
Jhunjhunu bypass,
Sikar, Rajasthan -332001.`}
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent ALLAHABAD - UP"
              text="A. R. Sales,
248/64, M. G. MARG,
NEAR K. P. COLLEGE,
OPP. VIDHYA VAHINI SCHOOL,
PRAYAGRAJ - 211001."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent Pune"
              text="AAROHI ENTERPRISES,
FLAT NO-8,
B WING,87/120-B, 
LEGEND CLASSIC APPARTMENT,
KOTHRUD, PUNE - 411058."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent - Varanasi"
              text="ANAYA RETREAT,
B-38/1-D-1  GROUND  FLOOR ,
BIRDOPUR, MAHMOORGANJ, 
KAMACHHA SUB POST OFFICE,
JAHUMANDI, VARANASI-221010."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent - Kolkata"
              text="AP ENTERPRISES, 
69/1 A, Deshbandhu Road,
(east),Baranagar, P.O -Alambazr,
Dist.- North 24, parganas,
West Bengal, Kolkata -700 035."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent - Zirakpur"
              text="VISHAL TRADERS ,
shop no - 52 ground floor, Palam enclave, 
Ranjan plaza Zirakpur, Landmark - near jp hospital, 
zirakpur chd highway, Mohali,        
ZIRAKPUR, PUNJAB - 140 603."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent - Surat"
              text="U.S. AQUA INTERNATIONAL,
C 302, kpm apartment ,
opp Chandan park City lights, 
Surat, Gujarat - 395007."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent - Sri Ganganagar, RJ"
              text="TAK TRADERS,
C/O Sahi Ram Tak,
H. No. 7-8, Tak Colony, 
Gali No. 6, 5e (RURAL), 
Ganganagar, Rajasthan - 335001."
            />

<InfoCard
              icon={CiLocationOn}
              title="Tyent - Ahmadabad"
              text="SCARLET APPARATUS,
SHOP NO.10, VRAJ VIHAR-3,
OPP. ASHOKNAGAR, 
NR. PRERANA TIRTH DERASAR,
SATELLITE, AHMEDABAD-380015."
            />

<InfoCard
              icon={CiLocationOn}
              title="Tyent - Karnal, Haryana"
              text="RUHANI ENTERPRISES,
KHEWAT NO 375, 
AGGARSAIN COLONY,
NEAR BIJLI BOARD, Gharaunda, 
Karnal,Haryana - 132114."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent - UTTARAKHAND"
              text="PREM MOTORS,
1, HARIDWAR ROAD,
PRINCE CHOWK, 
DHERADUN ,UTTARAKHAND -248001."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent - Kanpur, UP"
              text="M/S IDEAL SUPPLIER & SERVICES,
C/O SIRAJ ALAM,
AARZI NO 891, BUDHPUR,
Machhariya Road, Kanpur, 
KanpurA, Nagar-Uttar Pradesh - 208021."
            />
            <InfoCard
              icon={CiLocationOn}
              title="Tyent Belgaum, KA"
              text="FIRST MARK HYDROGEN SOLUTIONS, 
SHOP NO, 1, 1761/1A, 
WESTERN TOWER, KIRLOSKAR ROAD , 
BELGAUM, BELAGAVI,
BELGAUM, KARNATAKA -590001."
            />
          </Row>
        </div>
      </Container>
      <div id="top-section"></div>
    </div>
  );
};

export default Page;
