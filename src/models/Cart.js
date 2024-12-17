import mongoose from "mongoose";

// Define the product subdocument schema without the _id field
const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, require: true },
  },
  { _id: false }
);

// Define the cart schema
const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    date: { type: Date, default: Date.now },
    products: [productSchema],
  },
  { collection: "cart" }
); // Specify collection name here


let Cart;

try{
  Cart = mongoose.model("cart");
}catch{
   Cart = mongoose.model("cart", cartSchema);
}

export default  Cart;

