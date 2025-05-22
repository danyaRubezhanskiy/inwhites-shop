import React from "react";
import css from "./Hero.module.css";
import container from "../../container.module.css";

const Hero = () => {
  return (
    <section className={css.heroContainer}>
      <div className={container.container}>
        <h1 className={css.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className={css.text}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className={css.btn}>Shop Now</button>
        <ul className={css.list}>
          <li className={css.listItem}>
            <h2 className={css.itemTitle}>200+</h2>
            <p className={css.itemText}>International Brands</p>
          </li>
          <li className={css.listItem}>
            <h2 className={css.itemTitle}>2,000+</h2>
            <p className={css.itemText}>High-Quality Products</p>
          </li>
          <li className={css.listItem}>
            <h2 className={css.itemTitle}>30,000+</h2>
            <p className={css.itemText}>Happy Customers</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
