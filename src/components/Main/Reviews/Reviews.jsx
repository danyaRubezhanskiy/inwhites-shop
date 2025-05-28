import React from "react";

import css from "./Reviews.module.css";
import clsx from "clsx";
import container from "../../../container.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./ReviewSlider.css";

const reviews = [
  {
    id: 1,
    name: "Alice",
    text: "Очень крутой магазин! Покупаю здесь постоянно.",
  },
  {
    id: 2,
    name: "Bob",
    text: "Быстрая доставка и качественный товар.",
  },
  {
    id: 3,
    name: "Charlie",
    text: "Служба поддержки супер отзывчивая!",
  },
  {
    id: 4,
    name: "Diana",
    text: "Немного дороговато, но качество оправдывает цену.",
  },
  {
    id: 5,
    name: "Ethan",
    text: "Рекомендую друзьям — уже 2 года с вами!",
  },
];

const Reviews = () => {
  return (
    <section className={clsx(container.container, css.section)}>
      <h2 className={css.title}>OUR HAPPY CUSTOMERS</h2>
      <div className="slider-container">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          grabCursor={true}
          loop
          className="custom-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="review-card">
                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
