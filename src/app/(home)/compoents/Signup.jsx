"use client"
import React, { useState } from 'react'
import Input from './Input/Input'
import Button from './Button/Button'


const Signup = () => {
  const [form, setForm] = useState({ name: "", phoneNumber: "", password: "", otp: "" });
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOtpSent) {
      // Send OTP
      await sendOtp();
    } else {
      // Verify OTP and submit signup data
      await verifyOtpAndSubmit();
    }
  };

  const sendOtp = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: form.phoneNumber }),
      });
      
      const data = await res.json();
      if (res.ok) {
        setIsOtpSent(true);
        alert("OTP sent successfully!");
      } else {
        alert(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      alert("An error occurred. Please try again later.");
    }
  };

  const verifyOtpAndSubmit = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful! You can now log in.");
      } else {
        alert(data.error || "Signup failed.");
      }
    } catch (err) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" label="Name" placeholder="Name" value={form.name} onChange={handleChange} />

        <Input type="text" name="phoneNumber" label="Phone Number" placeholder="Enter phone number" value={form.phoneNumber} onChange={handleChange} />

        {isOtpSent && (
          <Input type="text" name="otp" label="OTP" placeholder="Enter OTP" value={form.otp} onChange={handleChange} />
        )}

        <Input type="password" name="password" label="Password" placeholder="Enter password" value={form.password} onChange={handleChange} />

        <Button type="submit" name={isOtpSent ? "Verify OTP & Sign Up" : "Send OTP"} />
      </form>
    </div>
  );
};

export default Signup;