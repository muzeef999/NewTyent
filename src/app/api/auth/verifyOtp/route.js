import connect from "@/app/lib/mongoDB";
import Otp from "@/models/Otp";
import User from "@/models/User";
import bcrypt from "bcrypt"; // You'll need this to hash the password before saving



export async function POST(request) {
    try {
      const body = await request.json();
      const { phoneNumber, otp, name, password } = body; // Added password to the destructuring
  
      // Validate required fields
      if (!phoneNumber || !otp || !password) {
        return new Response(
          JSON.stringify({ error: "Phone number, OTP, and password are required" }),
          { status: 400 }
        );
      }
  
      // Check OTP in the database
      const otpRecord = await Otp.findOne({ phoneNumber });
  
      if (!otpRecord) {
        return new Response(JSON.stringify({ error: "OTP not found" }), { status: 404 });
      }
  
      if (otpRecord.expiration < new Date()) {
        return new Response(JSON.stringify({ error: "OTP expired" }), { status: 400 });
      }
  
      if (otpRecord.otp !== otp) {
        return new Response(JSON.stringify({ error: "Invalid OTP" }), { status: 400 });
      }
  
      // Check if user already exists
      let user = await User.findOne({ phoneNumber });
  
      if (!user) {
        // If user doesn't exist, create a new user and hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
  
        user = await User.create({
          name,
          phoneNumber,
          password: hashedPassword, // Save the hashed password
        });
      } else {
        // Optionally, if user exists, you can update their password if needed
        user.password = await bcrypt.hash(password, 10); // Hash password if updating
        await user.save();
      }
  
      // Successful response
      return new Response(
        JSON.stringify({
          message: "OTP verified and user stored successfully",
          user,
        }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return new Response(
        JSON.stringify({ error: "Server error. Please try again later." }),
        { status: 500 }
      );
    }
  } 


  export const GET = async (request) => {
    try {
      await connect();
      // Fetch all users from the database
      const users = await User.find();
      // Return success response with users data
      return new Response(
        JSON.stringify({ users }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Get Users API Error:", error);
      return new Response(
        JSON.stringify({ error: "Server error. Please try again later." }),
        { status: 500 }
      );
    }
  };