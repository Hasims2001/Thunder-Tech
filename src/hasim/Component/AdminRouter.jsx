import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "../AdminPage";
import { AdminProductsPage } from "../AdminProductsPage";
import { AdminSideMenu } from "../AdminSideMenu";
import { Flex } from "@chakra-ui/react";
import { AdminHeader } from "../AdminHeader";
import { AdminSingleProductsPage } from "../AdminSingleProductsPage";
import { postData } from "../../firbase/firebase";

export const AdminRouter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AdminHeader setIsOpen={setIsOpen} isOpen={isOpen} />

      <Flex gap="1rem" padding={"0 1rem"} maxW={"90vw"}>
        <AdminSideMenu isOpen={isOpen} />
        <Routes>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/adminproducts" element={<AdminProductsPage />}></Route>
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
  );
};
