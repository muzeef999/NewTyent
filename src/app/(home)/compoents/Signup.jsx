"use client";

import React, { useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [otp, setOtp] = useState(new Array(6).fill("")); // OTP as an array
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (value, index) => {
    const otpArray = [...otp];
    otpArray[index] = value.slice(0, 1); // Ensure only one digit is entered
    setOtp(otpArray);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");

    try {
      if (!isOtpSent) {
        await sendOtp();
      } else {
        await verifyOtpAndSubmit();
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setAlertMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sendOtp = async () => {
    if (!form.phoneNumber) {
      setAlertMessage("Please enter your phone number.");
      return;
    }

    const requestBody = {
      phoneNumber: `${countryCode}${form.phoneNumber}`,
    };

    console.log("Request Body for OTP:", requestBody);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      if (res.ok) {
        setIsOtpSent(true);
        setAlertMessage("OTP sent successfully!");
      } else {
        setAlertMessage(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      console.error("Error during OTP request:", err);
      setAlertMessage("An error occurred while sending the OTP.");
    }
  };

  const verifyOtpAndSubmit = async () => {

    console.log("Request Body for Signup:"); 


    const requestBody = {
      name: form.name || "",
      phoneNumber: `${countryCode}${form.phoneNumber}` || "",
      password: form.password || "",
      otp: otp.join("") || "",
    };

    console.log("Request Body for Signup:", requestBody);

    if (!form.name || !form.phoneNumber || !form.password || otp.some((digit) => digit === "")) {
      setAlertMessage("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      console.log("API Response:", res.status, data);

      if (res.ok) {
        setAlertMessage("Signup successful! You can now log in.");
      } else {
        setAlertMessage(data.error || "Signup failed.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setAlertMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container">
      {alertMessage && <div className="alert alert-info text-center">{alertMessage}</div>}

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
        {/* Name Field */}
        <Input
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />

        {/* Phone Number Field */}
        <div className="form-group">
          <label>Phone Number</label>
          <div className="d-flex align-items-center">
            <select
              className="form-select me-2"
              style={{ maxWidth: "100px" }}
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
            </select>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              placeholder="Enter phone number"
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* OTP Field */}
        {isOtpSent && (
          <div className="form-group">
            <label>Enter OTP</label>
            <div className="d-flex justify-content-between">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  className="form-control text-center mx-1"
                  style={{ width: "40px", fontSize: "1.5rem" }}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Password Field */}
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          name={loading ? "Loading..." : isOtpSent ? "Verify OTP & Sign Up" : "Send OTP"}
          className={`btn w-100 ${loading ? "btn-secondary" : "btn-primary"}`}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default Signup;
