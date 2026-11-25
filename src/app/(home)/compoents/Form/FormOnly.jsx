"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { FaCheckCircle, FaFacebook, FaLinkedinIn, FaYoutube, FaUser, FaMapMarkerAlt, FaLock, FaStar, FaGlobeAmericas, FaShieldAlt, FaAward } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import styles from "./DemoForm.module.css";

const FormOnly = ({ onClose }) => {
  const [inputdata, setInput] = useState({
    name: "",
    number: "",
    location: "",
  });

  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const handleDownloadConversion = () => {
    window.reportTyentConversion?.();
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...inputdata, [name]: value });
    if (error[name]) setError({ ...error, [name]: "" });
  };

  const validateForm = () => {
    const { name, number, location } = inputdata;
    const numberRegex = /^\d{10}$/;
    let isValid = true;
    let errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!number || !numberRegex.test(number)) {
      errors.number = "Enter a valid 10-digit number";
      isValid = false;
    }
    if (!location.trim()) {
      errors.location = "City is required";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingData(true);

    if (validateForm()) {
      try {
        await axios.post(
          `/api/lead`,
          {
            name: inputdata.name,
            email: "",
            number: inputdata.number,
            location: inputdata.location,
            message: "Free Home Demo Request",
          },
          { headers: { "Content-Type": "application/json" } }
        );
        handleDownloadConversion();
      } catch (err) {
        // handled silently
      } finally {
        setSubmitted(true);
        setLoadingData(false);
      }
    } else {
      setLoadingData(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.successWrap}>
        <FaCheckCircle size={60} color="#22c55e" />
        <h3 className={styles.successTitle}>Thank you!</h3>
        <p className={styles.successText}>We&apos;ve received your demo request. Our expert will contact you shortly.</p>
        <div className={styles.socialRow}>
          <Link href="https://www.facebook.com/profile.php?id=61592796100297&mibextid=wwXIfr" target="_blank" className={styles.socialIcon}><FaFacebook size={22} /></Link>
          <Link href="https://www.instagram.com/tyent.india" target="_blank" className={styles.socialIcon}><IoLogoInstagram size={22} /></Link>
          <Link href="https://www.linkedin.com/company/tyent-india1/posts/?feedView=all" target="_blank" className={styles.socialIcon}><FaLinkedinIn size={22} /></Link>
          <Link href="https://youtube.com/@tyentindiaofficial?si=0MoE09BzeY3eBesr" target="_blank" className={styles.socialIcon}><FaYoutube size={22} /></Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.demoForm}>
      {/* Close Button */}
      <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">&times;</button>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            {/* Brand */}
            <div className={styles.brandRow}>
              <span className={styles.brandName}>TYENT</span>
              <span className={styles.brandSub}>WATER IONIZER</span>
            </div>

            {/* Badge */}
            <span className={styles.demoBadge}>FREE HOME DEMO</span>

            {/* Title */}
            <h3 className={styles.headerTitle}>
              Experience <span className={styles.highlight}>Tyent water</span> in your own kitchen
            </h3>
            <p className={styles.headerSub}>A Tyent expert will show you all 7 water types, at no cost.</p>
          </div>
          <div className={styles.headerImg}>
            <Image
              src="/explore/nmp5-collection.webp"
              alt="Tyent NMP Water Ionizer"
              width={120}
              height={150}
              className={styles.productImg}
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <div className={styles.formBody}>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <label className={styles.fieldLabel}>FULL NAME <span className={styles.req}>*</span></label>
          <div className={`${styles.inputGroup} ${error.name ? styles.inputGroupError : ""}`}>
            <FaUser className={styles.inputIcon} />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={inputdata.name}
              onChange={inputHandler}
              className={styles.input}
            />
          </div>
          {error.name && <span className={styles.errorText}>{error.name}</span>}

          {/* Mobile Number */}
          <label className={styles.fieldLabel}>MOBILE NUMBER <span className={styles.req}>*</span></label>
          <div className={`${styles.inputGroup} ${error.number ? styles.inputGroupError : ""}`}>
            <div className={styles.phonePrefix}>
              <Image src="/india-flag.svg" alt="IN" width={18} height={13} onError={(e) => { e.target.style.display = 'none'; }} />
              <span className={styles.prefixText}>+91</span>
            </div>
            <div className={styles.phoneDivider} />
            <input
              type="tel"
              name="number"
              placeholder="10-digit mobile number"
              value={inputdata.number}
              onChange={inputHandler}
              maxLength={10}
              className={styles.input}
            />
          </div>
          {error.number && <span className={styles.errorText}>{error.number}</span>}

          {/* City */}
          <label className={styles.fieldLabel}>CITY <span className={styles.req}>*</span></label>
          <div className={`${styles.inputGroup} ${error.location ? styles.inputGroupError : ""}`}>
            <FaMapMarkerAlt className={styles.inputIcon} />
            <input
              type="text"
              name="location"
              placeholder="e.g. Hyderabad"
              value={inputdata.location}
              onChange={inputHandler}
              className={styles.input}
            />
          </div>
          {error.location && <span className={styles.errorText}>{error.location}</span>}

          {/* Consent */}
          <p className={styles.consent}>
            By submitting, you agree that Tyent India (Medilight Private Limited) may contact you about your demo.
          </p>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn} disabled={loadingData}>
            {loadingData ? (
              <><Spinner size="sm" />&nbsp;&nbsp;Booking...</>
            ) : (
              <>Book my free demo &rarr;</>
            )}
          </button>
        </form>

        {/* Privacy note */}
        <p className={styles.privacyNote}>
          <FaLock size={11} className={styles.lockIcon} />
          Your number is safe with us. We never share personal data.
        </p>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Trust badges */}
        <div className={styles.trustRow}>
          <div className={styles.trustBadge}>
            <FaGlobeAmericas size={18} className={styles.trustIcon} />
            <span className={styles.trustTitle}>123+ countries</span>
            <span className={styles.trustSub}>Trusted worldwide</span>
          </div>
          <div className={styles.trustBadge}>
            <FaShieldAlt size={18} className={styles.trustIcon} />
            <span className={styles.trustTitle}>NSF &middot; EPA &middot; ANSI</span>
            <span className={styles.trustSub}>Certified .01 micron filters</span>
          </div>
          <div className={styles.trustBadge}>
            <FaAward size={18} className={styles.trustIcon} />
            <span className={styles.trustTitle}>3 + 15 years</span>
            <span className={styles.trustSub}>Ionizer &amp; plate warranty</span>
          </div>
        </div>

        {/* Google rating */}
        <div className={styles.ratingRow}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={12} color="#f5a623" />
            ))}
          </div>
          <span className={styles.ratingText}><strong>4.9/5</strong> from 150 Google reviews</span>
        </div>
      </div>
    </div>
  );
};

export default FormOnly;
