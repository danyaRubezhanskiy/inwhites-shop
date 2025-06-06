import React, { useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    console.log(cartItems.color);
  });

  return (
    <div>
      <Header></Header>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p>{item.color}</p>
            <p>{item.size}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
