import React, { useEffect, useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { AdminSalesPage } from "./AdminSalesPage";
import { AdminProductsPage } from "./AdminProductsPage";
import { AdminSideMenu } from "./AdminSideMenu";
import { Box, Flex } from "@chakra-ui/react";
import { AdminSingleProductsPage } from "./AdminSingleProductsPage";
import "./Style/buttonAnimation.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/adminRedux/action";

export const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      {/* <AdminHeader setIsOpen={setIsOpen} isOpen={isOpen} />
      <Flex gap="1rem" padding={"0 1rem"} maxW={"100vw"}>
        <AdminSideMenu isOpen={isOpen} /> */}
      {/* <AdminProductsPage /> */}
      {/* <AdminSingleProductsPage /> */}
      {/* <AdminSalesPage /> */}
      {/* </Flex> */}
    </>
  );
};
