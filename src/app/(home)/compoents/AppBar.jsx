"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/asserts/logo.png";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Modal, Offcanvas } from "react-bootstrap";
import Login from "./Login";
import ResponsiveProductPage from "./ResponsiveProductPage";
import { LuLogOut } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { setUser } from "@/app/Redux/authSlice";
import Cartpage from "./Cart";

const AppBar = () => {
  

  const { data: session,  } = useSession(); // Get session data from NextAuth

  const dispatch = useDispatch();


  useEffect(() => {
    if (session?.user) {
      // Dispatch the user data to the Redux store if the user is authenticated
      dispatch(
        setUser({
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
        }));
    }
  }, [session, dispatch]);

  const userData  = useSelector((state) => state.auth.user); // Access user data from Redux

  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const handleToggleNavbar = () => setIsCollapsed(!isCollapsed);
  const handleToggleProduct = () => setIsProductOpen(!isProductOpen);
  
  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [cartShow, cartSetShow] = useState(false);
  const cartHandleClose = () => cartSetShow(false);
  const cartHandleShow = () => cartSetShow(true);



  const handleLogout = () => {
    signOut();
    router.push('/');
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((err) =>
        console.error("Failed to load Bootstrap JS", err)
      );
    }
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="appbg">
        <div
          style={{
            color: "#FFF",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            width: "100%",
            backgroundColor: "#008AC7",
          }}
        >
          {/* Left: Marquee Text */}
          <div
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "80%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ margin: 0 }}>1000+ customers</p>
            <span style={{ color: "#FFF", margin: "0 10px" }}>|</span>
            <p style={{ margin: 0 }}>
              3 years warranty on ionizer & 15 years warranty on plates.
            </p>
          </div>

          {/* Right: Login */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#FFF",
            }}
          >
            {userData ? (
        <div className="btn-group">
          <p
            type="button"
            className="dropdown-toggle m-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            &nbsp;Hi, {userData.name || userData.given_name || "User"}
          </p>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" type="button">
                <IoBagHandleOutline /> Your Orders
              </button>
            </li>
            <div className="dropdown-divider"></div>
            <li style={{ cursor: "pointer" }}>
              <button
                onClick={handleLogout}
                className="dropdown-item"
                type="button"
              >
                <LuLogOut /> Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <p
          onClick={handleShow}
          style={{ margin: 0, marginLeft: "5px", cursor: "pointer" }}
        >
          <FaUser size={15} /> Login
        </p>
      )} 
          </div>
        </div>
      </div>

      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            {/* Left: Logo */}
            <Link href="/" className="navbar-brand">
              <Image src={logo} width={100} alt="Logo" />
            </Link>

            {/* Mobile: Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Center: Navbar Links */}
            <div
              className={`collapse navbar-collapse ${
                isCollapsed ? "show" : ""
              }`}
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/our-story">
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/tyent-global">
                        Tyent Global
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleToggleProduct}>
                    Products
                  </button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/benefits">
                    Benefits
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/why-tyent">
                    Why Tyent
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/why-water-ionizer">
                    Why Water Ionizer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/certifications">
                    Certifications
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/testimonials">
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Right: Cart Icon */}
              <div className="d-none d-lg-block" style={{cursor:'pointer'}} onClick={cartHandleShow}>
                <MdOutlineShoppingBag size={30} />
              </div>
            </div>
          </div>
        </nav>
        {/* Collapsible Products Section */}
        {isProductOpen && (
          <div className="bg-light p-3">
            <ResponsiveProductPage />
          </div>
        )}
      </div>

      <Offcanvas show={cartShow} onHide={cartHandleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cartpage />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Login Modal */}
      <Modal show={show} onHide={handleClose}>
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
