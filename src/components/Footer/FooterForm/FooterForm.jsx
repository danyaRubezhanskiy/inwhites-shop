import React from "react";
import css from "./FooterForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const FooterForm = () => {
  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>

      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Email is required"),
        })}
        onSubmit={(value, { resetForm }) => {
          console.log(value);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form noValidate className={css.formWrapper}>
            <div className={css.inputWrapper}>
              <Field
                placeholder="Enter your email"
                className={clsx(css.input, {
                  [css.inputError]: errors.email && touched.email,
                })}
                name="email"
                type="email"
              />
              <svg
                className={clsx(css.icon, {
                  [css.iconError]: errors.email && touched.email,
                })}
                width="24"
                height="24"
              >
                <use href="/icons/form.svg#mailIcon" />
              </svg>
            </div>
            <button
              className={clsx(css.btn, {
                [css.noMargin]: errors.email && touched.email,
              })}
              type="submit"
            >
              Subscribe to Newsletter
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FooterForm;
