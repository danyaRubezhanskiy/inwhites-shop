import clsx from "clsx";
import React from "react";

import container from "../../container.module.css";
import css from "./ProductReviews.module.css";

const ProductReviews = () => {
  return (
    <section className={clsx(container.container, css.section)}>
      <div className={css.reviewsAllDiv}>
        <span className={css.span}>
          All Reviews <p className={css.quantityNumber}>(123)</p>
        </span>
        <div className={css.filterDiv}>
          <svg width="48" height="48px">
            <use href="../../../public/icons/filter.svg#filter"></use>
          </svg>
          <button className={css.addReviewBtn}>Write a Review</button>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
