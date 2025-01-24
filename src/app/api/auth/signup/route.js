import connect from "@/app/lib/mongoDB";
import { sendOtpToPhone } from "@/app/lib/otpService";
import Otp from "@/models/Otp";
import User from "@/models/User"; // Correct import for the User model
import { ObjectId } from "mongodb"; // For handling ObjectId

export async function POST(request) {
  try {

    connect();

    const body = await request.json();

    const { phoneNumber } = body;

    if (!phoneNumber) {
      return new Response(JSON.stringify({ error: "Phone number is required" }), { status: 400 });
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

