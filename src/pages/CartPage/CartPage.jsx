import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import { useSelector } from "react-redux";
import BreadcrumbComp from "../../components/Breadcrumb/BreadcrumbComp.jsx";
import container from "../../container.module.css";
import css from "./CartPage.module.css";
import Counter from "../../components/Counter/Counter.jsx";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    console.log(cartItems.color);
  });

  return (
    <div>
      <Header></Header>
      <div className={container.container}>
        <BreadcrumbComp category={"cart"}></BreadcrumbComp>
        <h2 className={css.title}>YOUR CART</h2>
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
                <button className={css.deleteBtn}>delete</button>
                <div className={css.coutnDiv}>
                  <Counter quantity={item.quantity} />
                </div>
                {/* <div className={css.countContainer}>
                  <button
                    className={css.countBtn}
                    onClick={() => minusQuanity()}
                  >
                    <svg width="16px" height="16px">
                      <use href="../../../public/icons/count.svg#icon-minus" />
                    </svg>
                  </button>
                  <p>{selectedQuantity}</p>
                  <button
                    onClick={() => setselectedQuantity(selectedQuantity + 1)}
                    className={css.countBtn}
                  >
                    <svg width="16px" height="16px">
                      <use href="../../../public/icons/count.svg#icon-plus" />
                    </svg>
                  </button>
                </div> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
