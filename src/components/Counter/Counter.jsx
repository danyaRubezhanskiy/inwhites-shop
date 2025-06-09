import React, { useState } from "react";

import css from "./Counter.module.css";

const Counter = ({ quantity: initialQuantity }) => {
  const [selectedQuantity, setselectedQuantity] = useState(initialQuantity);

  function minusQuanity() {
    setselectedQuantity((prev) => Math.max(1, prev - 1))
  }

  return (
    <div className={css.countContainer}>
      <button className={css.countBtn} onClick={() => minusQuanity()}>
        <svg width="16px" height="16px">
          <use href="../../../public/icons/count.svg#icon-minus" />
        </svg>
      </button>
      <p>{selectedQuantity}</p>
      <button
        onClick={() => setselectedQuantity(selectedQuantity + 1)}
        className={css.countBtn}
      >
        <svg width="16px" height="16px">
          <use href="../../../public/icons/count.svg#icon-plus" />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
