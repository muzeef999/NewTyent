"use client";

import React, { useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import { Spinner } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Login from "./Login";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";


const Signup = ({ setShowLoginModal }) => {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showRequestComponent, setShowRequestComponent] = useState(false);

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
      toast.error("Please enter your phone number.")
      return;
    }

    if (!/^\+?\d{10,15}$/.test(form.phoneNumber)) {
    toast.error("Please enter a valid phone number.");
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
        toast.success("OTP sent successfully!");
      } else {
        toast.error(data.message || data.error || "Failed to send OTP.");
      }
    } catch (err) {
      toast.error("An error occurred while sending the OTP." + err);
    }
  };

  const verifyOtpAndSubmit = async () => {
    if (!form.name || !form.phoneNumber || !form.password || otp.includes("")) {
      toast.error("Please fill in all fields.")
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
        toast.success("Signup successful! You can now log in.")
      } else if (data.message && data.message.includes("already registered")) {
        toast.error("Phone number already registered, Please log in")
      } else {
        toast.error(data.message || data.error || "Failed to verify OTP.");
      }
    } catch (err) {
      toast.error("Please try again later, Verification error:", err)
    }
  };
  const closeModal = () => {
    setShowLoginModal(false); // Close the modal
  };
  
  return (
    <div className="container">
      {showRequestComponent ? (
  <Login setShowRequestComponent={setShowRequestComponent} />
) : (
 
        <>

<div className="d-flex justify-content-between align-items-center">
            <h2 className="m-0" style={{color:'#000'}}>Signup</h2>
             <IoMdClose size={25} onClick={closeModal} style={{ cursor: "pointer" }}/>
          </div>
          <hr/>

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
                  placeholder: "phone Number",
                }}
                country={"in"}
                value={form.phoneNumber}
                onChange={(value) =>
                  setForm({ ...form, phoneNumber: "+" + value })
                }
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
                loading ? (<>
                  <Spinner animation="border" size="sm" /> &nbsp;
                   {isOtpSent ? ("Verify OTP & Sign Up") :("Send OTP")}
                  </>
                ):(
                  ("Send OTP")
                ) 
              }
              className={`btn w-100 ${
                loading ? "btn-secondary" : "btn-primary"
              }`}
              disabled={loading}
            />
          </form>

          <div className="text-center" style={{ marginTop: "20px" }}>
            <p
              style={{ cursor: "pointer", color: "#008AC7" }}
              onClick={() => {
                setShowRequestComponent(true);
              }}
            >
              Login
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Signup;
