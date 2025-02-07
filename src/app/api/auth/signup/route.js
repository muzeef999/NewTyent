import connect from "@/app/lib/mongoDB";
import { sendOtpToPhone } from "@/app/lib/otpService";
import Otp from "@/models/Otp";
import User from "@/models/User"; // Correct import for the User model
import { ObjectId } from "mongodb"; // For handling ObjectId
import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    connect();

    const body = await request.json();

    const { phoneNumber } = body;

    if (!phoneNumber) {
      return new Response(JSON.stringify({ error: "Phone number is required" }), { status: 400 });
    }

     // Check if the phone number already exists
     const existingUser = await User.findOne({ phoneNumber });
     if (existingUser) {
       return new Response(JSON.stringify({ message: "Phone number already exists, please login" }), { status: 409 });
     }

     
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiration = new Date(Date.now() + 10 * 60 * 1000); // Expires in 10 minutes

    // Save OTP to the database
    await Otp.findOneAndUpdate(
      { phoneNumber },
      { otp, expiration },
      { upsert: true, new: true }
    );

    // Simulate sending OTP (integrate Twilio/other service in production)
    await sendOtpToPhone(phoneNumber, otp);

    return new Response(JSON.stringify({ message: "OTP sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return new Response(JSON.stringify({ error: "Failed to send OTP" }), { status: 500 });
  }
}

// Search user by phone number
export const GET = async (request) => {
  try {
    await connect();

    const { searchParams } = new URL(request.url);
    let phoneNumber = searchParams.get("phoneNumber");

    if (!phoneNumber) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    // Trim spaces and sanitize input
    phoneNumber = phoneNumber.trim();

    // Ensure the phone number starts with +91
    if (!phoneNumber.startsWith("+91")) {
      phoneNumber = `+91${phoneNumber}`;
    }


    // Escape "+" in regex to avoid errors
    const escapedPhoneNumber = phoneNumber.replace("+", "\\+");

    // Find user by phone number (exact match)
    const user = await User.findOne({ phoneNumber: new RegExp(`^${escapedPhoneNumber}$`, "i") });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
};

// Update user role
export const PUT = async (request) => {
  try {
    await connect();
    const { phoneNumber, role } = await request.json();

    if (!phoneNumber || !role) {
      return new Response(JSON.stringify({ error: "Phone number and role are required." }), { status: 400 });
    }

    const allowedRoles = ["admin", "manager", "employee"];
    if (!allowedRoles.includes(role)) {
      return new Response(JSON.stringify({ error: "Invalid role." }), { status: 400 });
    }

    // Check if user exists first
    const existingUser = await User.findOne({ phoneNumber });
    if (!existingUser) {
      return new Response(JSON.stringify({ error: "User not found." }), { status: 404 });
    }

    // Now update the role
    existingUser.role = role;
    await existingUser.save();

    return new Response(JSON.stringify({ message: "Role updated successfully.", user: existingUser }), { status: 200 });
  } catch (error) {
    console.error("Update Role API Error:", error);
    return new Response(JSON.stringify({ error: "Server error. Try again later." }), { status: 500 });
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

