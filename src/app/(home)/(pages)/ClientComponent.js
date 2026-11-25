"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../../Redux/store";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import AppBar from "../compoents/AppBar";
import Form from "../compoents/Form/Form";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import '@/app/style/Animation.css'; // Import the animation CSS
import { Toaster } from "sonner";
import FormOnly from "../compoents/Form/FormOnly";



export default function ClientComponent({ children, session, footer }) {
  const pathname = usePathname();
  const noLayoutPages = ["/shipping", "/blog/*"];
  const shouldExcludeLayout = noLayoutPages.includes(pathname);
  
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [buttonRef, setButtonRef] = useState(null); // Store button reference

  const handleShowModal = (content, event) => {
    setModalContent(content);
    setShowModal(true);
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowModal(true);
  }, 30000); // 1 minute = 60,000 ms

  return () => clearTimeout(timer); // cleanup
}, []);




  useEffect(() => {
  const timer = setTimeout(() => {
    setShowModal(true);
  }, 60000); // 1 minute = 60,000 ms

  return () => clearTimeout(timer); // cleanup
}, []);


const handleDownloadConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-802308772/gmjyCLODuIMYEKSFyf4C",
    });
  }
};


  useEffect(() => {
    const handleOpenForm = () => setShowModal(true);
    window.addEventListener("openFormModal", handleOpenForm);
    return () => window.removeEventListener("openFormModal", handleOpenForm);
  }, []);

  const animationsInitialized = useRef(false);
  useEffect(() => {
    if (animationsInitialized.current || (pathname === "/" && CSS.supports("selector(body:has(*))"))) return;
    let cancelled = false;
    import("aos").then(({ default: Aos }) => {
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

     if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion("tel:+919966558556");
  }
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
              
              onClick={(e) => handleShowModal("This is a messaging modal.", e)}
              ref={setButtonRef} // Attach button ref for modal placement
            >
              <MdOutlineMessage size={30} />
            </button>

            <button style={{position:'absolute', bottom:'1rem', right:'2rem'}}
              className="floating-button"
              title="Click to call"
              onClick={() => {handleCallClick(),  handleDownloadConversion();
       }}
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
                className="animate-modal customModal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Get a Free Demo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormOnly />
              </Modal.Body>
              
            </Modal>
          </div>
        )}
      </Provider>
    </SessionProvider>
  );
}
