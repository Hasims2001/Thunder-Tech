import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "../AdminPage";
import { AdminProductsPage } from "../AdminProductsPage";
import { AdminSideMenu } from "../AdminSideMenu";
import { Flex } from "@chakra-ui/react";
import { AdminHeader } from "../AdminHeader";
import { AdminSingleProductsPage } from "../AdminSingleProductsPage";
import { postData } from "../../firbase/firebase";
import { AdminCustomerPage } from "../AdminCustomerPage";
import { AdminSalesPage } from "../AdminSalesPage";
import { AdminLogin } from "./AdminLogin";
import { useSelector } from "react-redux";

export const AdminRouter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector((store) => store.adminReducer.isAuth);
  console.log(isAuth);
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLogin />}></Route>
      </Routes>

      {
        <>
          <AdminHeader setIsOpen={setIsOpen} isOpen={isOpen} />

          <Flex gap="1rem" maxW={"90vw"}>
            <AdminSideMenu isOpen={isOpen} />
            <Routes>
              <Route path="/adminorders" element={<AdminPage />}></Route>
              <Route
                path="/adminproducts"
                element={<AdminProductsPage />}
              ></Route>
              <Route path="/adminsales" element={<AdminSalesPage />}></Route>
              <Route
                path="/admincustomers"
                element={<AdminCustomerPage />}
              ></Route>
              <Route
                path="/adminproducts/new"
                element={<AdminSingleProductsPage text="Add New" />}
              ></Route>
              <Route
                path="/adminproducts/edit/:id"
                element={<AdminSingleProductsPage text="Edit" />}
              ></Route>
            </Routes>
          </Flex>
        </>
      }
    </>
  );
};
