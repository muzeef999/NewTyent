import mongoose from "mongoose";

const { Schema } = mongoose;

const LeadSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    location: { type: String, required: true },
    message: { type: String, required: true },
    assignedTo: { type: String,  default:'Not assigned'}, // Lead assigned to
    status: { type: String,  default: "new" }, // Lead status (default to 'new')
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

let Lead;

try {
  Lead = mongoose.model("Leads");
} catch {
  Lead = mongoose.model("Leads", LeadSchema);
}

export default Lead;
