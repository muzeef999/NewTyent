
import connect from "@/app/lib/mongoDB";
import Shipping from "@/models/shipping";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  await connect();

  try {
    const shippingAddresses = await Shipping.find({ userId });

    if (!shippingAddresses || shippingAddresses.length === 0) {
      return NextResponse.json({
        message: "No shipping addresses found for this user",
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

export async function PUT(request, { params }) {
  const { userId } = params;

  await connect();

  try {
    const reqBody = await request.json();
    const { _id, addresses } = reqBody;

    if (!_id) {
      return NextResponse.json({ error: "_id is required" }, { status: 400 });
    }

    let shipping = await Shipping.findOne({
      userId,
      "addresses._id": addresses._id,
    });

    if (!shipping) {
      return NextResponse.json(
        { error: "Shipping address not found 1" },
        { status: 404 }
      );
    }

    const addressIndex = shipping.addresses.findIndex((addr) => {
      return addr._id.toString() === addresses._id.toString();
    });

    if (addressIndex === -1) {
      return NextResponse.json(
        { error: "Shipping address not found 2" },
        { status: 404 }
      );
    }

    shipping.addresses[addressIndex] = {
      ...shipping.addresses[addressIndex],
      ...addresses,
    };

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
