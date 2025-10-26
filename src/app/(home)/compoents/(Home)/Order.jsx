"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Card, Spinner, Table, Badge, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import Image from "next/image";

/** --------- Images: using your asserts folder ---------- */
import nmp5 from "@/asserts/NMP5.webp";
import nmp7 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import nmp11 from "@/asserts/NMP9.webp";
import uce9 from "@/asserts/Uce.webp";
import uce11 from "@/asserts/Uce.webp";
import uce13 from "@/asserts/Uce.webp";
import hybrid from "@/asserts/Hybrid.webp";
import hRich from "@/asserts/NMP5.webp";

/** --------- Map product name → image ---------- */
const productImageMap = {
  "NMP-5": nmp5,
  "NMP-7": nmp7,
  "NMP-9": nmp9,
  "NMP-11": nmp11,
  "UCE-9": uce9,
  "UCE-11": uce11,
  "UCE-13": uce13,
  "Hybrid-H2": hybrid,
  "H-Rich": hRich,
};

const API_BASE = "https://tyent-crm.vercel.app/api";

const normalizePhone = (raw) => {
  if (!raw) return "";
  let phone = String(raw)
    .trim()
    .replace(/[\s()-]/g, "");
  if (phone.startsWith("+91")) return phone.slice(3);
  if (phone.startsWith("91")) return phone.slice(2);
  return phone;
};

const Order = () => {
  const userData = useSelector((state) => state?.auth?.user);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const phone = useMemo(
    () => normalizePhone(userData?.phoneNumber),
    [userData?.phoneNumber]
  );

  useEffect(() => {
    if (!phone) {
      setCustomer(null);
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchCustomer = async () => {
      try {
        setLoading(true);
        setErr(null);

        // 1) Find customer by phone
        const res = await fetch(`${API_BASE}/customers?q=${phone}`, {
          cache: "no-store",
          signal,
        });
        if (!res.ok) throw new Error(`Lookup failed (${res.status})`);
        const data = await res.json();
        const id = data?.data?.[0]?._id;

        if (!id) {
          setCustomer(null);
          return;
        }

        // 2) Fetch customer details
        const detailsRes = await fetch(`${API_BASE}/customers/${id}`, {
          cache: "no-store",
          signal,
        });
        if (!detailsRes.ok)
          throw new Error(`Details failed (${detailsRes.status})`);
        const details = await detailsRes.json();
        const c = details?.message ?? null;

        // Sort service lists
        const asc = (a, b) =>
          new Date(a?.serviceDate || 0) - new Date(b?.serviceDate || 0);
        const desc = (a, b) =>
          new Date(b?.serviceDate || 0) - new Date(a?.serviceDate || 0);

        c.upcomingServices = (c?.upcomingServices || []).slice().sort(asc);
        c.serviceHistory = (c?.serviceHistory || []).slice().sort(desc);

        setCustomer(c);
        setImgLoaded(false);
      } catch (e) {
        if (e?.name !== "AbortError") {
          console.error(e);
          setErr(e?.message || "Something went wrong fetching data.");
          setCustomer(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
    return () => controller.abort();
  }, [phone]);

  // 🌀 Spinner while loading initially (no customer data yet)
  if (loading && !customer) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // ⚠️ Error message (if something goes wrong)
  if (err) {
    return (
      <div className="container py-4">
        <Alert variant="danger" className="mb-4">
          {err}
        </Alert>
      </div>
    );
  }

  // 📨 No customer found (only after loading is finished)
  if (!loading && !customer) {
    return (
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }

  // ✅ Render customer data
  const {
    serialNumber,
    price,
    address,
    installedBy,
    marketingManager,
    upcomingServices,
    serviceHistory,
  } = customer || {};

  const productName = serialNumber?.name || "Product";
  const productImage = productImageMap[productName];

  return (
    <div className="container py-4">
      {/* Product Details */}
      <Card className="shadow-lg mb-4 p-4 border-0">
        <div className="d-flex flex-column align-items-left text-left">
           <Image
              src={productImage}
              alt={productName}
              className="img-fluid product-card"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
              onLoadingComplete={() => setImgLoaded(true)}
            />
          
          <h4 className="fw-bold mt-3 mb-1">{productName}</h4>

          <p className="text-muted mb-1">
            <b>Serial No:</b> {serialNumber?._id || "N/A"}
          </p>
          <p className="text-muted mb-1">
            <b>Price:</b>{" "}
            {typeof price === "number" ? `₹${price.toLocaleString()}` : "N/A"}
          </p>
          
          <p className="text-muted mb-1">
            <b>Installed By:</b> {installedBy?.name || "N/A"}
          </p>
          <p className="text-muted mb-0">
            <b>Marketing Manager:</b> {marketingManager?.name || "N/A"}
          </p>
          <p className="text-muted mb-1">
            <b>Address:</b> {address || "N/A"}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Order;
