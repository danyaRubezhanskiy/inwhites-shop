import React from "react";

import css from "./Header.module.css";

function BlackHeader() {
  return (
    <div className={css.blackContainer}>
      <p className={css.text}>
        Sign up and get 20% off to your first order.{" "}
        <a className={css.disscountText} href="/">
          Sign Up Now
        </a>
      </p>
    </div>
  );
}

export default BlackHeader;
