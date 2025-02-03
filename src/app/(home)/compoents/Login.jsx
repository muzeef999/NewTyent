"use client";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import "react-phone-input-2/lib/style.css"; // Import styles for phone input
import PhoneInput from "react-phone-input-2"; // Phone input component
import { Spinner } from "react-bootstrap";

const Login = ({ setShowLoginModal, setModalTitle }) => {
  const [showRequestComponent, setShowRequestComponent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number with country code
  const [password, setPassword] = useState(""); // State for password
  const [callbackUrl, setCallbackUrl] = useState("/dashboard");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = searchParams.get("callbackUrl");
    if (url) {
      const decodedUrl = decodeURIComponent(url);
      setCallbackUrl(decodedUrl);
      setAlertMessage("Decoded Callback URL:", decodedUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    if (showRequestComponent) {
      setModalTitle("Signup");
    } else if (showForgotPassword) {
      setModalTitle("Forgot Password");
    } else {
      setModalTitle("Login");
    }
  }, [showRequestComponent, showForgotPassword]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Store the return value of signIn
      const response = await signIn("credentials", {
        redirect: false,
        phoneNumber,
        password,
      });

      // ✅ Check response properly
      if (!response || response.error) {
        setAlertMessage("Invalid phone number or password");
      } else {
        setAlertMessage("Login success");
        setShowLoginModal(false);
      }
    } catch (error) {
      setAlertMessage("An error occurred during login: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {showRequestComponent ? (
        <Signup />
      ) : showForgotPassword ? (
        <ForgotPassword />
      ) : (
        <>
          {alertMessage && (
            <div className="alert alert-info text-center">{alertMessage}</div>
          )}

          <h2 className="text-center">Welcome Back</h2>
          <p className="text-center">Enter your details to sign in</p>

          <form onSubmit={submitHandler} className="d-flex flex-column">
            <label htmlFor="phoneNumber" className="form-label">
              phone number
            </label>
            <PhoneInput
              id="phoneNumber"
              country={"in"} // Default country
              placeholder={"Enter your phone number"}
              autoFormat={true}
              countryCodeEditable={true}
              value={phoneNumber}
              onChange={(value) => setPhoneNumber("+" + value)}
              inputStyle={{
                width: "100%",
                padding: "8px 14px",
                borderRadius: "8px",
                boxSizing: "border-box",
              }}
              inputClass="custom-phone-input" // Optional: Add custom classes if needed
              enableSearch={true} // Allow searching for countries
            />
            <br />
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-center" style={{ marginTop: "20px" }}>
              <p
                style={{
                  textAlign: "right",
                  margin: "10px 0",
                  color: "#008AC7",
                  cursor: "pointer",
                }}
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password ?
              </p>
            </div>

            <Button
              type="submit"
              name={
                loading ? <Spinner animation="border" size="sm" /> : "Sign In"
              }
              disabled={loading}
            />
          </form>

          {/* Sign Up Link */}
          <div className="text-center" style={{ marginTop: "20px" }}>
            <p
              style={{ cursor: "pointer", color: "#008AC7" }}
              onClick={() => setShowRequestComponent(true)}
            >
              Don't have an account? Request now
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
