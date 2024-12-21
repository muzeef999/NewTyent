"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Offcanvas } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { setUser } from "@/app/Redux/authSlice";
import { fetchCart } from "@/app/Redux/cartSlice";
import logo from "@/asserts/logo.png";
import Login from "./Login";
import ResponsiveProductPage from "./ResponsiveProductPage";
import Cartpage from "./Cart";
import "@/app/style/AppBar.css"

const AppBar = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();  // Get the current path using usePathname


  const userData = useSelector((state) => state.auth.user);
  const { totalItems } = useSelector((state) => state.cart);


  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);  // State to manage offcanvas visibility


  const closeOffcanvas = () => {
    setOffcanvasOpen(false);
  };

  useEffect(() => {
    if (session?.user) {
      dispatch(
        setUser({
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
        })
      );
      dispatch(fetchCart(session.user.id));
    }
  }, [session, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 45);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((err) =>
        console.error("Failed to load Bootstrap JS", err)
      );
    }
  }, []);

  const handleLogout = () => {
    signOut();
    router.push("/");
  };


  return (
    <div>
      {/* Top Bar */}
      <div className="appbg">
        <div className="d-flex justify-content-between align-items-center p-2" style={{ backgroundColor: "#008AC7", color: "#FFF" }}>
        <div className="d-flex align-items-center marquee" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
  <div className="marquee-content">
    <p className="mb-0">1000+ customers</p>
    <span className="mx-2">|</span>
    <p className="mb-0">3 years warranty on ionizer & 15 years warranty on plates.</p>
  </div>
</div>

          <div className="d-flex align-items-center" style={{ cursor: "pointer" }}>
            {userData ? (
              <div className="btn-group">
                <button style={{textDecoration:'none'}} type="button" className="btn btn-link text-white dropdown-toggle" data-bs-toggle="dropdown">
                  Hi, {userData.name || "User"}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button className="dropdown-item">
                      <IoBagHandleOutline /> Your Orders
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <LuLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <p className="mb-0" onClick={() => setShowLoginModal(true)}>
                <FaUser size={15} /> Login
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light flex-column ${isFixed ? "fixed" : ""}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOffcanvasOpen(!offcanvasOpen)}  // Toggle offcanvas open state
            aria-expanded={offcanvasOpen ? "true" : "false"}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image src={logo} width={100} alt="Logo" />
          </Link>

  
        {/* Offcanvas Menu */}
        <div className="offcanvas offcanvas-start"   style={{ width: "40%" }}  id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5>Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`} onClick={closeOffcanvas}>
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              href="#"
              className={`dropdown-toggle nav-link ${pathname === '/our-story' || pathname === '/tyent-global' ? 'active' : ''}`}
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="/our-story" className="dropdown-item" onClick={closeOffcanvas}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/tyent-global" className="dropdown-item" onClick={closeOffcanvas}>
                  Tyent Global
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={() => setIsProductOpen(!isProductOpen)}>
                  Products
                </button>
                </li>
          {[
            { path: "/benefits", label: "Benefits" },
            { path: "/why-tyent", label: "Why Tyent" },
            { path: "/why-water-ionizer", label: "Why Water Ionizer" },
            { path: "/certifications", label: "Certifications" },
            { path: "/blogs", label: "Blogs" },
            { path: "/testimonials", label: "Testimonials" },
            { path: "/contact", label: "Contact Us" },
          ].map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                href={item.path} 
                className={`nav-link ${pathname === item.path ? "active" : ""}`}
                onClick={closeOffcanvas}
              >
                {item.label}
              </Link>
            </li>
          ))}
            </ul>
          </div>
        </div>

          {/* Cart Icon */}
          <div className="d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => setCartShow(true)}>
            <div className="counter mx-2">{totalItems || 0}</div>
            <PiShoppingCartLight size={40} color="#008AC7" />
          </div>
        </div>

      {/* Product Page */}
      {isProductOpen && <ResponsiveProductPage />}

      </nav>


      {/* Cart Offcanvas */}
      <Offcanvas show={cartShow}  style={{ width: "24%" }} onHide={() => setCartShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cartpage />
        </Offcanvas.Body>
      </Offcanvas>


      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AppBar;
