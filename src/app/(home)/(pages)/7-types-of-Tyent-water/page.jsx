import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "@/app/style/TypesofTyentwater.css";
import oral_care from "@/asserts/7-types-of-water/oral_care.webp";
import Extreme_Skin_Issues from "@/asserts/7-types-of-water/Extreme_Skin_Issues.webp";
import Commercial_Use from "@/asserts/7-types-of-water/Commercial_Use.webp";
import Cleaning_Reducing_Germs from "@/asserts/7-types-of-water/Cleaning_Reducing_Germs.webp";
import Chemical_free_sanitizer from "@/asserts/7-types-of-water/Chemical_free_sanitizer.webp";

import FaceWash from "@/asserts/7-types-of-water/FaceWash.webp";
import Haircare from "@/asserts/7-types-of-water/HairCare.webp";
import Polishing from "@/asserts/7-types-of-water/Polishing.webp";
import Cleaning from "@/asserts/7-types-of-water/Cleaning.webp";
import Beauty_water_for_pets from "@/asserts/7-types-of-water/Beauty_water_for_pets.webp";
import frozen_Food from "@/asserts/7-types-of-water/frozenFood.webp";

import Drinking_water_during_food from "@/asserts/7-types-of-water/Drinking_water_during_food.webp";
import Baby_Food from "@/asserts/7-types-of-water/Baby_Food.webp";
import Medication from "@/asserts/7-types-of-water/Medication.webp";

import CoffeeTeaSoups from "@/asserts/7-types-of-water/CoffeeTeaSoups.webp";
import Cooking from "@/asserts/7-types-of-water/Cooking.webp";
import Plants from "@/asserts/7-types-of-water/Plants.webp";

import ToxinRemovalfromFruitsandVegetables from "@/asserts/7-types-of-water/ToxinRemovalfromFruitsandVegetables.webp";
import DishCleaning from "@/asserts/7-types-of-water/DishCleaning.webp";
import StainRemoval from "@/asserts/7-types-of-water/StainRemoval.webp";

import { FaDotCircle } from "react-icons/fa";

