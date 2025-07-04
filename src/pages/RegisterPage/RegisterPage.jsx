import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import css from "./RegisterPage.module.css";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { apiRegister } from "../../store/Slices/authSlice";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Reqiered"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Reqiered"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "The passwords do not match")
    .required("Reqiered"),
  name: Yup.string().required("Reqiered"),
});

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const formData = {
      username: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(apiRegister(formData));
  };
  return (
    <div>
      <Header></Header>
      <div className={css.container}>
        <h2>Sign Up</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label>Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className={css.error} />

            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className={css.error} />

            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />

            <label>Repeat password</label>
            <Field name="confirmPassword" type="password" />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={css.error}
            />

            <button className={css.btn} type="submit">
              Sign Up
            </button>
          </Form>
        </Formik>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
