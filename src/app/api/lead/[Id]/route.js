import connect from "@/app/lib/mongoDB";
import Lead from "@/models/Leads";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  console.log("Received params:", params); // Debugging line

  try {
    await connect(); // Ensure DB connection

    const leadId = params?.Id || params?.id; // Ensure correct case

    if (!leadId) {
      console.log("Lead ID is missing in request");
      return new NextResponse(
        JSON.stringify({ message: "Lead ID is missing in request" }),
        { status: 400 }
      );
    }

    console.log("Deleting lead with ID:", leadId); // Debugging line

    const lead = await Lead.findByIdAndDelete(leadId);

    if (!lead) {
      console.log("Lead not found");
      return new NextResponse(
        JSON.stringify({ message: "Lead not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Lead deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting lead:", error);

    return new NextResponse(
      JSON.stringify({
        message: "Server error while deleting lead",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
