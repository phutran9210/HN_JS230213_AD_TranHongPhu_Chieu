import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div>{item.title}</div>
          <div>{item.price} USD</div>
          <div>Số lượng: {item.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
