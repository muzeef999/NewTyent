// pages/api/auth/send-otp.js

import { sendOtpToPhone } from "@/app/lib/otpService";

export async function POST(request) {
    try {
      const body = await request.json();
      const { phoneNumber } = body;
      
      if (!phoneNumber) {
        return new Response(
          JSON.stringify({ error: "Phone number is required" }),
          { status: 400 }
        );
      }
  
      // Send OTP to the provided phone number
      await sendOtpToPhone(phoneNumber);
      return new Response(
        JSON.stringify({ message: "OTP sent successfully" }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending OTP:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send OTP" }),
        { status: 500 }
      );
    }
  }