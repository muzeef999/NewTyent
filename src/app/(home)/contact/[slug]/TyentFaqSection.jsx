"use client";
import React from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import Logo from "../../compoents/Logo";
import Link from "next/link";

const faqItems = [
  {
    question: "What is the Tyent Water Ionizer and how does it work?",
    answer:
      "Tyent Water Ionizer is a premium hydrogen-rich alkaline water system that uses advanced Japanese electrolysis technology to convert regular tap water into mineral-rich, antioxidant alkaline water. It helps improve hydration, neutralize acidity, and support overall health at a cellular level.",
  },
  {
    question: "Is Tyent better than RO water purifiers?",
    answer:
      "Yes. Unlike RO systems that strip essential minerals and often leave water acidic, Tyent retains beneficial minerals while producing antioxidant, hydrogen-rich alkaline water. This delivers superior hydration, better taste, enhanced wellness support, and long-term protection.",
  },
  {
    question: "What are the health benefits of drinking Tyent alkaline water?",
    answer:
      "Tyent hydrogen-rich alkaline water combines optimal alkalinity with selective antioxidant molecular hydrogen to neutralize acidity and reduce oxidative stress. It balances body pH, enhances digestion, boosts energy, supports immunity, and promotes long-term preventive health.",
  },
  {
    question: "Is Tyent Water Ionizer safe for daily use?",
    answer:
      "Absolutely. Tyent water ionizer systems are certified by USDA, KFDA, NSF, CE, ISO, EPA, ANSI and GMP standards, ensuring medical-grade safety, superior quality, and long-term reliability. Trusted in 123+ countries with a 40+ year legacy.",
  },
  {
    question:
      "How is Tyent superior and more advanced than other water ionizers in the market?",
    answer:
      "Tyent features patented Japanese Solid Hybrid Mesh Plate Technology, patented SMPS PLUS power supply, and medical-grade components. It delivers higher molecular hydrogen, stable pH levels, superior durability, and consistent performance without chemicals.",
  },
  {
    question:
      "How is Tyent Water Ionizer different from Tyent H2-Hybrid Hydrogen Generator?",
    answer:
      "Tyent Water Ionizers deliver 7 types of hydrogen-rich alkaline water from pH 2.5 to 11.5. The Tyent H2-Hybrid combines a water ionizer and hydrogen generator with a dedicated hydrogen button for high-concentration molecular hydrogen therapy at neutral pH.",
  },
  {
    question: "What makes Tyent's Solid Hybrid Mesh Plates superior?",
    answer:
      "Tyent plates use 99.9% pure platinum-coated titanium, crafted with advanced Japanese technology from Permelac, Japan. They deliver superior durability, higher ORP levels, increased molecular hydrogen production, and are designed to last 45+ years.",
  },
  {
    question:
      "What harmful contaminants does the Tyent's .01 micron dual-stage filtration remove?",
    answer:
      "The ultra-fine 0.01 micron dual-stage filtration removes over 200+ contaminants including heavy metals, chlorine, fluoride, industrial chemicals, pharmaceutical residues, nano-viruses, and nano-plastics. Certified by NSF, EPA and ANSI.",
  },
];

