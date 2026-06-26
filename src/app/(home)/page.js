import Script from "next/script";
import { Col, Container, Row } from "react-bootstrap";
import WhyTyent from "./compoents/(Home)/WhyTyent";
import SectionTwo from "./compoents/(Home)/SectionTwo";
import Certifications from "./compoents/Certifications";
import Slider from "./compoents/Slider";
import Video from "./compoents/Video";
import Maps from "./compoents/Maps";
import dynamic from "next/dynamic";
import minerals from "@/asserts/why ionizer/minerals.png";
import puredrink from "@/asserts/health/puredrink.webp";
import Molecular from "@/asserts/health/Molecular.webp";
import alkaline from "@/asserts/health/Natural minerals.webp";
import watersoda from "@/asserts/health/Micro-clustered water.webp";
import Shop_by_category from "./(main_home_content)/Shop_by_category";
import WhatsInside from "./(main_home_content)/WhatsInside";
import Explore from "./(main_home_content)/Explore";
import HumanRight from "./(main_home_content)/HumanRight";
import RealScience from "./(main_home_content)/RealScience";
import Needhelp from "./(main_home_content)/Needhelp";
import Smarter_Upgrade from "./(main_home_content)/Smarter_Upgrade";
import Why_People_choose_Tyent_Water from "./(main_home_content)/Why_People_choose_Tyent_Water"
import ProductCarousel from "./(main_home_content)/ProductCarousel";
import TrustedbyExperts from "./(main_home_content)/TrustedbyExperts";
import TyentFaqSection from "./contact/[slug]/TyentFaqSection";

const TyentvsKAngan = dynamic(
  () => import("./compoents/(Home)/TyentvsKAngan"),
  {
    ssr: false,
  },
);

const SlickSlider = dynamic(() => import("./compoents/SlickSlider"), {
  ssr: false,
});

const Form = dynamic(() => import("./compoents/Form/Form"), {
  ssr: false,
});

export const metadata = {
  title: "Tyent: Best Alkaline Water Ionizer in India",
  description:
    "Discover Tyent, the best alkaline water machine in India. Get the best water ionizer in India with advanced Japanese technology for superior hydrogen-rich water.",
  keywords:
    "best kangen water machine, best kangen water machine in india, kangen water machine online india, buy kangen water machine, alkaline water machine, water ionizer machine, alkaline water system, best water ionizer, ionizer machine, best alkaline water machine, ph water machine, alkaline water ionizer, alkaline water filter system, k8 water machine, Kangen SD501 water ionizer, water ionizer for home, home alkaline water system, best alkaline water machine for home, alkaline water system for house, whole house alkaline water system, best water ionizer machine, ionised water machine, alkaline water ionizer machine, whole house water ionizer, living water alkaline machine, best water ionizer for home, japanese water ionizer, commercial alkaline water machine, countertop water ionizer, hydrogen alkaline water machine, hydrogen water generator, buy alkaline water machine, best water alkalizer, commercial alkaline water machine for sale, top alkaline water machine, tyent usa water ionizer, best alkaline water ionizer machine, tyent water ionizer, tyent usa water ionizer, water ionizer and alkaline water machine, Enagic kangen SD501, kangen water machine, Under counter water ionizer, Enagic kangen Jr, Enagic kangen super SD501, Tyent NMP water ionizer, Tyent UCE PLUS water ionizer, Antioxidant water, Ionized alkaline water benefits",
};

