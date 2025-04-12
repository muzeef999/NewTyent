import connect from "@/app/lib/mongoDB";
import Order from "@/models/Order";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export const POST = async (request) => {
  await connect();

  try {
    const { userId, products, address } = await request.json();


    if (!userId || !products || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Safe check for Razorpay environment variables
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Missing Razorpay credentials in .env file");
      return NextResponse.json({ error: "Server config error: Razorpay keys missing" }, { status: 500 });
    }

    // Calculate total amount
    const totalAmount = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Create Razorpay instance
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    // Create order in Razorpay
    const razorpayOrder = await razorpay.orders.create({
      amount: totalAmount * 100, // convert to paisa
      currency: "INR",
      receipt: `order_${Date.now()}`,
    });

    // Save order to DB
    const newOrder = new Order({
      userId,
      products,
      totalAmount,
      address,
      razorpayOrderId: razorpayOrder.id,
      status: "Pending",
    });

    await newOrder.save();

    return NextResponse.json({
      success: true,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
    }, { status: 201 });

  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json({ error: "Failed to create the order" }, { status: 500 });
  }
};
