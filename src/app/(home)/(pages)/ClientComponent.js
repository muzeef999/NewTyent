
"use client"; 
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react"; 
import { store } from "@/app/Redux/store";
import Aos from "aos";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "../compoents/Footer";
import AppBar from "../compoents/AppBar";
import Form from "../compoents/Form/Form";

export default function ClientComponent({ children, session }) {
   
    const pathname = usePathname();
    // Pages where Navbar and Footer are excluded
    const noLayoutPages = ['/shipping'];
    const shouldExcludeLayout = noLayoutPages.includes(pathname);
  
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      offset: 150,
      duration: 1000, 
    });
  }, []);
  


  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {/* <SvgBackground /> */}
        {!shouldExcludeLayout && <AppBar />}
        <main>{children}</main>
        <br/>
        <br/>
        <div className="section-spacing">
        {!shouldExcludeLayout && <Form />}
        </div>
        <Footer />
            </Provider>
    </SessionProvider>
  );
}