const Home = () => {
  const cardDetails = [
    {
      icon: Molecular,
      title: "Anti-oxidant Molecular H2",
      content: `
        Tyent ionized hydrogen-rich alkaline water has a selective antioxidant 
        called Molecular hydrogen. Molecular hydrogen is rich in electrons or -ORP 
        which helps in neutralizing free radicals (ROS) and oxidative stress.

        It also helps in reducing inflammation, protecting against oxidative stress, 
        enhancing athletic performance, and supporting gut health too.
      `,
    },

    {
      icon: watersoda,
      title: "Micro-clustered water",
      content: `
        Tyent ionized hydrogen-rich alkaline water is Micro-clustered water. 
        Due to its micro-clustered property, it penetrates faster to all cells 
        and major organs in the human body than regular tap or RO water.

        Tyent Micro-clustered water provides better penetration, better hydration, 
        better detox, and faster supply of minerals.
      `,
    },
    {
      icon: alkaline,
      title: "Alkalinity",
      content: `
        Acidic stress is the root cause of all the major lifestyle diseases 
        such as Diabetes, Thyroid, Gastric, Constipation, Acidity, Cancer, 
        Cardiovascular diseases, Chronic respiratory diseases, and Coronary 
        heart diseases. 

        Tyent ionized hydrogen alkaline water is alkaline in nature (with a 
        pH value of drinking water 7pH - 9.5pH) which helps in neutralizing 
        disease-causing acidic nature.
      `,
    },

    {
      icon: minerals,
      title: "Natural minerals",
      content: `
        Tyent ionized hydrogen-rich alkaline water is rich in alkaline minerals 
        such as calcium, magnesium, potassium, and sodium.

        Alkaline minerals help in promoting bone health, aiding muscle function, 
        supporting cardiovascular health, boosting immune function, and enhancing 
        metabolism.
      `,
    },
    {
      icon: puredrink,
      title: "Pure Healthy water",
      content: `
        The Tyent water ionizer, equipped with .01-micron filtration, delivers the purest and safest healthy water, free from bacteria, nano-viruses, nano-plastics, contaminants, chlorine, and more.
      `,
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tyent.co.in/#organization",
        "name": "Tyent India",
        "url": "https://www.tyent.co.in/",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "KR"
        },
        "serviceArea": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Alkaline Water Ionizers",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Tyent NMP Water Ionizer"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Tyent UCE PLUS Water Ionizer"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Tyent UCE 9 Alkaline Water Ionizer"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Tyent UCE 11 Alkaline Water Ionizer"
              }
            }
          ]
        },
        "knowsAbout": [
          "Alkaline Water Ionizers",
          "Hydrogen Rich Water",
          "Water Filtration",
          "Electrolysis Technology",
          "Medical Grade Water Systems"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tyent.co.in/#website",
        "url": "https://www.tyent.co.in/",
        "name": "Tyent India",
        "inLanguage": "en-IN",
        "publisher": {
          "@id": "https://www.tyent.co.in/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.tyent.co.in/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Tyent Water Ionizer and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyent Water Ionizer is a premium hydrogen-rich alkaline water system that uses advanced Japanese electrolysis technology to convert regular tap water into mineral-rich, antioxidant alkaline water. It helps improve hydration, neutralize acidity, and support overall health at a cellular level."
        }
      },
      {
        "@type": "Question",
        "name": "Is Tyent better than RO water purifiers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Unlike RO systems that strip essential minerals and often leave water acidic, Tyent retains beneficial minerals while producing antioxidant, hydrogen-rich alkaline water. This delivers superior hydration, better taste, enhanced wellness support, and long-term protection."
        }
      },
      {
        "@type": "Question",
        "name": "What are the health benefits of drinking Tyent alkaline water?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyent hydrogen-rich alkaline water combines optimal alkalinity with selective antioxidant molecular hydrogen to neutralize acidity and reduce oxidative stress. It balances body pH, enhances digestion, boosts energy, supports immunity, and promotes long-term preventive health."
        }
      },
      {
        "@type": "Question",
        "name": "Is Tyent Water Ionizer safe for daily use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Tyent water ionizer systems are certified by USDA, KFDA, NSF, CE, ISO, EPA, ANSI and GMP standards, ensuring medical-grade safety, superior quality, and long-term reliability. Trusted in 123+ countries with a 40+ year legacy."
        }
      },
      {
        "@type": "Question",
        "name": "How is Tyent superior and more advanced than other water ionizers in the market?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyent features patented Japanese Solid Hybrid Mesh Plate Technology, patented SMPS PLUS power supply, and medical-grade components. It delivers higher molecular hydrogen, stable pH levels, superior durability, and consistent performance without chemicals."
        }
      },
      {
        "@type": "Question",
        "name": "How is Tyent Water Ionizer different from Tyent H2-Hybrid Hydrogen Generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyent Water Ionizers deliver 7 types of hydrogen-rich alkaline water from pH 2.5 to 11.5. The Tyent H2-Hybrid combines a water ionizer and hydrogen generator with a dedicated hydrogen button for high-concentration molecular hydrogen therapy at neutral pH."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Tyent's Solid Hybrid Mesh Plates superior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyent plates use 99.9% pure platinum-coated titanium, crafted with advanced Japanese technology from Permelac, Japan. They deliver superior durability, higher ORP levels, increased molecular hydrogen production, and are designed to last 45+ years."
        }
      },
      {
        "@type": "Question",
        "name": "What harmful contaminants does the Tyent's .01 micron dual-stage filtration remove?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ultra-fine 0.01 micron dual-stage filtration removes over 200+ contaminants including heavy metals, chlorine, fluoride, industrial chemicals, pharmaceutical residues, nano-viruses, and nano-plastics. Certified by NSF, EPA and ANSI."
        }
      }
    ]
  };

  const videoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Discover the World's No.1 Water Ionizer Brand - Tyent with Japanese Technology | #Tyent #Kangen",
      "description": "Why Choose Tyent? Experience the Unmatched Technology of Tyent Water Ionizers. Tyent stands out with its patented Solid Hybrid Mesh Plates, a unique innovation that combines the strength of solid plates with the increased participating surface area of mesh plates. This groundbreaking design ensures optimal electrolysis and delivers the highest ionization efficiency. Additionally, Tyent water ionizers feature the patented SMPS PLUS technology, which enhances the production of antioxidants, providing you with even more health benefits. Unlike other brands, Tyent prioritizes the direct delivery of its products from the manufacturing unit to the customers, eliminating middlemen and ensuring a seamless experience. Medilight healthcare believes in traditional marketing methods, enabling us to offer Tyent water ionizers with utmost transparency and at an affordable cost. Our water ionizers are designed using advanced Japanese technology, with the ionization chamber manufactured by Permelec Company, Japan, ensuring the highest quality and performance. While Kangen Water, manufactured by Enagic & Co., may seem popular due to its referral marketing business model, it offers no significant advantages over other water ionizers. Visit www.Tyent.co.in or call 9182414181 for more information.",
      "thumbnailUrl": "https://i.ytimg.com/vi/fZSV5ebM3D0/maxresdefault.jpg",
      "uploadDate": "2021-03-13",
      "duration": "PT4M3S",
      "contentUrl": "https://www.youtube.com/watch?v=fZSV5ebM3D0",
      "embedUrl": "https://www.youtube.com/embed/fZSV5ebM3D0"
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Tyent NMP Series Water Ionizer: The Ultimate Choice for Hydrogen-Rich Alkaline Water | #kangen",
      "description": "Discover the Tyent NMP series, the latest, updated, and patented alkaline water ionizer series from TAE YOUNG E&T CO. LTD, South Korea, featuring cutting-edge Japanese technology. Tyent stands as a certified medical-grade water ionizer brand, trusted and revered across 36 countries since 1995. With an unparalleled 25+ years of experience in research, development, testing, and innovation, Tyent has established itself as a leader in the field. Medilight Healthcare, the foremost authority in hydrogen-rich alkaline water ionizers since 2016, proudly serves as the authorized partner for Tyent water ionizers in India. Tyent provides unparalleled customer support, earning an A+ rating and accreditation from the Better Business Bureau, and a 5-star rating on Facebook. Tyent has been featured in prestigious events such as Modernism Week and has garnered media attention on FOX, ABC, and the Discovery Channel. Visit www.Tyent.co.in or call 9182-41-41-81.",
      "thumbnailUrl": "https://i.ytimg.com/vi/k213C_-BOq0/maxresdefault.jpg",
      "uploadDate": "2022-08-14",
      "duration": "PT2M3S",
      "contentUrl": "https://www.youtube.com/watch?v=k213C_-BOq0",
      "embedUrl": "https://www.youtube.com/embed/k213C_-BOq0"
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Unlocking Superiority: Tyent vs. Enagic Kangen Water Ionizers | #tyent #kangenwater #enagickangen",
      "description": "In the realm of water ionizers, two giants stand out: Tyent and Enagic Kangen. Yet, in the race for superiority and innovation, Tyent reigns supreme. Tyent employs the groundbreaking Solid Hybrid Mesh Plate, merging the durability of solid plates with the enhanced surface area of mesh plates. This innovation ensures optimal electrolysis, yielding high-quality ionized water. Enagic Kangen lacks this advanced plate design, making Tyent the superior choice in water ionization technology. Equipped with state-of-the-art Japanese technology, Tyent water ionizers feature ionization chambers crafted by Permelec, a prestigious Japanese company synonymous with superior quality and performance. In contrast, Enagic Kangen falls short in technological advancements, making Tyent the preferred option for those seeking the latest innovations in water ionization. Visit www.Tyent.co.in or call 9966 558 556.",
      "thumbnailUrl": "https://i.ytimg.com/vi/JAHUlOASNrI/maxresdefault.jpg",
      "uploadDate": "2020-09-22",
      "duration": "PT13M57S",
      "contentUrl": "https://www.youtube.com/watch?v=JAHUlOASNrI",
      "embedUrl": "https://www.youtube.com/embed/JAHUlOASNrI"
    }
  ];

  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.tyent.co.in/#localbusiness",
          "name": "Tyent India",
          "url": "https://www.tyent.co.in/",
          "telephone": "+91-9966558556",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8-2-277/45, UBI Colony, Near TV9 Office, Road No. 3, Banjara Hills",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500034",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.42085",
            "longitude": "78.43948"
          },
          "areaServed": "India"
        }) }}
        strategy="beforeInteractive"
      />
      <h1 className="visually-hidden">
        Tyent – Best Alkaline Water Ionizer Machine in India | Hydrogen-Rich Water Purifier
      </h1>
      <Slider />

      <div className="section-spacing">
        <Shop_by_category />
      </div>

      <div className="section-spacing">
        <Explore />
      </div>

      <div className="section-spacing">
        <WhatsInside />
      </div>

      <div className="section-spacing">
        <ProductCarousel />
      </div>

      <div className="section-spacing">
        <Smarter_Upgrade />
      </div>

      <div className="section-spacing">
        <h3 className="fw-bold subtitle-tight" style={{textAlign: "center"}}>
            Technical excellence with global availability
          </h3>
        <Video />
      </div>

      <div className="section-spacing">
        <TyentvsKAngan />
      </div>

      <div className="section-spacing">
        <HumanRight />
      </div>

      <div className="section-spacing">
        <RealScience />
      </div>


      <div className="section-spacing">
        <Why_People_choose_Tyent_Water />
      </div>

      <div className="">
        <TrustedbyExperts />
      </div>



      <div className="section-spacing">
        <Certifications />
      </div>

      <div className="section-spacing">
        <Needhelp />
      </div>

      <div className="section-spacing">
        <h3 className="fw-bold subtitle-tight" style={{textAlign: "center"}}>Our Valued Clients</h3>
        <br />
        <SlickSlider />
      </div>
      <div className="section-spacing">
        <TyentFaqSection />
      </div>
    </div>
  );
};
export default Home;
