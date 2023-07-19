import React from "react";
import { Route, Routes } from "react-router-dom";

function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
    </Routes>
  );
}
export default AllRouters;
