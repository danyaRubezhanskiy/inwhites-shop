import React from "react";
import css from "./BrowseByDressStyle.module.css";
import container from "../../../container.module.css";
import clsx from "clsx";

const BrowseByDressStyle = () => {
  return (
    <section className={container.container}>
      <div className={css.container}>
        <h2 className={css.title}>BROWSE BY dress STYLE</h2>
        <div className={css.imgWrapper}>
          <img
            className={css.imgCasual}
            src="../../../../public/img/Casual.jpg"
            alt=""
          />
          <img
            className={css.imgFormal}
            src="../../../../public/img/Formal.jpg"
            alt=""
          />
          <img
            className={css.imgParty}
            src="../../../../public/img/Party.jpg"
            alt=""
          />
          <img
            className={css.imgGym}
            src="../../../../public/img/Gym.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BrowseByDressStyle;
