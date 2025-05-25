import React from "react";
import css from "./Header.module.css";
import BlackHeader from "./BlackHeader";
import clsx from "clsx";
import DropDown from "../DropDown";

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
                <DropDown />
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
          <form>
            <input
              className={css.input}
              placeholder="Search for products..."
              type="text"
            />
          </form>

          <div className={css.iconsContainer}>
            <svg className={css.icon} width="24" height="24" aria-hidden="true">
              <use href="../../../public/icons/symbol-defs.svg#icon-Frame-1" />
            </svg>
            <svg className={css.icon} width="24" height="24" aria-hidden="true">
              <use href="../../../public/icons/symbol-defs.svg#icon-Frame" />
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
