'use client';
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Signup from "./Signup";

const Login = () => {
  const [showRequestComponent, setShowRequestComponent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number
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
    <div>
      {showRequestComponent ? (
        <Signup />
      ) : (
        <>
          <form onSubmit={submitHandler}>
            <p className="text-center">
              Hey, enter your details to sign in to your account
            </p>

            <Input
              type="text"
              name="phoneNumber"
              label="Enter Phone Number"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <p>Having trouble signing in?</p>

            <Button type="submit" name="Submit" />
          </form>
          <br />
          <div className="text-center">
            <p>- Or sign in with -</p>

            <br />
            <p
              style={{ cursor: "pointer" }}
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