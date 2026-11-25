"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Offcanvas } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import {
  IoBagHandleOutline,
  IoGridOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";

import { PiShoppingCartLight } from "react-icons/pi";
import { setUser } from "@/app/Redux/authSlice";
import { fetchCart } from "@/app/Redux/cartSlice";
import "@/app/style/AppBar.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { toast } from "sonner";
import { IoPeopleCircleOutline } from "react-icons/io5";
import Logo from "./Logo";

const ResponsiveProductPage = dynamic(() => import("./ResponsiveProductPage"), { ssr: false });
const ServiceHistory = dynamic(() => import("./(Home)/ServiceHistory"), { ssr: false });
const Order = dynamic(() => import("./(Home)/Order"), { ssr: false });
const Login = dynamic(() => import("./Login"), { ssr: false });
const Cartpage = dynamic(() => import("./Cart"), { ssr: false });

const AppBar = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [showOrders, setShowOrders] = useState(false);
  const [showServiceHistory, setShowServiceHistory] = useState(false);

  const userData = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.loading);
  const { totalItems } = useSelector((state) => state.cart);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuEnter = (submenu) => {
    setActiveSubmenu(submenu);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

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
          role: session.user.role,
          phoneNumber: session.user.phoneNumber,
        })
      );
      dispatch(fetchCart(session.user.id));
    }
  }, [session, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (userData) {
      import("bootstrap/js/dist/dropdown").catch((err) =>
        console.error("Failed to load Bootstrap JS", err)
      );
    }
  }, [userData]);

  const handleLogout = () => {
    signOut();
    toast.success("You have successfully logged out!");
    router.push("/");
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="sticky-top" style={{ position: "fixed", width: "100%" }}>
        <div style={{ backgroundColor: "#291495", color: "#FFF" }}>
        <div
          className="d-flex container justify-content-between align-items-center  p-2"        
        >
          <div
            className="d-flex  align-items-center marquee"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <div className="marquee-content">
              <p className="mb-0">123+ Countries</p>
              <span className="mx-2">|</span>
              <span className="mb-0">
                3 years warranty on ionizer & 15 years warranty on plates.
              </span>
            </div>
          </div>

          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            {isLoading ? (
              <p className="mb-0">Loading...</p> // Show loading text before userData is available
            ) : userData ? (
              <div className="btn-group">
                <button
                  style={{ textDecoration: "none" }}
                  type="button"
                  className="btn btn-link text-white dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                >
                  Hi, {userData.name || "User"}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  style={{ zIndex: "9999" }}
                >
                  {userData.role === "user" && (
                    <>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => setShowOrders(true)}
                        >
                          <IoBagHandleOutline /> Your Orders
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() =>setShowServiceHistory(true)}
                        >
                          <MdMiscellaneousServices /> Service History
                        </button>
                      </li>
                    </>
                  )}
                  {userData.role === "admin" && (
                    <Link prefetch={false} className="dropdown-item" href={"/dashboard"}>
                      <IoGridOutline /> Dashboard
                    </Link>
                  )}
                  {userData.role === "manager" && (
                    <Link prefetch={false} className="dropdown-item" href={"/leads"}>
                      <IoPeopleOutline /> Leads
                    </Link>
                  )}
                  {userData.role === "employee" && (
                    <Link prefetch={false} className="dropdown-item" href={"/complains"}>
                      <IoPeopleCircleOutline /> Complains
                    </Link>
                  )}
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <LuLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-link text-white text-decoration-none p-0 text-nowrap"
                onClick={() => setShowLoginModal(true)}
              >
                <FaUser aria-hidden="true" size={15} /> Login
              </button>
            )}
          </div>
        </div>
        </div>
        {/* Navbar */}

        
        <nav
          className={`navbar  navbar-expand-xl  sticky-top navbar-light flex-column custom-navbar  ${
            isFixed ? "fixed" : ""
          }`}
        >
          <div className="container d-flex justify-content-between align-items-center mt-2 border-bottom">
            {/* Toggle Button */}
            <button
              className="navbar-toggler"
              aria-label="Open navigation menu"
              type="button"
              onClick={toggleOffcanvas}
              aria-expanded={offcanvasOpen ? "true" : "false"}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Logo */}
            <Link prefetch={false}
              href="/"
              className="navbar-brand"
              aria-label="Tyent India home"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Logo />
            </Link>

            {/* Offcanvas Menu */}
            <div
              className={`offcanvas offcanvas-start ${
                offcanvasOpen ? "show" : ""
              }`}
              style={{
                width: "65%",
                visibility: offcanvasOpen ? "visible" : "hidden",
              }}
            >
              <div className="offcanvas-header">
                <h5>Menu</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeOffcanvas}
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto">
                  <li
                    className={"nav-item"}
                    onMouseEnter={() => setIsProductOpen(false)}
                  >
                    <Link prefetch={false}
                      href="/"
                      className={`nav-link ${pathname === "/" ? "active" : ""}`}
                      onClick={closeOffcanvas}
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    className={`nav-item dropdown ${
                      isAboutDropdownOpen ? "show" : ""
                    }`}
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link prefetch={false}
                      href="#"
                      className={`dropdown-toggle nav-link ${
                        ["/our-story", "/tyent-global"].includes(pathname)
                          ? "active"
                          : ""
                      }`}
                      aria-expanded={isAboutDropdownOpen}
                    >
                      About Us
                    </Link>
                    <ul
                      className={`dropdown-menu dropdown-menu-end ${
                        isAboutDropdownOpen ? "show" : ""
                      }`}
                    >
                      <li>
                        <Link prefetch={false}
                          href="/our-story"
                          className={`dropdown-item ${
                            pathname === "/our-story" ? "active" : ""
                          }`}
                          onClick={closeOffcanvas}
                        >
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link prefetch={false}
                          href="/tyent-global"
                          className={`dropdown-item ${
                            pathname === "/tyent-global" ? "active" : ""
                          }`}
                          onClick={closeOffcanvas}
                        >
                          Tyent Global
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`d-block d-lg-none nav-item dropdown ${
                      isProductsDropdownOpen ? "show" : ""
                    }`}
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <Link prefetch={false}
                      href="#"
                      className="dropdown-toggle nav-link"
                      role="button"
                      aria-expanded={isProductsDropdownOpen}
                    >
                      Products
                    </Link>
                    <ul
                      className={`dropdown-menu dropdown-menu-end ${
                        isProductsDropdownOpen ? "show" : ""
                      }`}
                    >
                      {/* NMP Series */}
                      <li
                        className={`dropdown-submenu ${
                          activeSubmenu === "nmp" ? "show" : ""
                        }`}
                        onMouseEnter={() => handleSubmenuEnter("nmp")}
                        onMouseLeave={handleSubmenuLeave}
                      >
                        <Link prefetch={false} href="#" className="dropdown-item">
                          NMP Series{" "}
                          <MdOutlineArrowDropDown
                            size={20}
                            style={{
                              transform: "rotate(270deg)",
                              marginLeft: "-10px",
                            }}
                          />
                        </Link>
                        <ul
                          className={`dropdown-menu ${
                            activeSubmenu === "nmp" ? "show" : ""
                          }`}
                        >
                          <li>
                            <Link prefetch={false}
                              href="/nmp-5"
                              className="dropdown-item"
                              onClick={closeOffcanvas}
                            >
                              NMP-5 Plates
                            </Link>
                          </li>
                          <div className="dropdown-divider"></div>
                          <li>
                            <Link prefetch={false}
                              href="/nmp-7"
                              className="dropdown-item"
                              onClick={closeOffcanvas}
                            >
                              NMP-7 Plates
                            </Link>
                          </li>
                          <div className="dropdown-divider"></div>
                          <li>
                            <Link prefetch={false}
                              href="/nmp-9"
                              className="dropdown-item"
                              onClick={closeOffcanvas}
                            >
                              NMP-9 Plates
                            </Link>
                          </li>
                          <div className="dropdown-divider"></div>
                          <li>
                            <Link prefetch={false}
                              href="/nmp-11"
                              className="dropdown-item"
                              onClick={closeOffcanvas}
                            >
                              NMP-11 Plates
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <div className="dropdown-divider"></div>
                      <li
                        className={`dropdown-submenu ${
                          activeSubmenu === "uce" ? "show" : ""
                        }`}
                        onMouseEnter={() => handleSubmenuEnter("uce")}
                        onMouseLeave={handleSubmenuLeave}
                      >
                        <Link prefetch={false} href="#" className="dropdown-item">
                          UCE Series{" "}
                          <MdOutlineArrowDropDown
                            size={20}
                            style={{
                              transform: "rotate(270deg)",
                              marginLeft: "-10px",
                            }}
                          />
                        </Link>
                        <ul
                          className={`dropdown-menu ${
                            activeSubmenu === "uce" ? "show" : ""
                          }`}
                        >
                          <li>
                            <Link prefetch={false}
                              href="/uce-9-plus"
                              className="dropdown-item"
                              onClick={closeOffcanvas}
                            >
                              UCE-9 Plates
                            </Link>
                          </li>
                          <div className="dropdown-divider"></div>
                          <li>
                            <Link prefetch={false}
                              href="/uce-11-plus"
                              className="dropdown-item"
                              onClick={closeOffcanvas}
                            >
                              UCE-11 Plates
                            </Link>
                          </li>
                          <div className="dropdown-divider"></div>
                          <li>
                            <Link prefetch={false}
                              href="/uce-13-plus"
                              className="dropdown-item"
                              onClick={closeOffcanvas}
                            >
                              UCE-13 Plates
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <div className="dropdown-divider"></div>
                      <li>
                        <Link prefetch={false}
                          href="/hybrid-h2"
                          className="dropdown-item"
                          onClick={closeOffcanvas}
                        >
                          Tyent H2
                        </Link>
                      </li>
                      <div className="dropdown-divider"></div>
                      <li>
                        <Link prefetch={false}
                          href="/soap"
                          className="dropdown-item"
                          onClick={closeOffcanvas}
                        >
                          Soap
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item  d-block d-none d-xl-block">
                    <div
                      className={`nav-link ${
                        ["/nmp-5", "/nmp-7", "/nmp-9", "/nmp-11"].includes(
                          pathname
                        )
                          ? "active"
                          : ""
                      }`}
                      onMouseEnter={() => setIsProductOpen(true)}
                    >
                      Products <MdOutlineArrowDropDown size={25} />
                    </div>
                  </li>

                  {[
                    { path: "/why-tyent", label: "Why Tyent" },
                    { path: "/why-water-ionizer", label: "Why Water Ionizer" },
                    { path: "/certifications", label: "Certifications" },
                    { path: "/blogs", label: "Blogs" },
                    { path: "/contact", label: "Contact Us" },
                  ].map((item) => (
                    <li
                      key={item.path}
                      className="nav-item"
                      onMouseEnter={() => setIsProductOpen(false)}
                    >
                      <Link prefetch={false}
                        href={item.path}
                        className={`nav-link ${
                          pathname === item.path ? "active" : ""
                        }`}
                        onClick={closeOffcanvas}
                        // Close on hover leave
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cart Icon */}
            <button
              type="button"
              className="btn border-0 p-0 d-flex align-items-center position-relative"
              aria-label={`Open cart (${Number(totalItems)} items)`}
              onClick={() => setCartShow(true)}
            >
              <span className="counter m-2">{Number(totalItems)}</span>
              <PiShoppingCartLight aria-hidden="true" size={40} color="#291495" />
            </button>
          </div>

          {/* Product Page */}
          {isProductOpen && (
            <div
              className={`responsive-product-container ${
                isProductOpen ? "expanded" : ""
              }`}
              onMouseEnter={() => setIsProductOpen(true)} // Keep it open while hovering over the dropdown
              onMouseLeave={() => setIsProductOpen(false)} // Close when leaving
            >
              <ResponsiveProductPage isProductOpen={setIsProductOpen} />
            </div>
          )}
        </nav>

        {/* Cart Offcanvas */}
        <Offcanvas
          show={cartShow}
          onHide={() => setCartShow(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cartpage />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Orders Offcanvas */}
        <Offcanvas
          show={showOrders}
          onHide={() => setShowOrders(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Orders</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Order />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Service History Offcanvas */}
        <Offcanvas
          show={showServiceHistory}
          onHide={() => setShowServiceHistory(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Service History</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ServiceHistory />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Login Modal */}

        <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
          <Modal.Body>
            {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default AppBar;
