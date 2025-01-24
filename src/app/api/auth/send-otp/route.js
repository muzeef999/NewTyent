
import { verifyOtp } from "@/app/lib/otpService";

export async function POST(request) {
  try {
    const body = await request.json();
    const { phoneNumber, otp } = body;

    if (!phoneNumber || !otp) {
      return new Response(
        JSON.stringify({ error: "Phone number and OTP are required" }),
        { status: 400 }
      );
    }

    const isOtpValid = await verifyOtp(phoneNumber, otp);

    if (isOtpValid) {
      return new Response(
        JSON.stringify({ message: "OTP verified successfully" }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid or expired OTP" }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return new Response(
      JSON.stringify({ error: "Server error. Please try again later." }),
      { status: 500 }
    );
  }
}
