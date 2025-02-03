import connect from "@/app/lib/mongoDB";
import { verifyOtp } from "@/app/lib/otpService";
import User from "@/models/User";
import bcrypt from "bcrypt"; // You'll need this to hash the password before saving


export async function PUT(request) {
    try {
      await connect();
      const { phoneNumber, otp, newPassword } = await request.json();
  
      if (!phoneNumber || !otp || !newPassword) {
        return new Response(
          JSON.stringify({ error: "All fields are required" }),
          { status: 400 }
        );
      }
  
      // Verify OTP logic (make sure OTP verification is implemented)
      const isOtpValid = await verifyOtp(phoneNumber, otp);
      if (!isOtpValid) {
        return new Response(
          JSON.stringify({ error: "Invalid or expired OTP" }),
          { status: 400 }
        );
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await User.findOneAndUpdate({ phoneNumber }, { password: hashedPassword });
  
      return new Response(
        JSON.stringify({ message: "Password updated successfully" }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error resetting password:", error);
      return new Response(
        JSON.stringify({ error: "Failed to reset password" }),
        { status: 500 }
      );
    }
  }
  