import React, { useEffect, useState } from "react";

import container from "../../../container.module.css";
import css from "./NewArrivals.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../store/Slices/productSlice";
import { Rate } from "antd";
import clsx from "clsx";

function NewArrivals() {
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);

  const products = useSelector((state) => state.products.items);

  const visibleProducts = showAll ? products : products.slice(0, 4);
useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]
  );

  const tooggleShow = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className={clsx(container.container, css.section)}>
      <h2 className={css.title}>New Arrivals</h2>
      <ul className={css.list}>
        {visibleProducts.map((product) => (
          <li key={product.id} className={css.listItem}>
            <div className={css.card}>
              <img
                className={css.img}
                src={product.image}
                alt={product.title}
              />
            </div>
            <p className={css.itemName}>
              {product.title.length > 20
                ? product.title.slice(0, 20) + "..."
                : product.title}
            </p>
            <Rate
              defaultValue={product.rating.rate}
              disabled={true}
              allowHalf={true}
            />
            <p className={css.itemPrice}>${Math.round(product.price)}</p>
          </li>
        ))}
      </ul>
      <button className={css.btn} onClick={tooggleShow}>
        {!showAll ? "View All" : "Hide All"}
      </button>
    </section>
  );
}

export default NewArrivals;
