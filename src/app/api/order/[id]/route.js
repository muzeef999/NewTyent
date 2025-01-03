import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export const GET = async (request, { params }) => {
  await connectDB();
  const { id } = params; // Get the 'id' from URL params

  try {
    const order = await Order.findById(id);
    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch the order' },
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  await connectDB();
  const { id } = params; // Get the 'id' from URL params

  try {
    // Parse the request body
    const data = await request.json();

    // Update the order
    const updatedOrder = await Order.findByIdAndUpdate(id, data, { new: true });
    if (!updatedOrder) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedOrder, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update the order' },
      { status: 400 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  await connectDB();
  const { id } = params; // Get the 'id' from URL params

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Order deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to delete the order' },
      { status: 500 }
    );
  }
};
