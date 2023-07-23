import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "./Ranvijay/ProductList";
import SingleProductpage from "./Ranvijay/SingleProductpage";
import Cartpage from "./Ranvijay/Cartpage";

function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/products" element={<ProductList />} />

      <Route path="/products/:id" element={<SingleProductpage />} />
      <Route path="/products/cart" element={<Cartpage />} />
    </Routes>
  );
}
export default AllRouters;
