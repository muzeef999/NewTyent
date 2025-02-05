import twilio from "twilio";
import connect from "@/app/lib/mongoDB";
import Otp from "@/models/Otp";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Send OTP to phone number
export const sendOtpToPhone = async (phoneNumber) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  const expiration = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiration

  try {
    await connect();

    // Send OTP via Twilio
    await client.messages.create({
      body: `Tyent India: Your verification OTP is ${otp}.`,
      from: process.env.TWILIO_PHONE_NUMBER, // Replace with your Twilio number
      to: phoneNumber,
    });

    // Save OTP in MongoDB
    await Otp.findOneAndUpdate(
      { phoneNumber },
      { otp, expiration },
      { upsert: true, new: true }
    );

    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP.");
  }
};

// Verify OTP
export const verifyOtp = async (phoneNumber, enteredOtp) => {
  try {
    await connect();

    const otpRecord = await Otp.findOne({ phoneNumber });

    if (!otpRecord) {
      console.error("No OTP found for:", phoneNumber);
      return false;
    }

    const { otp, expiration } = otpRecord;

    // Check if OTP is expired
    if (new Date() > expiration) {
      console.error("OTP expired for:", phoneNumber);
      await Otp.deleteOne({ phoneNumber });
      return false;
    }

    // Check if OTP matches
    if (String(otp) === String(enteredOtp)) {
      console.log("OTP verified for:", phoneNumber);
      await Otp.deleteOne({ phoneNumber }); // Remove OTP after verification
      return true;
    } else {
      console.error("Invalid OTP for:", phoneNumber);
      return false;
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return false;
  }
};
