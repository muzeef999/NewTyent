import React from 'react'


export const metadata = {
  title: "Terms of Use | Tyent India",
  description: "Please read the terms and conditions for using the Tyent India website. By using our site, you agree to be bound by these terms."
}

const page = () => {
  return (
    <div>
            <main
        style={{
          backgroundColor: "#FFF",
          maxWidth: "850px",
          margin: "0 auto",
          padding: "40px 20px",
          fontFamily: "'Segoe UI', sans-serif",
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
            color: "#007b83",
          }}
        >
          Terms of Use
        </h1>

        {/* Introduction */}
        <section style={{ marginBottom: "35px" }}>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Welcome to Tyent India. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
          </p>
        </section>

        {/* User Agreement */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            1. User Agreement
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            By using this website, you confirm that you are at least 18 years old or visiting under the supervision of a parent or guardian. You agree to use the site only for lawful purposes and in accordance with these Terms.
          </p>
        </section>

        {/* Account Responsibility */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            2. Account and Registration
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
        </section>

        {/* Restrictions */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            3. Restrictions on Use
          </h2>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.8", fontSize: "16px" }}>
            <li>You may not copy, reproduce, or exploit any content from the site without written permission.</li>
            <li>You may not use the site for fraudulent or illegal activities.</li>
            <li>You may not interfere with the site's performance or security.</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            4. Intellectual Property
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            All content, graphics, logos, and software on this site are the property of Tyent India or its content suppliers and are protected by Indian and international copyright laws.
          </p>
        </section>

        {/* Product Info */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            5. Product Descriptions
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            We attempt to be as accurate as possible. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            6. Limitation of Liability
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            Tyent India shall not be liable for any damages arising out of or in connection with the use or inability to use this site, including any direct, indirect, incidental, or consequential damages.
          </p>
        </section>

        {/* External Links */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            7. External Links
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            This site may contain links to third-party websites. Tyent India is not responsible for the content, accuracy, or privacy practices of these sites.
          </p>
        </section>

        {/* Changes to Terms */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            8. Changes to Terms
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            Tyent India reserves the right to modify these Terms at any time. Updated terms will be posted on this page. Continued use of the site constitutes your acceptance of the updated Terms.
          </p>
        </section>

        {/* Governing Law */}
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "12px" }}>
            9. Governing Law
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            These Terms of Use are governed by the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Vijayawada, Andhra Pradesh.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
            10. Contact Us
          </h2>
          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            For any questions regarding these Terms of Use, please contact us at:
            <br />
            📧 Email:{" "}
            <a href="mailto:support@tyent.co.in" style={{ color: "#007b83", textDecoration: "underline" }}>
              support@tyent.co.in
            </a>
          
          </p>
        </section>
      </main>

    </div>
  )
}

export default page