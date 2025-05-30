import React, { useEffect, useRef } from "react";

import css from "./Reviews.module.css";
import clsx from "clsx";
import container from "../../../container.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./ReviewSlider.css";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../../store/Slices/reviewSlice";
import { Rate } from "antd";

const Reviews = () => {
  const swiperRef = useRef(null);

  const items = useSelector((state) => state.reviews.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <div className={clsx(container.container, css.wrapper)}>
        <h2 className={css.title}>OUR HAPPY CUSTOMERS</h2>
        <div className={css.navigationWrapper}>
          <button
            className={css.btn}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg width="20" height="16">
              <use href="../../../../public/icons/Review.svg#arrowLeft" />
            </svg>
          </button>
          <button
            className={css.btn}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg width="20" height="16">
              <use href="../../../../public/icons/Review.svg#arrowRight" />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        className="custom-swiper"
      >
        {items.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card">
              <Rate
                defaultValue={review.rating}
                disabled={true}
                allowHalf={true}
              />
              <h3 className={css.name}>
                {review.name}{" "}
                <svg width="20" height="20">
                  <use href="../../../../public/icons/Review.svg#galochka" />
                </svg>
              </h3>
              <p className={css.text}>{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
