import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage.jsx"));
const ItemPage = lazy(() => import("../src/pages/ItemPage/ItemPage.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item" element={<ItemPage />} />
      </Routes>
    </>
  );
}

export default App;
