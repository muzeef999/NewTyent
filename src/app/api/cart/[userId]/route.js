import connect from "@/app/lib/mongoDB";
import CartModel from "@/models/Cart";
import ProductModel from "@/models/Product";

import { NextResponse } from "next/server";


export const POST = async (request) => {
  try {
    const { userId, productName, qty, price } = await request.json();

    if (!userId || !productName || !qty || qty <= 0 || !price) {
      return new NextResponse("Invalid request data", { status: 400 });
    }

    await connect();

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({
        userId,
        products: [],
      });
    }

    const existingProductIndex = cart.products.findIndex(
      (product) => product.productName === productName
    );

    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += qty;
    } else {
      cart.products.push({
        productName,
        quantity: qty,
        price: price,
      });
    }

    await cart.save();

    // Ensure the response returns the entire cart for frontend state updates
    return new NextResponse(
      JSON.stringify({
        message: "Item added to cart successfully",
        cart: cart,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};


export const GET = async (request, { params }) => {
  const { userId } = params;

  if (!userId) {
    return new NextResponse("User ID is required", { status: 400 });
  }

  try {
    await connect();

    const userCart = await CartModel.findOne({ userId });

    if (!userCart || userCart.products.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: "Cart is empty", products: [] }),
        { status: 200 }
      );
    }

    // Populate product details if `productId` is present
    const populatedProducts = await Promise.all(
      userCart.products.map(async (product) => {
        if (product.productId) {
          const productDetails = await ProductModel.findOne({
            _id: product.productId,
          });

          return {
            ...product.toObject(),
            details: productDetails ? productDetails.toObject() : null,
          };
        }

        return product.toObject();
      })
    );
    return new NextResponse(
      JSON.stringify({ message: "fetched itemes successfully", cart:{ userId, products: populatedProducts } }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { userId } = params;

  if (!userId) {
    return new NextResponse("User ID is required", { status: 400 });
  }

  try {
    const { productName, quantity } = await request.json();

    if (!productName || quantity === undefined) {
      return new NextResponse("Product name and quantity are required", {
        status: 400,
      });
    }

    await connect();

    const userCart = await CartModel.findOne({ userId });

    if (!userCart) {
      return new NextResponse("Cart not found", { status: 404 });
    }

    const productIndex = userCart.products.findIndex(
      (product) => product.productName === productName
    );

    if (productIndex === -1) {
      return new NextResponse("Product not found in cart", { status: 404 });
    }

    if (quantity <= 0) {
      // Remove the product if quantity is 0 or less
      userCart.products.splice(productIndex, 1);
    } else {
      // Update the quantity
      userCart.products[productIndex].quantity = quantity;
    }

    await userCart.save();

    // Return the updated cart to keep the frontend in sync
    return new NextResponse(
      JSON.stringify({ message: "Quantity updated successfully", cart: userCart }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

