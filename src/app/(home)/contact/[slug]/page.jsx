import Image from "next/image";

export default function LocationPage({ params }) {
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
                Best Premium Alkaline Water Ionizer & Hydrogen Water Generator in{" "}
                {locationName}
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
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
        <h2 className="fw-bold display-6 text-primary mb-2">
          Tyent’s Japanese Technology
        </h2>

        <div
          className="mx-auto my-3"
          style={{
            maxWidth: "120px",
            height: "3px",
            backgroundColor: "#0d6efd",
          }}
        />

        <h6 className="fw-semibold">
          Advanced Health Protection with Doorstep Installation & Service
        </h6>

        <p
          className="text-muted mt-4 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          Looking for the best water ionizer in {locationName}? Welcome to Tyent
          India — delivering premium hydrogen-rich alkaline water ionizers with
          expert installation and after-sales support.
        </p>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <Image
              src="/images/woman-drinking-water.jpg"
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
              minerals. Choose Tyent for hydrogen-rich alkaline water designed
              for hydration, wellness, and long-term health.
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
                Tyent is trusted across 85+ countries and recommended by
                doctors, athletes, and wellness experts worldwide.
              </p>

              <ul className="text-muted ps-3 mb-0">
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
              src="/images/woman-glass-water.jpg"
              alt="Healthy Lifestyle"
              width={600}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
