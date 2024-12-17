import Cart from "@/models/Cart";
import { connect } from "mongoose";

export async function GET(req) {
  try {
    await connect();
    const userId = req.headers["user-id"]; // Replace with session-based user ID
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    return new Response(JSON.stringify(cart || { items: [] }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
