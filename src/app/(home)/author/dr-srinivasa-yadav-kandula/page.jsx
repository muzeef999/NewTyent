import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import "./authorProfile.css";

export const metadata = {
  title: "Dr. Srinivasa Yadav Kandula - Senior Consultant Surgeon | Tyent India",
  description:
    "Dr. Srinivasa Yadav Kandula is a Senior Consultant Laparoscopic, Robotic, Bariatric & Laser Surgeon with 20+ years of experience in advanced surgical care.",
  alternates: {
    canonical: "https://www.tyent.co.in/author/dr-srinivasa-yadav-kandula",
  },
};

export default function AuthorPage() {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Srinivasa Yadav Kandula",
    "jobTitle": "Senior Consultant Laparoscopic, Robotic, Bariatric & Laser Surgeon",
    "description": "Senior Consultant General Surgeon with over 20 years of experience in laparoscopic, robotic, bariatric, and laser surgery.",
    "image": "https://www.tyent.co.in/Dr.%20Srinivasa%20Yadav%20Kandula.jpeg",
    "url": "https://www.tyent.co.in/author/dr-srinivasa-yadav-kandula",
    "sameAs": ["https://in.linkedin.com/in/srinivasa-yadav-kandula-626a1715"],
    "worksFor": {
      "@type": "Organization",
      "name": "Pristyn Care, Bangalore (Bellandur)"
    },
    "knowsAbout": [
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Bariatric Surgery",
      "Laser Surgery",
      "Minimally Invasive Surgery",
      "General Surgery"
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Fellowship", "name": "FMAS" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Fellowship", "name": "DMAS" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Fellowship", "name": "FICRS" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Fellowship", "name": "FIGE" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certification", "name": "ECFMG (USA)" }
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
                      src="/Dr. Srinivasa Yadav Kandula.jpeg"
                      alt="Dr. Srinivasa Yadav Kandula"
                      width={280}
                      height={340}
                      className="author-image"
                      priority
                    />
                  </div>
                  <div className="author-social mt-3">
                    <a
                      href="https://in.linkedin.com/in/srinivasa-yadav-kandula-626a1715"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="linkedin-btn"
                    >
                      <FaLinkedin size={20} /> Connect on LinkedIn
                    </a>
                  </div>
                </Col>

                <Col md={8}>
                  <h1 className="author-name">Dr. Srinivasa Yadav Kandula</h1>
                  <p className="author-speciality">
                    Senior Consultant Laparoscopic, Robotic, Bariatric & Laser Surgeon
                  </p>

                  <div className="author-badges">
                    <span className="badge-item">20+ Years Experience</span>
                    <span className="badge-item">FMAS</span>
                    <span className="badge-item">DMAS</span>
                    <span className="badge-item">FICRS</span>
                    <span className="badge-item">FIGE</span>
                    <span className="badge-item">ECFMG (USA)</span>
                  </div>
                </Col>
              </Row>

              <hr className="author-divider" />

              <div className="author-bio">
                <h2 className="bio-heading">About</h2>
                <p>
                  Dr. Srinivasa Yadav Kandula is a Senior Consultant General Surgeon and an expert in
                  laparoscopic, robotic, bariatric, and laser surgery with over 20 years of experience
                  in advanced surgical care. Associated with Pristyn Care, Bangalore (Bellandur), he
                  specializes in minimally invasive surgical techniques that help reduce post-operative
                  pain, minimize scarring, and promote faster recovery.
                </p>
                <p>
                  He has completed advanced surgical training and holds prestigious fellowships including
                  FMAS, DMAS, FICRS, and FIGE, along with ECFMG (USA) certification. His expertise spans
                  the diagnosis and treatment of hernias, gallstones, appendicitis, piles, fissures,
                  fistulas, and other gastrointestinal and general surgical conditions using evidence-based
                  laparoscopic and robotic procedures.
                </p>
                <p>
                  Known for his patient-centric approach, Dr. Srinivasa emphasizes accurate diagnosis,
                  personalized treatment planning, and comprehensive pre- and post-operative care. He is
                  committed to delivering safe, effective, and minimally invasive surgical solutions that
                  help patients recover quickly and achieve better long-term health outcomes.
                </p>
              </div>

              <div className="author-expertise">
                <h2 className="bio-heading">Areas of Expertise</h2>
                <Row>
                  <Col sm={6}>
                    <ul className="expertise-list">
                      <li>Laparoscopic Surgery</li>
                      <li>Robotic Surgery</li>
                      <li>Bariatric Surgery</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                    <ul className="expertise-list">
                      <li>Laser Surgery</li>
                      <li>Minimally Invasive Surgery</li>
                      <li>General Surgery</li>
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
