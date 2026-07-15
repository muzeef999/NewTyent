import Image from "next/image";
import Link from "next/link";

const authors = {
  "dr-srinivasa-yadav-kandula": {
    name: "Dr. Srinivasa Yadav Kandula",
    speciality: "Senior Consultant Laparoscopic, Robotic, Bariatric & Laser Surgeon",
    image: "/Dr. Srinivasa Yadav Kandula.jpeg",
    url: "/author/dr-srinivasa-yadav-kandula",
    bio: "Dr. Srinivasa Yadav Kandula is a Senior Consultant General Surgeon with over 20 years of experience in laparoscopic, robotic, bariatric, and laser surgery.",
  },
  "dr-g-sree-suma": {
    name: "Dr. G. Sree Suma",
    speciality: "Consultant Obstetrician & Gynecologist",
    image: "/Dr. G. Sree Suma.jpeg",
    url: "/author/dr-g-sree-suma",
    bio: "Dr. G. Sree Suma is a Consultant Obstetrician and Gynecologist with over 18 years of experience in women's healthcare and high-risk pregnancies.",
  },
};

export default function AuthorCard({ authorKey }) {
  const author = authors[authorKey];
  if (!author) return null;

  return (
    <div style={{
      border: "1px solid #e8e8e8",
      borderRadius: "12px",
      padding: "20px",
      marginTop: "30px",
      background: "#fafafa",
    }}>
      <p style={{ fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px", fontWeight: 600 }}>
        About the Author
      </p>
      <Link href={author.url} style={{ textDecoration: "none", color: "inherit" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ flexShrink: 0, borderRadius: "10px", overflow: "hidden", width: "80px", height: "80px" }}>
            <Image
              src={author.image}
              alt={author.name}
              width={80}
              height={80}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>
              {author.name}
            </h4>
            <p style={{ fontSize: "13px", color: "#291495", fontWeight: 600, margin: "0 0 8px" }}>
              {author.speciality}
            </p>
            <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.6", margin: 0 }}>
              {author.bio}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
