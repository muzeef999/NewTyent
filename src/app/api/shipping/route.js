
import connect from "@/app/lib/mongoDB";
import Shipping from "@/models/shipping";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  await connect();

  try {
    const reqBody = await request.json();
    const { _id, addresses } = reqBody;

    if (!_id) {
      return NextResponse.json({ error: "_id is required" }, { status: 400 });
    }

    let shipping = await Shipping.findOne({ _id });

    if (!shipping) {
      shipping = new Shipping({ _id, addresses });
    } else {
      shipping.addresses = [...shipping.addresses, ...addresses];
    }

    const savedShipping = await shipping.save();

    return NextResponse.json({
      message: "Shipping addresses updated/created successfully",
      success: true,
      savedShipping,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
