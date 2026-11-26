"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../../Redux/store";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import AppBar from "../compoents/AppBar";
import Form from "../compoents/Form/Form";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { Modal } from "react-bootstrap";
import '@/app/style/Animation.css'; // Import the animation CSS
import { Toaster } from "sonner";
import FormOnly from "../compoents/Form/FormOnly";



export default function ClientComponent({ children, session, footer }) {
  const pathname = usePathname();
  const noLayoutPages = ["/shipping", "/blog/*"];
  const shouldExcludeLayout = noLayoutPages.includes(pathname);
  
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleOpenForm = () => setShowModal(true);
    window.addEventListener("openFormModal", handleOpenForm);
    return () => window.removeEventListener("openFormModal", handleOpenForm);
  }, []);

  // Auto popup after 5 seconds (once per session)
  useEffect(() => {
    if (sessionStorage.getItem("popupShown")) return;
    const timer = setTimeout(() => {
      setShowModal(true);
      sessionStorage.setItem("popupShown", "true");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const animationsInitialized = useRef(false);
  useEffect(() => {
    if (animationsInitialized.current || (pathname === "/" && CSS.supports("selector(body:has(*))"))) return;
    let cancelled = false;
    Promise.all([import("aos"), import("aos/dist/aos.css")]).then(([{ default: Aos }]) => {
      if (cancelled) return;
      animationsInitialized.current = true;
      Aos.init({
        duration: 1200,
        easing: "ease-in-out",
        offset: 100,
        delay: 100,
        once: true,
      });
    });
    return () => { cancelled = true; };
  }, [pathname]);

  const handleCallClick = () => {
    window.reportTyentConversion?.();
    window.location.href = "tel:+919966558556";
  };

  return (
    <SessionProvider session={session}>
     
       <Toaster richColors position="top-center"  style={{marginTop:'70px'}}/>
      <Provider store={store}>
        {!shouldExcludeLayout && <AppBar />}
        <main>{children}</main>
        
          {!shouldExcludeLayout && <Form />}
         <br/>
        {footer}

        {/* Floating Buttons */}
        <center>
          <div
            className="floating"
          >
            <button  style={{position:'absolute', bottom:'1rem', left:'2rem'}}
              className="floating-button"
              title="Click to message"
              
              onClick={() => setShowModal(true)}
            >
              <MdOutlineMessage size={30} />
            </button>

            <button style={{position:'absolute', bottom:'1rem', right:'2rem'}}
              className="floating-button"
              title="Click to call"
              onClick={handleCallClick}
            >
              <IoIosCall size={30} />
            </button>
          </div>
        </center>

        {/* Modal Animation */}
        {showModal && (
          <div
            className="modal-container"
            style={{
              position: "fixed",  // Fixed position
              bottom: "0",         // Move to the bottom-left
              left: "0",   
              transform: "translate(0, 0)", // No transform needed for left-bottom
              zIndex: 9999,        // Keep it on top of other content

              transition: "all 0.3s ease-out",
            }}
          >
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              centered
              scrollable
                className="animate-modal customModal"
            >
              <Modal.Body className="p-0">
                <FormOnly onClose={() => setShowModal(false)} />
              </Modal.Body>
            </Modal>
          </div>
        )}
      </Provider>
    </SessionProvider>
  );
}
