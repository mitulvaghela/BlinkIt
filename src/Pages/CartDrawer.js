import React, { useMemo } from "react";

import { getTotalPrice } from "../helpers/cartUtils";

const CartDrawer = (props) => {
  const {
    setShowCart,
    cart = [],
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveFromCart,
  } = props;

  const total = useMemo( () => getTotalPrice(cart),[cart]);
  return (
    <div className="cart-drawer">
      <div className="cart-header">
        <button onClick={() => setShowCart(false)} className="back-btn">
          {` Back`}{" "}
        </button>
        <h3> Order Details</h3>
      </div>
      {cart.length === 0 && <p> Your cart is empty.</p>}
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <h4> {product.name}</h4>
          <p>
            {" "}
            {product.price} x {product.quantity}
          </p>
          <div>
            <button
              onClick={() => handleIncreaseQuantity(product.id)}
              className="increase-btn"
            >
              +
            </button>
            <button
              onClick={() => handleDecreaseQuantity(product.id)}
              className="decrease-btn"
            >
              -
            </button>
            <button
              onClick={() => handleRemoveFromCart(product.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {cart.length > 0 && <div className="total">Total : INR {total}</div>}
    </div>
  );
};

export default CartDrawer;
