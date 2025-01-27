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
import "@/app/style/AppBar.css";
import { MdOutlineArrowDropDown } from "react-icons/md";


const AppBar = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const userData = useSelector((state) => state.auth.user);
  const { totalItems } = useSelector((state) => state.cart);

  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
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

  
  const currentUrl = window.location.href;


  // Check if "uce" is found in the URL
  const urlFound = currentUrl.includes("uce");

  
  return (
    <div>
      {/* Top Bar */}
      <div className="sticky-top" style={{position:'fixed', width:'100%'}}>
        <div
          className="d-flex justify-content-between align-items-center p-2" 
          style={{backgroundColor: "#008AC7", color: "#FFF", }}
        >
          <div 
            className="d-flex align-items-center marquee"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <div className="marquee-content">
              <p className="mb-0">1000+ customers</p>
              <span className="mx-2">|</span>
              <p className="mb-0">
                3 years warranty on ionizer & 15 years warranty on plates.
              </p>
            </div>
          </div>

          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            {userData ? (
              <div className="btn-group">
                <button
                  style={{ textDecoration: "none" }}
                  type="button"
                  className="btn btn-link text-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Hi, {userData.name || "User"}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" style={{zIndex:'9999'}}>
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
              <p
                className="mb-0"
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                onClick={() => setShowLoginModal(true)}
              >
                <FaUser size={15} /> Login
              </p>
            )}
          </div>
        </div>

        {/* Navbar */}
        <nav
          className={`navbar  navbar-expand-xl  sticky-top navbar-light flex-column custom-navbar  ${
            isFixed ? "fixed" : ""
          }`}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center mt-2 border-bottom">
            {/* Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleOffcanvas}
              aria-expanded={offcanvasOpen ? "true" : "false"}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Logo */}
            <Link href="/" className="navbar-brand">
              <Image src={logo} width={100} alt="Logo" />
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
                  <li className={"nav-item"} onMouseEnter={() => setIsProductOpen(false)}>
                    <Link
                      href="/"
                      className={`nav-link ${pathname === "/" ? "active" : ""}`}
                      onClick={closeOffcanvas}
                    >
                      Home
                    </Link>
                  </li>
                 
                  <li
  className={`nav-item dropdown ${isAboutDropdownOpen ? "show" : ""}`}
  onMouseEnter={() => setIsAboutDropdownOpen(true)}
  onMouseLeave={() => setIsAboutDropdownOpen(false)}
>
  <Link
    href="#"
    className={`dropdown-toggle nav-link ${
      ["/our-story", "/tyent-global"].includes(pathname) ? "active" : ""
    }`}
    aria-expanded={isAboutDropdownOpen}
  >
    About Us
  </Link>
  <ul className={`dropdown-menu dropdown-menu-end ${isAboutDropdownOpen ? "show" : ""}`}>
    <li>
      <Link
        href="/our-story"
        className={`dropdown-item ${pathname === "/our-story" ? "active" : ""}`}
        onClick={closeOffcanvas}
      >
        Our Story
      </Link>
    </li>
    <li>
      <Link
        href="/tyent-global"
        className={`dropdown-item ${pathname === "/tyent-global" ? "active" : ""}`}
        onClick={closeOffcanvas}
      >
        Tyent Global
      </Link>
    </li>
  </ul>
</li>


                        <li
                          className={`d-block d-lg-none nav-item dropdown ${isProductsDropdownOpen ? "show" : ""}`}
                          onMouseEnter={() => setIsProductsDropdownOpen(true)}
                          onMouseLeave={() => setIsProductsDropdownOpen(false)}
                        >
                          <Link
                            href="#"
                            className="dropdown-toggle nav-link"
                            role="button"
                            aria-expanded={isProductsDropdownOpen}
                          >
                            Products
                          </Link>
                          <ul className={`dropdown-menu dropdown-menu-end ${isProductsDropdownOpen ? "show" : ""}`}>
                            {/* NMP Series */}
                            <li
                              className={`dropdown-submenu ${activeSubmenu === "nmp" ? "show" : ""}`}
                              onMouseEnter={() => handleSubmenuEnter("nmp")}
                              onMouseLeave={handleSubmenuLeave}
                            >
                              <Link href="#" className="dropdown-item">
                                NMP Series <MdOutlineArrowDropDown size={20} style={{ transform: "rotate(270deg)", marginLeft:'-10px' }}/>
                              </Link>
                              <ul className={`dropdown-menu ${activeSubmenu === "nmp" ? "show" : ""}`}>
                                <li>
                                  <Link href="/nmp-5" className="dropdown-item" onClick={closeOffcanvas}>
                                    NMP-5 Plates 
                                  </Link>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                  <Link href="/nmp-7" className="dropdown-item" onClick={closeOffcanvas}>
                                    NMP-7 Plates
                                  </Link>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                  <Link href="/nmp-9" className="dropdown-item" onClick={closeOffcanvas}>
                                    NMP-9 Plates
                                  </Link>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                  <Link href="/nmp-11" className="dropdown-item" onClick={closeOffcanvas}>
                                    NMP-11 Plates
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li
                              className={`dropdown-submenu ${activeSubmenu === "uce" ? "show" : ""}`}
                              onMouseEnter={() => handleSubmenuEnter("uce")}
                              onMouseLeave={handleSubmenuLeave}
                            >
                              <Link href="#" className="dropdown-item">
                                UCE Series <MdOutlineArrowDropDown size={20} style={{ transform: "rotate(270deg)", marginLeft:'-10px' }} />
                              </Link>
                              <ul className={`dropdown-menu ${activeSubmenu === "uce" ? "show" : ""}`}>
                                <li>
                                  <Link href="/uce-9" className="dropdown-item" onClick={closeOffcanvas}>
                                    UCE-9 Plates
                                  </Link>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>

                                  <Link href="/uce-11" className="dropdown-item" onClick={closeOffcanvas}>
                                    UCE-11 Plates
                                  </Link>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                  <Link href="/uce-12" className="dropdown-item" onClick={closeOffcanvas}>
                                    UCE-12 Plates
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                              <Link href="/tyent-global" className="dropdown-item" onClick={closeOffcanvas}>
                                Tyent H2
                              </Link>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                              <Link href="/tyent-global" className="dropdown-item" onClick={closeOffcanvas}>
                                Soap
                              </Link>
                            </li>
                          </ul>
                        </li>

                        

                  <li className="nav-item  d-block d-none d-xl-block">
                    <div
                      className={`nav-link ${
                        ["/nmp-5", "/nmp-7", "/nmp-9", "/nmp-11"].includes(pathname)
                          ? "active"
                          : ""
                      }`}
                      onMouseEnter={() =>  setIsProductOpen(true)} 
                   >
                      Products <MdOutlineArrowDropDown size={25}/>
                    </div>
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
                    <li key={item.path} className="nav-item" onMouseEnter={() => setIsProductOpen(false)}>
                      <Link 
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
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => setCartShow(true)}
            >
              <div className="counter mx-2">{totalItems || 0}</div>
              <PiShoppingCartLight size={40} color="#008AC7" />
            </div>
          </div>

          {/* Product Page */}
          {isProductOpen && (
            <div  className={`responsive-product-container ${isProductOpen ? 'expanded' : ''}`}

              onMouseEnter={() => setIsProductOpen(true)} // Keep it open while hovering over the dropdown
              onMouseLeave={() => setIsProductOpen(false)} // Close when leaving
            >
              
              <ResponsiveProductPage  isProductOpen={setIsProductOpen}/>
              
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
    </div>
  );
};

export default AppBar;
