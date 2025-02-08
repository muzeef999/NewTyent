"use client";

import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import { IoMdClose } from "react-icons/io";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = ({ setShowLoginModal }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = searchParams.get("callbackUrl");
    if (url) {
      setAlertMessage(`Decoded Callback URL: ${decodeURIComponent(url)}`);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signIn("credentials", {
        redirect: false,
        phoneNumber,
        password,
      });

      if (!response || response.error) {
        toast.error("Invalid phone number or password");
      } else {
        toast.success("Login success");
        setShowLoginModal(false); // Close the modal on success
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowLoginModal(false); // Close the modal
  };

  return (
    <div>
      {showSignup ? (
        <Signup setShowLoginModal={setShowLoginModal} />
      ) : showForgotPassword ? (
        <ForgotPassword setShowLoginModal={setShowLoginModal} />
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="m-0" style={{color:'#000'}}>Login</h2>
            <IoMdClose
              size={25}
              onClick={closeModal}
              style={{ cursor: "pointer" }}
            />
          </div>
          <hr />
          <h2 className="text-center">Welcome Back</h2>
          <p className="text-center">Enter your details to sign in</p>

          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label htmlFor="phoneNumber" className="form-label">
              Phone number
            </label>
            <PhoneInput
              id="phoneNumber"
              country={"in"}
              placeholder="Enter your phone number"
              autoFormat
              countryCodeEditable
              value={phoneNumber}
              onChange={(value) => setPhoneNumber("+" + value)}
              inputStyle={{
                width: "100%",
                padding: "8px 14px",
                borderRadius: "8px",
              }}
              enableSearch
            />
            <br />
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <InputGroup>
      <Form.Control
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputGroup.Text onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </InputGroup.Text>
    </InputGroup>

            <p
              style={{
                textAlign: "right",
                margin: "10px 0",
                color: "#008AC7",
                cursor: "pointer",
              }}
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot Password?
            </p>

            <Button
              type="submit"
              name={
                loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> &nbsp; Sign In
                  </>
                ) : (
                  "Sign In"
                )
              }
              disabled={loading}
            />
          </form>

          <p
            style={{
              cursor: "pointer",
              color: "#008AC7",
              textAlign: "center",
              marginTop: "20px",
            }}
            onClick={() => setShowSignup(true)}
          >
            New to Tyent India? Create an account
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
