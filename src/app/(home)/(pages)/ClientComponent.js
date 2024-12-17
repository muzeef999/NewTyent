
"use client"; 
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react"; 
import { store } from "@/app/Redux/store";
import AppBar from "../compoents/AppBar";
import Footer from "../compoents/Footer";
import Aos from "aos";
import { useEffect } from "react";
import SvgBackground from "../compoents/SvgBackground";

export default function ClientComponent({ children, session }) {

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
        <AppBar />
        <SvgBackground />
        <main>{children}</main>
        <Footer />
      </Provider>
    </SessionProvider>
  );
}