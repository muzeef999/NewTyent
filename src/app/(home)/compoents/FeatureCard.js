"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import "@/app/style/WhyTent.css";

const FeatureCard = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="why-tyent-timeline-section">
      <div className="container">
        <div className="why-tyent-timeline">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <article
                key={item.id}
                className={`why-tyent-item ${isLeft ? "is-left" : "is-right"}`}
              >
                <span className="why-tyent-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="why-tyent-copy">
                  <h3 className="why-tyent-heading">{item.heading}</h3>
                  <div
                    className={`why-tyent-description ${
                      expandedItems[item.id] ? "is-expanded" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <button
                    type="button"
                    className="why-tyent-toggle"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {expandedItems[item.id] ? "Read Less" : "Read More"}
                  </button>
                </div>

                <div className="why-tyent-media">
                  <div className="why-tyent-image-shell">
                    <Image
                      src={item.icon}
                      alt={item.heading}
                      className="why-tyent-image"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

FeatureCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color1: PropTypes.string,
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    })
  ).isRequired,
};

export default FeatureCard;
