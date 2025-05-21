import React, { useState } from "react";
import css from "./DropDown.module.css";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.dropContainer}>
      <button onClick={() => setIsOpen(!isOpen)} className={css.btn}>
        Shop
        <span className={`${css.arrow} ${isOpen ? css.open : ""}`}>▼</span>
      </button>
      {isOpen && (
        <nav className={`${css.nav} ${isOpen ? css.navOpen : ""}`}>
          <li>
            <a className={css.navLink} href="">
              Prada
            </a>
          </li>
          <li>
            <a className={css.navLink} href="">
              Gucci
            </a>
          </li>
          <li>
            <a className={css.navLink} href="">
              Rick
            </a>
          </li>
          <li>
            <a className={css.navLink} href="">
              Nike
            </a>
          </li>
        </nav>
      )}
    </div>
  );
};

export default DropDown;
