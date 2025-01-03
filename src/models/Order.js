import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productName: { type: String, required: true },  // Store product name
      quantity: { type: Number, required: true },    // Store quantity
      price: { type: Number, required: true },       // Store price of the product
    },
  ],
  totalAmount: { type: Number, required: true },
  address: { type: String, required: true },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
