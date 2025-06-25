import clsx from "clsx";
import React, { useEffect, useState } from "react";

import container from "../../container.module.css";
import css from "./ProductReviews.module.css";
import { Dropdown, Rate, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProductReviews } from "../../store/Slices/reviewSlice";
import { DownOutlined } from "@ant-design/icons";

const ProductReviews = () => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.reviews.productReviews);

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? reviews : reviews.slice(0, 6);

  useEffect(() => {
    dispatch(getProductReviews());
  }, [dispatch]);

  const tooggleShow = () => {
    setShowAll((prev) => !prev);
  };

  const sortOptions = [
    { label: "Latest", key: "latest" },
    { label: "Oldest", key: "oldest" },
    { label: "Highest Rating", key: "highest" },
    { label: "Lowest Rating", key: "lowest" },
  ];

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
          <Dropdown
            menu={{ items, className: "custom-dropdown-menu" }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Click me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <button className={css.addReviewBtn}>Write a Review</button>
        </div>
      </div>
      <div className={css.reviewsSection}>
        <ul className={css.reviewsList}>
          {visibleProducts.map((review) => (
            <li key={review.id} className={css.reviewsItem}>
              <div className={css.reviewsContainer}>
                <Rate defaultValue={5} disabled={true} allowHalf={true} />
                <h3 className={css.reviewsName}>
                  {review.name}
                  <svg width="20" height="20">
                    <use href="../../../../public/icons/Review.svg#galochka" />
                  </svg>
                </h3>
                <p className={css.reviewsText}>{review.comment}</p>
                <p className={css.reviewsDate}>{review.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            tooggleShow();
          }}
          className={css.viewBtn}
        >
          {!showAll ? "Load More Reviews" : "Hide All"}
        </button>
      </div>
    </section>
  );
};

export default ProductReviews;
