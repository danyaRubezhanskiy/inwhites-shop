import React from "react";

import container from "../../container.module.css";
import FooterForm from "./FooterForm/FooterForm";
import ContactUs from "./ContactUs/ContactUs";
import Payment from "./Payment/Payment";

const Footer = () => {
  return (
    <footer className={container.container}>
      <FooterForm />
      <ContactUs></ContactUs>
      <Payment></Payment>
    </footer>
  );
};

export default Footer;
