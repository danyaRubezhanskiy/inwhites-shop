import React, { use, useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import BreadcrumbComp from "../../components/Breadcrumb/BreadcrumbComp.jsx";
import container from "../../container.module.css";
import css from "./CartPage.module.css";
import Counter from "../../components/Counter/Counter.jsx";
import { removeFromCart } from "../../store/Slices/cartSlice.js";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import Footer from "../../components/Footer/Footer.jsx";

const CartPage = () => {
  const [promoCode, setPromoCode] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const cartItems = useSelector((state) => state.cart.items);
  const validPromoCodes = ["SALE10", "DISCOUNT20", "FREESHIP"];

  useEffect(() => {
    console.log(cartItems);
    if (cartItems.length != 0) {
      setDeliveryPrice(15);
    }
  }, [cartItems]);

  const dispatch = useDispatch();

  const handleApplyPromo = () => {
    if (validPromoCodes.includes(promoCode)) {
      toast.success("Promo code has been applied");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const deliveryFee = deliveryPrice;
  const total = subtotal + deliveryFee;

  return (
    <div>
      <Header></Header>
      <div className={container.container}>
        <BreadcrumbComp category={"cart"}></BreadcrumbComp>
        {cartItems.length === 0 ? (
          <div className={css.emptyContainer}>
            <h3 className={css.emptyTitle}>Your cart is empty</h3>
          </div>
        ) : (
          <>
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
                          Size:{" "}
                          <span className={css.itemSizeOp}>{item.size}</span>
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
                    <span className={css.spanCon}>
                      Subtotal{" "}
                      <p className={css.spanText}>${subtotal.toFixed(2)}</p>
                    </span>
                  </li>
                  <li className={css.orderSummItem}>
                    <span className={css.spanCon}>
                      Delivery Fee{" "}
                      <p className={css.spanText}>${deliveryFee}</p>
                    </span>
                  </li>
                </ul>
                <span className={clsx(css.spanCon, css.total)}>
                  Total <p className={css.spanText}>${total.toFixed(2)}</p>
                </span>
                <div className={css.form}>
                  <div className={css.inputWrapper}>
                    <input
                      className={css.input}
                      placeholder="Add promo code"
                      onChange={(e) => {
                        setPromoCode(e.target.value);
                      }}
                    ></input>
                    <svg className={css.icon} width="22" height="22">
                      <use href="../../../public/icons/promoCode.svg#promo" />
                    </svg>
                  </div>
                  <button
                    onClick={() => handleApplyPromo()}
                    className={css.promoBtn}
                    type="submit"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CartPage;
