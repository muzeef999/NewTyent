"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Card, Spinner, Table, Badge, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

const API_BASE = "https://tyent-crm.vercel.app/api";

const normalizePhone = (raw) => {
  if (!raw) return "";
  let phone = String(raw).trim().replace(/[\s()-]/g, "");
  if (phone.startsWith("+91")) return phone.slice(3);
  if (phone.startsWith("91")) return phone.slice(2);
  return phone;
};

const ServiceHistory = () => {
  const userData = useSelector((state) => state?.auth?.user);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

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

        // 2) Fetch full details
        const detailsRes = await fetch(`${API_BASE}/customers/${id}`, {
          cache: "no-store",
          signal,
        });
        if (!detailsRes.ok)
          throw new Error(`Details failed (${detailsRes.status})`);
        const details = await detailsRes.json();
        const c = details?.message ?? null;

        // Sort service history (latest first)
        const desc = (a, b) =>
          new Date(b?.serviceDate || 0) - new Date(a?.serviceDate || 0);
        c.serviceHistory = (c?.serviceHistory || []).slice().sort(desc);

        setCustomer(c);
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

  // 🌀 Initial spinner (prevents "No data" flash)
  if (loading && !customer) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // ⚠️ Error
  if (err) {
    return (
      <div className="container py-4">
        <Alert variant="danger" className="mb-4">
          {err}
        </Alert>
      </div>
    );
  }

  // 📨 No data after loading completes
  if (!loading && !customer) {
    return (
      <div className="container py-5">
        <p className="text-center text-muted mb-0">
          No customer data found for your phone number.
        </p>
      </div>
    );
  }

  const { serviceHistory = [] } = customer || {};

  return (
    <div className="container py-4">
      {/* Service History (Card mode inside a table container) */}
      <Card className="shadow-sm mb-4 p-3">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="text-success mb-3 fw-semibold">Service History</h5>
          {/* Subtle spinner when refetching while data is visible */}
          {loading && (
            <span className="d-inline-flex align-items-center gap-2 text-muted">
              <Spinner animation="border" size="sm" role="status" />
              <small>Refreshing...</small>
            </span>
          )}
        </div>

        {serviceHistory.length ? (
          <Table borderless responsive className="mb-0">
            <tbody>
              {serviceHistory.map((s) => {
                const status = s?.status || "INFO";
                const badge =
                  status === "CLOSED"
                    ? "secondary"
                    : status === "COMPLETED"
                    ? "success"
                    : status === "PENDING"
                    ? "warning"
                    : "info";

                return (
                  <tr key={s?._id}>
                    {/* single cell spanning the row, containing a card */}
                    <td className="p-0">
                      <Card className="mb-3 shadow-sm border-0">
                        <Card.Body className="p-3">
                          {/* Header line: Visit # + Status badge */}
                          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                            <div className="d-flex align-items-center gap-3">
                              <span className="fw-semibold">
                                Visit #{s?.visitNo ?? "-"}
                              </span>
                              <span className="text-muted">
                                {s?.serviceDate
                                  ? new Date(s.serviceDate).toLocaleDateString()
                                  : "-"}
                              </span>
                            </div>
                            <Badge bg={badge}>{status}</Badge>
                          </div>

                          {/* Content grid */}
                          <div className="row g-2">
                            <div className="col-12 col-md-4">
                              <small className="text-uppercase text-muted d-block">
                                Service Type
                              </small>
                              <div className="mt-1 d-flex flex-wrap gap-2">
                                {s?.serviceType?.length ? (
                                  s.serviceType.map((t, idx) => (
                                    <Badge key={idx} bg="light" text="dark">
                                      {t}
                                    </Badge>
                                  ))
                                ) : (
                                  <span className="text-muted">N/A</span>
                                )}
                              </div>
                            </div>

                            {/* Optional fields if your API has them; safe checks */}
                            {s?.remarks ? (
                              <div className="col-12 col-md-8">
                                <small className="text-uppercase text-muted d-block">
                                  Remarks
                                </small>
                                <div className="mt-1">{s.remarks}</div>
                              </div>
                            ) : null}

                            {s?.technician?.name ? (
                              <div className="col-12 col-md-4">
                                <small className="text-uppercase text-muted d-block">
                                  Technician
                                </small>
                                <div className="mt-1">{s.technician.name}</div>
                              </div>
                            ) : null}

                            {s?.partsUsed?.length ? (
                              <div className="col-12 col-md-8">
                                <small className="text-uppercase text-muted d-block">
                                  Parts Used
                                </small>
                                <div className="mt-1 d-flex flex-wrap gap-2">
                                  {s.partsUsed.map((p, i) => (
                                    <Badge key={i} bg="secondary">
                                      {p}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </Card.Body>
                      </Card>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <div className="text-center text-muted py-3">
            No service history available
          </div>
        )}
      </Card>
    </div>
  );
};

export default ServiceHistory;
