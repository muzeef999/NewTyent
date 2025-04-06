import React from 'react'


export const metadata = {
  title: "Security Policy | Tyent India",
  description: "Learn how Tyent India protects your data and ensures secure transactions with our strict security measures."
}

const page = () => {
  
  return (
    <div>
            <main
        style={{
          maxWidth: "850px",
          backgroundColor: "#FFF",
          margin: "0 auto",
          padding: "40px 20px",
          fontFamily: "'Segoe UI', sans-serif",
          color: "#008ac7",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "bold",
            borderBottom: "2px solid #ccc",
            paddingBottom: "12px",
            marginBottom: "35px",
            color: "#007b83",
          }}
        >
          Security Policy
        </h1>

        {/* Intro */}
        <section style={{ marginBottom: "35px" }}>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            At Tyent India, we are committed to ensuring the security and protection of your personal and financial information. Our systems are designed to keep your data safe and secure at every stage of your journey with us.
          </p>
        </section>

        {/* Data Protection */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            1. Data Protection
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            We collect only the necessary personal information required to process your orders and provide you with the best experience. All customer data is stored on secure servers with controlled access.
          </p>
        </section>

        {/* Payment Security */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            2. Payment Security
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            All payment transactions are processed through secure and trusted payment gateways using encryption technologies. Tyent India does not store your credit/debit card details or any payment credentials.
          </p>
        </section>

        {/* SSL Encryption */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            3. SSL Encryption
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Our website is protected with Secure Socket Layer (SSL) encryption to ensure that your personal and payment information is transmitted securely over the internet.
          </p>
        </section>

        {/* Fraud Monitoring */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            4. Fraud Prevention & Monitoring
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            We work closely with security experts and third-party services to detect and prevent fraudulent activities. Suspicious behavior is logged and reported for further investigation.
          </p>
        </section>

        {/* Customer Responsibility */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            5. Your Responsibility
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            As a user, you are responsible for keeping your login credentials confidential. Please do not share your account information and report any unauthorized access immediately.
          </p>
        </section>

        {/* Updates */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            6. Security Updates
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            We regularly update our security policies and technologies to address evolving threats. Check this page periodically for updates to our Security Policy.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            7. Contact Us
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            If you have any questions or concerns about our security measures, please contact us:
            <br />
            📧 Email:{" "}
            <a href="mailto:support@tyent.co.in" style={{ color: "#007b83", textDecoration: "underline" }}>
              support@tyent.co.in
            </a>
            <br />
          </p>
        </section>
      </main>

    </div>
  )
}

export default page