const TyentFaqSection = () => {
  return (
    <section className="tyent-faq-section">
      <Container>
        <div className="faq-shell">
          <div className="faq-heading-wrap">
            <h2 className="faq-heading">
              <span>Frequently</span>
              <span>asked questions</span>
            </h2>
          </div>

          <div className="faq-column">
            <Accordion flush className="faq-accordion">
              {faqItems.map((item, index) => (
                <Accordion.Item eventKey={String(index)} key={item.question}>
                  <Accordion.Header>
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      &times;
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div className="demo-card">
            <Link className="demo-logo" href="/">
              <Logo />
            </Link>
            <h3 className="demo-title">Book a Free Demo</h3>
            <p className="demo-copy">Your Healthy Upgrade is just a call away !</p>
            <Button href="#book-demo" className="demo-button">
              Book a Free Call
              <span className="demo-button-arrow" aria-hidden="true">
                {">"}
              </span>
            </Button>
          </div>
        </div>
      </Container>
      <style jsx global>{`
        .tyent-faq-section {
          padding: 48px 0 24px;
          background: #ffffff;
        }

        .faq-shell {
          display: grid;
          grid-template-columns: minmax(320px, 520px) minmax(0, 1fr);
          grid-template-areas:
            "heading faq"
            "card faq";
          column-gap: 28px;
          align-items: start;
        }

        .faq-heading-wrap {
          grid-area: heading;
          margin-bottom: 26px;
        }

        .faq-heading {
          display: inline-flex;
          flex-direction: column;
          margin: 0;
          color: #111111;
          font-size: clamp(2.1rem, 3.2vw, 3rem);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.04em;
        }

        .faq-heading span:first-child {
          color: #6f6f6f;
          font-weight: 600;
        }

        .faq-column {
          grid-area: faq;
          padding-top: 52px;
        }

        .demo-card {
          grid-area: card;
          min-height: 676px;
          padding: 28px 24px 44px;
          border: 1px solid #bdbdbd;
          border-radius: 22px;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .demo-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          max-width: 230px;
          margin-bottom: 22px;
        }

        .demo-title {
          margin: 0 0 12px;
          color: #111111;
          font-size: clamp(2rem, 3vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .demo-copy {
          margin: 0 0 28px;
          color: #222222;
          font-size: 1.05rem;
          font-weight: 400;
        }

        .demo-button.btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(180deg, #2563ff 0%, #184fd6 100%);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 500;
          box-shadow: none;
        }

        .demo-button.btn:hover,
        .demo-button.btn:focus,
        .demo-button.btn:active {
          background: linear-gradient(180deg, #2563ff 0%, #184fd6 100%);
          color: #ffffff;
        }

        .demo-button-arrow {
          font-size: 1.1rem;
          line-height: 1;
        }

        .faq-accordion .accordion-item {
          margin-bottom: 15px;
          border: none;
          background: transparent;
        }

        .faq-accordion .accordion-item:first-child {
          margin-top: 2px;
        }

        .faq-accordion .accordion-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 20px 16px;
          border: none;
          border-radius: 18px !important;
          background: #f8f7f6;
          color: #111111;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.35;
          box-shadow: none;
        }

        .faq-accordion .accordion-button:not(.collapsed) {
          background: #f8f7f6;
          color: #111111;
          box-shadow: none;
        }

        .faq-accordion .accordion-button::after {
          display: none;
        }

        .faq-question {
          flex: 1;
          text-align: left;
        }

        .faq-toggle-icon {
          flex: 0 0 auto;
          color: #111111;
          font-size: 1.4rem;
          font-weight: 300;
          line-height: 1;
        }

        .faq-accordion .accordion-body {
          margin-top: 5px;
          padding: 18px 20px 2px;
          color: #4b4b4b;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        @media (max-width: 991.98px) {
          .faq-shell {
            grid-template-columns: 1fr;
            grid-template-areas:
              "heading"
              "card"
              "faq";
            row-gap: 24px;
          }

          .faq-heading-wrap {
            margin-bottom: 0;
          }

          .faq-column {
            padding-top: 0;
          }

          .demo-card {
            min-height: 420px;
          }
        }

        @media (max-width: 767.98px) {
          .tyent-faq-section {
            padding: 36px 0 12px;
          }

          .faq-shell {
            row-gap: 20px;
          }

          .faq-heading {
            font-size: 2rem;
          }

          .demo-card {
            min-height: auto;
            padding: 36px 20px;
          }

          .faq-accordion .accordion-button {
            padding: 16px 14px;
            font-size: 0.95rem;
          }

          .faq-accordion .accordion-item {
              margin-bottom: 10px;
            }

            .faq-accordion .accordion-item:first-child {
              margin-top: 0;
            }
          }
        `}</style>
      </section>
  );
};

export default TyentFaqSection;
