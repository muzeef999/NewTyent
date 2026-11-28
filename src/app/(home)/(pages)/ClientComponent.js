"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../../Redux/store";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import AppBar from "../compoents/AppBar";
import Form from "../compoents/Form/Form";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { Modal } from "react-bootstrap";
import '@/app/style/Animation.css'; // Import the animation CSS
import { Toaster } from "sonner";
import FormOnly from "../compoents/Form/FormOnly";

const whatsappMessage = "Hi Tyent! I'd like to learn more about your water ionizers.";


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

        <button
          type="button"
          className="floating-button floating-form-button"
          aria-label="Open enquiry form"
          onClick={() => setShowModal(true)}
        >
          <MdOutlineMessage size={30} aria-hidden="true" />
        </button>

        <div className="floating">
          <a
            className="floating-button floating-button-whatsapp"
            href={`https://wa.me/919966558556?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Tyent on WhatsApp"
          >
            <FaWhatsapp size={30} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="floating-button"
            aria-label="Call Tyent"
            onClick={handleCallClick}
          >
            <IoIosCall size={30} aria-hidden="true" />
          </button>
        </div>

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
