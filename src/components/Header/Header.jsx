import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.blackContainer}>
          <p className={styles.text}>
            Sign up and get 20% off to your first order.{" "}
            <a className={styles.disscountText} href="/">
              Sign Up Now
            </a>
          </p>
        </div>
        <div className={styles.navContainer}>
          <h2>INWH.SHOP</h2>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <a className={styles.linkText} href="">
                  On sale
                </a>
              </li>
              <li>
                <a className={styles.linkText} href="">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className={styles.linkText} href="">
                  Brands
                </a>
              </li>
            </ul>
          </nav>
          <input placeholder="Search products..." type="text" />
        </div>
      </header>
    </div>
  );
};

export default Header;
