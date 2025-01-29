import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { Col, Row, Table } from "react-bootstrap";
import "@/app/style/Benfits.css";
import benfitsBanner from "@/asserts/benfits.png";
import { IoWaterOutline } from "react-icons/io5";
import weight from "@/asserts/health/weight.png";
import digestive from "@/asserts/health/digestive.png";
import cardiovascular from "@/asserts/health/cardiovascular.png";
import immune from "@/asserts/health/immune.png";
import liver from "@/asserts/health/liver.png";
import oxygen from "@/asserts/health/oxygen.png";
import kidneys from "@/asserts/health/kidneys.png";
import spine from "@/asserts/health/spine.png";
import blood from "@/asserts/health/blood.png";
import bloodsugar from "@/asserts/health/bloodsugur.png";
import breathing from "@/asserts/health/breathing.png";
import chemistry from "@/asserts/health/chemistry.png";
import glands from "@/asserts/health/glands.png";
import eye from "@/asserts/health/eye.png";
import protection from "@/asserts/health/protection.png";
import coffe from "@/asserts/health/Coffee.png";
import milktea from "@/asserts/health/milktea.png";
import greentea from "@/asserts/health/greentea.png";
import alcohol from "@/asserts/health/alcohol.png";
import juices from "@/asserts/health/juices.png";
import purifiedwater from "@/asserts/health/purified-water.png";
import tap from "@/asserts/health/tap.png";
import mineralwater from "@/asserts/health/mineral-water.png";
import tyentwater from "@/asserts/health/tyentwater.png";
import fracture from "@/asserts/health/fracture.png";
import policy from "@/asserts/health/policy.png";
import bpp from "@/asserts/health/bpp.png";
import Diabetes from "@/asserts/health/Diabetesp.png";
import heartp from "@/asserts/health/heartp.png";
import cannerp from "@/asserts/health/cannerp.png";
import artharitis from "@/asserts/health/artharitis.png";
import kidneyp from "@/asserts/health/kidneyp.png";
import energyp from "@/asserts/health/energyp.png";
import Obesity from "@/asserts/health/Obesity.png";
import Respiratory from "@/asserts/health/Respiratory.png";
import yogo from "@/asserts/health/yogo.png";
import skin from "@/asserts/health/skin.png";
import sleep from "@/asserts/health/sleep.png";
import Osteoporosisp from "@/asserts/health/Osteoporosisp.png";
import GastricIssuesp from "@/asserts/health/GastricIssuesp.png";
import BrainStroke from "@/asserts/health/BrainStroke.png";
import Alzheimer from "@/asserts/health/Alzheimer.png";
import fattyliver from "@/asserts/health/fattyliver.png";
import ChronicFatigue from "@/asserts/health/ChronicFatigue.png";

const Header = dynamic(() => import("../compoents/Header"), { ssr: false });

export const metadata = {
  title: "Benefit Page",
  description: "Discover the features of Tyent water ionizers.",
};

