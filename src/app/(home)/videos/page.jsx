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
    id: "6YKZvzJ_wQ8",
    title: "Role of Water in the Human Body | RO Water vs Tyent Water Ionizer",
  },
  {
    id: "aUJiA34Nva8",
    title: "Why Upgrade from RO Water to Tyent Water Ionizer? | RO vs Tyent Explained",
  },
  {
    id: "G4js3M-6JB4",
    title: "RO Water Vs Tyent Water Ionizer | The Truth About Your Drinking Water",
  },
  {
    id: "IBr0K3TzhH0",
    title: "Tyent UCE-PLUS Series: Where Ultimate Innovation Meets Luxury",
  },
  {
    id: "Ax48GKtHxWk",
    title: "Tyent NMP-7 Negative ORP Testing at pH 8.5 & 9.5: Power of Ionized Alkaline Water",
  },
  {
    id: "e6GdoBvDV8Y",
    title: "Tyent Water Helped Improve My Health - Vinay Chandra",
  },
  {
    id: "_MnV-Flx9Z4",
    title: "Teacher Shaik Khajamiya's Testimony on Choosing Tyent Over Enagic Kangen",
  },
  {
    id: "2p8bsHPsVXY",
    title: "Venkateshwarlu's Honest Testimony on Tyent Water Ionizer",
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
    id: "ctf1s2VxuK4",
    title: "How Tyent Water Contributed to Author Amie Valpone's Health",
  },
  {
    id: "Jcwaqs2K1sk",
    title: "Tyent - My Secret to Health and Radiant Skin - Senior Actress Shanoor Sana Garu",
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
