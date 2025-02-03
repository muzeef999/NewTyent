"use client";

import React, { useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import { Spinner } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (value, index) => {
    const otpArray = [...otp];
    otpArray[index] = value.slice(0, 1);
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

    if (!/^\+?\d{10,15}$/.test(form.phoneNumber)) {
      setAlertMessage("Please enter a valid phone number.");
      return;
    }

    const requestBody = { phoneNumber: form.phoneNumber };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setIsOtpSent(true);
        setAlertMessage("OTP sent successfully!");
      } else {
        setAlertMessage(data.message || data.error || "Failed to send OTP.");
      }
    } catch (err) {
      console.error("Error during OTP request:", err);
      setAlertMessage("An error occurred while sending the OTP.");
    }
  };

  const verifyOtpAndSubmit = async () => {
    if (!form.name || !form.phoneNumber || !form.password || otp.includes("")) {
      setAlertMessage("Please fill in all fields.");
      return;
    }

    const requestBody = {
      name: form.name,
      phoneNumber: form.phoneNumber,
      password: form.password,
      otp: otp.join(""),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verifyOtp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setAlertMessage("Signup successful! You can now log in.");
      } else if (data.message && data.message.includes("already registered")) {
        setAlertMessage("Already signed up. Please log in.");
      } else {
        setAlertMessage(data.error || data.message || "Signup failed.");
      }
    } catch (err) {
      console.error("Verification error:", err);
      setAlertMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container">
      {alertMessage && (
        <div className="alert alert-info text-center">{alertMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
        <Input
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="phoneNumber" className="form-label">
            Enter phone number
          </label>
          <PhoneInput
            id="phoneNumber"
            inputProps={{
              required: true,
              placeholder:'phone Number'
            }} 
            country={"in"}
            value={form.phoneNumber}
            onChange={(value) => setForm({ ...form, phoneNumber: "+"+value })}
            inputStyle={{
              width: "100%",
              padding: "8px 14px",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
            inputClass="custom-phone-input"
            enableSearch={true}
          />
        </div>

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

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          name={
            loading ? (
              <Spinner animation="border" size="sm" />
            ) : isOtpSent ? (
              "Verify OTP & Sign Up"
            ) : (
              "Send OTP"
            )
          }
          className={`btn w-100 ${loading ? "btn-secondary" : "btn-primary"}`}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default Signup;
