import connect from "@/app/lib/mongoDB";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
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
  
    try {
      await connect();
      const newBlog = await Blog.create({
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
      });
      return NextResponse.json(newBlog, { status: 200 });
    } catch (err) {
      console.error("Error creating blog:", err);
      return new NextResponse("Database Error", { status: 500 });
    }
  };
  


