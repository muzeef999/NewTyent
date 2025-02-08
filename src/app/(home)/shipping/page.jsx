"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import {
  deleteProductAction,
  fetchCart,
  updateItemQuantity,
} from "@/app/Redux/cartSlice";
import "@/app/style/Shipping.css";
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import dynamic from "next/dynamic";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import OrderComponent from "./OrderComponent";
import { useRouter } from "next/navigation";

const CartItems = dynamic(() => import("@/app/(home)/compoents/CartItems"), {
  srr: false,
});
const ShippingAddress = dynamic(
  () => import("@/app/(home)/compoents/ShippingAddress"),
  { srr: false }
);
const EditShippingAddress = dynamic(
  () => import("@/app/(home)/compoents/EditShippingAddress"),
  { srr: false }
);
const Loading = dynamic(() => import("@/app/(home)/compoents/Loading"), {
  srr: false,
});

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);
  const { products, loading, totalAmount, deliverCharge, totalItems } =
    useSelector((state) => state.cart);



  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState("flush-collapseOne");
  const [isSecondAccordionActive, setIsSecondAccordionActive] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [updatingProduct, setUpdatingProduct] = useState(null);
  const [totalItemsShows, setTotalItemsShows] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      return; 
    }
  
    if (totalItems === 0 && !loading) {
      router.push("/"); 
    }
  }, [totalItems, products, loading, router]);

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: shippingData, isLoading } = useSWR(
    user ? `/api/shipping/${user._id}` : null,
    fetcher
  );

  // **Fetch Cart Data on User Change**
  useEffect(() => {
    if (user?.id) {
      dispatch(fetchCart(user.id));
    }
  }, [user?.id, dispatch]);

  // **Ensure Default Address Selection**
  useEffect(() => {
    if (shippingData?.shippingAddresses?.length > 0) {
      const firstAddress = shippingData.shippingAddresses[0]?.addresses[0];
      if (firstAddress) {
        setSelectedAddressId(firstAddress._id);
        setSelectedAddress(firstAddress);
      }
    }
  }, [shippingData]);

  // **Handle Address Selection**
  const handleAddressSelect = (id) => {
    const address = shippingData?.shippingAddresses
      ?.flatMap((shipping) => shipping.addresses)
      ?.find((addr) => addr._id === id);

    if (address) {
      setSelectedAddressId(id);
      setSelectedAddress(address);
    }
  };

  const handleAccordionClick = (accordionId) => {
    if (accordionId === "flush-collapseTwo") {
      setIsSecondAccordionActive((prev) => !prev);
    }
    setActiveAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  // **Handle Accordion Toggle**
  const handleAccordionChange = (id) => {
    setActiveAccordion((prev) => (prev === id ? "" : id));
  };

  // **Handle Payment Selection**
  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
  };

  // **Handle Deliver Here Click**
  const handleDeliverHereClick = (address) => {
    setSelectedAddress(address);
    setActiveAccordion("flush-collapseThree");
  };

  // **Handle Total Items Selection**
  const handleitemsHereClick = (totalItems) => {
    setTotalItemsShows(totalItems);
    setActiveAccordion("flush-collapseFour");
  };

  // **Handle Edit Accordion Close**
  const handleEditAccordionClose = () => {
    setEditingAddressId(null);
  };

  // **Handle Quantity Change**
  const handleQtyChange = async (productName, newQuantity) => {
    if (!user?.id) {
      router.push("/Signin");
      return;
    }

    try {
      setUpdatingProduct(productName);
      await dispatch(
        updateItemQuantity({
          userId: user.id,
          productName,
          quantity: newQuantity,
        })
      ).unwrap();
      setUpdatingProduct(null);
    } catch (error) {
      console.error("Failed to update quantity:", error);
      setUpdatingProduct(null);
    }
  };

  // **Handle Product Deletion**
  const deleteProduct = async (productName) => {
    try {
      if (!user?.id) {
        console.error("User is not logged in.");
        return;
      }
      await dispatch(
        deleteProductAction({ userId: user.id, productName })
      ).unwrap();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  // **Handle Show More/Show Less Toggle**
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // **Show Loading if User or Total Amount is Missing**
  if (!user || !totalAmount) return <Loading />;

  return (
    <div className="container">
      <Row>
        <Col xl={8}>
          <div
            className="accordion accordion-flush"
            id="accordionPanelsStayOpenExample"
          >
            {/* Accordion Item #1 */}
            <div className="accordion-item">
              <h2 className="accordion-header m-0" id="flush-headingOne">
                <button
                  className={`accordion-button ${
                    activeAccordion === "flush-collapseOne"
                      ? "active-header"
                      : ""
                  }`}
                  type="button"
                >
                  <span className="steps">1</span> &nbsp;&nbsp;
                  <b>DELIVERY ADDRESS</b>
                </button>

                {selectedAddress && activeAccordion !== "flush-collapseOne" && (
                  <span
                    className="ml-3 d-flex justify-content-between align-items-center"
                    style={{ fontSize: "16px", color: "#000" }}
                  >
                    <div style={{ marginLeft: "12px" }}>
                      {selectedAddress.fullName}, {selectedAddress.address},{" "}
                      {selectedAddress.city}
                    </div>
                    <button
                      className="m-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      onClick={() => handleAccordionChange("flush-collapseOne")}
                      style={{
                        backgroundColor: "#FFF",
                        border: "1px solid #e0e0e0",
                        color: "#008AC7",
                        padding: "8px 18px",
                      }}
                    >
                      CHANGE
                    </button>
                  </span>
                )}
              </h2>

              <div
                className={`accordion-collapse collapse ${
                  activeAccordion === "flush-collapseOne" ? "show" : ""
                }`}
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionPanelsStayOpenExample"
              >
                <div className="accordion-body m-0 p-0">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : shippingData?.shippingAddresses?.length > 0 ? (
                    <>
                      {shippingData.shippingAddresses.map((shippingAddress) => (
                        <div key={shippingAddress._id} className="m-0">
                          {shippingAddress.addresses
                            .slice(0, 3)
                            .map((address) => (
                              <div
                                key={address._id}
                                className={`address-card align-items-start ${
                                  selectedAddressId === address._id
                                    ? "selected"
                                    : ""
                                }`}
                              >
                                {editingAddressId === address._id ? (
                                  <EditShippingAddress
                                    editAddress={address}
                                    handleEditAccordionClose={() =>
                                      setEditingAddressId(null)
                                    }
                                  />
                                ) : (
                                  <div className="d-flex align-items-center">
                                    <div className="flex-grow-1 d-flex align-items-start m-3">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="addressRadio"
                                          id={address._id}
                                          onChange={() =>
                                            handleAddressSelect(address._id)
                                          }
                                          checked={
                                            selectedAddressId === address._id
                                          }
                                        />
                                      </div>
                                      <div className="w-100 pl-3">
                                        <p className="font-weight-bold">
                                          {address.fullName} &nbsp;{" "}
                                          {address.mobileNumber}
                                        </p>
                                        <p>
                                          Address: {address.address},{" "}
                                          {address.city}, {address.postalCode}
                                        </p>
                                        <p className="m-0">
                                          Country: {address.country}
                                        </p>
                                        <button
                                          className="saveanddelivery m-3"
                                          type="button"
                                          onClick={() =>
                                            handleDeliverHereClick(address)
                                          }
                                        >
                                          DELIVER HERE
                                        </button>
                                      </div>
                                    </div>
                                    <div className="w-10 float-end">
                                      <p
                                        className="text-end m-4"
                                        onClick={() =>
                                          setEditingAddressId(address._id)
                                        }
                                        style={{
                                          color: "#008AC7",
                                          cursor: "pointer",
                                          fontSize: "18px",
                                        }}
                                      >
                                        Edit
                                      </p>
                                    </div>
                                  </div>
                                )}
                                <hr className="m-0" />
                              </div>
                            ))}

                          {showAll &&
                            shippingAddress.addresses
                              .slice(3)
                              .map((address) => (
                                <div
                                  key={address._id}
                                  className={`address-card align-items-start ${
                                    selectedAddressId === address._id
                                      ? "selected"
                                      : ""
                                  }`}
                                >
                                  {editingAddressId === address._id ? (
                                    <EditShippingAddress
                                      editAddress={address}
                                      handleEditAccordionClose={() =>
                                        setEditingAddressId(null)
                                      }
                                    />
                                  ) : (
                                    <div className="d-flex align-items-center">
                                      <div className="flex-grow-1 d-flex align-items-start m-3">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="addressRadio"
                                            id={address._id}
                                            onChange={() =>
                                              handleAddressSelect(address._id)
                                            }
                                            checked={
                                              selectedAddressId === address._id
                                            }
                                          />
                                        </div>
                                        <div className="w-100 pl-3">
                                          <p className="font-weight-bold">
                                            {address.fullName} &nbsp;{" "}
                                            {address.mobileNumber}
                                          </p>
                                          <p>
                                            Address: {address.address},{" "}
                                            {address.city}, {address.postalCode}
                                          </p>
                                          <p className="m-0">
                                            Country: {address.country}
                                          </p>
                                          <button
                                            className="saveanddelivery m-3"
                                            type="button"
                                            onClick={() =>
                                              handleDeliverHereClick(address)
                                            }
                                          >
                                            DELIVER HERE
                                          </button>
                                        </div>
                                      </div>
                                      <div className="w-10 float-end">
                                        <p
                                          className="text-end m-4"
                                          onClick={() =>
                                            setEditingAddressId(address._id)
                                          }
                                          style={{
                                            color: "#008AC7",
                                            cursor: "pointer",
                                            fontSize: "18px",
                                          }}
                                        >
                                          Edit
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                  <hr className="m-0" />
                                </div>
                              ))}

                          {/* Show More / Show Less Button */}
                          {shippingAddress.addresses.length > 3 && (
                            <button
                              className="btn btn-link"
                              onClick={() => setShowAll(!showAll)}
                              style={{
                                textAlign: "left",
                                textDecoration: "none",
                                color: "#008AC7",
                              }}
                            >
                              {showAll
                                ? "Show fewer addresses"
                                : `View all ${shippingAddress.addresses.length} addresses`}
                            </button>
                          )}
                        </div>
                      ))}
                    </>
                  ) : (
                    <p className="text-center p-3">No delivery addresses available.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Accordion Item #2 */}
            <div className="accordion-item">
              <h2 className="accordion-header m-0" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  onClick={() => handleAccordionClick("flush-collapseTwo")}
                >
                  <span style={{ color: "#008AC7" }}>
                    {" "}
                    {isSecondAccordionActive ? (
                      <>
                        <IoMdRadioButtonOn /> Add a new address
                      </>
                    ) : (
                      <>
                        <IoMdAdd /> Add a new address
                      </>
                    )}
                  </span>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className={`accordion-collapse collapse ${
                  activeAccordion === "flush-collapseTwo" ? "show" : ""
                }`}
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionPanelsStayOpenExample"
              >
                <ShippingAddress handleAccordionClick={handleAccordionClick} />
              </div>
            </div>

            {/* Accordion Item #3 */}
            <div className="accordion-item">
              <h2 className="accordion-header m-0" id="flush-headingThree">
                <button
                  className={`accordion-button ${
                    activeAccordion === "flush-collapseThree"
                      ? "active-header"
                      : ""
                  }`}
                  type="button"
                >
                  <span className="steps">2</span> &nbsp;&nbsp;
                  <b>ORDER SUMMARY</b>
                </button>

                {/* Show the "CHANGE" button only if the body is not active */}
                {totalItemsShows &&
                  activeAccordion !== "flush-collapseThree" && (
                    <span
                      className="ml-3 d-flex justify-content-between align-items-center"
                      style={{ fontSize: "16px", color: "#000" }}
                    >
                      <div style={{ marginLeft: "12px" }}>
                        {totalItems}&nbsp;{totalItems === 1 ? "Item" : "Items"}
                      </div>
                      <button
                        className="m-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        onClick={() =>
                          handleAccordionChange("flush-collapseThree")
                        }
                        style={{
                          backgroundColor: "#FFF",
                          border: "1px solid #e0e0e0",
                          color: "#008AC7",
                          padding: "8px 18px",
                        }}
                      >
                        CHANGE
                      </button>
                    </span>
                  )}
              </h2>

              <div
                id="flush-collapseThree"
                className={`accordion-collapse collapse ${
                  activeAccordion === "flush-collapseThree" ? "show" : ""
                }`}
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionPanelsStayOpenExample"
              >
                <div className="accordion-body">
                  <CartItems
                    products={products}
                    handleQtyChange={handleQtyChange}
                    updatingProduct={updatingProduct}
                    deleteProduct={deleteProduct}
                  />
                </div>

                <button
                  className="saveanddelivery m-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                  onClick={() => handleitemsHereClick(totalAmount)}
                >
                  CONTINUE
                </button>
              </div>
            </div>

            {/* Accordion Item #4 */}
            <div className="accordion-item">
              <h2 className="accordion-header m-0" id="flush-headingFour">
                <button
                  className={`accordion-button ${
                    activeAccordion === "flush-collapseFour"
                      ? "active-header"
                      : ""
                  }`}
                >
                  <span className="steps">3</span> &nbsp;&nbsp;
                  <b>PAYMENT OPTION</b>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className={`accordion-collapse collapse ${
                  activeAccordion === "flush-collapseFour" ? "show" : ""
                }`}
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">

                  <OrderComponent
                    selectedAddress={selectedAddress}
                    paymentMethod={paymentMethod}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* Sidebar Summary */}
        <Col xl={4}>
        <div style={{position:'relative'}}>
          <div className="customPriceCard">
            <h5 className="fw-bold text-start" style={{ color: "#878787" }}>
              Order Summary
            </h5>
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0 text-muted">Items in Order:</h5>
              <p className="mb-0">{totalItems}</p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0 text-muted">Subtotal:</h5>
              <p className="mb-0 ">
                ₹&nbsp;{new Intl.NumberFormat("en-IN").format(totalAmount)}/-
              </p>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0 text-muted">Shipping:</h5>
              <p className="mb-0">Flat rate: ₹{deliverCharge}/-</p>
            </div>
            <div className="border-top  py-3 d-flex justify-content-between align-items-center">
              <h5 className="mt-2 mb-0 fw-bold">Total</h5>
              <p className="mb-0 fw-bold">
                ₹&nbsp;
                {new Intl.NumberFormat("en-IN").format(
                  totalAmount + deliverCharge
                )}
                /-
              </p>
            </div>
          </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
