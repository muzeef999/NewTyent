import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "@/app/style/AppBar.css";
import Image from "next/image";
import vs from "@/asserts/tyentkengan.webp";

function CustomizedTables() {
  // Table data
  const rows = [
    {
      // check: '',
      // image: (
      //   <div className="d-flex justify-content-center">
      //     <center>
      //       {/* Uncomment and add the correct path for the image */}
      //       {/* <img id="timgs" src={require('../assets/products/tyent.png')} alt="Tyent" /> */}
      //     </center>
      //   </div>
      // ),
      // description: (
      //   <div className="text-center">
      //     {/* Uncomment and add the correct path for the image */}
      //     {/* <img src={require('../assets/vs.png')} width="40%" alt="VS" /> */}
      //     <p className="mb-0" style={{ color: '#000', fontWeight: '500' }}>Think Once</p>
      //     <p className="mb-0" style={{ color: '#000', fontWeight: '500' }}>before</p>
      //     <p style={{ color: '#0082bc', fontWeight: '600' }}>buying</p>
      //   </div>
      // ),
      wrong: "",
      details: (
        <div>
          <center>
            {/* Uncomment and add the correct path for the image */}
            {/* <img id="timgs" style={{ float: 'left' }} src={require('../assets/products/kangen.png')} alt="Kangen" /> */}
          </center>
        </div>
      ),
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image: "pH range: 11.5 - 2.5*",
      description: "pH Range",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details: "pH range: 11.5 - 2.5*",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image: "7 types of water levels",
      description: "Generates",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details: "5 types of water levels.",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image:
        "Uses advanced Solid hybrid mesh plates with Japanese technology which are strong, has more surface area with more electrical conductivity.",
      description: "Plate Material",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details:
        "Uses old outdated solid plates. Which are strong, but has less surface area with less electrical conductivity.",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image:
        "Uses advanced patented SMPS PLUS technology which is more flexible and programmable.",
      description: "Electronic power supply",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details:
        "Uses outdated old transformer which causes a lot of heat & is unstable.",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image:
        "Has Turbo level to make super strong 11.5pH & 2.5pH without using any enhancers, salts, or chemicals. Which is totally safe.",
      description: "Chemical Free",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details:
        "Uses artificial chemical enhancers to produce super strong 11.5pH & 2.5pH. The resultant water is nothing but a chemical solution of bleach & salt.",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image:
        "Built-in hydrogen boost feature to produce more concentration of anti-oxidant molecular hydrogen at drinking levels.",
      description: "More anti-oxidant",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details:
        "No special feature to produce more molecular hydrogen/anti-oxidants at drinking water.",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image:
        "Negative ORP Range up to -1250* (Anti-oxidants/Molecular hydrogen).",
      description: "ORP Range",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details:
        "Negative ORP Range up to -850* (Anti-oxidants/Molecular hydrogen).* only.",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image:
        "Sales through traditional marketing. (No MLM & no commission involved)",
      description: "Scale Mode",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details:
        "Sales through MLM or network marketing, where 49% of the machine price is distributed as commission.",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image: "3 years warranty on ionizer & 15 years warranty on plates.",
      description: "Warranty",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details: "5 years limited warranty on ionizer & plates.",
    },
    {
      check: <FaThumbsUp style={{ color: "#23c552" }} />,
      image: "Doorstep service is available throughout PAN India.",
      description: "Service",
      wrong: <FaThumbsDown style={{ color: "#F84F31" }} />,
      details: "No doorstep service.",
    },
  ];

  return (
    <>
    <Table
  className="table-borderless"
  style={{
    borderRadius: "15px",
    border: "1px solid #bfbfbf",
    overflow: "hidden",
    background: "#bfbfbf",
  }}
  hover
  responsive
>
  <tbody>
    <tr className="p-0" data-aos="zoom-in">
      <td colSpan={5} style={{ padding: 0 }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            src={vs}
            alt="tyent"
            layout="responsive"
            priority
            style={{
              display: "block",
            }}
          />
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
            style={{
              position: "absolute",
              top: "20%",
              left: "2%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              fontWeight: "bold",
              lineHeight: "1.2",
              color: "#008AC7",
            }}
          >
            <span
              data-aos="flip-left"
              data-aos-duration="1000"
              style={{ margin: "4px 0", color: "#000", fontSize: "clamp(16px, 3vw, 32px)" }}
            >
              Think Once
            </span>
            <span
              data-aos="flip-left"
              data-aos-duration="1200"
              style={{ margin: "4px 0", color: "#000", fontSize: "clamp(16px, 3vw, 32px)" }}
            >
              before
            </span>
            <span
              data-aos="flip-left"
              data-aos-duration="1400"
              style={{ margin: "4px 0", fontSize: "clamp(16px, 3vw, 32px)" }}
            >
              buying
            </span>
          </div>
        </div>
      </td>
    </tr>
    {rows.map((row, index) => (
      <tr key={index}>
        <td data-aos="flip-left" style={{ width: "26%", color: "#008AC7" }}>
          <strong>{row.description}</strong>
        </td>

        <td data-aos="fade-left">{row.check}</td>
        <td data-aos="fade-left" style={{ width: "32%" }}>
          {row.image}
        </td>

        <td style={{ backgroundColor: "#f6f6f6" }} data-aos="fade-left">
          {row.wrong}
        </td>
        <td style={{ width: "32%", backgroundColor: "#f6f6f6" }} data-aos="fade-left">
          {row.details}
        </td>
      </tr>
    ))}
  </tbody>
</Table>

    </>
  );
}


export default CustomizedTables;
