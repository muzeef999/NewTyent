import connect from "@/app/lib/mongoDB";
import Lead from "@/models/Leads";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const leadId = params.id; 

  try {
    
    await connect(); 

       const lead = await Lead.findByIdAndDelete(leadId);

    if (!lead) {
   
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

   
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }

    
    return new NextResponse(
      JSON.stringify({ message: "Server error while deleting lead", error: error.message }),
      { status: 500 }
    );
  }
};
