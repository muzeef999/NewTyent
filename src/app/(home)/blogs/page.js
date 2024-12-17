import failedImage from "@/asserts/failedImage.png";
import dynamic from "next/dynamic";

const PaginationData = dynamic(() => import("../compoents/PaginationData"), {
  ssr: false,
  loading: () => <p>Loading pagination...</p>,
});

export async function generateMetadata() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`);
    if (!res.ok) throw new Error("API request failed");

    return {
      title: "Blog Posts",
      description: "All the latest blog posts.",
    };
  } catch (error) {
    return {
      title: "Blogs Not Found",
      description: "No blogs are available.",
    };
  }
}

const Page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`);
  if (!res.ok) {
    return <p>No blogs found.</p>;
  }
  const blogs = await res.json(); // Fetch blogs from API
  const blogsPerPage = 6;

  return (
    <div className="container">
      <h1 className="m-4">All Blog Posts</h1>
      {/* Pagination Component */}
      <PaginationData data={blogs} itemsPerPage={blogsPerPage} />
    </div>
  );
};

export default Page;
