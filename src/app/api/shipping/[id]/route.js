import connect from "@/app/lib/mongoDB";
import Shipping from "@/models/shipping";
import { NextResponse } from "next/server";

// GET Request to retrieve shipping addresses for a user
export async function GET(request, { params }) {
  const { userId } = params;
  await connect();

  try {
    const shippingAddresses = await Shipping.find({ userId });

    // Check if shipping addresses are found
    if (!shippingAddresses || shippingAddresses.length === 0) {
      return NextResponse.json({
        message: "No shipping addresses found for this user",
        success: false,
      });
    }

    return NextResponse.json({
      message: "Shipping addresses retrieved successfully",
      success: true,
      shippingAddresses,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT Request to update shipping address for a user
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
