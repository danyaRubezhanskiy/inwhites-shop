import clsx from "clsx";
import React, { use, useEffect, useState } from "react";

import container from "../../container.module.css";
import css from "./ProductReviews.module.css";
import { Dropdown, Input, message, Modal, Rate, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProductReviews } from "../../store/Slices/reviewSlice";
import { DownOutlined } from "@ant-design/icons";
import ReviewsFilterDropdown from "../ReviewsFilterDropdown/ReviewsFilterDropdown";
import { set } from "react-hook-form";
import TextArea from "antd/es/input/TextArea";

const ProductReviews = () => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.reviews.productReviews);

  const [showAll, setShowAll] = useState(false);
  const [sortKey, setSortKey] = useState("latest");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const visibleProducts = showAll ? reviews : reviews.slice(0, 6);

  useEffect(() => {
    dispatch(getProductReviews());
  }, [dispatch]);

  const tooggleShow = () => {
    setShowAll((prev) => !prev);
  };

  const sorted = [...visibleProducts].sort((a, b) => {
    switch (sortKey) {
      case "latest":
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      case "highest":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
    }
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <ReviewsFilterDropdown onChange={setSortKey}></ReviewsFilterDropdown>
          <button
            onClick={() => {
              showModal();
            }}
            className={css.addReviewBtn}
          >
            Write a Review
          </button>
        </div>
      </div>
      <div className={css.reviewsSection}>
        <ul className={css.reviewsList}>
          {sorted.map((review) => (
            <li key={review.id} className={css.reviewsItem}>
              <div className={css.reviewsContainer}>
                <Rate
                  defaultValue={review.rating}
                  disabled={true}
                  allowHalf={true}
                />
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
      <Modal closable="true" open={isModalOpen} onCancel={closeModal}>
        <div className={css.modalDiv}>
          <h3>Leave your comment:</h3>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <Rate
            allowHalf
            defaultValue={rating}
            onChange={(value) => setRating(value)}
          />
          <TextArea
            rows={4}
            placeholder="Write your comment..."
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </Modal>
    </section>
  );
};

export default ProductReviews;
