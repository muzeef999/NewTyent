import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productName: String,
      quantity: Number,
      price: Number,
    }
  ],
  totalAmount: { type: Number, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
  },
  razorpayOrderId: { type: String, required: true },
  status: { type: String, default: "Pending" },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
