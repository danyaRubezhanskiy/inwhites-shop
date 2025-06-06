import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetailPage/ProductDetails.jsx")
);
const CartPage = lazy(() => import("./pages/CartPage/CartPage.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage></CartPage>} />
      </Routes>
    </>
  );
}

export default App;
