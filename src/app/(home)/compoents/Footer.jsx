// components/Footer.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

import { IoHeart } from "react-icons/io5";
import Logo from "./Logo";

import "../../style/footer.css";

const Footer = () => {
  return (
    <footer style={{ color: "#FFF", backgroundColor: "#008AC7" }}>
      <div className="py-5">
        <div className="p-5">
          <br />
          <div className="d-flex">
            <Row>
              <Col xs={12} md={3}>
                <div>
                  <h5 style={{ fontWeight: "600" }}>Our Branches</h5>
                  <ul className="footer-list list-unstyled pb-4">
                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-hyderabad" className="footer-link">
                        Best Water Ionizer in Hyderabad
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-bengaluru" className="footer-link">
                        Hydrogen Water Machine in Bangalore
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-new-delhi" className="footer-link">
                        Alkaline Water Ionizer in Delhi NCR
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-mumbai" className="footer-link">
                        Best Water Ionizer in Mumbai
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-ahmedabad" className="footer-link">
                        Hydrogen Water Machine in Ahmedabad
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-pune" className="footer-link">
                        Alkaline Water Ionizer in Pune
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-lucknow" className="footer-link">
                        Best Water Ionizer in Lucknow
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-Jaipur" className="footer-link">
                        Hydrogen Water Machine in Jaipur
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-chandigarh" className="footer-link">
                        Alkaline Water Ionizer in Chandigarh
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-vijayawada" className="footer-link">
                        Best Water Ionizer in Vijayawada
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-visakhapatnam" className="footer-link">
                        Hydrogen Water Machine in Visakhapatnam
                      </Link>
                    </li>


                    <li>
                      <Link href="/contact/best-hydrogen-rich-alkaline-water-ionizer-in-surat" className="footer-link">
                        Alkaline Water Ionizer in Surat
                      </Link>
                    </li>
                  </ul>

                  {/* <Col xs={12} md={4}>
  <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center text-center text-md-start">
    <p className="mb-2 mb-md-0 small">
      © {new Date().getFullYear()} All rights reserved.
    </p>

    <Link
      href="https://www.syntaxarts.com"
      target="_blank"
      rel="noopener noreferrer"
      className="small text-primary text-decoration-none fw-semibold"
    >
      Designed & Developed by{" "}
      <span className="text-dark fw-bold">Syntaxarts</span>
    </Link>
  </div>
</Col> */}
                </div>
              </Col>
              <Col xs={12} md={9}>
                <div>
                  <Row>
                    {/* Column 1: Products */}
                    <Col xs={12} md={4} className="mb-4">
                      <h5 style={{ fontWeight: "600" }}>Products</h5>
                      <ul className="list-unstyled">
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/counter-top-water-ionizers"}
                          >
                            Counter-Top Water Ionizers
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/under-counter-water-ionizers"}
                          >
                            Under-Counter Water Ionizers
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/hybrid-h2"}
                          >
                            H2-Hybrid series
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/0.1-micron-filters"}
                          >
                            Replacement Filters
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/soap"}
                          >
                            Tyent TMX Beauty Soap
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/Sterilizing-water-generator"}
                          >
                            Stainless Steel Water Bottles
                          </Link>
                        </li>
                      </ul>
                    </Col>

                    {/* Column 3: Technical Information */}
                    <Col xs={12} md={4} className="mb-4">
                      <h5 style={{ color: "#FFF", fontWeight: "600" }}>
                        Technical Information
                      </h5>
                      <ul className="list-unstyled">
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/tyentvskangen"}
                          >
                            Tyent Vs Enagic Kangen
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/solid-hybrid-mesh-plates"}
                          >
                            Tyent’s Solid Hybrid Mesh Plates
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/patented-SMPS-plus"}
                          >
                            Tyent’s Patented SMPS PLUS
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={"/0.1-micron-filters"}
                          >
                            Tyent’s .01 Micron Filters
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none", color: "#FFF" }}
                            href={""}
                          >
                            Tyent Warranty
                          </Link>
                        </li>
                      </ul>
                    </Col>

                    {/* Column 4: Product Sales & Service */}
                    <Col xs={12} md={4} className="mb-4">
                      <h5 style={{ color: "#FFF", fontWeight: "600" }}>
                        Product Sales & Service
                      </h5>
                      <ul className="list-unstyled">
                        <li>Product Demo: +91 9966 558 556</li>
                        <li>
                          Product Support:{" "}
                          <a href="mailto:Sravan@medilightindia.com">
                            Sravan@medilightindia.com
                          </a>
                        </li>
                        <li>Complaints: 912-12-12-555</li>
                        <li>
                          Technical Support:{" "}
                          <a href="mailto:Technical@MedilightIndia.com">
                            Technical@MedilightIndia.com
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>

                  <hr />

                  <div>
                    <Row>
                      {/* Column 2: Customers */}
                      <Col xs={12} md={3} className="mb-4">
                        <h5 style={{ color: "#FFF", fontWeight: "600" }}>
                          Customers
                        </h5>
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"#"}
                            >
                              Dealer Opportunity
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"/7-types-of-Tyent-water"}
                            >
                              Usage Instructions
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"/benefits"}
                            >
                              Health Benefits
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"/testimonials"}
                            >
                              Testimonies
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"/why-tyent"}
                            >
                              Why Tyent
                            </Link>
                          </li>
                        </ul>
                      </Col>

                      <Col
                        sm={6}
                        xs={6}
                        md={3}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <div>
                          <p>
                            <span style={{ fontWeight: "600" }}>
                              CONSUMER POLICY
                            </span>
                            <br />
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"/Cancellation_Returns"}
                            >
                              Cancellation & Returns{" "}
                            </Link>
                            <br />
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"/Terms_of_Use"}
                            >
                              Terms of Use
                            </Link>
                            <br />
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"/Security"}
                            >
                              Security
                            </Link>
                            <br />
                            <Link
                              style={{ textDecoration: "none", color: "#FFF" }}
                              href={"/Privacy"}
                            >
                              Privacy
                            </Link>
                            <br />
                          </p>
                        </div>
                      </Col>
                      <Col
                        sm={6}
                        xs={6}
                        md={3}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Link href={"/"}>
                          <Button
                            style={{
                              backgroundColor: "#F8FBFE",
                              border: "none",
                              color: "#000",
                            }}
                          >
                            I &nbsp;{" "}
                            <IoHeart style={{ color: "#FF0000" }} size={30} />{" "}
                            Tyent
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </div>

                  <hr />

                  {/* Footer Bottom */}
                  <Row className="d-flex align-items-center justify-content-between">
                    <Col xs={12} md={6}>
                      <div>
                        <p>
                          <span style={{ fontWeight: "600" }}>
                            {" "}
                            Tyent India Head Office:
                          </span>
                          <br />
                          Medilight Private Limited, 8-277/45, UBI Colony,
                          Banjara Hills Rd Number 3, Hyderabad, Telangana -
                          500034. Landmark: Near TV9 news office
                        </p>
                      </div>
                    </Col>

                    {/* Right Side: Social Media Icons */}
                    <Col xs={12} md={6} className="text-center text-md-end">
                      <div
                        className="justify-content-center justify-content-md-end"
                        style={{ userSelect: "all", pointerEvents: "auto" }}
                      >
                        <Link href="/" className="navbar-brand">
                          <div
                            className="d-none d-lg-block p-2"
                            style={{ width: "40%" }}
                          >
                            <Logo />
                          </div>
                        </Link>
                      </div>
                      <div className="d-flex justify-content-center justify-content-md-end gap-3">
                        <a
                          style={{ cursor: "pointer" }}
                          href="https://www.facebook.com/TyentIndiaOfficial/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <FaFacebook size={30} color="#316FF6" />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/tyent-india1/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin size={30} color="#0077B5" />
                        </a>
                        <a
                          href="https://www.instagram.com/tyentindia/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <FaInstagram size={30} color="#E4405F" />
                        </a>
                        <a
                          href="https://www.youtube.com/@TyentIndia3170"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="YouTube"
                        >
                          <FaYoutube size={30} color="#FF0000" />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
