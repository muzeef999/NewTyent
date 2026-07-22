import { Container } from "react-bootstrap";
import "./videos.css";

export const metadata = {
  title: "Tyent India Videos | Water Ionizer Demos, Testimonials & More",
  description:
    "Watch Tyent India videos — product demos, customer testimonials, health tips, and comparisons. Discover the power of hydrogen-rich alkaline water.",
  keywords:
    "Tyent India videos, water ionizer demo, Tyent testimonials, alkaline water benefits, hydrogen water, Tyent NMP, Tyent UCE",
};

const videos = [
  {
    id: "BvGl-upSf18",
    title: "Role of Water in the Human Body | RO Water vs Tyent Water Ionizer",
  },
  {
    id: "G4js3M-6JB4",
    title: "RO Water Vs Tyent Water Ionizer | The Truth About Your Drinking Water",
  },
  {
    id: "aUJiA34Nva8",
    title: "Why Upgrade from RO Water to Tyent Water Ionizer? | RO vs Tyent Explained",
  },
  {
    id: "jwVu5qQCZQA",
    title: "3 Years Using Tyent UCE-13 PLUS Water Ionizer | Honest Review from MyHome Bhooja",
  },
  {
    id: "sktKcmT2DGw",
    title: "Upgrade from RO Water to Tyent Water Ionizer | Hydrogen Rich Alkaline Water",
  },
  {
    id: "IBr0K3TzhH0",
    title: "Tyent UCE-PLUS Series: Where Ultimate Innovation Meets Luxury",
  },
  {
    id: "k213C_-BOq0",
    title: "Tyent NMP Series Water Ionizer: The Ultimate Choice for Hydrogen-Rich Alkaline Water",
  },
  {
    id: "wsoCqEIlVH4",
    title: "Discover the Ultra Luxurious Tyent UCE-13 PLUS: The Pinnacle of Water Ionizers",
  },
  {
    id: "XYWP31MSamw",
    title: "Dare to Compare: Discover the Compact Power of the Tyent NMP-5",
  },
  {
    id: "rEQP94EdAps",
    title: "Dare to Compare: Unleash the Versatility of the Tyent NMP-7",
  },
  {
    id: "z2SJXvZrJEQ",
    title: "Dare to Compare: Discover the Unmatched Power of the Tyent NMP-9",
  },
  {
    id: "pLlF2XeyvKE",
    title: "Dare to Compare: Experience the Superior Performance of the Tyent NMP-11",
  },
  {
    id: "Ax48GKtHxWk",
    title: "Tyent NMP-7 Negative ORP Testing at pH 8.5 & 9.5: Power of Ionized Alkaline Water",
  },
  {
    id: "VA82Xf6jfv4",
    title: "Tyent - India's Most Trusted Water Ionizer",
  },
  {
    id: "kA8X_Yc9Jg8",
    title: "Unveil Radiant Skin with Tyent TMX Beauty Soap | The Ultimate Skincare Solution",
  },
  {
    id: "e6GdoBvDV8Y",
    title: "Tyent Water Helped Improve My Health - Vinay Chandra",
  },
  {
    id: "Ku0xbTy4Af8",
    title: "Why I Chose Tyent Over Kangen | 3-Year Alkaline Water Journey & Honest Review",
  },
  {
    id: "Jcwaqs2K1sk",
    title: "Tyent - My Secret to Health and Radiant Skin - Senior Actress Shanoor Sana Garu",
  },
  {
    id: "xFlNIqEeKJQ",
    title: "Dr. Sravan Prasad Macharla Testimony Regarding Tyent Water Ionizer",
  },
  {
    id: "_MnV-Flx9Z4",
    title: "Teacher Shaik Khajamiya's Testimony on Choosing Tyent Over Enagic Kangen",
  },
  {
    id: "RmKdNO__ELo",
    title: "Teacher Shaik Adbul Raheem's Testimony on Choosing Tyent Over Enagic Kangen",
  },
  {
    id: "kclN0U2chtI",
    title: "Venkateshwar Rao's Testimony: Tyent - A Real Game Changer in Transforming Health",
  },
  {
    id: "2p8bsHPsVXY",
    title: "Venkateshwarlu's Honest Testimony on Tyent Water Ionizer",
  },
  {
    id: "Kdrdsgzpni8",
    title: "LakshmanRao's Remarkable Journey in Choosing Tyent Over Enagic Kangen",
  },
  {
    id: "Po3QKdltJXc",
    title: "Dronacharya Kolloju's Journey in Choosing Tyent Water Ionizer",
  },
  {
    id: "4bSRX0eA8kE",
    title: "Subha's Journey of Weight Loss & Reversing Diabetes with Tyent",
  },
  {
    id: "4gVHb-XcjTA",
    title: "Sudhakara Neelam's Testimony After Using Tyent Water Ionizer for 4 Years",
  },
  {
    id: "MjIi0y18UpM",
    title: "Sudhakara Neelam's Honest Testimony - Tyent vs Enagic Kangen",
  },
  {
    id: "ctf1s2VxuK4",
    title: "How Tyent Water Contributed to Author Amie Valpone's Health",
  },
  {
    id: "yjdeOrm45eI",
    title: "You Won't Believe How Actor Yannick Bisson Stays Young with Tyent!",
  },
];

export default function VideosPage() {
  return (
    <Container className="videos-page">
      <div className="videos-header">
        <h1>Our Videos</h1>
        <p>
          Deep dive into the world of hydrogen water — discover product demos,
          customer testimonials, health tips, and more from Tyent India.
        </p>
      </div>

      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
