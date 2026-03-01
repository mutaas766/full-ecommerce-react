import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = ({ closeCart }) => {
  const { cartItems,removeFromCart  } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [currency, setCurrency] = useState("");

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className="cart-modal bg-light p-4 border rounded shadow"
      style={{
        position: "fixed",
        top: "10%",
        right: "10%",
        width: "400px",
        zIndex: 9999,
      }}
    >
      <button className="btn btn-danger mb-3" onClick={closeCart}>Close</button>

      <h4>Cart Items</h4>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group mb-3">
         {cartItems.map((item, idx) => (
  <li
    key={idx}
    className="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>
      {item.name} - ${item.price.toFixed(2)}
    </span>

    <button
      className="btn btn-sm btn-outline-danger"
      onClick={() => removeFromCart(idx)}
    >
      Remove
    </button>
  </li>
))}
        </ul>
      )}

      <h5>Total: ${total.toFixed(2)}</h5>

      {!paymentMethod && (
        <div>
          <h6>Select Payment Method:</h6>
          <button className="btn btn-primary me-2" onClick={() => setPaymentMethod("Zaad")}>Zaad</button>
          <button className="btn btn-primary me-2" onClick={() => setPaymentMethod("Solteco")}>Solteco</button>
          <button className="btn btn-primary" onClick={() => setPaymentMethod("Somtel (EDAHAB)")}>Somtel (EDAHAB)</button>
        </div>
      )}

      {paymentMethod && !currency && (
        <div className="mt-3">
          <h6>Payment Method: {paymentMethod}</h6>
          <p>Choose Currency:</p>
          <button className="btn btn-success me-2" onClick={() => setCurrency("Dollar")}>Dollar</button>
          <button className="btn btn-success" onClick={() => setCurrency("Shilling")}>Shilling</button>
        </div>
      )}

      {paymentMethod && currency && (
        <div className="mt-3">
          <h6>Payment: {paymentMethod} - {currency}</h6>
          <p>
            Total: {currency === "Shilling" ? (total * 11000).toLocaleString() + " Sh" : "$" + total.toFixed(2)}
          </p>
          <button className="btn btn-danger" onClick={() => { alert("Payment Completed!"); closeCart(); }}>
            Confirm Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;