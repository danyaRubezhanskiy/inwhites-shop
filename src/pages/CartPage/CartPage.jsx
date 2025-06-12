import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import BreadcrumbComp from "../../components/Breadcrumb/BreadcrumbComp.jsx";
import container from "../../container.module.css";
import css from "./CartPage.module.css";
import Counter from "../../components/Counter/Counter.jsx";
import { removeFromCart } from "../../store/Slices/cartSlice.js";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    console.log(cartItems.color);
  });

  const dispatch = useDispatch();

  return (
    <div>
      <Header></Header>
      <div className={container.container}>
        <BreadcrumbComp category={"cart"}></BreadcrumbComp>
        <h2 className={css.title}>YOUR CART</h2>
        <div className={css.yourCartDiv}>
          <div className={css.cartDiv}>
            <ul className={css.cartList}>
              {cartItems.map((item, index) => (
                <li className={css.cartItem} key={index}>
                  <img className={css.img} src={item.image} alt="" />
                  <div className={css.itemDetails}>
                    <h3 className={css.itemName}>{item.title}</h3>
                    <p className={css.itemSize}>
                      Size: <span className={css.itemSizeOp}>{item.size}</span>
                    </p>
                    <div className={css.itemColor}>
                      Color:{" "}
                      <div
                        className={css.color}
                        style={{ background: `${item.color}` }}
                      ></div>
                    </div>
                    <p className={css.itemPrice}>${item.price}</p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(index))}
                    className={css.deleteBtn}
                  >
                    <svg width="18px" height="19.5px">
                      <use href="../../../public/icons/backet.svg#backet" />
                    </svg>
                  </button>
                  <div className={css.coutnDiv}>
                    <Counter quantity={item.quantity} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.orderSumm}>
            <h3 className={css.orderSummTitle}>Order Summary</h3>
            <ul className={css.orderSummList}>
              <li className={css.orderSummItem}>
                <p>Subtotal</p>
                <p>$551</p>
              </li>
              <li className={css.orderSummItem}>
                <p>Delivery Fee</p>
                <p>$15</p>
              </li>
              <li className={css.orderSummItem}>
                <p>Total</p>
                <p>$43242</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
