"use client";
import { fetchCart, updateItemQuantity } from "@/app/Redux/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { Row } from "react-bootstrap";
import productImage from "@/asserts/Ace13.png";
import { RiSubtractLine } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import Image from "next/image"; 
import { useRouter } from "next/navigation";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const { products, loading } = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const deliverCharge = useSelector((state) => state.cart.deliverCharge);
  const totalItems = useSelector((state) => state.cart.totalItems);

  const [updatingProduct, setUpdatingProduct] = useState(null);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchCart(user.id));
    }
  }, [user?.id, dispatch]);

  const handleQtyChange = async (productName, newQuantity) => {
    if (!user?.id) {
      router.push("/Signin");
      return;
    }

    try {
      setUpdatingProduct(productName);
      await dispatch(
        updateItemQuantity({ userId: user.id, productName, quantity: newQuantity })
      ).unwrap();
      setUpdatingProduct(null);
    } catch (error) {
      console.error("Failed to update quantity:", error);
      setUpdatingProduct(null);
    }
  };

  return (
   <div style={{height:'100%'}}>
  {loading ? (
        <>
        <Loading />
        </>
      ) : (
      
        <div className="container d-flex flex-column justify-content-between" style={{height:'100%'}}>
        <div  className="top-content">
          <Row className="d-flex flex-column justify-content-between align-items-center">
            {products?.length > 0 ? (
              products.map((item, index) => (
                <div key={index}>
                  <h5>{item.productName}</h5>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Image
                      style={{ borderRadius: "20px", border: "1px solid #000" }}
                      alt="product image"
                      width={100}
                      height={100}
                      src={productImage}
                    />
                    <div className="cartqty">
                      <button
                        className="cartqtybutton"
                        
                        onClick={() => handleQtyChange(item.productName, item.quantity - 1)}
                        disabled={item.quantity <= 1 || updatingProduct === item.productName}
                      >
                        {updatingProduct === item.productName ? <Loading size="sm" /> : <RiSubtractLine />}
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="cartqtybutton"
                        type="button"
                        onClick={() => handleQtyChange(item.productName, item.quantity + 1)}
                        disabled={updatingProduct === item.productName}
                      >
                        {updatingProduct === item.productName ? <Loading size="sm" /> : <IoAddSharp />}
                      </button>
                    </div>
                    <p style={{ fontWeight: "600" }} className="mb-0">
                      ₹ {new Intl.NumberFormat("en-IN").format(item.price)}/-
                    </p>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <p>No items in the cart.</p>
            )}
          </Row>
        </div>
        
        <div>
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

    <div className="d-flex justify-content-center mt-4">
      <button className="filterbutton" onClick={() => router.push("/shipping")}>
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>


      </div>
        
      )
    }
   </div>
   
  );
};

export default CartPage;
