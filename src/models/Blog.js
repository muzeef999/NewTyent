import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    metaTitle: {
      type: String,
      trim: true,
      required: true,
    },
    metaDescription: {
      type: String,
      trim: true,
      required: true,
    },
    metaKeywords: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Ensure slug is generated before validation
blogSchema.pre("validate", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }
  next();
});

let Blog;

try {
  Blog = mongoose.model("blog");
} catch {
  Blog = mongoose.model("blog", blogSchema);
}

export default Blog;
