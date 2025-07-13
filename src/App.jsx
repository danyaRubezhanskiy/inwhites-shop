import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import "./toastStyles.css";
import RestrictedRoute from "./components/Footer/RestrictedRoute.jsx";
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetailPage/ProductDetails.jsx")
);
const CartPage = lazy(() => import("./pages/CartPage/CartPage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </>
  );
}

export default App;
