import connect from "@/app/lib/mongoDB";
import { sendOtpToPhone } from "@/app/lib/otpService";
import User from "@/models/User";

// Forgot Password API (POST request)
export async function POST(request) {
    try {
      await connect();
      const { phoneNumber } = await request.json();
  
      if (!phoneNumber) {
        return new Response(
          JSON.stringify({ error: "Phone number is required" }),
          { status: 400 }
        );
      }
  
      const user = await User.findOne({ phoneNumber });
      if (!user) {
        return new Response(
          JSON.stringify({ error: "Phone number not found" }),
          { status: 404 }
        );
      }
  
      // Generate and send OTP (add OTP expiration logic here)
      await sendOtpToPhone(phoneNumber);
  
      return new Response(
        JSON.stringify({ message: "OTP sent successfully" }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error requesting OTP:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send OTP" }),
        { status: 500 }
      );
    }
  }
  
  