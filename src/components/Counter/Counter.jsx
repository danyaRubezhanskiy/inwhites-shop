import React, { useState } from "react";

import css from "./Counter.module.css";
import { useDispatch } from "react-redux";
import { changeItemQuantity } from "../../store/Slices/cartSlice";

const Counter = ({ index, quantity: initialQuantity }) => {
  const [selectedQuantity, setselectedQuantity] = useState(initialQuantity);

  const dispatch = useDispatch();

  function minusQuanity() {
    setselectedQuantity((prev) => Math.max(1, prev - 1));
    dispatch(changeItemQuantity({ index, quantity: selectedQuantity }));
  }

  function plusQuanity() {
    setselectedQuantity(selectedQuantity + 1);
    dispatch(changeItemQuantity({ index, quantity: selectedQuantity }));
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
        onClick={() => {
          plusQuanity();
        }}
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
