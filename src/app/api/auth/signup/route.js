import connect from "@/app/lib/mongoDB";
import { verifyOtp } from "@/app/lib/otpService";
import User from "@/models/User"; // Correct import for the User model
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb"; // For handling ObjectId
import { ConnectionStates } from "mongoose";

export const POST = async (request) => {
  try {
    await connect();

    // Parse the request body
    const body = await request.json();
    const { name, phoneNumber, password, otp } = body;

    // Validate request data
    if (!name || !phoneNumber || !password || !otp) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Verify the OTP entered by the user
    const isOtpValid = await verifyOtp(phoneNumber, otp);
    if (!isOtpValid) {
      return new Response(
        JSON.stringify({ error: "Invalid OTP" }),
        { status: 400 }
      );
    }

    // Check if the phone number is already registered
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Phone number is already registered" }),
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      phoneNumber,
      password: hashedPassword,
    });

    await newUser.save();

    // Return success response
    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup API Error:", error);
    return new Response(
      JSON.stringify({ error: "Server error. Please try again later." }),
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    await connect();

    // Fetch all users from the database
    const users = await User.find();

    // Return success response with users data
    return new Response(JSON.stringify({ users }), { status: 200 });
  } catch (error) {
    console.error("Get Users API Error:", error);
    return new Response(
      JSON.stringify({ error: "Server error. Please try again later." }),
      { status: 500 }
    );
  }
};



export const DELETE = async (request) => {
  try {
    await connect();

    // Parse the request body to get the lead ID
    const { leadId } = await request.json();

    // Validate leadId
    if (!leadId) {
      return new Response(
        JSON.stringify({ error: "Lead ID is required" }),
        { status: 400 }
      );
    }

    // Check if the leadId is valid
    if (!ObjectId.isValid(leadId)) {
      return new Response(
        JSON.stringify({ error: "Invalid Lead ID" }),
        { status: 400 }
      );
    }

    // Find the lead in the database and delete it
    const deletedLead = await Lead.findByIdAndDelete(leadId);

    if (!deletedLead) {
      return new Response(
        JSON.stringify({ error: "Lead not found" }),
        { status: 404 }
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({ message: "Lead deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Lead API Error:", error);
    return new Response(
      JSON.stringify({ error: "Server error. Please try again later." }),
      { status: 500 }
    );
  }
};

