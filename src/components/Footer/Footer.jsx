import React from "react";

import container from "../../container.module.css";
import FooterForm from "./FooterForm/FooterForm";

const Footer = () => {
  return (
    <footer className={container.container}>
      <FooterForm />
    </footer>
  );
};

export default Footer;
