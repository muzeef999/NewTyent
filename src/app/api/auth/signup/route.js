import connect from "@/app/lib/mongoDB";
import User from "@/models/User"; // Correct import for the User model
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {

    await connect();

    // Parse the request body
    const body = await request.json();

    const { name, email, password } = body;

    // Validate request data
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Email is already registered" }),
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
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
