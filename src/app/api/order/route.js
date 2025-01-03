import Order from '@/models/Order';
import ProductModel from '@/models/Product';
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongoDB';


// POST: Create an Order
export const POST = async (request) => {
  await connectDB();

  try {
    const { userId, products, address } = await request.json();

    // Initialize total amount to 0
    let totalAmount = 0;

    const productsWithDetails = [];
    
    // Map through each product in the order
    for (const item of products) {
      const product = await ProductModel.findOne({ productName: item.productName });

      // Check if the product exists in the database
      if (!product) {
        return NextResponse.json(
          { error: `Product with name ${item.productName} not found` },
          { status: 404 }
        );
      }

      // Calculate the price for this product (price * quantity)
      const price = product.price;
      const productData = {
        productName: item.productName,  // Store the product name
        quantity: item.quantity,        // Store the quantity
        price: price,                   // Store the price of the product
      };

      // Add to the totalAmount
      totalAmount += price * item.quantity;

      productsWithDetails.push(productData);
    }

    // Create a new order with the collected data
    const newOrder = new Order({
      userId,
      products: productsWithDetails,
      totalAmount,
      address,
      status: 'Pending',
    });

    // Save the order to the database
    await newOrder.save();

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to create the order' },
      { status: 400 }
    );
  }
};
