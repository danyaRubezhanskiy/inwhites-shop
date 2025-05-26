import React, { useEffect } from "react";

import container from "../../../container.module.css";
import css from "./NewArrivals.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../store/cartSlice";

function NewArrivals() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <section className={container.container}>
      <h2 className={css.title}>New Arrivals</h2>
      <ul className={css.list}>
        {products.map((product) => (
          <li key={product.id} className={css.listItem}>
            <div className={css.card}>
              <img className={css.img} src={product.image} alt="" />
            </div>
            <p className={css.itemName}>{product.title}</p>
            <p className={css.itemPrice}>${Math.round(product.price)}</p>
          </li>
        ))}
      </ul>
      <button className={css.btn}>View All</button>
    </section>
  );
}

export default NewArrivals;
