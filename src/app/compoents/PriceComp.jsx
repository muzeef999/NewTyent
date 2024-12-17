import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ComparisonTable = () => {
  const comparisonData = [
    {
      product: "TYENT NMP-5 vs  KANGEN Jr4",
      features: [
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    {
      product: "TYENT NMP-5 vs  KANGEN Jr4",
      features: [
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    {
      product: "TYENT NMP-5 vs  KANGEN Jr4",
      features: [
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    {
      product: "TYENT NMP-5 vs  KANGEN Jr4",
      features: [
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    // Apply separate animations for each card
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { x: index % 2 === 0 ? -300 : 300, opacity: 0 }, // Cards slide in from alternating sides
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card, // Trigger animation for this specific card
              start: "top 80%", // Start when this card enters the viewport
              end: "top 50%", // Animation ends here
              scrub: true,
              
            },
          }
        );
      }
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1.1,
      zIndex: 10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1,
      zIndex: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="container">


      
<h1 className="text-center" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>
Detailed Comparison
</h1>
<p 
  className="text-center" 
  style={{
    marginTop:'-20px',
    fontWeight: 600, 
    fontSize: '70px', 
    color: '#008AC7', 
  }}
>
  Tyent<span style={{ color: '#7B7B7B', fontSize: '44px', fontWeight: 'normal' }}>
    {' '}VS{' '}
  </span> <span style={{color:'#7B7B7B'}}>Kangen</span>
</p>
      <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
        {comparisonData.map((product, index) => (
          <div
            key={index}
            className="d-flex card-container-data"
            style={{
              position: "relative",
              marginRight: index < comparisonData.length - 1 ? "-80px" : "0px",
              zIndex: index,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            ref={(el) => (cardRefs.current[index] = el)} // Attach ref to each card
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Product Heading Displayed Vertically */}
            <div
              className="p-1 product-section"
              style={{
                writingMode: "vertical-rl",
                fontSize: "16px",
                color: "#FFFF",
                transform: "rotate(180deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="highlight" style={{ fontWeight: "bold" }}>
                {product.product}
              </span>
            </div>

            {/* Comparison Table */}
            <div>
              <table className="table table-bordered w-100">
                <thead>
                  <tr>
                    <th className="text-center">Tyent</th>
                    <th className="text-center">Feature</th>
                    <th className="text-center">Kangen</th>
                  </tr>
                </thead>
                <tbody>
                  {product.features.map((row, idx) => (
                    <tr key={idx}>
                      <td className="text-center">{row.tyent}</td>
                      <td className="text-center" style={{ fontWeight: "600" }}>
                        {row.feature}
                      </td>
                      <td className="text-center">{row.kangen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
