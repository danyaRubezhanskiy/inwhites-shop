import React from "react";

import css from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={css.ContactUsDiv}>
      <div className={css.shopDiv}>
        <h2 className={css.title}>INWH.SHOP</h2>
        <p className={css.text}>
          We have clothes that suits your style and which you're proud to wear.
          From women to men.
        </p>
        <ul className={css.iconList}>
          <li>
            <svg className={css.icon} width="24" height="24">
              <use href="../../../../public/icons/social-media.svg#icon-1" />
            </svg>
          </li>
          <li>
            <svg className={css.icon} width="24" height="24">
              <use href="../../../../public/icons/social-media.svg#icon-2" />
            </svg>
          </li>
          <li>
            <svg className={css.icon} width="24" height="24">
              <use href="../../../../public/icons/social-media.svg#icon-3" />
            </svg>
          </li>
          <li>
            <svg className={css.icon} width="24" height="24">
              <use href="../../../../public/icons/social-media.svg#icon-4" />
            </svg>
          </li>
        </ul>
      </div>

      <ul className={css.helpList}>
        <li className={css.helpItem}>
          <ul className={css.itemsList}>
            <li>Title</li>
            <li>help</li>
            <li>help</li>
            <li>help</li>
            <li>help</li>   
          </ul>
        </li>
        <li className={css.helpItem}>
          <ul className={css.itemsList}>
            <li>Title</li>
            <li>help</li>
            <li>help</li>
            <li>help</li>
            <li>help</li>
          </ul>
        </li>
        <li className={css.helpItem}>
          <ul className={css.itemsList}>
            <li>Title</li>
            <li>help</li>
            <li>help</li>
            <li>help</li>
            <li>helphelp</li>
          </ul>
        </li>
        <li className={css.helpItem}>
          <ul className={css.itemsList}>
            <li>Title</li>
            <li>help</li>
            <li>help</li>
            <li>help</li>
            <li>help</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
