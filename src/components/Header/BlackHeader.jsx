import React, { useState } from "react";

import css from "./Header.module.css";
import container from "../../container.module.css";
import clsx from "clsx";

function BlackHeader() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={css.blackContainer}>
      <div className={clsx(container.container, css.div)}>
        <p className={css.text}>
          Sign up and get 20% off to your first order.{" "}
          <a className={css.disscountText} href="/">
            Sign Up Now
          </a>
        </p>
        <button
          onClick={() => {
            setVisible(false);
          }}
          className={css.btn}
        >
          <svg className={css.xIcon} height="13" width="13">
            <use href="../../../public/icons/symbol-defs.svg#x" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BlackHeader;
