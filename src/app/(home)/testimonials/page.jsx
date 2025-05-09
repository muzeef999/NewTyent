import React from "react";
import dynamic from "next/dynamic";
import { Col, Row } from "react-bootstrap";
import testmonials from "@/asserts/Testmonials/testmonials.webp";
import Image from "next/image";
import icon from "@/asserts/Testmonials/icon1.png";



const RWebShareComp = dynamic(() => import("../compoents/RWebShare"), {
  ssr: false,
});
const Header = dynamic(() => import("../compoents/Header"), { ssr: false });

// Importing company images all at once
import icon1 from "@/asserts/logos/1.png";
import icon2 from "@/asserts/logos/2.png";
import icon3 from "@/asserts/logos/3.png";
import icon4 from "@/asserts/logos/4.png";
import icon5 from "@/asserts/logos/5.png";
import icon6 from "@/asserts/logos/6.png";
import icon7 from "@/asserts/logos/7.png";
import icon8 from "@/asserts/logos/8.png";
import icon9 from "@/asserts/logos/8.png";
import icon10 from "@/asserts/logos/10.png";
import icon11 from "@/asserts/logos/11.png";
import icon12 from "@/asserts/logos/12.png";
import icon13 from "@/asserts/logos/13.png";
import icon14 from "@/asserts/logos/14.png";
import icon15 from "@/asserts/logos/15.png";
import icon16 from "@/asserts/logos/16.png";
import icon17 from "@/asserts/logos/17.png";
import icon18 from "@/asserts/logos/18.png";
import icon19 from "@/asserts/logos/19.png";
import icon20 from "@/asserts/logos/20.png";
import icon21 from "@/asserts/logos/21.png";
import icon22 from "@/asserts/logos/22.png";
import icon23 from "@/asserts/logos/23.png";
import icon24 from "@/asserts/logos/24.png";
import icon25 from "@/asserts/logos/25.jpg";
import icon26 from "@/asserts/logos/26.jpg";
import icon27 from "@/asserts/logos/27.jpg";
import icon28 from "@/asserts/logos/28.jpg";
import icon29 from "@/asserts/logos/29.jpg";
import icon30 from "@/asserts/logos/30.jpg";
import icon31 from "@/asserts/logos/31.jpg";
import icon32 from "@/asserts/logos/32.jpg";
import icon33 from "@/asserts/logos/33.jpg";
import icon34 from "@/asserts/logos/34.jpg";
import icon35 from "@/asserts/logos/35.jpg";
import icon36 from "@/asserts/logos/36.jpg";
import icon37 from "@/asserts/logos/37.jpg";
import icon38 from "@/asserts/logos/38.jpg";
import icon39 from "@/asserts/logos/39.jpg";
import icon40 from "@/asserts/logos/40.jpg";
import icon41 from "@/asserts/logos/41.jpg";
import icon42 from "@/asserts/logos/42.jpg";
import icon43 from "@/asserts/logos/43.jpg";


const iconImages = [
  { src: icon1, alt: "Icon 1" },
  { src: icon2, alt: "Icon 2" },
  { src: icon3, alt: "Icon 3" },
  { src: icon4, alt: "Icon 4" },
  { src: icon5, alt: "Icon 5" },
  { src: icon6, alt: "Icon 6" },
  { src: icon7, alt: "Icon 7" },
  { src: icon8, alt: "Icon 8" },
  { src: icon9, alt: "Icon 8" },
  { src: icon10, alt: "Icon 8" },
  { src: icon11, alt: "Icon 8" },
  { src: icon12, alt: "Icon 8" },
  { src: icon13, alt: "Icon 8" },
  { src: icon14, alt: "Icon 8" },
  { src: icon15, alt: "Icon 8" },
  { src: icon16, alt: "Icon 8" },
  { src: icon17, alt: "Icon 8" },
  { src: icon18, alt: "Icon 8" },
  { src: icon19, alt: "Icon 8" },
  { src: icon20, alt: "Icon 8" },
  { src: icon21, alt: "Icon 8" },
  { src: icon22, alt: "Icon 8" },
  { src: icon23, alt: "Icon 8" },
  { src: icon24, alt: "Icon 8" },
  { src: icon25, alt: "Icon 8" },
  { src: icon26, alt: "Icon 8" },
  { src: icon27, alt: "Icon 8" },
  { src: icon28, alt: "Icon 8" },
  { src: icon29, alt: "Icon 8" },
  { src: icon30, alt: "Icon 8" },
  { src: icon31, alt: "Icon 8" },
  { src: icon32, alt: "Icon 8" },
  { src: icon33, alt: "Icon 8" },
  { src: icon34, alt: "Icon 8" },
  { src: icon35, alt: "Icon 8" },
  { src: icon36, alt: "Icon 8" },
  { src: icon37, alt: "Icon 8" },
  { src: icon38, alt: "Icon 8" },
  { src: icon39, alt: "Icon 8" },
  { src: icon40, alt: "Icon 8" },
  { src: icon41, alt: "Icon 8" },
  { src: icon42, alt: "Icon 8" },
  { src: icon43, alt: "Icon 8" },
  

  // Add more icons here as necessary
];

