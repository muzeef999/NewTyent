import { notFound } from "next/navigation";
import { locationsData } from "@/app/(home)/contact/locationData";
import Image from "next/image";

export function generateMetadata({ params }) {
  const location = locationsData[params.slug];
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.metaKeywords?.join(", "),
  };
}

export default function LocationPage({ params }) {
  const location = locationsData[params.slug];
  if (!location) return notFound();

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="mb-5 border-bottom pb-4">
        <nav className="text-muted mb-2">
          Home / Contact / <span className="text-primary fw-semibold">{location.title}</span>
        </nav>
        <h1 className="display-5 fw-bold text-primary">{location.title}</h1>
        <p className="lead text-secondary">{location.address}</p>
      </div>

      {/* Contact & Hours */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <h2 className="h4 fw-semibold text-dark">Contact Information</h2>
          <ul className="list-unstyled mt-3">
            <li><strong>Manager:</strong> {location.contact.manager}</li>
            <li><strong>Phone:</strong> {location.contact.phone}</li>
            <li><strong>Email:</strong> {location.contact.email}</li>
            <li><strong>WhatsApp:</strong> {location.contact.whatsapp}</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="h4 fw-semibold text-dark">Working Hours</h2>
          <ul className="list-unstyled mt-3">
            {Object.entries(location.hours).map(([day, time]) => (
              <li key={day}><strong className="text-capitalize">{day}</strong>: {time}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features */}
      <div className="mb-5">
        <h2 className="h4 fw-semibold text-dark mb-3">Why Visit Us?</h2>
        <ul className="row list-unstyled">
          {location.features.map((item, i) => (
            <li key={i} className="col-md-4 mb-2 position-relative ps-3">
              <span className="position-absolute start-0 top-0 text-success">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery */}
      <div className="mb-5">
        <h2 className="h4 fw-semibold text-dark mb-3">Showroom Gallery</h2>
        <div className="row g-3">
          {location.gallery.map((src, i) => (
            <div key={i} className="col-sm-6 col-lg-4">
              <Image
                src={src}
                width={400}
                height={250}
                alt={`Gallery image ${i + 1}`}
                className="img-fluid rounded shadow-sm w-100 h-100 object-fit-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mb-5">
        <h2 className="h4 fw-semibold text-dark mb-3">Find Us Here</h2>
        <div className="ratio ratio-16x9 rounded shadow">
          <iframe
            src={location.mapEmbedUrl}
            allowFullScreen
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>
      </div>

      {/* Staff */}
      <div className="mb-5">
        <h2 className="h4 fw-semibold text-dark mb-3">Meet Our Team</h2>
        <div className="row g-4">
          {location.staff.map((member, i) => (
            <div key={i} className="col-sm-6 col-md-4">
              <div className="bg-white p-4 border rounded shadow-sm h-100">
                <h3 className="h6 fw-bold text-dark mb-1">{member.name}</h3>
                <p className="text-muted mb-1">{member.position}</p>
                <p className="fst-italic small text-secondary mb-1">{member.bio}</p>
                <p className="text-primary small">{member.certification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offers */}
      <div className="bg-light border-start border-success border-4 p-4 rounded mb-5">
        <h2 className="h4 fw-semibold text-success mb-3">Exclusive Offers</h2>
        <ul className="list-unstyled">
          {location.offers.map((offer, i) => (
            <li key={i} className="mb-2">• {offer}</li>
          ))}
        </ul>
      </div>

      {/* Testimonials */}
      {location.testimonials?.length > 0 && (
        <div className="mb-5">
          <h2 className="h4 fw-semibold text-dark mb-3">Customer Testimonials</h2>
          <div className="row g-4">
            {location.testimonials.map((review, i) => (
              <div key={i} className="col-sm-6">
                <div className="p-4 border border-primary rounded bg-light shadow-sm">
                  <p className="fst-italic">"{review.comment}"</p>
                  <div className="mt-2 small fw-semibold text-dark">– {review.name}</div>
                  <div className="text-warning small">{"⭐".repeat(review.rating)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
