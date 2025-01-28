import dynamic from "next/dynamic";
const Header = dynamic(() => import('../compoents/Header'), {ssr: false});
const Loading = dynamic(()=> import("@/app/(home)/compoents/Loading"),{srr:false})
const PaginationData = dynamic(() => import("../compoents/PaginationData"), { ssr: false, loading: () => <Loading />,});
import blog from "@/asserts/blog.png"

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

  const headerData = { 
    basic: "Trust, Satisfaction & Transformations",
    preheading:'Hear From Our Real',
    afterheading: "Satisfied Tyent India Customers",
    content: "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water. Our cutting-edge water ionizers are designed to provide superior antioxidant support, better hydration, and long-term wellness. But don’t just take our word for it - hear it from those who matter most, our valued customers!",
    img: blog, // Add image URL if needed
    animatedText: "Health, Wellness, Transformation" // Pass the animated text here
  }

  return (
  <div>
    <Header 
        basic={headerData.basic} 
        preheading={headerData.preheading} 
        afterheading={headerData.afterheading}
        content={headerData.content} 
        img={headerData.img}
        animatedText={headerData.animatedText} // Passing dynamic animated text
      />
  

    <div className="container">

      
    <div className="section-spacing">
      {blogs.length > 0 ? (
          <PaginationData data={blogs} itemsPerPage={blogsPerPage} />
      )
          : (
          <p>No blogs available at the moment. Please check back later.</p>
        )}
    </div>
    </div>
    </div>
  );
} catch (error) {
  console.error("Error fetching blogs:", error);
  return <p>Error loading blogs. Please try again later.</p>;
}
};

export default Page;
