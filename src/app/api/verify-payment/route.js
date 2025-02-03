import crypto from "crypto";
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoDB";
import Order from "@/models/Order";

export const POST = async (request) => {
  await connectDB();

  try {
    const { orderId, paymentId, signature } = await request.json();

    const secret = process.env.RAZORPAY_KEY_SECRET;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    if (generatedSignature !== signature) {
      return NextResponse.json({ success: false, message: "Invalid payment signature" }, { status: 400 });
    }

    // Update order status in database
    await Order.findOneAndUpdate(
      { razorpayOrderId: orderId },
      { status: "Paid" }
    );

    return NextResponse.json({ success: true, message: "Payment verified successfully" }, { status: 200 });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json({ error: "Payment verification failed" }, { status: 500 });
  }
};