export const metadata = {
  title: "Customer Testimonials | See What Our Clients Say",
  description: "Read real customer testimonials and success stories about our products and services. See why our clients trust us!",

};

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/-xXUDPQVQfY?rel=0&modestbranding=1",
    description:
      "Akhil Bansal's Honest Comparison: Enagic Kangen vs. Tyent Ionizers",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/EHOzAr4H3nU?rel=0",
    description: "Unlocking Wellness: Tyent Water Ionizer Testimony from Pune",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/o9N4evESgPU?rel=0",
    description:
      "Colonel Vishnu Singh Rawal Sir Reviews Tyent Ionizer: The Ultimate Health Solution",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/hcSywpiWZy0?rel=0",
    description:
      "𝐀𝐧𝐯𝐞𝐬𝐡 𝐏𝐚𝐭𝐞𝐥's Personal Experience: 𝐓𝐲𝐞𝐧𝐭 Water Ionizer - The Perfect Solution",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/4gVHb-XcjTA?rel=0",
    description:
      "𝐒𝐮𝐝𝐡𝐚𝐤𝐚𝐫𝐚 𝐍𝐞𝐞𝐥𝐚𝐦's honest Testimony after using 𝐓𝐲𝐞𝐧𝐭 Water Ionizer for 4 Years",
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/Jcwaqs2K1sk?rel=0",
    description:
      "𝐓𝐲𝐞𝐧𝐭 - 𝐌𝐲 𝐒𝐞𝐜𝐫𝐞𝐭 𝐭𝐨 𝐇𝐞𝐚𝐥𝐭𝐡 𝐚𝐧𝐝 𝐑𝐚𝐝𝐢𝐚𝐧𝐭 𝐒𝐤𝐢𝐧 - 𝐒𝐞𝐧𝐢𝐨𝐫 𝐀𝐜𝐭𝐫𝐞𝐬𝐬 𝐒𝐡𝐚𝐧𝐨𝐨𝐫 𝐒𝐚𝐧𝐚 𝐆𝐚𝐫u",
  },
  {
    id: 7,
    src: "https://www.youtube.com/embed/4bSRX0eA8kE?rel=0",
    description:
      "𝐒𝐮𝐛𝐡𝐚's Journey of Weight Loss & Reversing Diabetes with 𝐓𝐲𝐞𝐧𝐭",
  },
  {
    id: 8,
    src: "https://www.youtube.com/embed/3Qi2Bp8gB6M?rel=0",
    description:
      "𝐒𝐮𝐝𝐡𝐚 𝐒𝐫𝐢𝐧𝐢𝐯𝐚𝐬 𝐆𝐚𝐫𝐮 (CFO at NMDC) Shares Health Benefits and Service Experience with 𝐓𝐲𝐞𝐧𝐭 ",
  },
  {
    id: 9,
    src: "https://www.youtube.com/embed/Kdrdsgzpni8?si=7UR-rQl-DOVRpYZx",
    description: "𝐋𝐚𝐤𝐬𝐡𝐦𝐚𝐧𝐑𝐚𝐨's remarkable journey in choosing 𝐓𝐲𝐞𝐧𝐭",
  },
];

