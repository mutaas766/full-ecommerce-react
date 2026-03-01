import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartPage from "../pages/CartPage"; // make sure path is correct



const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top" style={{ backgroundColor: "#ff69b4" }}>
      <div className="container">
        <h2 className="navbar-brand">Ikram</h2>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item"><a href="#" className="nav-link">Electronic</a></li>
          <li className="nav-item">
            <Link to="/Women" className="nav-link">Women</Link>
          </li>
          <li className="nav-item"><a href="#" className="nav-link">Products</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Kids</a></li>
        </ul>

        <div className="d-flex align-items-center">
          {/* Search box */}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              aria-label="Search"
            />
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
          </div>

          {/* CART ICON */}
          <div className="position-relative ms-3" onClick={() => setShowCart(true)} style={{ cursor: "pointer" }}>
            <i className="bi bi-cart fs-4"></i>
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* CART MODAL */}
          {showCart && <CartPage closeCart={() => setShowCart(false)} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;