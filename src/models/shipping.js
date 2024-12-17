import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const shippingSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

const Shipping =
  mongoose.models.Shipping || mongoose.model("Shipping", shippingSchema);

export default Shipping;
