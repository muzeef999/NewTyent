import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  expiration: { type: Date, required: true },
});

const Otp = mongoose.models.Otp || mongoose.model("Otp", otpSchema);

export default Otp;