const icons = [
  {
    id: 1,
    icon: Diabetes,
    Heading: "Diabetes",
    Descrpition:
      "Tyent water improves glucose metabolism, enhances insulin sensitivity, and reduces oxidative stress, supporting better blood sugar control.",
  },
  {
    id: 2,
    icon: bpp,
    Heading: "Hypertension (High BP)",
    Descrpition:
      "The antioxidant properties of Tyent water reduce oxidative damage to blood vessels, promoting better blood flow and heart health.",
  },
  {
    id: 3,
    icon: cannerp,
    Heading: "Cancer",
    Descrpition:
      "Hydrogen-rich water neutralizes free radicals, reducing DNA damage and oxidative stress, which are linked to cancer development.",
  },
  {
    id: 4,
    icon: Obesity,
    Heading: "Obesity",
    Descrpition:
      "Tyent water boosts metabolism, promotes better digestion, and supports detoxification, helping with weight management and fat reduction.",
  },
  {
    id: 5,
    icon: artharitis,
    Heading: "Artharitis",
    Descrpition:
      "Anti-inflammatory properties of Tyent water reduce joint inflammation, alleviate pain, and support better joint mobility.",
  },
  {
    id: 6,
    icon: kidneyp,
    Heading: "Kidney stones",
    Descrpition:
      "Alkaline water prevents stone formation by balancing pH levels, dissolving uric acid, and supporting kidney health.",
  },
  {
    id: 7,
    icon: GastricIssuesp,
    Heading: "Acid Reflux (GERD)",
    Descrpition:
      "Alkaline water prevents stone formation by balancing pH levels, dissolving uric acid, and supporting kidney health.",
  },
  {
    id: 8,
    icon: heartp,
    Heading: "Cardiovascular Disease",
    Descrpition:
      "Alkaline water prevents stone formation by balancing pH levels, dissolving uric acid, and supporting kidney health.",
  },
  {
    id: 9,
    icon: Alzheimer,
    Heading: "Alzheimer's Disease",
    Descrpition:
      "Molecular hydrogen in Tyent water reduces brain inflammation, oxidative stress, and neurodegeneration, supporting cognitive health and memory function.",
  },
  {
    id: 10,
    icon: Respiratory,
    Heading: "Respiratory Disease NC",
    Descrpition:
      "Molecular hydrogen in Tyent water reduces brain inflammation, oxidative stress, and neurodegeneration, supporting cognitive health and memory function.",
  },
  {
    id: 11,
    icon: fattyliver,
    Heading: "Fatty Liver Disease",
    Descrpition:
      "Alkaline water supports liver detoxification, promotes fat breakdown, and reduces oxidative stress linked to liver damage.",
  },
  {
    id: 12,
    icon: Osteoporosisp,
    Heading: "Osteoporosis",
    Descrpition:
      "Tyent water maintains a balanced body pH, reducing calcium loss from bones and supporting better bone density.",
  },
  {
    id: 13,
    icon: skin,
    Heading: "Skin Disorders (Eczema, Psoriasis)",
    Descrpition:
      "Hydrogen-rich water promotes skin hydration, reduces inflammation, and supports healthier, clearer, and more youthful skin.",
  },
  {
    id: 14,
    icon: BrainStroke,
    Heading: "Brain Stroke",
    Descrpition:
      "Tyent water reduces oxidative stress in blood vessels, supporting better brain function and reducing the risk of strokes.",
  },
  {
    id: 15,
    icon: ChronicFatigue,
    Heading: "Chronic Fatigue",
    Descrpition:
      "Hydration from Tyent water boosts cellular energy, reduces lactic acid, and combats fatigue, enhancing overall energy and vitality.",
  },
  {
    id: 16,
    icon: sleep,
    Heading: "Improves sound sleep ",
    Descrpition:
      "Tyent water reduces oxidative stress, balances body pH, and promotes melatonin production, supporting relaxation, reducing anxiety, and encouraging deep, restful, and rejuvenating sleep naturally.",
  },
  {
    id: 17,
    icon: yogo,
    Heading: "Reduces Stress",
    Descrpition:
      "Tyent water's antioxidant-rich molecular hydrogen reduces oxidative stress, calms the nervous system, balances body pH, and promotes mental relaxation, helping to alleviate anxiety and improve overall well-being.",
  },
  {
    id: 18,
    icon: energyp,
    Heading: "Increses Energy levels",
    Descrpition:
      "Tyent water's hydrogen-rich antioxidants reduce oxidative stress, enhance cellular hydration, and boost metabolism, promoting better energy levels, improved stamina, and reduced fatigue for an active lifestyle.",
  },
];

