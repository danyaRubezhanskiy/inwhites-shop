import React from "react";
import css from "./BlackSection.module.css";
import container from "../../../container.module.css";

const BlackSection = () => {
  return (
    <section className={css.blackSection}>
      <div className={container.container}>
        <ul className={css.list}>
          <li>
            <svg
              className={css.iconVersace}
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use href="../../../../public/icons/Brands.svg#Versace" />
            </svg>
          </li>
          <li>
            <svg
              className={css.iconZara}
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use href="../../../../public/icons/Brands.svg#Zara" />
            </svg>
          </li>
          <li>
            <svg
              className={css.iconGucci}
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use href="../../../../public/icons/Brands.svg#Gucci" />
            </svg>
          </li>
          <li>
            <svg
              className={css.iconPrada}
              width="24"
              height="24"
              aria-hidden="true"
            >
              <use href="../../../../public/icons/Brands.svg#Prada" />
            </svg>
          </li>
          <li>
            <svg className={css.iconCalvinKlein} width="24" height="24" aria-hidden="true">
              <use href="../../../../public/icons/Brands.svg#CalvinKlein" />
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlackSection;
