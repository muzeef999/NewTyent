import Link from "next/link";
import BannerDesktop from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop_hybrid.webp";
import BannerDesktopMedium from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop_hybrid_1024.webp";
import BannerMobile from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg_hybrid.webp";
import BannerMobileSmall from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg_hybrid_480.webp";

export default function Slider() {
  return (
    <Link href="/hybrid-h2" prefetch={false} className="d-block overflow-hidden">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`${BannerMobileSmall.src} ${BannerMobileSmall.width}w, ${BannerMobile.src} ${BannerMobile.width}w`}
          sizes="100vw"
          width={BannerMobile.width}
          height={BannerMobile.height}
        />
        {/* The WebP variants are generated ahead of time for the homepage LCP image. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BannerDesktop.src}
          srcSet={`${BannerDesktopMedium.src} ${BannerDesktopMedium.width}w, ${BannerDesktop.src} ${BannerDesktop.width}w`}
          sizes="100vw"
          width={BannerDesktop.width}
          height={BannerDesktop.height}
          alt="Water, Reimagined - Tyent Hybrid H2 Water Ionizer India"
          fetchPriority="high"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </picture>
    </Link>
  );
}
