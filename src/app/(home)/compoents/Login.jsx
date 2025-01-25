'use client';
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Signup from "./Signup";
import "react-phone-input-2/lib/style.css"; // Import styles for phone input
import PhoneInput from "react-phone-input-2"; // Phone input component

const Login = () => {
  const [showRequestComponent, setShowRequestComponent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number with country code
  const [password, setPassword] = useState(""); // State for password
  const [callbackUrl, setCallbackUrl] = useState("/dashboard");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = searchParams.get("callbackUrl");
    if (url) {
      const decodedUrl = decodeURIComponent(url);
      setCallbackUrl(decodedUrl);
      console.log("Decoded Callback URL:", decodedUrl);
    }
  }, [searchParams]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        phoneNumber, // Pass phone number state
        password, // Pass password state
        callbackUrl,
        redirect: false,
      });

      if (data?.error) {
        console.error(data.error);
        alert("Invalid phone number or password");
      } else {
        console.log("Login success");
        router.push(data.url || callbackUrl);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      {showRequestComponent ? (
        <Signup />
      ) : (
        <>
          <form onSubmit={submitHandler} style={{ textAlign: "center" }}>
            <h2 className="text-center">Welcome Back</h2>
            <p className="text-center">Enter your details to sign in</p>

            {/* Phone Number Input with Country Code and Flag */}
             <PhoneInput
                country={"in"} // Default country
                value={phoneNumber}
                onChange={(value) => setPhoneNumber("+" + value)}
                placeholder="Enter phone number"
                inputStyle={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "12px 14px",
                  border: "1px solid #ccc",
                }}
                inputClass="custom-phone-input" // Optional: Add custom classes if needed
                enableSearch={true} // Allow searching for countries
                disableDropdown={false} // Keep the dropdown visible
              />
             <br/>
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
            {/* Forgot Password Link */}
            <p style={{ textAlign: "right", margin: "10px 0", color: "#007bff", cursor: "pointer" }}>
              Having trouble signing in?
            </p>

            {/* Submit Button */}
            <Button type="submit" name="Sign In" />

            {/* Divider for social login */}
            <div style={{ margin: "20px 0", textAlign: "center" }}>
              <p>Or sign in with</p>
            </div>

          </form>

          {/* Sign Up Link */}
          <div className="text-center" style={{ marginTop: "20px" }}>
            <p
              style={{ cursor: "pointer", color: "#007bff" }}
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
