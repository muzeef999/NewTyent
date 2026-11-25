"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "./deferredCarousels.css";

const ProductCarousel = dynamic(() => import("./ProductCarousel"), { ssr: false });
const ClientLogos = dynamic(() => import("../compoents/SlickSlider"), { ssr: false });

const Video = dynamic(() => import("../compoents/Video"), { ssr: false });

const TyentvsKAngan = dynamic(() => import("../compoents/(Home)/TyentvsKAngan"), { ssr: false });

const TrustedbyExperts = dynamic(() => import("./TrustedbyExperts"), { ssr: false });

const Needhelp = dynamic(() => import("./Needhelp"), { ssr: false });

const TyentFaqSection = dynamic(() => import("../contact/[slug]/TyentFaqSection"), { ssr: false });

function NearViewport({ children, className }) {
  const containerRef = useRef(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!window.IntersectionObserver) {
      setNearViewport(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "500px 0px" });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} className={className}>{nearViewport && children}</div>;
}

export function DeferredProductCarousel() {
  return <NearViewport className="deferred-product-carousel"><ProductCarousel /></NearViewport>;
}

export function DeferredClientLogos() {
  return <NearViewport className="deferred-client-logos"><ClientLogos /></NearViewport>;
}

export function DeferredVideo() {
  return <NearViewport className="deferred-video"><Video /></NearViewport>;
}

export function DeferredTyentvsKAngan() {
  return <NearViewport className="deferred-comparison"><TyentvsKAngan /></NearViewport>;
}

export function DeferredTrustedbyExperts() {
  return <NearViewport className="deferred-testimonials"><TrustedbyExperts /></NearViewport>;
}

export function DeferredNeedhelp() {
  return <NearViewport className="deferred-help"><Needhelp /></NearViewport>;
}

export function DeferredTyentFaqSection() {
  return <NearViewport className="deferred-faq"><TyentFaqSection /></NearViewport>;
}
