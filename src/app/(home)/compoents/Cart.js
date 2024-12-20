"use client";
import { fetchCart, updateItemQuantity } from "@/app/Redux/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { useRouter } from "next/navigation";
import Login from "./Login";
import CartItems from "./CartItems";




const OrderSummary = ({ totalItems, totalAmount, deliverCharge, router }) => {
  return (
    <div>
      <h5 className="fw-bold text-start">Order Summary</h5>
      <hr />
      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0 text-muted">Items in Order:</h5>
        <p className="mb-0 fw-semibold">{totalItems}</p>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0 text-muted">Subtotal:</h5>
        <p className="mb-0 fw-semibold">
          ₹&nbsp;{new Intl.NumberFormat("en-IN").format(totalAmount)}/-
        </p>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0 text-muted">Shipping:</h5>
        <p className="mb-0">Flat rate: ₹{deliverCharge}/-</p>
      </div>

      <div className="border-top border-bottom py-3 d-flex justify-content-between align-items-center">
        <h5 className="mt-2 mb-0 fw-bold">Total</h5>
        <p className="mb-0 fw-bold">
          ₹&nbsp;
          {new Intl.NumberFormat("en-IN").format(totalAmount + deliverCharge)}/-
        </p>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="filterbutton"
          onClick={() => router.push("/shipping")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

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

  return (
    <div style={{ height: "100%" }}>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="container d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          {user ? (
            <>
             <div className="top-content">
                <CartItems
                  products={products}
                  handleQtyChange={handleQtyChange}
                  updatingProduct={updatingProduct}
                />
              </div>
              <OrderSummary
                totalItems={totalItems}
                totalAmount={totalAmount}
                deliverCharge={deliverCharge}
                router={router}
              />
            </>
          ) : (
            <div>
              <h2
                className="text-center m-0"
                style={{ color: "#008AC7" }}
              >
                Please login to see your cart items.
              </h2>
              <Login />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
