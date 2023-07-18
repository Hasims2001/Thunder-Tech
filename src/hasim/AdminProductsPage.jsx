import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const AdminProductsPage = () => {
  const productData = useSelector((store) => store.productReducer.products);
  console.log(productData);
  return (
    <Box>
      <Box>
        <Heading as={"h4"} fontWeight={"medium"}>
          Search
        </Heading>
      </Box>
    </Box>
  );
};