const BenfitsOnisedAlkaline = [
  {
    icon: weight,
    title: "Metabolic and weight regulation",
  },
  {
    icon: digestive,
    title: "Restoring the digestive organs functionality",
  },
  {
    icon: cardiovascular,
    title: "Lowers the risk of developing cardiovascular disease",
  },
  {
    icon: immune,
    title: "Immune System restoration and balance",
  },
  {
    icon: kidneys,
    title: "Enhancement of the kidneys urinary function",
  },
  {
    icon: fracture,
    title: "Normalisation of bone and cartilage tissue structue",
  },
  {
    icon: liver,
    title: "Normalisation of liver and bile duct function",
  },
  {
    icon: spine,
    title: "The joints and spine operate more effectively",
  },
  {
    icon: eye,
    title: "Improves vision",
  },
  {
    icon: oxygen,
    title: "Increases blood oxygen saturation ",
  },
  {
    icon: bloodsugar,
    title: "Lowers blood sugar levels",
  },
  {
    icon: chemistry,
    title: "Activates essential body microelements",
  },
  {
    icon: breathing,
    title: "Normalises thermoregulation and breathing",
  },
  {
    icon: protection,
    title:
      "Provides reliable protection against the destructive effects of free radicals",
  },
  {
    icon: blood,
    title: "Enhances the quality of blood and lymph",
  },
  {
    icon: glands,
    title: "Normalises the function of endocrine glands",
  },
  // Add more features as needed
];

const IconTest = ({ Heading, id, icon, Descrpition }) => {
  return (
    <div
      style={{ backgroundColor: "#FFF" }}
      className="d-flex custom-card-benfts"
    >
      {/* Image Container */}
      <div
        style={{
          overflow: "hidden", // Keeps image within bounds
          position:'relative',
          width:'100%',
          alignItems: "stretch", // Stretches image to fill container
        }}
      >
        <Image
          src={icon}
          alt="tyent"
          layout="fill"
          priority
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            display: "block",
          }}
        />
      </div>

      {/* Text Content */}
      <div className="d-flex flex-column justify-content-center align-items-start flex-grow-1 p-3">
        <h3
          className="text-start m-0"
          style={{ color: "#008AC7", fontSize: "clamp(22px, 4vw, 28px)" }}
        >
          <b>
            {id}. {Heading}
          </b>
        </h3>
        <p
          className="text-start m-1"
          style={{ color: "#565959", fontSize: "clamp(14px, 2vw, 16px)" }}
        >
          {Descrpition}
        </p>
      </div>
    </div>
  );
};

const tableData = [
  {
    icon: coffe,
    beverage: "Coffee",
    phRange: "4.5 To 5.0",
    orpLevel: "+250 To +300mV",
    remarks: "Acidic & Oxidative (Can Cause Acidity/ Heartburn)",
  },
  {
    icon: milktea,
    beverage: "Tea",
    phRange: "4.0 To 6.0",
    orpLevel: "+250 To +300mV",
    remarks: "Slightly Acidic & Oxidative (Depends On Type Of Tea)",
  },
  {
    icon: greentea,
    beverage: "Green Tea",
    phRange: "7.0 To 8.0",
    orpLevel: "+50 To +150mV",
    remarks:
      "Neutral To Slightly Alkaline & Has Anti-Oxidants Like Catechins (Healthier Option)",
  },
  {
    icon: alcohol,
    beverage: "Alcohol (Beer/Wine)",
    phRange: "4.0 To 4.5",
    orpLevel: "+350 To +500mV",
    remarks:
      "Acidic & Highly Oxidative (Promotes Acidity & Free Radicals In The Body)",
  },
  {
    icon: juices,
    beverage: "Fresh Juice",
    phRange: "3.0 To 5.0",
    orpLevel: "+100 To +250mV",
    remarks: "Acidic & Slightly Oxidative (Citrus Juices Are Highly Acidic)",
  },
  {
    icon: purifiedwater,
    beverage: "RO Water",
    phRange: "5.0 To 7.0",
    orpLevel: "+150 To +350mV",
    remarks: "Acidic & More Oxidative (Lacks Minerals)",
  },
  {
    icon: tap,
    beverage: "Municipal Water",
    phRange: "6.5 To 7.5",
    orpLevel: "+200 To +400mV",
    remarks:
      "Neutral To Slightly Alkaline, Slight Oxidative (Contains Essential Minerals)",
  },
  {
    icon: weight,
    beverage: "Natural Mineral Water",
    phRange: "7.0 To 7.5",
    orpLevel: "+150 To +300mV",
    remarks:
      "Neutral To Slightly Alkaline, Slight Oxidative (Contains Essential Minerals)",
  },
  {
    icon: mineralwater,
    beverage: "Soft Drinks",
    phRange: "2.5 To 3.5",
    orpLevel: "+400 To +500mV",
    remarks:
      "Highly Acidic & Highly Oxidative (One Of The Most Acidic Beverages)",
  },
  {
    icon: tyentwater,
    beverage: "Tyent Water",
    phRange: "8.5 To 9.5",
    orpLevel: "-100 To -1250mV",
    remarks:
      "Alkaline & Neutralizes Oxidative Stress/ Free Radicals (Contains Molecular Hydrogen)",
  },
];

