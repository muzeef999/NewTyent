import React from 'react'



export const metadata = {
  title: "Cancellation & Returns Policy | Tyent India",
  description: "Understand Tyent India's policy on order cancellations, product returns, and refunds."
}


const page = () => {




  return (
    <div>
            <main
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "40px 20px",
          backgroundColor:'#FFF',
          color: "#333",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "bold",
            borderBottom: "2px solid #ccc",
            paddingBottom: "12px",
            marginBottom: "35px",
            color: "#008ac7",
          }}
        >
          Cancellation & Returns Policy
        </h1>

        {/* Cancellation Policy */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "14px" }}>
            Cancellation Policy
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            Orders placed on Tyent India can be cancelled within <strong>24 hours</strong> of purchase.
            After this period, cancellations will not be accepted if the order is already processed or shipped.
          </p>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>To cancel an order, email us at <a href="mailto:support@tyent.co.in" style={{ color: "#007b83" }}>support@tyent.co.in</a> with your Order ID.</li>
            <li>Refunds (if applicable) will be processed within 5–7 working days to the original payment method.</li>
            <li>Custom orders and services are not eligible for cancellation once confirmed.</li>
          </ul>
        </section>

        {/* Return Policy */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "14px" }}>
            7-Day Return Policy
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            We accept returns within <strong>7 days</strong> of delivery under the following conditions:
          </p>
          <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8" }}>
            <li>Product is unused and in its original packaging.</li>
            <li>Return request includes proof of damage or wrong item received.</li>
            <li>Original invoice and all accessories must be included.</li>
          </ul>

          <h3 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px", fontWeight: "500" }}>
            Non-Returnable Items:
          </h3>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Used water ionizers or opened filters</li>
            <li>Custom installation services</li>
            <li>Any item not in its original condition</li>
          </ul>
        </section>

        {/* Return Process */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "14px" }}>
            Return & Refund Process
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            Once your return is approved:
          </p>
          <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8" }}>
            <li>Pickup will be arranged by our courier partner.</li>
            <li>Inspection will be done upon receipt of returned product.</li>
            <li>Refunds will be processed within <strong>7–10 business days</strong>.</li>
            <li>Refund will be credited to the original payment method.</li>
          </ul>
        </section>

        {/* Support Section */}
        <section>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>Need Assistance?</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Our customer support team is here to help you with any queries related to cancellation, return, or refund.
            <br />
            📧 Email:{" "}
            <a href="mailto:support@tyent.co.in" style={{ color: "#007b83", textDecoration: "underline" }}>
              support@tyent.co.in
            </a>
            <br />
            📞 Phone: +91 912-12-12-555
          </p>
        </section>
      </main>

    </div>
  )
}

export default page