import failedImage from "@/asserts/failedImage.png";
import dynamic from "next/dynamic";



const PaginationData = dynamic(() => import("../compoents/PaginationData"), {
  ssr: false,
  loading: () => <p>Loading pagination...</p>,
});

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tyent.co.in'; // Fallback URL


export async function generateMetadata() {
  try {
    const res = await fetch(`${apiUrl}/api/blog`);
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
  try{
  const res = await fetch(`${apiUrl}/api/blog`);
  if (!res.ok) {
    console.error(`Error fetching blogs: ${res.status} ${res.statusText}`);
    return <p>No blogs found.</p>;
  }
  const blogs = await res.json(); // Fetch blogs from API
  const blogsPerPage = 6;

  return (
    <div className="container">
      <h1 className="m-4">All Blog Posts</h1>
      {/* Pagination Component */}
      {blogs.length > 0 ? (
          <PaginationData data={blogs} itemsPerPage={blogsPerPage} />
      )
          : (
          <p>No blogs available at the moment. Please check back later.</p>
        )}
    </div>
  );
} catch (error) {
  console.error("Error fetching blogs:", error);
  return <p>Error loading blogs. Please try again later.</p>;
}
};

export default Page;
