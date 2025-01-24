// models/User.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String },
    password: { type: String, required: true }, // Password is now required
    image: { type: String }, 
    role: { type: String, default: "user", required: true },
    provider: { type: String },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

let User;

try {
  User = mongoose.model("User");
} catch {
  User = mongoose.model("User", UserSchema);
}

export default User;
