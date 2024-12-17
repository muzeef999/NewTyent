import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // Add other fields as necessary
});

const ProductModel = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default ProductModel;
