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
      title: "Tyent Blog - Latest News & Health Tips",
      description: "Explore our blog for expert insights on alkaline water, health benefits, and water ionization technology.",
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
  // Static blogs only (API blogs removed)
  const sortedBlogs = [
    {
      slug: "tyent-uce-plus-series-luxury-water-ionizer-modern-homes",
      title: "Why the Tyent UCE-PLUS Series Is Becoming the Ultimate Luxury Upgrade for Modern Homes",
      img: "/blog-uce-plus-luxury.webp",
      username: "Tyent India",
      createdAt: "2026-08-01T00:00:00.000Z",
    },
    {
      slug: "ro-water-purifier-vs-water-ionizer",
      title: "The End of the RO Water Purifier? Why Water Ionizers Are Becoming the Future of Healthy Living",
      img: "/blog-ro-vs-ionizer.jpg",
      username: "Tyent India",
      createdAt: "2026-08-01T00:00:00.000Z",
    },
    {
      slug: "best-alternative-to-kangen-water-machines-in-india",
      title: "Best Alternative to Kangen Water Machines in India",
      img: "/blog-kangen-alternative.webp",
      username: "Tyent India",
      createdAt: "2026-07-24T00:00:00.000Z",
    },
    {
      slug: "common-alkaline-water-myths-indian-buyers-should-stop-believing",
      title: "Common Alkaline Water Myths Indian Buyers Should Stop Believing",
      img: "/blog-alkaline-myths.webp",
      username: "Tyent India",
      createdAt: "2026-07-24T00:00:00.000Z",
    },
  ];

  const blogsPerPage = 6;

  const headerData = { 
    basic: "Discover the Real Science Behind",
    preheading:'Tyent Water Ionizers',
    afterheading: "Stay informed & healthy!", 
    img: blog, // Add image URL if needed
    animatedText: "Pure Innovation,  Ultimate Hydration!" // Pass the animated text here
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
  

    <div className="container" style={{overflow:'hidden'}}>

      
    <div className="section-spacing">
      {sortedBlogs.length > 0 ? (
          <PaginationData data={sortedBlogs} itemsPerPage={blogsPerPage} />
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
