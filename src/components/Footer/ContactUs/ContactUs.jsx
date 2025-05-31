import React from "react";

import css from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={css.ContactUsDiv}>
      <ul className={css.ContactUsList}>
        <li className={css.mainTextItem}>
          <h2 className={css.title}>INWH.SHOP</h2>
          <p className={css.text}>
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <ul className={css.iconList}>
            <li>
              <svg className={css.icon} width="28" height="28">
                <use href="../../../../public/icons/social-media.svg#icon-1" />
              </svg>
            </li>
            <li>
              <svg className={css.icon} width="28" height="28">
                <use href="../../../../public/icons/social-media.svg#icon-2" />
              </svg>
            </li>
            <li>
              <svg className={css.icon} width="28" height="28">
                <use href="../../../../public/icons/social-media.svg#icon-3" />
              </svg>
            </li>
            <li>
              <a href="https://github.com/danyaRubezhanskiy">
                <svg
                  href="https://github.com/danyaRubezhanskiy"
                  className={css.icon}
                  width="28"
                  height="28"
                >
                  <use href="../../../../public/icons/social-media.svg#icon-4" />
                </svg>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className={css.itemsList}>
            <li className={css.liTitle}>Company</li>
            <li>
              <a className={css.link} href="">
                About
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Features
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Works
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Career
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className={css.itemsList}>
            <li className={css.liTitle}>Help</li>
            <li>
              <a className={css.link} href="">
                Customer Support
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Delivery Details
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Privacy Policy
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className={css.itemsList}>
            <li className={css.liTitle}>FAQ</li>
            <li>
              <a className={css.link} href="">
                Account
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Orders
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Payments
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className={css.itemsList}>
            <li className={css.liTitle}>RESOURCES</li>
            <li>
              <a className={css.link} href="">
                Free eBooks
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                Development Tutorial
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                How to - Blog
              </a>
            </li>
            <li>
              <a className={css.link} href="">
                YouTube Playlist
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
