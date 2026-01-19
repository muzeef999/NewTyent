import Image from "next/image";
import contactimage from "@/asserts/contactimage1.png";
import contactimg from "@/asserts/contactimg.png";
import dynamic from "next/dynamic";
const Loading = dynamic(() => import("@/app/(home)/compoents/Loading"), {
  srr: false,
});
const PaginationData = dynamic(() => import("../../compoents/PaginationData"), {
  ssr: false,
  loading: () => <Loading />,
});
import blog from "@/asserts/blog.png";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://tyent.co.in"; // Fallback URL

export async function generateMetadata() {
  try {
    const res = await fetch(`${apiUrl}/api/blog`);
    if (!res.ok) throw new Error("API request failed");

    return {
      title: "Tyent Blog - Latest News & Health Tips",
      description:
        "Explore our blog for expert insights on alkaline water, health benefits, and water ionization technology.",
    };
  } catch (error) {
    return {
      title: "Blogs Not Found",
      description: "No blogs are available.",
    };
  }
}

export default async function LocationPage({ params }) {
  const res = await fetch(`${apiUrl}/api/blog`);
  if (!res.ok) {
    console.error(`Error fetching blogs: ${res.status} ${res.statusText}`);
    return <p>No blogs found.</p>;
  }
  const blogs = await res.json(); // Fetch blogs from API
  const blogsPerPage = 6;

  // Convert slug to readable location name
  const locationName = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        className="text-white py-5"
        style={{ backgroundColor: "#008ac7" }}
      >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <h1 className="fw-bold fs-3 mb-3">
                Best Premium Alkaline Water Ionizer & Hydrogen Water Generator
                in {locationName}
              </h1>
              <p className="mb-0">
                For free demo contact: <strong>9966 558 556</strong>
              </p>
            </div>

            <div className="col-lg-5 text-lg-end">
              <div className="rounded overflow-hidden shadow d-inline-block">
                <iframe
                  width="360"
                  height="200"
                  src="https://www.youtube.com/embed/sktKcmT2DGw"
                  title="Tyent India"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY SECTION ================= */}
      <section className="container py-5 text-center">
        <h2 className="bg-heading-text ">Tyent’s Japanese Technology</h2>

        <h3>Advanced Health Protection with Doorstep Installation & Service</h3>

        <p>
          Looking for the best water ionizer in {locationName} that delivers
          real health benefits, superior hydration, and long-term protection?
          Welcome to Tyent India - {locationName}’s most trusted brand for
          hydrogen-rich alkaline water ionizers & Hydrogen water generator’s,
          now offering complete doorstep service, installation, and after-sales
          support across {locationName}.
        </p>

        <p>
          In a city battling rising pollution, heavy metals, and deteriorating
          water quality, ordinary RO systems are no longer enough. Tyent brings
          medical-grade water ionization technology that not only purifies water
          but enhances it with selective anti-oxidant molecular hydrogen,
          essential minerals, and balanced alkalinity - supporting immunity,
          detoxification, digestion, and long-term lifestyle disease prevention.
        </p>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <Image
              src={contactimage}
              alt="Healthy Water"
              width={600}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold text-primary mb-3">
              Upgrade Your Water.
              <br />
              Upgrade Your Health.
            </h3>

            <p className="text-muted">
              Stop settling for ordinary RO water that strips essential
              minerals. Choose Tyent - the best hydrogen-rich alkaline water
              ionizer’s & Hydrogen water generator’s for luxury hydration,
              advanced wellness, and long-term family protection.
            </p>

            <button className="btn btn-primary px-4 py-2 rounded-pill mt-3">
              Book Your Free Demo Today
            </button>

            <p className="text-muted small mt-2">
              Doorstep Service Available Across {locationName}
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <div className="border rounded p-4 shadow-sm h-100">
              <h4 className="fw-bold text-primary mb-3">
                Why Choose Tyent Water Ionizer in {locationName}?
              </h4>

              <p className="text-muted">
                Tyent is a globally recognized pioneer in hydrogen-rich alkaline
                water ionizers, trusted across 86+ countries and recommended by
                doctors, fitness experts, and wellness professionals worldwide.
                Headquartered in South Korea and powered by advanced Japanese
                engineering, Tyent is designed for Indian water conditions and
                Delhi’s complex TDS challenges.
              </p>

              <ul className="text-muted ps-3 mb-0">
                <p>
                  With Tyent, you don’t just drink clean water - you experience
                  therapeutic hydration that supports:{" "}
                </p>
                <li>Better digestion & metabolism</li>
                <li>Supports detoxification</li>
                <li>Improves energy & immunity</li>
                <li>Reduces oxidative stress</li>
                <li>Balances body pH levels</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <Image
              src={contactimg}
              alt="Healthy Lifestyle"
              width={600}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="container" style={{ overflow: "hidden" }}>
            <h2 className="bg-heading-text ">What Makes Tyent</h2>

        <h3>#1 Alkaline Water Ionizer in {locationName} ?</h3>

          <div className="section-spacing">
            {blogs.length > 0 ? (
              <PaginationData data={blogs} itemsPerPage={blogsPerPage} />
            ) : (
              <p>No blogs available at the moment. Please check back later.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
