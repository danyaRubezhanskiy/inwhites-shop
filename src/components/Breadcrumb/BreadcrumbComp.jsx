import React from "react";

import { Breadcrumb } from "antd";
import css from "./BreadcrumbComp.module.css";

function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const BreadcrumbComp = ({ category }) => {
  return (
    <Breadcrumb
      className={css.bread}
      separator=">"
      items={[
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Shop",
          href: "/",
        },
        {
          title: `${capitalizeFirstLetter(category)}`,
        },
      ]}
    />
  );
};

export default BreadcrumbComp;
