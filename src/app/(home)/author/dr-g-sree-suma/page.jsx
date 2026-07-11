import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "../dr-srinivasa-yadav-kandula/authorProfile.css";

export const metadata = {
  title: "Dr. G. Sree Suma - Consultant Obstetrician & Gynecologist | Tyent India",
  description:
    "Dr. G. Sree Suma is a Consultant Obstetrician & Gynecologist with 18+ years of experience in women's healthcare, high-risk pregnancies, and preventive women's health.",
  alternates: {
    canonical: "https://www.tyent.co.in/author/dr-g-sree-suma",
  },
};

export default function AuthorPage() {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. G. Sree Suma",
    "jobTitle": "Consultant Obstetrician & Gynecologist",
    "description": "Consultant Obstetrician and Gynecologist with over 18 years of experience in women's healthcare.",
    "image": "https://www.tyent.co.in/Dr.%20G.%20Sree%20Suma.jpeg",
    "url": "https://www.tyent.co.in/author/dr-g-sree-suma",
    "knowsAbout": [
      "Obstetrics",
      "Gynecology",
      "High-Risk Pregnancies",
      "Preventive Women's Health",
      "Reproductive Health",
      "Maternal Healthcare"
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Degree", "name": "DNB (Obstetrics & Gynaecology)" }
    ]
  };

  return (
    <div className="author-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="author-card">
              <Row className="align-items-center">
                <Col md={4} className="text-center mb-4 mb-md-0">
                  <div className="author-image-wrapper">
                    <Image
                      src="/Dr. G. Sree Suma.jpeg"
                      alt="Dr. G. Sree Suma"
                      width={280}
                      height={340}
                      className="author-image"
                      priority
                    />
                  </div>
                </Col>

                <Col md={8}>
                  <h1 className="author-name">Dr. G. Sree Suma</h1>
                  <p className="author-speciality">
                    Consultant Obstetrician & Gynecologist
                  </p>

                  <div className="author-badges">
                    <span className="badge-item">18+ Years Experience</span>
                    <span className="badge-item">DNB (Obstetrics & Gynaecology)</span>
                  </div>
                </Col>
              </Row>

              <hr className="author-divider" />

              <div className="author-bio">
                <h2 className="bio-heading">About</h2>
                <p>
                  Dr. G. Sree Suma is a Consultant Obstetrician and Gynecologist with over 18 years
                  of experience in women&apos;s healthcare. She specializes in the comprehensive management
                  of pregnancy, high-risk pregnancies, gynecological disorders, and preventive women&apos;s
                  health. With a patient-centered approach, Dr. Sree Suma focuses on providing
                  personalized care through every stage of a woman&apos;s reproductive journey, from
                  adolescence to menopause.
                </p>
                <p>
                  She has expertise in managing high-risk pregnancies and is committed to ensuring the
                  safety and well-being of both mother and baby through evidence-based obstetric care.
                  Dr. Sree Suma has also contributed to clinical research, including studies related to
                  the management of postpartum hemorrhage, reflecting her interest in advancing maternal
                  healthcare and improving patient outcomes.
                </p>
                <p>
                  She is dedicated to delivering compassionate care, accurate diagnosis, and
                  individualized treatment plans to help women achieve better reproductive and overall
                  health.
                </p>
              </div>

              <div className="author-expertise">
                <h2 className="bio-heading">Areas of Expertise</h2>
                <Row>
                  <Col sm={6}>
                    <ul className="expertise-list">
                      <li>Obstetrics & Gynecology</li>
                      <li>High-Risk Pregnancies</li>
                      <li>Gynecological Disorders</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                    <ul className="expertise-list">
                      <li>Preventive Women&apos;s Health</li>
                      <li>Reproductive Health</li>
                      <li>Maternal Healthcare</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
