import Order from '@/models/Order';
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongoDB';

export const POST = async (request) => {
  await connectDB();

  try {
    const { userId, products, address } = await request.json();

    console.log("Received address:", address);

    if (typeof address !== 'object' || !address.street || !address.city || !address.state || !address.zipcode) {
      return NextResponse.json(
        { error: 'Invalid address format' },
        { status: 400 }
      );
    }

    let totalAmount = 0;
    const productsWithDetails = products.map((item) => ({
      productName: item.productName,
      quantity: item.quantity,
      price: 100, // Mock price for testing
    }));

    totalAmount = productsWithDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const newOrder = new Order({
      userId,
      products: productsWithDetails,
      totalAmount,
      address,
      status: 'Pending',
    });

    await newOrder.save();
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: 'Failed to create the order' },
      { status: 400 }
    );
  }
};

