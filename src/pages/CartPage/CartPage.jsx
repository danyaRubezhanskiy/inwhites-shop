import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import BreadcrumbComp from "../../components/Breadcrumb/BreadcrumbComp.jsx";
import container from "../../container.module.css";
import css from "./CartPage.module.css";
import Counter from "../../components/Counter/Counter.jsx";
import { removeFromCart } from "../../store/Slices/cartSlice.js";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";

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
                <span className={css.spanCon}>
                  Subtotal <p className={css.spanText}>$551</p>
                </span>
              </li>
              <li className={css.orderSummItem}>
                <span className={css.spanCon}>
                  Delivery Fee <p className={css.spanText}>$15</p>
                </span>
              </li>
            </ul>
            <span className={clsx(css.spanCon, css.total)}>
              Total <p className={css.spanText}>$43242</p>
            </span>
            <Formik>
              <Form  className={css.formWrapper}>
                <div className={css.inputWrapper}>
                  <Field
                    className={css.input}
                    placeholder="Add promo code"
                  ></Field>
                  <svg className={css.icon} width="22" height="22">
                    <use href="../../../public/icons/promoCode.svg#promo" />
                  </svg>
                </div>
                <button className={css.promoBtn} type="submit">
                  Apply
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
