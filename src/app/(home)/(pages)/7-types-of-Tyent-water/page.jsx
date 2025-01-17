import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "@/app/style/TypesofTyentwater.css";
import oral_care from "@/asserts/7-types-of-water/oral_care.png";
import Extreme_Skin_Issues from "@/asserts/7-types-of-water/Extreme_Skin_Issues.png";
import Commercial_Use from "@/asserts/7-types-of-water/Commercial_Use.png";
import Cleaning_Reducing_Germs from "@/asserts/7-types-of-water/Cleaning_Reducing_Germs.png";
import Chemical_free_sanitizer from "@/asserts/7-types-of-water/Chemical_free_sanitizer.png";

import FaceWash from "@/asserts/7-types-of-water/FaceWash.png";
import Haircare from "@/asserts/7-types-of-water/Haircare.png";
import Polishing from "@/asserts/7-types-of-water/Polishing.png";
import Cleaning from "@/asserts/7-types-of-water/Cleaning.png";
import Beauty_water_for_pets from "@/asserts/7-types-of-water/Beauty_water_for_pets.png";
import frozen_Food from "@/asserts/7-types-of-water/frozenFood.png";

import Drinking_water_during_food from "@/asserts/7-types-of-water/Drinking_water_during_food.png";
import Baby_Food from "@/asserts/7-types-of-water/Baby_Food.png";
import Medication from "@/asserts/7-types-of-water/Medication.png";


import ToxinRemovalfromFruitsandVegetables from "@/asserts/7-types-of-water/ToxinRemovalfromFruitsandVegetables.png";
import DishCleaning from "@/asserts/7-types-of-water/DishCleaning.png";
import StainRemoval from "@/asserts/7-types-of-water/StainRemoval.png";




