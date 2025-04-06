import React from 'react'


export const metadata = {
  title: "Privacy Policy | Tyent India",
  description: "Learn how Tyent India collects, uses, and protects your personal information through our transparent privacy practices."
}

const page = () => {
  return (
    <div>
       <main
        style={{
          backgroundColor:'#FFF',
          maxWidth: "850px",
          margin: "0 auto",
          padding: "40px 20px",
          fontFamily: "'Segoe UI', sans-serif",
          color: "#333",
        }}
      >
        

        {/* Intro */}
        <section style={{ marginBottom: "30px" }}>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            At Tyent India, your privacy is important to us. This Privacy Policy outlines how we collect, use, share, and safeguard your personal information when you interact with our website or make purchases.
          </p>
        </section>

        {/* Data Collection */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            1. Information We Collect
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            We collect personal information such as your name, email, phone number, shipping address, billing information, and purchase history when you interact with our site or place an order.
          </p>
        </section>

        {/* Usage */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            2. How We Use Your Information
          </h2>
          <ul style={{ paddingLeft: "18px", fontSize: "16px", lineHeight: "1.8" }}>
            <li>To process and fulfill your orders</li>
            <li>To personalize your shopping experience</li>
            <li>To communicate offers, promotions, or updates</li>
            <li>To improve website performance and user satisfaction</li>
          </ul>
        </section>

        {/* Cookies */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            3. Cookies & Tracking Technologies
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            We use cookies to enhance your browsing experience, remember your preferences, and track website usage. You can disable cookies through your browser settings.
          </p>
        </section>

        {/* Sharing */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            4. Sharing Your Information
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            We do not sell or rent your personal information to third parties. However, we may share it with trusted service providers (e.g., payment gateways, courier partners) solely for order fulfillment and website operations.
          </p>
        </section>

        {/* Data Security */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            5. Data Security
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Your data is stored on secure servers, protected by industry-standard security measures. All payments are handled through trusted encrypted gateways.
          </p>
        </section>

        {/* User Rights */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            6. Your Rights
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            You may access, update, or delete your personal data anytime by logging into your account or contacting us directly. You may also opt-out of promotional communications.
          </p>
        </section>

        {/* Updates */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            7. Policy Updates
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            8. Contact Us
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Have questions about your data privacy?
            <br />
            📧 Email:{" "}
            <a href="mailto:privacy@tyent.co.in" style={{ color: "#007b83", textDecoration: "underline" }}>
              privacy@tyent.co.in
            </a>
          
          </p>
        </section>
      </main>
    </div>
  )
}

export default page