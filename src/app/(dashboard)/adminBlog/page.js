import dynamic from "next/dynamic";

// Dynamically importing the pagination component
const AdminPaginationData = dynamic(() => import("../compoents/AdminPaginationData"), {
  ssr: false,
  loading: () => <p>Loading pagination...</p>,
});

// Ensure the API URL is available
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tyent.co.in'; // Fallback URL

// Metadata generation function
export async function generateMetadata() {
  try {
    const res = await fetch(`${apiUrl}/api/blog`);
    if (!res.ok) throw new Error("API request failed");

    return {
      title: "Blog Posts",
      description: "All the latest blog posts.",
    };
  } catch (error) {
    console.error(error); // Log error for debugging
    return {
      title: "Blogs Not Found",
      description: "No blogs are available.",
    };
  }
}

// Page component to display the blogs
const Page = async () => {
  try {
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
        {blogs.length > 0 ? (
          <AdminPaginationData data={blogs} itemsPerPage={blogsPerPage} />
        ) : (
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