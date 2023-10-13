import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "./Ranvijay/ProductList";
import SingleProductpage from "./Ranvijay/SingleProductpage";
import Cartpage from "./Ranvijay/Cartpage";
import { Home } from "./Parmeshwar/Pages/Home";
import { Payment } from "./Parmeshwar/Pages/Payment";
import { SignInPage } from "./hasim/SignInPage";
import { Navbar } from "./Parmeshwar/Pages/Navbar";
import { Footer } from "./Parmeshwar/Components/Footer";
import { PrivateRoute } from "./PrivateRoute";

function AllRouters() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignInPage />}></Route>
      </Routes>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Home /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <>
              <Navbar /> <ProductList /> <Footer />
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <Navbar />
              <SingleProductpage />
              <Footer />
            </>
          }
        />
        <Route
          path="/products/cart"
          element={
            <>
              <Navbar />
              <PrivateRoute>
                <Cartpage />
              </PrivateRoute>
            </>
          }
        />
        <Route
          path="/products/payment"
          element={
            <PrivateRoute>
              <Navbar />
              <Payment />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
export default AllRouters;
