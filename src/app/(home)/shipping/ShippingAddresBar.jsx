"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/asserts/logo.png";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Modal, Offcanvas } from "react-bootstrap";
import { LuLogOut } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { setUser } from "@/app/Redux/authSlice";
import Login from "../compoents/Login";
const ShippingAddresBar = () => {
  

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

  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




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
            height:'40px',
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

export default ShippingAddresBar;