const icons = [
  {
    id: 1,
    icon: icon,
    name: "Sai korrapati",
    designation: "Actor",
  },
  {
    id: 2,
    icon: icon,
    name: "Venu thottempudi",
    designation: "Actor",
  },
  {
    id: 3,
    icon: icon,
    name: "VV Vinayak",
    designation: "Film Director",
  },
  {
    id: 4,
    icon: icon,
    name: "Sana Shanoor",
    designation: "Film Actress",
  },
  {
    id: 5,
    icon: icon,
    name: "Jagdeep Dhankar",
    designation: "VP",
  },
  {
    id: 6,
    icon: icon,
    name: "Ramalinga Reddy",
    designation: "Transport Minister of Karnataka.",
  },
  {
    id: 7,
    icon: icon,
    name: "Vasupalli Ganesh Kumar",
    designation: "EX - MLA(AP)",
  },
  {
    id: 8,
    icon: icon,
    name: "Robin Uttapa",
    designation: "Former Indian Cricketer",
  },
  {
    id: 9,
    icon: icon,
    name: " Mr. M. Madan Mohan Reddy",
    designation: "Whole Time Director, Aurobindo",
  },
  {
    id: 10,
    icon: icon,
    name: "V. Saveen",
    designation: "Awarded Natural Bodybuilder, FITT Studio",
  },
  {
    id: 11,
    icon: icon,
    name: "DV Rao",
    designation: "MD, VSP Industries",
  },
  {
    id: 12,
    icon: icon,
    name: "Addanki Dayakar",
    designation: "Ex - MLA(TS)",
  },
  {
    id: 13,
    icon: icon,
    name: "Padmaja Lanka",
    designation: "Film Actress",
  },
  {
    id: 14,
    icon: icon,
    name: "Dr. Pradeep Kumar",
    designation: "Commissioner Customs & GST",
  },
  {
    id: 15,
    icon: icon,
    name: "N C Naga raj ",
    designation: "EX-DSP Thumkur - KA",
  },
  {
    id: 16,
    icon: icon,
    name: "Srinivas Rao",
    designation: "ACP - Telangana",
  },
  {
    id: 17,
    icon: icon,
    name: "Shiva Naidu",
    designation: "DSP - Crime - Telangana",
  },
  {
    id: 18,
    icon: icon,
    name: "Bhanu",
    designation: "Retired IAS",
  },
  {
    id: 19,
    icon: icon,
    name: "Satyanaryana",
    designation: "KLU  President",
  },
  {
    id: 20,
    icon: icon,
    name: "Vamshidhar Reddy",
    designation: "Syntaxarts (CEO)",
  },
  {
    id: 21,
    icon: icon,
    name: "Rick Springfield",
    designation: "Australian-American musician and actor",
  },
  {
    id: 22,
    icon: icon,
    name: "Grant Bowler",
    designation: "New Zealand-Australian actor and TV show host",
  },
  {
    id: 23,
    icon: icon,
    name: "Lorraine Westenberger",
    designation: "Designer Fitness & Nutrition Coach",
  },
  {
    id: 24,
    icon: icon,
    name: "Rico Connor",
    designation: " Body builder",
  },
  {
    id: 25,
    icon: icon,
    name: " Dustin Ackley",
    designation: "American baseball second baseman",
  },
  {
    id: 26,
    icon: icon,
    name: "Rick Springfield",
    designation: "Grammy-winning artist",
  },
  {
    id: 27,
    icon: icon,
    name: "Dustin Ackley",
    designation: "American football & Rugby player",
  },
  {
    id: 28,
    icon: icon,
    name: "Michael McKenry",
    designation: "American football & Rugby player",
  },
  {
    id: 29,
    icon: icon,
    name: "Evan Ross",
    designation: "American actor and musician",
  },
  {
    id: 30,
    icon: icon,
    name: "Madeline Zima",
    designation: "American actress",
  },
  {
    id: 31,
    icon: icon,
    name: "Roger Daltrey",
    designation: "Founder and Lead Singer of the rock band 'The Who'",
  },
  {
    id: 32,
    icon: icon,
    name: "Joe Beimel",
    designation: "American baseball player",
  },
  {
    id: 33,
    icon: icon,
    name: "Shareece Wright",
    designation: "American football & Rugby player",
  },
  {
    id: 34,
    icon: icon,
    name: "Ryan Buchter",
    designation: "American football & Rugby player",
  },
  {
    id: 35,
    icon: icon,
    name: "TJ Ward",
    designation: "American football & Rugby player",
  },
];

const scientificallyIcon = [
  {
    id: 1,
    icon: icon,
    name: "Dr.VINOD M VIJAN ",
    designation: "Interventional Cardiologist",
  },
  {
    id: 2,
    icon: icon,
    name: "Dr. Siva Rama Gandhi",
    designation: "Neurologist - Apollo",
  },
  {
    id: 3,
    icon: icon,
    name: "Dr. Rajya Lakshmi",
    designation: "Gynecologist & Obstetricianr",
  },
  {
    id: 4,
    icon: icon,
    name: "Dr.Rajashekhar Reddy",
    designation: "Anesthesiologist",
  },
  {
    id: 5,
    icon: icon,
    name: "Dr.Rajashekhar Re",
    designation: "Ex-Asso Prof Cardiology AIMS",
  },
  {
    id: 6,
    icon: icon,
    name: "Dr.Manojna Battina",
    designation: "Paediatric Neurologist",
  },
  {
    id: 7,
    icon: icon,
    name: "MD. Abdul Khuddus",
    designation: "Sr. Neuroloist",
  },
  {
    id: 8,
    icon: icon,
    name: "Dr. Shristi V Vijan ",
    designation: "MS Ophthalmologist",
  },
  {
    id: 9,
    icon: icon,
    name: "Dr. Venkat Rao",
    designation: "Sr. Physician, Apollo Hospitals",
  },
  {
    id: 10,
    icon: icon,
    name: "Dr. Pradeep Kumar",
    designation: "Cancer specialist - AIMS",
  },
];

