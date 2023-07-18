import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./hasim/ProductsPage";

function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
    </Routes>
  );
}
export default AllRouters;
