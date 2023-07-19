import React, { useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { AdminSalesPage } from "./AdminSalesPage";
import { AdminProductsPage } from "./AdminProductsPage";
import { AdminSideMenu } from "./AdminSideMenu";
import { Box, Flex } from "@chakra-ui/react";
import { AdminSingleProductsPage } from "./AdminSingleProductsPage";

export const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AdminHeader setIsOpen={setIsOpen} isOpen={isOpen} />
      <Flex gap="1rem" padding={"0 1rem"}>
        <AdminSideMenu isOpen={isOpen} />
        {/* <AdminProductsPage /> */}
        <AdminSingleProductsPage />
        {/* <AdminSalesPage /> */}
      </Flex>
    </>
  );
};
