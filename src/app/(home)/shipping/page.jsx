"use client"
import { fetchCart } from '@/app/Redux/cartSlice';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import "@/app/style/Shipping.css"
import EditShippingAddress from '../compoents/EditShippingAddress';
import ShippingAddress from '../compoents/ShippingAddress';

const Page = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { products, loading } = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const deliverCharge = useSelector((state) => state.cart.deliverCharge);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const [activeSection, setActiveSection] = useState("DELIVERY"); // Initial active section is LOGIN

  const handleHeadClick = (section) => {
    setActiveSection(section);
  };

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const handleRadioChange = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const [isOpen, setIsOpen] = useState(false); // State to track whether the body section is open or closed

  const toggleBodySection = () => {
    setIsOpen(!isOpen); // Toggle the state value between true and false
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };


    useEffect(() => {
      if (user?.id) {
        dispatch(fetchCart(user.id));
      }
    }, [user?.id, dispatch]);
  

  return (
    <div className='container'>
      <Row>
        <Col md={8}>
        
        <div>
              <div>
                <div className="cardshipping">
                  <div
                    className={`headsection ${
                      activeSection === "DELIVERY" ? "active" : ""
                    }`}
                  >
                    <h5  className='m-0'>DELIVERY ADDRESS</h5>
                  </div>
                  {activeSection === "DELIVERY" && (
                    <div className="bodysection">
                      <div>
                       
                      </div>

                      <button
                        className="bodybutton"
                        onClick={() => setActiveSection("ORDER")}
                      >
                        DELIVER HERE
                      </button>
                    </div>
                  )}
                </div>

                {activeSection === "DELIVERY" && (
                  <div>
                    <div className="cardshipping">
                      <div
                        style={{ color: "#0082bc", cursor: "pointer" }}
                        className="d-flex p-2 align-items-center"
                        onClick={toggleBodySection}
                      >
                        {isOpen ? <IoMdRemove /> : <IoMdAdd />} &nbsp;
                        {isOpen ? "CANCEL" : "Add a new address"}{" "}
                      </div>

                      {isOpen && (
                        <div className="bodysection">
                          <div>
                            {isEditing ? (
                              <EditShippingAddress
                                onCancel={handleCancelEdit}
                              />
                            ) : (
                              <ShippingAddress onEditClick={handleEditClick} />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="cardshipping">
                  <div
                    className={`headsection ${
                      activeSection === "ORDER" ? "active" : ""
                    }`}
                  >
                    <h5 className='m-0'>ORDER SUMMARY</h5>
                  </div>
                  {activeSection === "ORDER" && (
                    <div className="bodysection">
                      <h1>hello</h1>
                      <button
                        className="bodybutton"
                        onClick={() => setActiveSection("PAYMENT")}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>

                <div className="cardshipping">
                  <div
                    className={`headsection ${
                      activeSection === "PAYMENT" ? "active" : ""
                    }`}
                  >
                    <h5 className='m-0'>PAYMENT OPTION</h5>
                  </div>
                  {activeSection === "PAYMENT" && (
                    <div className="bodysection">
                      <h1>hello</h1>
                      <button
                        className="bodybutton"
                        onClick={() => setActiveSection("CONFIRMATION")}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
        
        </Col>
        <Col md={4}>

        <div >
    <h5 className="fw-bold text-start">Order Summary</h5>
    <hr />
    <div className="d-flex justify-content-between mb-3">
      <h5 className="mb-0 text-muted">Items in Order:</h5>
      <p className="mb-0 fw-semibold">{totalItems}</p>
    </div>

    <div className="d-flex justify-content-between mb-3">
      <h5 className="mb-0 text-muted">Subtotal:</h5>
      <p className="mb-0 fw-semibold">₹&nbsp;{new Intl.NumberFormat("en-IN").format(totalAmount)}/-</p>
    </div>

    <div className="d-flex justify-content-between mb-3">
      <h5 className="mb-0 text-muted">Shipping:</h5>
      <p className="mb-0">Flat rate: ₹{deliverCharge}/-</p>
    </div>

    <div className="border-top border-bottom py-3 d-flex justify-content-between align-items-center">
      <h5 className="mt-2 mb-0 fw-bold">Total</h5>
      <p className="mb-0 fw-bold">₹&nbsp;{new Intl.NumberFormat("en-IN").format(totalAmount + deliverCharge)}/-</p>
    </div>

  </div>
        </Col>
      </Row>
      
    </div>
  )
}
 
export default Page
