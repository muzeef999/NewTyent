"use client";
import React, { useState } from "react";
import Input from "./Input/Input";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { Spinner } from "react-bootstrap";
import Button from "./Button/Button";

const ForgotPassword = ({ setShowLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits

    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Step 1: Request OTP
  const requestOtp = async () => {
    if (!phoneNumber) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await res.json();
      if (res.ok) {
        setStep(2);
        setMessage("OTP sent to your phone.");
      } else {
        setMessage(data.error || "Failed to send OTP.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  // Step 2: Verify OTP and Reset Password
  const resetPassword = async () => {
    if (otp.includes("") || !newPassword) {
      setMessage("Please enter OTP and new password.");
      return;
    }

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, otp: otp.join(""), newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Password updated! Redirecting...");
        setTimeout(() => setShowLogin(true), 2000);
      } else {
        setMessage(data.error || "Failed to reset password.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="forgot-password-container">
      {message && <div className="alert alert-info text-center">{message}</div>}

      {step === 1 ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestOtp();
          }}
          className="d-flex flex-column gap-4"
        >
          <div>
          <label htmlFor="phoneNumber" className="form-label">
            Enter phone number
          </label>
          <PhoneInput
            id="phoneNumber"
            inputProps={{ required: true, placeholder: "Phone Number" }}
            country="in"
            value={phoneNumber}
            onChange={(value) => setPhoneNumber(value.startsWith("+") ? value : "+" + value)}
            inputStyle={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
            enableSearch={true}
          />
          </div>
          <Button type="submit" name={loading ? <Spinner size="sm" /> : "Send OTP"} disabled={loading} />
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            resetPassword();
          }}
          className="d-flex flex-column gap-4"
        >
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

          <Input
            type="password"
            label="New Password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button type="submit" name={loading ? <Spinner size="sm" /> : "Reset Password"} disabled={loading} />
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
