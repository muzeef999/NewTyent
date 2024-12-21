
"use client"; 
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react"; 
import { store } from "@/app/Redux/store";
import Aos from "aos";
import { useEffect } from "react";
import SvgBackground from "../compoents/SvgBackground";
import { usePathname } from "next/navigation";
import Footer from "../compoents/Footer";
import AppBar from "../compoents/AppBar";

export default function ClientComponent({ children, session }) {
   
    const pathname = usePathname();
    // Pages where Navbar and Footer are excluded
    const noLayoutPages = ['/shipping'];
    const shouldExcludeLayout = noLayoutPages.includes(pathname);
  
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      offset: 300,
      duration: 1000, 
    });
  }, []);
  


  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <SvgBackground />
        {!shouldExcludeLayout && <AppBar />}
        <main>{children}</main>
        {!shouldExcludeLayout && <Footer />}
      </Provider>
    </SessionProvider>
  );
}