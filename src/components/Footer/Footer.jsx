import React from "react";

import container from "../../container.module.css";
import FooterForm from "./FooterForm/FooterForm";
import ContactUs from "./ContactUs/ContactUs";

const Footer = () => {
  return (
    <footer className={container.container}>
      <FooterForm />
      <ContactUs></ContactUs>
    </footer>
  );
};

export default Footer;
