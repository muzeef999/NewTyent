import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import contact from "@/asserts/contactwomen.webp";
import FormOnly from "./FormOnly";
import style from "./Form.module.css";

export default function ContactSection() {
  return (
    <div style={{ width: "100%", overflow: "hidden", minHeight: "500px" }}>
      <div className="container">
        <Row>
          <Col
            md={6}
            data-aos="fade-right"
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <div className={style.card}>
              <Image
                className={`${style.conimg} ${style.contactImage}`}
                src={contact}
                alt="Contact"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Col>
          <Col md={6}>
            <FormOnly />
          </Col>
        </Row>
      </div>
    </div>
  );
}
