import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage.jsx"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetailPage/ProductDetails.jsx")
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