const VideoCard = ({ src, description }) => {
  return (
    <div
      className="custom-card text-center"
      style={{ padding: "15px" }}
      data-aos="fade-up"
    >
      <div className="embed-responsive embed-responsive-16by9 mb-3">
        <iframe
          className="embed-responsive-item"
          src={src}
          style={{ borderRadius: "15px", width: "100%", height: "210px" }}
          allowFullScreen
          title="Video"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h6 className="text-start" style={{ flexGrow: 1 }}>
          {description}
        </h6>
        <RWebShareComp text={description} link={src} />
      </div>
    </div>
  );
};

const IconImages = ({ src, alt, width = 190, height = 190 }) => {
  return (
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ objectFit: "fill", border:'1px solid #000' }}
      priority
    />
  );
};

const IconTest = ({ name, icon, designation }) => {
  return (
    <div data-aos="zoom-in">
      <div>
        <center>
          <Image
            src={icon}
            priority
            style={{ width: "120px", height: "120px" }}
            alt={designation}
          />
        </center>
      </div>

      <h5 className="text-center mt-2" style={{ flexGrow: 1 }}>
        {name}
      </h5>
      <p className="text-center mt-2" style={{ flexGrow: 1, color: "#008AC7" }}>
        {designation}
      </p>
    </div>
  );
};

const Scientifically = ({ name, icon, designation }) => {
  return (
    <div data-aos="zoom-in">
      <div>
        <center>
          <Image
            src={icon}
            priority
            style={{ width: "120px", height: "120px" }}
            alt={designation}
          />
        </center>
      </div>

      <h5 className="text-center mt-2" style={{ flexGrow: 1 }}>
        {name}
      </h5>
      <p className="text-center mt-2" style={{ flexGrow: 1, color: "#008AC7" }}>
        {designation}
      </p>
    </div>
  );
};

const Page = () => {
  const headerData = {
    basic: "Trust, Satisfaction & Transformations",
    preheading: "Hear From Our Real",
    afterheading: "Satisfied Tyent India Customers",
    content:
      "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water. Our cutting-edge water ionizers are designed to provide superior antioxidant support, better hydration, and long-term wellness. But don’t just take our word for it - hear it from those who matter most, our valued customers!",
    img: testmonials, // Add image URL if needed
    animatedText: "Health, Wellness, Transformation", // Pass the animated text here
  };

  return (
    <div>
      <Header
        basic={headerData.basic}
        preheading={headerData.preheading}
        afterheading={headerData.afterheading}
        content={headerData.content}
        img={testmonials}
        animatedText={headerData.animatedText}
      />
      <div className="container">
        <Row className="gy-3">
          {videos.map((video) => (
            <Col md={4} sm={6} key={video.id}>
              <VideoCard src={video.src} description={video.description} />
            </Col>
          ))}
        </Row>
        <br />
        <br/>
        <h2 className="text-center">
          "
          <span style={{ fontWeight: 600, color: "#008AC7" }}>
            Trusted by Icons:
          </span>{" "}
          Influential Voices on Tyent Water"
        </h2>
        <Row className="gy-3">
          {icons.map((iconItem) => (
            <Col sm={4} xs={4} md={2} key={iconItem.id}>
              <IconTest
                icon={iconItem.icon}
                name={iconItem.name}
                designation={iconItem.designation}
              />
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <h2 className="text-center">
          "
          <span style={{ fontWeight: 600, color: "#008AC7" }}>
            Scientifically Proven:
          </span>{" "}
          Trusted by Leading Medical Professionals"
        </h2>

        <Row className="gy-3">
          {scientificallyIcon.map((iconItem) => (
            <Col sm={4} xs={4} md={2} key={iconItem.id}>
              <Scientifically
                icon={iconItem.icon}
                name={iconItem.name}
                designation={iconItem.designation}
              />
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <h2 className="text-center">Our Corporate clients </h2>
        
        <Row className="gy-3">
      {iconImages.map((image, index) => (
        <Col sm={4} xs={4} md={1} key={index}>
          <IconImages
            src={image.src}
            alt={image.alt}
            width={100} // Adjust as needed
            height={80} // Adjust as needed
          />
        </Col>
      ))}
    </Row>
      </div>
    </div>
  );
};

export default Page;
