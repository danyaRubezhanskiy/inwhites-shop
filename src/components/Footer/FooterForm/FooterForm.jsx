import React from "react";
import css from "./FooterForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const FooterForm = () => {
  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>

      <Formik
        validateOnBlur={false}
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
        })}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form className={css.formWrapper}>
          <div className={css.inputWrapper}>
            <Field
              placeholder="Enter your email"
              className={css.input}
              name="email"
              type="email"
            />
            <svg className={css.icon} width="24" height="24">
              <use href="../../../../public/icons/form.svg#mailIcon" />
            </svg>
          </div>
          <ErrorMessage
            className={css.error}
            name="email"
            component="div"
          ></ErrorMessage>
          <button className={css.btn} type="submit">
            Subscribe to Newsletter
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FooterForm;