const Page = () => {
  const headerData = {
    basic: "Trust, Satisfaction & Transformations",
    preheading: "Looking For",
    afterheading: "Tyent Water Does It All!",
    img: benfitsBanner, // Replace with actual image path if different
    animatedText: "Stronger Immunity, Better Digestion, Radiant Skin",
  };

  const getJustifyClass = (index) => {
    return Math.floor(index / 2) % 2 === 0
      ? "justify-content-start"
      : "justify-content-end";
  };

  return (
    <div>
      <Header
        basic={headerData.basic}
        preheading={headerData.preheading}
        afterheading={headerData.afterheading}
        content={headerData.content}
        img={headerData.img}
        animatedText={headerData.animatedText}
      />

      <div className="container">
        <br />
        <center>
          <center>
            <h2
              className="text-center mb-4"
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "2rem", // Default for large screens
              }}
            >
              {" "}
              <span style={{ color: "#008AC7" }}>
                <IoWaterOutline />
                &nbsp;Water
              </span>
              <br />
              The Essence of Life, Perfected by{" "}
              <span style={{ color: "#008AC7" }}>
                {" "}
                Tyent Ionized Alkaline Water{" "}
              </span>
            </h2>
          </center>

          <p>
            Ionized hydrogen-rich alkaline water has been trusted across
            Western, European, and Asian countries as a symbol of health,
            wellness, and vitality. Backed by extensive research, clinical
            trials, and medical endorsements, Tyent water ionizers offer far
            more than hydration.{" "}
          </p>

          <Row className="align-items-center">
            <div className="background-benfits-container">
              <div className="background-benfits-overlay"></div>
              <div className="text-benfits-overlay">
                <div className="d-flex">
                  <div>
                    <Image src={policy} alt="policy" width={60} height={60} />
                  </div>
                  <div>
                    <p className="p-0 m-0">Trusted over</p>
                    <p
                      className="p-0 m-0"
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      50+ years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>

          <br />
          <p>
            Unlike regular water, Tyent's ionized alkaline water modulates
            signal transduction, protein phosphorylation, and gene expression,
            delivering powerful health benefits. It provides{" "}
            <span style={{ color: "#008AC7" }}>
              anti-inflammatory, anti-allergy,
            </span>{" "}
            and{" "}
            <span style={{ color: "#008AC7" }}>
              {" "}
              anti-apoptotic protective effects,
            </span>{" "}
            supporting <span style={{ color: "#008AC7" }}> optimal organ </span>
            functionality. This water plays a key role in Building{" "}
            <span style={{ color: "#008AC7" }}>strong immunity </span> &
            metabolism, Enhancing{" "}
            <span style={{ color: "#008AC7" }}> anti-aging </span> and{" "}
            <span style={{ color: "#008AC7" }}> skin health,</span>{" "}
            Detoxification by eliminating{" "}
            <span style={{ color: "#008AC7" }}> toxins </span> and{" "}
            <span style={{ color: "#008AC7" }}>
              {" "}
              free radicals, Improving gastrointestinal health, reducing
              acidity,
            </span>{" "}
            and promoting better{" "}
            <span style={{ color: "#008AC7" }}> digestion,</span> Decreasing the
            risk of chronic diseases like
            <span style={{ color: "#008AC7" }}>
              {" "}
              cancer, heart disease,
            </span>{" "}
            and
            <span style={{ color: "#008AC7" }}> diabetes.</span>
          </p>

          <div className="container">
            <Row className="d-flex flex-wrap g-4">
              {icons.map((iconItem) => (
                <Col
                  key={iconItem.id}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  data-aos="zoom-in"
                >
                  {/* Apply AOS here */}
                  <IconTest
                    id={iconItem.id}
                    icon={iconItem.icon}
                    Heading={iconItem.Heading}
                    Descrpition={iconItem.Descrpition}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </center>

        <br />
        <center>
          <h2
            className="text-center mb-4"
            style={{
              color: "#000",
              fontWeight: "600",
              fontSize: "2rem", // Default for large screens
            }}
          >
            The Benefits of{" "}
            <span style={{ color: "#008AC7" }}>onised alkaline water </span> for
            your health
          </h2>
        </center>
        <br />
      </div>

      <div className="benefitsbackground">
        <center>
          <Row className="container">
            {BenfitsOnisedAlkaline.map((feature, index) => (
              <Col
                key={index}
                md={6} // Fixed column width
                xs={6} // Full-width on smaller devices
                className={`d-flex align-items-center ${getJustifyClass(
                  index
                )}`}
              >
                <div>
                  <center>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={60}
                      height={60}
                      className="feature-icon mb-3"
                    />
                    <p className="feature-description text-center custom-title">
                      {feature.title}
                    </p>
                  </center>
                </div>
              </Col>
            ))}
          </Row>
        </center>
      </div>

      <br />

      <div className="container">
        <center>
          <h2
            className="text-center mb-4"
            style={{
              color: "#000",
              fontWeight: "600",
              fontSize: "2rem", // Default for large screens
            }}
          >
            What is <span style={{ color: "#008AC7" }}> ORP? </span>
          </h2>
        </center>
        <p style={{ color: "#405261", textAlign: "center" }}>
          ORP (Oxidation-Reduction Potential) measures a substance's ability to
          either oxidize (lose electrons) or reduce (gain electrons) in
          millivolts (mV). Higher positive ORP indicates oxidative stress, which
          promotes aging and disease. Oxidation increases ORP, while
          antioxidants lower ORP by neutralizing free radicals. Tyent’s
          hydrogen-rich alkaline water has a negative ORP (-850 to -1250 mV),
          offering powerful antioxidant protection that combats oxidative
          damage, boosts immunity, and promotes better health.{" "}
        </p>
        <br />

        <Table
          className="custom-table table-sm"
          hover
          responsive
          style={{ fontSize: "14px", width: "100%" }}
        >
          <tbody>
            <tr>
              <th
                style={{
                  textAlign: "start",
                  whiteSpace: "nowrap",
                  padding: "8px",
                }}
              >
                Beverage
              </th>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  padding: "8px",
                }}
              >
                Ph Range
              </th>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  padding: "8px",
                }}
              >
                ORP Level (Approx)
              </th>
              <th
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  padding: "8px",
                }}
              >
                Remarks
              </th>
            </tr>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td
                  style={{
                    textAlign: "start",
                    display: "flex",
                    alignItems: "center",
                    padding: "8px",
                    whiteSpace: "normal",
                  }}
                >
                  <Image
                    style={{
                      objectFit: "cover",
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                    src={row.icon}
                    alt={row.title}
                  />
                  {row.beverage}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    verticalAlign: "middle",
                  }}
                >
                  {row.phRange}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    verticalAlign: "middle",
                  }}
                >
                  {row.orpLevel}
                </td>
                <td
                  style={{
                    textAlign: "start",
                    padding: "8px",
                    verticalAlign: "middle",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    maxWidth: "150px",
                  }}
                >
                  {row.remarks}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Row className="align-items-center">
        <div className="background-container">
          <div className="background-overlay"></div>
          <div
            className="text-overlay"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#ffffff", // Text color
              textAlign: "center",
              fontWeight: "700",
              border: "4px solid #FFF",
              padding: "30px",
              borderRadius: "8px",
            }}
          >
            <p style={{ fontSize: "16px" }}>
              Tyent water has a magical combination of selective antioxidant
              molecular hydrogen and alkalinity.The selective antioxidant
              molecular hydrogen works to counteract free radicals and reduce
              oxidative stress. Meanwhile, the alkalinity in the water helps
              neutralize acidic stress. This combination contributes to a more
              balanced and beneficial hydration experience. Stay ahead in your
              wellness journey with every sip of Tyent ionized alkaline water.
            </p>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Page;
