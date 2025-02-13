"use client";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pomegranate from "@/asserts/soap/Pomegranate.png";
import soapeffect from "@/asserts/soap/soapeffect.jpg"
import Image from "next/image";
import herbal from "@/asserts/soap/herbal.webp"
import honey from "@/asserts/soap/honey.webp"
import Hyaluronic from "@/asserts/soap/Hyaluronic.webp"
import olive from "@/asserts/soap/olive.webp"
import pinus from "@/asserts/soap/pinus.webp"

const InDetail = () => {
  const cleaningItems = [
    {
      img: Pomegranate,
      alt: "Pomegranate",
      title: "Pore-Cleansing With Abudant And Fine Particle bubbles",
    },
    {
      img: Pomegranate,
      alt: "Pomegranate",
      title: "Maintaning Moisture by Forming a skin barrier",
    },
    {
      img: Pomegranate,
      alt: "Pomegranate",
      title: "Healthy Skin From rich vitamins and minerals",
    },
    {
      img: Pomegranate,
      alt: "Pomegranate",
      title: "Smooth Exfoliation by fermented organic acid",
    },
  ];

  const items = [
    {
      img: Pomegranate,
      alt: "Pomegranate",
      title: "TM Fermented Pomegranate",
      features: [
        "Vitamin C, B1, B2, E",
        "Anthocyanin, Polyphenol",
        "Rich Antioxidants",
        "Strengthening Skin Barrier",
      ],
    },
    {
      img: honey,
      alt: "Honey",
      title: "Honey",
      features: [
        "Amino Acid",
        "Skin Nutrition",
        "Skin Regeneration",
        "Antibacterial Effect",
      ],
    },
    {
      img: pinus,
      alt: "Pinus Sylvestris Bud Extract",
      title: "Pinus Sylvestris Bud Extract",
      features: [
        "Inhibititing Collagenase",
        "Relieving skin Trouble",
        "Antibacterial Effect",
      ],
    },
    {
      img: olive,
      alt: "Olive Oil",
      title: "Olive Oil",
      features: [
        "Oleic Acid , Linoleic Acid",
        "Vitamins A, E",
        "Skin Regeneration",
        "Skin Moisture",
      ],
    },
    {
      img: Hyaluronic,
      alt: "Hyaluronic Acid",
      title: "Hyaluronic Acid",
      features: ["Moisturizing Factor", "Enhancing Skin Elastisity"],
    },
    {
      img: herbal,
      alt: "TM Fermented Herbal Enzyme ",
      title: "TM Fermented Herbal Enzyme ",
      features: [
        "Fermentation Herbal Enzyme Solution",
        "Spirodela Polyrrhiza, Houttuynia Cordata, Saururus Chinensis Baill",
        "Naturally Nano- Sized Vitamin, Mineral, Organic Acid",
      ],
    },
  ];

  // Create references for each section
  const keyIngredientsRef = useRef(null);
  const specialFunctionRef = useRef(null);
  const soapEffectsRef = useRef(null);
  const shavingTestRef = useRef(null);
  const cleansingTestRef = useRef(null);

  // Scroll to the referenced section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="soapbutton"
          onClick={() => scrollToSection(keyIngredientsRef)}
        >
          Key Ingredients
        </button>
        <button
          className="soapbutton"
          onClick={() => scrollToSection(specialFunctionRef)}
        >
          Special Function
        </button>
        <button
          className="soapbutton"
          onClick={() => scrollToSection(soapEffectsRef)}
        >
          Soap Effects
        </button>
        <button
          className="soapbutton"
          onClick={() => scrollToSection(shavingTestRef)}
        >
          Shaving Test
        </button>
        <button
          className="soapbutton"
          onClick={() => scrollToSection(cleansingTestRef)}
        >
          Cleansing Test
        </button>
      </div>

      {/* Sections with refs */}
      <section ref={keyIngredientsRef} style={{ padding: "50px 0" }}>
        <h2 className="text-center">
          <b>Key Ingredients</b>
        </h2>
        <p className="text-center">
          Tyent NMP-5 water ionizer produces a continuous stream of 7 different
          water levels, <br /> ranging from strong alkaline water (11.5 pH) to
          strong acidic water (2.5 pH) to meet all your family's needs.
        </p>
        <Row className="g-5 d-flex justify-content-between align-items-center">
          {items.map((item, index) => (
            <Col key={index} md={6}>
              <div className="d-flex justify-content-start align-items-center">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="image-saop"
                />
                <div className="ms-3">
                  <h4>
                    <b>{item.title}</b>
                  </h4>
                  <ul>
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <section ref={specialFunctionRef} style={{ padding: "50px 0" }}>
        <h2 className="text-center">
          <b>Special Functions</b>
          <br/>
        </h2>
        <Row>
        {cleaningItems.map((item, index) => (
      <Col md={3} key={index}>
        <div className="d-flex flex-column justify-content-start align-items-center">
          <Image
            src={item.img}
            alt={item.alt}
            width={200}
            height={200}
            className="image-saop"
          />
          <div className="ms-3">
            
              <p className="text-center">{item.title}</p>
            
          </div>
        </div>
      </Col>
    ))}
        </Row>
      </section>

      <section ref={soapEffectsRef} style={{ padding: "50px 0" }}>
        <h2 className="text-center">
          <b>Soap Effects</b>
        </h2>
        <br/>
        <center>
        <div style={{width:'80%', height:'auto'}}>
            
            <Image src={soapeffect} alt="soap effect" layout="responsive" priority/>
        </div>
        </center>
      </section>

      <section ref={shavingTestRef} style={{ padding: "50px 0" }}>
        <h2 className="text-center">
          <b>cleaning Items</b>
        </h2>
      </section>

      <section ref={cleansingTestRef} style={{ padding: "50px 0" }}>
        <h2 className="text-center">
          <b>Shaving Test</b>
        </h2>
      </section>
    </Container>
  );
};

export default InDetail;
