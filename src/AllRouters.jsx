import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "./Ranvijay/ProductList";
import SingleProductpage from "./Ranvijay/SingleProductpage";

function AllRouters() {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<SingleProductpage />} />
    </Routes>
  );
}
export default AllRouters;
