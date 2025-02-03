"use client";
import React, { useState } from "react";
import Input from "./Input/Input";
import "react-phone-input-2/lib/style.css"; // Import styles for phone input
import PhoneInput from "react-phone-input-2"; // Phone input component
import { Spinner } from "react-bootstrap";
import Button from "./Button/Button";


const ForgotPassword = ({ setShowLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Step 1: Request OTP
  const requestOtp = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep(2);
        setMessage("OTP sent to your phone.");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("Failed to send OTP.");
    }
    setLoading(false);
  };

  // Step 2: Verify OTP and Reset Password
  const resetPassword = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, otp, newPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Password updated! Redirecting...");
        setTimeout(() => setShowLogin(true), 2000);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("Failed to reset password.");
    }
    setLoading(false);
  };

  return (
    <div>
      {message && <div className="alert alert-info text-center">{message}</div>}
      {step === 1 ? (
        <>
          <label htmlFor="phoneNumber" className="form-label">
            Enter phone number
          </label>
          <PhoneInput
            id="phoneNumber"
            inputProps={{
              required: true,
              placeholder: "Phone Number",
            }}
            country="in"
            value={phoneNumber}
            onChange={(value) => setPhoneNumber("+" + value)} // Ensure phone number is properly updated
            inputStyle={{
              width: "95%",
              padding: "8px 14px",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
            enableSearch={true}
          />
          <br />
          <Button
            name={loading ? <Spinner size="sm" /> : "Send OTP"}
            onClick={requestOtp}
            disabled={loading}
          />
        </>
      ) : (
        <>
          <Input
            type="text"
            label="Enter OTP"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Input
            type="password"
            label="New Password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <Button
            name={loading ? <Spinner size="sm" /> : "Reset Password"}
            onClick={resetPassword}
            disabled={loading}
          />
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
