import twilio from "twilio"; // Correct import

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Temporary store for OTPs (In production, use a database or Redis)
let otpStore = {};

export const sendOtpToPhone = async (phoneNumber) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  const otpExpiration = Date.now() + 5 * 60 * 1000; // Set OTP expiration time (5 minutes)

  try {
    // Send OTP via Twilio
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: "+16813217500", // Replace with your Twilio phone number
      to: phoneNumber,
    });

    // Store OTP and expiration time temporarily
    otpStore[phoneNumber] = { otp, expiration: otpExpiration };
    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP.");
  }
};

export const verifyOtp = async (phoneNumber, otp) => {

  const otp = otpStore[phoneNumber];

  if (!otpData) {
    console.log("No OTP found for phone number:", phoneNumber);
    return false; // OTP not found
  }

  const { otp, expiration } = otpData;

  // Check if OTP is expired
  if (Date.now() > expiration) {
    console.log("OTP expired for phone number:", phoneNumber);
    delete otpStore[phoneNumber]; // OTP expired, remove it
    return false;
  }

  // Check if the entered OTP matches
  if (String(otp) === String(enteredOtp)) {
    console.log("OTP verified successfully for phone number:", phoneNumber);
    delete otpStore[phoneNumber]; // OTP is valid, remove it
    return true;
  } else {
    console.log("Invalid OTP for phone number:", phoneNumber);
    return false; // OTP is invalid
  }
};
