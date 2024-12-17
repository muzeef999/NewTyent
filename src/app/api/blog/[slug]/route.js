import connect from "@/app/lib/mongoDB";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { slug } = params;
    try {
      await connect(); 
      if (!slug) {
        return new NextResponse('Slug is required', { status: 400 });
      }
      const post = await Blog.findOne({ slug }); 
      if (!post) {
        return new NextResponse('Post not found', { status: 404 });
      }
      return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
      console.error(err);  
      return new NextResponse('Database Error', { status: 500 });
    }
  };


export const DELETE = async (request, { params }) => {
  try {
    await connect();

    const { slug } = params;

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const post = await Blog.findOne({ slug });
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    await Blog.deleteOne({ slug });

    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (err) {
    console.error('Error deleting post:', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
};
 


export const PATCH = async (request, { params }) => {
  const { slug } = params;

  try {
    // Parse request body for the data to update
    const {
      img,
      content,
      username,
      title,
      metaTitle,
      metaDescription,
      metaKeywords = [], // Default to empty array
      category,
      tags = [], // Default to empty array
      published,
    } = await request.json();

    // Connect to the database
    await connect();

    // Validate slug
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Find the blog by slug and update it
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      {
        $set: {
          img,
          content,
          username,
          title,
          metaTitle,
          metaDescription,
          metaKeywords: Array.isArray(metaKeywords) ? metaKeywords : [metaKeywords],
          category,
          tags: Array.isArray(tags) ? tags : [tags],
          published,
          publishedAt: published ? new Date() : null,
        },
      },
      { new: true } // Return the updated document
    );

    // If no blog is found, return 404
    if (!updatedBlog) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Return the updated blog
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (err) {
    console.error("Error updating blog:", err);
    return NextResponse.json({ error: "Database Error" }, { status: 500 });
  }
};


  










