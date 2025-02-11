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
  title: "Tyent Water Ionizers - Advanced Alkaline Water Filtration",
  description: "Discover Tyent's cutting-edge water ionizers that provide ultra-pure, hydrogen-rich alkaline water. Experience superior hydration with our award-winning technology.",
};

export default function RootLayout({ children, session }) {

  return (
    <html lang="en">
     
      <body  className={poppins.className}>
        <SpeedInsights/>
        <ClientComponent session={session}>
          {children}
        </ClientComponent>
        
      </body>
    </html>
  );
}