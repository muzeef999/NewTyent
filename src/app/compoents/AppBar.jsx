"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import '../style/AppBar.css';
import Image from 'next/image';
import logo from "../../asserts/logo.png";
import { IoIosSearch } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import ResponsiveProductPage from './ProductData';
import { Collapse } from 'react-bootstrap';

const AppBar = () => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((err) =>
        console.error('Failed to load Bootstrap JS', err)
      );
    } 
  }, []);

  return (
    <div className="appbg">
      {/* Top Buttons */}
      <div className="container d-flex justify-content-end align-items-center p-2">
        <div>
          <button className="appbgbutton">
            <IoIosSearch size={20} />
            &nbsp;&nbsp;Search
          </button>
          <>&nbsp;</>
          <button className="appbgbutton">
            <IoCallOutline size={20} />
            &nbsp;&nbsp;Contact Us
          </button>
        </div>
      </div>

      <div className='container second-section  float-end' style={{zIndex:9999}}>

      {/* Navbar */}
      <nav className="container navbar navbar-expand-xxl navbar-light bg-light">
            
              <div className="container-fluid">
                {/* Logo on the left */}
                <Link href="/">
                  <Image src={logo} width={100} alt="logo" className="p-2" />
                </Link>

                {/* Navbar Toggler for mobile view */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links centered */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="appbarlink nav-link" href="/">
                        Home
                      </Link>
                    </li>

                    {/* About Us Dropdown */}
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle appbarlink"
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
                        <li className="divider"></li>
                        <li>
                          <Link className="dropdown-item" href="/tyent-global">
                            Tyent Global
                          </Link>
                        </li>
                      </ul>
                    </li>


                    <li className="nav-item">
                      <Link className="appbarlink  nav-link" href="#" onClick={handleToggle}>
                        Products
                      </Link>
                    </li>


                    {/* <ResponsiveProductPage /> */}
                    <li className="nav-item">
                      <Link className="appbarlink nav-link" href="/benfits">
                        Benfits
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="appbarlink nav-link" href="/why-tyent">
                        Why Tyent
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="appbarlink nav-link" href="/certifications">
                        Certifications
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="appbarlink nav-link" href="/why-water-ionizer">
                        Why Water Ionizer
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="appbarlink nav-link" href="/blogs">
                        Blogs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="appbarlink nav-link" href="/testimonials">
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Request a Demo button on the right */}

                <button className="appbardemo form-inline my-2 my-lg-0">Request a Demo</button>

                <br/>
              
              </div>
  

     
</nav>

<Collapse in={open}>
        <div className="collapse-content">
          {/* This is the content that will be shown/hidden */}
          <ResponsiveProductPage setOpen={setOpen} />
        </div>
      </Collapse>
     

</div>


      

    </div>
  );
};

export default AppBar;
