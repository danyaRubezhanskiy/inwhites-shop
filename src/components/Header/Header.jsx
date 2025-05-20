import React from "react";
import css from "./Header.module.css";
import BlackHeader from "./BlackHeader";
import clsx from "clsx";

const Header = () => {
  return (
    <div>
      <header>
        <BlackHeader />
        <div className={clsx(css.navContainer, css.container)}>
          <h2 className={css.title}>INWH.SHOP</h2>
          <nav className={css.nav}>
            <ul className={css.navList}>
              <li>
                <a className={css.linkText} href="">
                  Shop
                </a>
              </li>
              <li>
                <a className={css.linkText} href="">
                  On sale
                </a>
              </li>
              <li>
                <a className={css.linkText} href="">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className={css.linkText} href="">
                  Brands
                </a>
              </li>
            </ul>
          </nav>
          <input
            className={css.input}
            placeholder="Search for products..."
            type="text"
          />
          <svg className={css.icon} width="24" height="24" aria-hidden="true">
            <use href="../../../public/accets/icons/symbol-defs.svg#icon-Frame-1" />
          </svg>
          <svg className={css.icon} width="24" height="24" aria-hidden="true">
            <use href="../../../public/accets/icons/symbol-defs.svg#icon-Frame" />
          </svg>
        </div>
      </header>
    </div>
  );
};

export default Header;
