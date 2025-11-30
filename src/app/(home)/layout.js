import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@/app/style/AppBar.css";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import Script from "next/script"; // ✅ correct import

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const ClientComponent = dynamic(() => import("./(pages)/ClientComponent"), {
  ssr: false,
});

// Metadata is still used in app directory routing, not here directly in layout.js
export const metadata = {
  title:
    "Tyent: Best Alkaline Water Ionizer in India",
  description:
    "Discover Tyent, the best alkaline water machine in India. Get the best water ionizer in India with advanced Japanese technology for superior hydrogen-rich water.",
  keywords:
    "best kangen water machine, best kangen water machine in india, kangen water machine online india, buy kangen water machine, alkaline water machine, water ionizer machine, alkaline water system, best water ionizer, ionizer machine, best alkaline water machine, ph water machine, alkaline water ionizer, alkaline water filter system, k8 water machine, Kangen SD501 water ionizer, water ionizer for home, home alkaline water system, best alkaline water machine for home, alkaline water system for house, whole house alkaline water system, best water ionizer machine, ionised water machine, alkaline water ionizer machine, whole house water ionizer, living water alkaline machine, best water ionizer for home, japanese water ionizer, commercial alkaline water machine, countertop water ionizer, hydrogen alkaline water machine, hydrogen water generator, buy alkaline water machine, best water alkalizer, commercial alkaline water machine for sale, top alkaline water machine, tyent usa water ionizer, best alkaline water ionizer machine, tyent water ionizer, tyent usa water ionizer, water ionizer and alkaline water machine, Enagic kangen SD501, kangen water machine, Under counter water ionizer, Enagic kangen Jr, Enagic kangen super SD501, Tyent NMP water ionizer, Tyent UCE PLUS water ionizer, Antioxidant water, Ionized alkaline water benefits",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* ✅ Google Scripts — placed safely OUTSIDE <Head> */}

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T94BNYD8RB"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T94BNYD8RB');
            gtag('config', 'AW-802308772');
          `}
        </Script>
{/* empty check */}
        <Script id="conversion-report" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };

              gtag('event', 'conversion', {
                'send_to': 'AW-802308772/gmjyCLODuIMYEKSFyf4C',
                'event_callback': callback
              });

              return false;
            }
          `}
        </Script>

        {/* No-JS fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54CPNQGB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <SpeedInsights />

        <ClientComponent session={session}>{children}</ClientComponent>
      </body>
    </html>
  );
}
