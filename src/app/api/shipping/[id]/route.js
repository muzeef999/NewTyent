import connect from "@/app/lib/mongoDB";
import Shipping from "@/models/shipping";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// GET Request to retrieve shipping addresses for a user
export const GET = async(request, { params }) => {
  const userId = params?.id; 

  console.log("Extracted userId:", userId); // Debugging lo

  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required", success: false },
      { status: 400 }
    );
  }

  try {
    await connect();


    const shippingDetails = await Shipping.findOne({ _id: new mongoose.Types.ObjectId(userId) });

   

    if (!shippingDetails) { // `findOne` returns `null` if not found
      return NextResponse.json(
        { message: "No shipping address found for this user", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Shipping address retrieved successfully",
        success: true,
        shippingDetails, // Correct response
      },
      { status: 200 }
    );


  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message, success: false },
      { status: 500 }
    );
  }
}


export async function PUT(request, { params }) {
  const { userId } = params;
  await connect();

  try {
    const reqBody = await request.json();
    const { _id, addresses } = reqBody;

    // Ensure that the address ID is provided
    if (!_id || !addresses || !addresses._id) {
      return NextResponse.json(
        { error: "Address ID (_id) and address details are required" },
        { status: 400 }
      );
    }

    // Find the shipping document for the user
    let shipping = await Shipping.findOne({
      userId,
      "addresses._id": addresses._id,
    });

    if (!shipping) {
      return NextResponse.json(
        { error: "Shipping address not found" },
        { status: 404 }
      );
    }

    // Find the address index in the shipping document
    const addressIndex = shipping.addresses.findIndex((addr) => {
      return addr._id.toString() === addresses._id.toString();
    });

    if (addressIndex === -1) {
      return NextResponse.json(
        { error: "Shipping address not found" },
        { status: 404 }
      );
    }

    // Update the address with new details
    shipping.addresses[addressIndex] = {
      ...shipping.addresses[addressIndex],
      ...addresses,
    };

    // Save the updated shipping document
    const savedShipping = await shipping.save();

    return NextResponse.json({
      message: "Shipping address updated successfully",
      success: true,
      savedShipping,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
