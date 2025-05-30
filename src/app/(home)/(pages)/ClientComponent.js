"use client";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@/app/Redux/store";
import Aos from "aos";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "../compoents/Footer";
import AppBar from "../compoents/AppBar";
import Form from "../compoents/Form/Form";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import '@/app/style/Animation.css'; // Import the animation CSS
import FormOnly from "../compoents/Form/FormOnly";
import { Toaster } from "sonner";
import NextNProgress from 'nextjs-progressbar'; 



export default function ClientComponent({ children, session }) {
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
    Aos.init({
      duration: 1200, // Smooth & premium feel (1.2s)
      easing: "ease-in-out", // More natural motion
      offset: 100, // Not too early, not too late
      delay: 100, // Adds a slight delay for elegance
      once: true, // Animations play only once for a polished experience
    });
  }, []);

  const handleCallClick = () => {
    window.location.href = "tel:+919182414181";
  };

  return (
    <SessionProvider session={session}>
       <NextNProgress color="#FFF" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
     
       <Toaster richColors position="top-center"  style={{marginTop:'70px'}}/>
      <Provider store={store}>
        {!shouldExcludeLayout && <AppBar />}
        <main>{children}</main>
        
          {!shouldExcludeLayout && <Form />}
         <br/>
        <Footer />

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
              onClick={handleCallClick}
            >
              <IoIosCall size={30} />
            </button>
          </div>
        </center>

        {/* Modal Animation */}
        {showModal && buttonRef && (
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
              className="animate-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Form</Modal.Title>
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
