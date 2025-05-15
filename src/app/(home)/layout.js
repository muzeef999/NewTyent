import "bootstrap/dist/css/bootstrap.min.css"; 
import "aos/dist/aos.css"; 
import "@/app/style/AppBar.css"; 
import dynamic from "next/dynamic";
import { Poppins} from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"


 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
 
const ClientComponent = dynamic(() => import("./(pages)/ClientComponent"),{ssr:false})




// Define metadata for the layout
export const metadata = {
  title: "Tyent Water Ionizers India | Best Kangen Water Machines & Alkaline Ionizers",
  description: "Explore Tyent Water Ionizers India for the best Kangen water machines and alkaline ionizers. Enjoy ultra-pure, hydrogen-rich water with our advanced technology for superior hydration and health benefits.",
  keywords: "best kangen water machine, best kangen water machine in india, kangen water machine online india, buy kangen water machine, alkaline water machine, water ionizer machine, alkaline water system, best water ionizer, ionizer machine, best alkaline water machine, ph water machine, alkaline water ionizer, alkaline water filter system, k8 water machine, Kangen SD501 water ionizer, water ionizer for home, home alkaline water system, best alkaline water machine for home, alkaline water system for house, whole house alkaline water system, best water ionizer machine, ionised water machine, alkaline water ionizer machine, whole house water ionizer, living water alkaline machine, best water ionizer for home, japanese water ionizer, commercial alkaline water machine, countertop water ionizer, hydrogen alkaline water machine, hydrogen water generator, buy alkaline water machine, best water alkalizer, commercial alkaline water machine for sale, top alkaline water machine, tyent usa water ionizer, best alkaline water ionizer machine, tyent water ionizer, tyent usa water ionizer, water ionizer and alkaline water machine, Enagic kangen SD501, kangen water machine, Under counter water ionizer, Enagic kangen Jr, Enagic kangen super SD501, Tyent NMP water ionizer, Tyent UCE PLUS water ionizer, Antioxidant water, Ionized alkaline water benefits",
};


export default function RootLayout({ children, session }) {

  return (
    <html lang="en">
          <head>
        <meta
          name="google-site-verification"
          content="NAk7_Pm_PN0E76lPTu6J1Wo-H9UK8phofxdKyZ26sUg"
        />
      </head>
     
      <body  className={poppins.className}>
        <SpeedInsights/>
        <ClientComponent session={session}>
          {children}
        </ClientComponent>
        
      </body>
    </html>
  );
}