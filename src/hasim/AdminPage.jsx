import React, { useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { AdminSalesPage } from "./AdminSalesPage";
import { AdminProductsPage } from "./AdminProductsPage";
import { AdminSideMenu } from "./AdminSideMenu";
import { Box, Flex } from "@chakra-ui/react";
import { AdminSingleProductsPage } from "./AdminSingleProductsPage";
import "./Style/buttonAnimation.css";

export const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AdminHeader setIsOpen={setIsOpen} isOpen={isOpen} />
      <Flex gap="1rem" padding={"0 1rem"} maxW={"100vw"}>
        <AdminSideMenu isOpen={isOpen} />
        <AdminProductsPage />
        {/* <AdminSingleProductsPage /> */}
        {/* <AdminSalesPage /> */}
      </Flex>
    </>
  );
};
