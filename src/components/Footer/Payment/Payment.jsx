import React from "react";

import css from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={css.div}>
      <p className={css.text}>INWH.SHOP © 2000-2021, All rights reserved</p>
      <ul className={css.iconList}>
        <li>
          <svg className={css.icon} width="70" height="45">
            <use href="../../../../public/icons/payment.svg#icon-Badge" />
          </svg>
        </li>
        <li>
          <svg className={css.icon} width="70" height="45">
            <use href="../../../../public/icons/payment.svg#icon-Badge-1" />
          </svg>
        </li>
        <li>
          <svg className={css.icon} width="70" height="45">
            <use href="../../../../public/icons/payment.svg#icon-Badge-2" />
          </svg>
        </li>
        <li>
          <svg
            href="https://github.com/danyaRubezhanskiy"
            className={css.icon}
            width="70"
            height="45"
          >
            <use href="../../../../public/icons/payment.svg#icon-Badge-3" />
          </svg>
        </li>
        <li>
          <svg
            href="https://github.com/danyaRubezhanskiy"
            className={css.icon}
            width="70"
            height="45"
          >
            <use href="../../../../public/icons/payment.svg#icon-Badge-4" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Payment;