const page = () => {
  const Turbo = [
    {
      image: ToxinRemovalfromFruitsandVegetables,
      title: "Toxin Removal from Fruits and Vegetables",
      description:
        "The extra strength and deeper absorption power effectively remove pesticides, insecticides, wax, and color coatings from fruits and vegetables. These harmful substances are known to be major contributors to cancer.",
    },
    {
      image: StainRemoval,
      title: "Stain Removal",
      description:
        "The powerful absorption of Tyent's water easily removes tough stains like coffee, soy sauce, and oil. It’s also incredibly effective at tackling stubborn toilet bowl stains, leaving surfaces clean and refreshed with minimal effort.",
    },
    {
      image: DishCleaning,
      title: "Dish Cleaning",
      description:
        "Save water and reduce costs with Tyent’s water. Use significantly less detergent for washing dishes, and only one-third to one-fourth of the usual water is needed for rinsing, cutting down on water bills while maintaining sparkling clean results.",
    },
  ];

  const Drinking = [
    {
      image: CoffeeTeaSoups,
      title: "Coffee, Tea & Soups",
      description:
        "Bring out deeper color, taste, and aroma in your coffee, tea, or soups with Tyent Water. Its exceptional ability to extract flavors means you can use less coffee or tea while still achieving a rich, full-bodied taste.",
    },
    {
      image: Cooking,
      title: "Cooking",
      description:
        "Tyent Water enhances the natural flavors of your ingredients, making them more tender and juicy. This allows you to cut down on seasoning and avoid excess salt, resulting in healthier, more flavorful meals.",
    },
    {
      image: Plants,
      title: "Plants",
      description:
        "Tyent water helps bring virality and freshness to your plants. Its unique properties stimulate germination and promote healthier seeding growth, ensuring your plants thrive with every drop.",
    },
  ];

  const Level = [
    {
      color: "#00D1FE",
      mainHeading: "Alk Level 1 (8.5 pH)",
      title: "Initial drinking water",
      description:
        "Start with this level as your initial drinking water. Consume regularly for the first 15 days to gently introduce alkaline water into your routine.  ",
    },
    {
      color: "#6594DC",
      mainHeading: "Alk Level 2 (9.0 pH)",
      title: "Intermediate drinking water ",
      description:
        "Transition to this intermediate level after 15 days of drinking 8.5 pH water. Gradually incorporate it into your routine for enhanced benefits.",
    },
    {
      color: "#A567CD",
      mainHeading: "Alk Level 3 (9.5 pH)",
      title: "Regular drinking water",
      description:
        "Use this as your regular drinking water after 30 - 40 days of installation. Ensure you have used 8.5 pH and 9.0 pH water for at least 30 days before transitioning to this level.",
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
        <div className="section-spacing">
          <p className="text-center" data-aos="fade-up">
            The human body is over 70% water, making quality hydration essential
            for vitality and longevity. Tyent water ionizers offer 7 <br />
            unique and safe water levels, including hydrogen-rich water, for
            improved health, enhanced beauty, effective cleaning, and <br />{" "}
            better-tasting cuisine. Experience the transformative power of pure,
            ionized water with Tyent.
          </p>
        </div>

        <div className="section-spacing">
          <div>
            <h2 className="text-center" data-aos="fade-up">
              <b>
                Turbo
                <span style={{ color: "#FF0000" }}>(11.5 pH)</span>
              </b>
            </h2>
            <h4 className="text-center m-0" data-aos="fade-up">
              Strong alkaline water
            </h4>

            <h2 className="text-center" data-aos="fade-up">
              <FaDotCircle color="#FE0000" />
              &nbsp;Strictly{" "}
              <span style={{ color: "#FE0000" }}>
                <b>Not</b>
              </span>{" "}
              for drinking
            </h2>

            <br />
            <p className="text-center" data-aos="fade-up">
              A powerful cleaning agent for removing pesticides, insecticides,
              wax, and color coatings from fruits, vegetables, and <br /> leafy
              greens as well as removing stains from dishes.
            </p>
            <br />
            <Row
              data-aos="fade-up"
              className="g-5 d-flex justify-content-center align-items-center"
            >
              {Turbo.map((item, index) => (
                <Col md={4} key={index}>
                  <div className="box-shadow" data-aos="zoom-in">
                    <div style={{ width: "100%", height: "auto" }}>
                      <Image
                        src={item.image}
                        alt="oralcare"
                        layout="responsive"
                        priority
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="my-3">{item.title}</h2>
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
            <h2 data-aos="fade-up" className="text-center m-3">
              <b style={{ color: "#008AC7" }}>Daily Drinking Alkaline water</b>
            </h2>
            <h4 className="text-center m-0" data-aos="fade-up">
              Do not drink during food and medicine
            </h4>
            <br />
            <p className="text-center" data-aos="fade-up">
              Use this as your regular drinking water after 45 days of
              installation. Ensure you have used 8.5 pH and 9.0 pH <br /> water
              for at least 30 days before transitioning to this level.
            </p>
            <br />
            <h1 className="text-center" data-aos="fade-up">
              <b>How to Use ?</b>
            </h1>
            <br />

            <Row
              data-aos="fade-up"
              className="g-5 d-flex justify-content-center align-items-center"
            >
              {Level.map((item, index) => (
                <Col md={4} data-aos="zoom-in" key={index}>
                  <div className="box-shadow-alk">
                    <div className="position-relative">
                      <h3 className="my-3">{item.mainHeading}</h3>
                      <p>
                        <b>{item.title}</b>
                      </p>
                      <h2
                        className="big-number positionvalue"
                        style={{
                          color: item.color,
                          position: "absolute",
                          right: "-5%",
                          top: "-100%",
                        }}
                      >
                        {index + 1}
                      </h2>{" "}
                      {/* Corrected class name */}
                    </div>
                    <div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <br />

            <Row
              ata-aos="fade-up"
              className="g-5 d-flex justify-content-center align-items-center"
            >
              {Drinking.map((item, index) => (
                <Col md={4} data-aos="zoom-in" key={index}>
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
                      <h3>{item.title}</h3>
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
            <h3 data-aos="fade-up" className="text-center m-3">
              <b>
                {" "}
                <span style={{ color: "#00FD12" }}>H20</span> water{" "}
              </b>
            </h3>
            <h4 data-aos="fade-up" className="text-center m-0">
              H20 water Purified water or Neutral Water{" "}
            </h4>
            <br />
            <p data-aos="fade-up" className="text-center">
              Neutral water, perfect for drinking during meals, taking
              medication, and preparing baby formula for infants. It provides{" "}
              <br /> a safe and gentle option for daily hydration and
              nourishment.
            </p>
            <br />
            <Row
              data-aos="fade-up"
              className="g-5 d-flex justify-content-center align-items-center"
            >
              {H20.map((item, index) => (
                <Col md={4} data-aos="zoom-in" key={index}>
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
            <h2 data-aos="fade-up" className="text-center m-3">
              <b>
                {" "}
                ACD level <span style={{ color: "#FEFE00" }}>1</span> & ACD
                level <span style={{ color: "#FFA500" }}>2</span>
              </b>
            </h2>
            <h4 data-aos="fade-up" className="text-center m-0">
              Not for drinking
            </h4>
            <br />
            <p data-aos="fade-up" className="text-center">
              Tyent’s Strong Acidic Water is a versatile solution for oral care,
              managing severe skin conditions, and thorough cleaning. <br /> Its
              potent cleansing properties make it perfect for sanitizing kitchen
              utensils, countertops, and surfaces, ensuring a <br />
              hygienic environment and preventing cross-contamination.
            </p>
            <br />
            <Row
              data-aos="fade-up"
              className="g-5 d-flex justify-content-center align-items-center"
            >
              {ACD.map((item, index) => (
                <Col md={4} data-aos="zoom-in" key={index}>
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
                      <h3>{item.title}</h3>
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
            <h2
              data-aos="fade-up"
              className="text-center m-2"
              style={{ color: "red" }}
            >
              <b>2.5 PH</b>
            </h2>
            <h2 data-aos="fade-up" className="text-center m-3">
              <b>strong acidic water</b>
            </h2>
            <h4 data-aos="fade-up" className="text-center m-0">
              Not for drinking
            </h4>
            <br />
            <p data-aos="fade-up" className="text-center">
              Tyent’s Strong Acidic Water is a versatile solution for oral care,
              managing severe skin conditions, and thorough cleaning. <br /> Its
              potent cleansing properties make it perfect for sanitizing kitchen
              utensils, countertops, and surfaces, ensuring a <br />
              hygienic environment and preventing cross-contamination.
            </p>
            <br />
            <Row
              data-aos="fade-up"
              className="g-5 d-flex justify-content-center align-items-center"
            >
              {strongAcidicWater.map((item, index) => (
                <Col md={4} data-aos="zoom-in" key={index}>
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
                      <h3>{item.title}</h3>
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
