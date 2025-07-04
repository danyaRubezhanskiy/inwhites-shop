import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import css from "./LoginPage.module.css";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../store/Slices/authSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Reqiered"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(apiLogin({ username: "mor_2314", password: "83r5^_" }));
  };

  return (
    <div>
      <Header></Header>

      <div className={css.container}>
        <h2>Sign In</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
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

            <button className={css.btn} type="submit">
              Sign In
            </button>
          </Form>
        </Formik>
        <p className="">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
