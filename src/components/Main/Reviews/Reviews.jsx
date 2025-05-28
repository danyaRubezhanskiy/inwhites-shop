import React from "react";

import css from "./Reviews.module.css";
import clsx from "clsx";
import container from "../../../container.module.css";

const Reviews = () => {
  return (
    <section className={clsx(container.container, css.section)}>
          <h2 className={css.title}>OUR HAPPY CUSTOMERS</h2>
        
    </section>
  );
};

export default Reviews;
