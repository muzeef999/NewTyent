import twilio from "twilio";  // Correct import

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID, 
  process.env.TWILIO_AUTH_TOKEN
);

// Temporary store for OTP (In production, use a database or Redis)
let otpStore = {};

// Function to send OTP to the user's phone number
export const sendOtpToPhone = async (phoneNumber) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  const otpExpiration = Date.now() + 5 * 60 * 1000; // Set OTP expiration time (5 minutes)

  try {
    // Send OTP via Twilio
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: '+16813217500', // Replace with your Twilio phone number
      to: phoneNumber,
    });

    // Store OTP and expiration time temporarily
    otpStore[phoneNumber] = { otp, expiration: otpExpiration };
    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP.');
  }
};

// Function to verify the OTP entered by the user
export const verifyOtp = async (phoneNumber, enteredOtp) => {
  const otpData = otpStore[phoneNumber];

  if (!otpData) {
    return false; // OTP not found
  }

  const { otp, expiration } = otpData;

  // Check if OTP is expired
  if (Date.now() > expiration) {
    delete otpStore[phoneNumber]; // OTP expired, remove it
    return false;
  }

  // Check if the entered OTP is correct
  if (otp === enteredOtp) {
    delete otpStore[phoneNumber]; // OTP is valid, remove it from store
    return true;
  } else {
    return false; // OTP is invalid
  }
};
