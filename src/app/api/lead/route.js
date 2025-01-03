import connect from "@/app/lib/mongoDB"
import Lead from "@/models/Leads";

export const POST = async (request) => {
  try {
    await connect();

    const body = await request.json();

    const { name, email, number, location, message, assignedTo, status } = body;

    if (!name || !email || !number || !location || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), {
        status: 400,
      });
    }

  
    const newLead = new Lead({
      name,
      email,
      number,
      location,
      message,
    });

  
    await newLead.save();

    return new Response(JSON.stringify({ message: "Lead created successfully!" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong: " + error.message }),
      { status: 500 }
    );
  }
};


  export const GET = async (request) => {
    try {
      await connect();
  
      const leads = await Lead.find();
  
      return new Response(JSON.stringify(leads), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  };
  

  export const PUT = async (request) => {
    try {
      // Connect to the database
      await connect();
  
      // Parse the request body
      const body = await request.json();
  
      const { leadId, assignedTo, status } = body;
  
      // Validate required fields
      if (!leadId || !assignedTo || !status) {
        return new Response(
          JSON.stringify({ error: "Lead ID, assignedTo, and status are required." }),
          { status: 400 }
        );
      }
  
      // Find the lead by its ID and update assignedTo and status
      const updatedLead = await Lead.findByIdAndUpdate(
        leadId,
        { assignedTo, status },
        { new: true } // Return the updated document
      );
  
      // If the lead wasn't found
      if (!updatedLead) {
        return new Response(
          JSON.stringify({ error: "Lead not found." }),
          { status: 404 }
        );
      }
  
      return new Response(
        JSON.stringify({ message: "Lead updated successfully!", updatedLead }),
        { status: 200 }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Something went wrong: " + error.message }),
        { status: 500 }
      );
    }
  };
  