const page = () => {
  const Turbo = [
    {
      image: ToxinRemovalfromFruitsandVegetables,
      title: "Drinking water during food",
      description:
        "Tyent's H2O water, with a neutral 7.0 pH, is perfect for drinking during meals, ensuring easy digestion.",
    },
    {
      image: DishCleaning,
      title: "Drinking water during food",
      description:
        "Tyent's H2O water, with a neutral 7.0 pH, is perfect for drinking during meals, ensuring easy digestion.",
    },
    {
      image: StainRemoval,
      title: "Drinking water during food",
      description:
        "Tyent's H2O water, with a neutral 7.0 pH, is perfect for drinking during meals, ensuring easy digestion.",
    },
  ];

  const H20 = [
    {
      image: Drinking_water_during_food,
      title: "Drinking water during food",
      description:
        "Tyent's H2O water, with a neutral 7.0 pH, is perfect for drinking during meals, ensuring easy digestion.",
    },
    {
      image: Baby_Food,
      title: "Baby Food",
      description:
        "Use Tyent’s 7.0 pH neutral water when preparing baby food to ensure a safe and gentle option for your little one.",
    },
    {
      image: Medication,
      title: "Medication",
      description:
        "Tyent’s neutral water is not only delicious but also easily absorbed by the body. It’s the perfect choice for taking medication, offering smooth hydration during treatment.",
    },
  ];

  const ACD = [
    {
      image: FaceWash,
      title: "Face Wash",
      description:
        "Tyent’s mildly acidic water tones and firms your skin with its astringent properties. Gently pat your face and let it dry. It also serves as an excellent after-shave toner, leaving your skin refreshed.",
    },
    {
      image: Haircare,
      title: "Hair Care",
      description:
        "Use Tyent's acidic water as a natural conditioner after shampooing. It helps reduce tangles and adds a radiant shine. Keep it in a spray bottle to refresh your hair and face on the go.",
    },
    {
      image: Polishing,
      title: "Polishing",
      description:
        "Achieve a high sheen on mirrors, eyeglasses, glass objects, and windows with Tyent’s acidic water for a streak-free finish.",
    },
    {
      image: Cleaning,
      title: "Cleaning",
      description:
        "Clean hardwood floors, ceramic tiles, and other surfaces without leaving behind sticky residues, thanks to Tyent’s effective acidic water.",
    },
    {
      image: Beauty_water_for_pets,
      title: "Beauty water for pets",
      description:
        "Spray your pets with Tyent’s midly acidic water, then brush their fur to achive soft, shiny coats.",
    },
    {
      image: frozen_Food,
      title: "frozen Food",
      description:
        "Preserve the flavor of frozen food by spraying it with Tyent;s acidic water before freezing. It helps maintain foods when thawed.",
    },
  ];

  const strongAcidicWater = [
    {
      image: oral_care,
      title: "Oral Care",
      description:
        "Maintain oral hygiene with Tyent’s Strong Acidic Water by regularly gargling. It helps reduce bacteria in the mouth, promoting fresher breath and healthier gums.",
    },
    {
      image: Extreme_Skin_Issues,
      title: "Extreme Skin Issues",
      description:
        "Tyent’s Strong Acidic Water is highly beneficial for addressing severe skin conditions such as eczema, psoriasis, and extreme cuts or burns. Its properties help soothe and promote recovery for damaged skin.",
    },
    {
      image: Commercial_Use,
      title: "Commercial Use",
      description:
        "Strong Acidic Water from Tyent is an essential tool for maintaining hygiene in various industries, including beauty salons, hair salons, restaurants, agricultural colleges, daycare centers, pet shops, and nursing homes. Its versatility and effectiveness make it indispensable for professional environments.",
    },
    {
      image: Cleaning_Reducing_Germs,
      title: "Cleaning & Reducing Germs",
      description:
        "Effectively sanitize knives, cutting boards, dish towels, and kitchen cloths. Tyent’s Strong Acidic Water is perfect for cleaning kitchens and other areas prone to germs, ensuring a safe and hygienic environment.",
    },
    {
      image: Chemical_free_sanitizer,
      title: "Chemical free sanitizer",
      description:
        "Tyent's 2.5 pH water can be used as an effective sanitizer. Its strong acidic properties make it highly efficient at killing bacteria, viruses, and other harmful pathogens",
    },
  ];
  return (
    <div>
      <Container>
        <p className="text-center">
          The human body is over 70% water, making quality hydration essential
          for vitality and longevity. Tyent water ionizers offer 7 <br />
          unique and safe water levels, including hydrogen-rich water, for
          improved health, enhanced beauty, effective cleaning, and <br />{" "}
          better-tasting cuisine. Experience the transformative power of pure,
          ionized water with Tyent.
        </p>

        <div className="section-spacing">
          <div>
            <h2 className="text-center m-3">
              <b>
                Turbo
                <span style={{ color: "#FF0000" }}>(11.5 pH)</span>
              </b>
            </h2>
            <h4 className="text-center m-0">Strong alkaline water</h4>
            <br />
            <p className="text-center">
              A powerful cleaning agent for removing pesticides, insecticides,
              wax, and color coatings from fruits, vegetables, and <br /> leafy
              greens as well as removing stains from dishes.
            </p>
            <Row className="g-5 d-flex justify-content-center align-items-center">
              {Turbo.map((item, index) => (
                <Col md={4} key={index}>
                  <div className="box-shadow">
                    <div style={{ width: "100%", height: "auto" }}>
                      <Image
                        src={item.image}
                        alt="oralcare"
                        layout="responsive"
                        priority
                      />
                    </div>
                    <div className="p-3">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="section-spacing">
          <div>
            <h2 className="text-center m-3">
              <b>
                {" "}
                <span style={{ color: "#00FD12" }}>H20</span> water{" "}
              </b>
            </h2>
            <h4 className="text-center m-0">
              H20 water Purified water or Neutral Water{" "}
            </h4>
            <br />
            <p className="text-center">
              Neutral water, perfect for drinking during meals, taking
              medication, and preparing baby formula for infants. It provides{" "}
              <br /> a safe and gentle option for daily hydration and
              nourishment.
            </p>
            <Row className="g-5 d-flex justify-content-center align-items-center">
              {H20.map((item, index) => (
                <Col md={4} key={index}>
                  <div className="box-shadow">
                    <div style={{ width: "100%", height: "auto" }}>
                      <Image
                        src={item.image}
                        alt="oralcare"
                        layout="responsive"
                        priority
                      />
                    </div>
                    <div className="p-3">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="section-spacing">
          <div>
            <h2 className="text-center m-3">
              <b>
                {" "}
                ACD level <span style={{ color: "#FEFE00" }}>1</span> & ACD
                level <span style={{ color: "#FFA500" }}>2</span>
              </b>
            </h2>
            <h4 className="text-center m-0">Not for drinking</h4>
            <br />
            <p className="text-center">
              Tyent’s Strong Acidic Water is a versatile solution for oral care,
              managing severe skin conditions, and thorough cleaning. <br /> Its
              potent cleansing properties make it perfect for sanitizing kitchen
              utensils, countertops, and surfaces, ensuring a <br />
              hygienic environment and preventing cross-contamination.
            </p>
            <Row className="g-5 d-flex justify-content-center align-items-center">
              {ACD.map((item, index) => (
                <Col md={4} key={index}>
                  <div className="box-shadow">
                    <div style={{ width: "100%", height: "auto" }}>
                      <Image
                        src={item.image}
                        alt="oralcare"
                        layout="responsive"
                        priority
                      />
                    </div>
                    <div className="p-3">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="section-spacing">
          <div>
            <h2 className="text-center m-2" style={{ color: "red" }}>
              <b>2.5 PH</b>
            </h2>
            <h2 className="text-center m-3">
              <b>strong acidic water</b>
            </h2>
            <h4 className="text-center m-0">Not for drinking</h4>
            <br />
            <p className="text-center">
              Tyent’s Strong Acidic Water is a versatile solution for oral care,
              managing severe skin conditions, and thorough cleaning. <br /> Its
              potent cleansing properties make it perfect for sanitizing kitchen
              utensils, countertops, and surfaces, ensuring a <br />
              hygienic environment and preventing cross-contamination.
            </p>
            <br />
            <Row className="g-5 d-flex justify-content-center align-items-center">
              {strongAcidicWater.map((item, index) => (
                <Col md={4} key={index}>
                  <div className="box-shadow">
                    <div style={{ width: "100%", height: "auto" }}>
                      <Image
                        src={item.image}
                        alt="oralcare"
                        layout="responsive"
                        priority
                      />
                    </div>
                    <div className="p-3">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
