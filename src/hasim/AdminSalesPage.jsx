import { Flex, Heading } from "@chakra-ui/react";
import { CopyPlus } from "lucide-react";
import React from "react";

export const AdminSalesPage = () => {
  return (
    <Flex flexDir={"column"} mt={"1rem"} w={"100%"}>
      <Flex
        flexDir={["column", "column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading as={"h4"} fontSize={"xl"} fontWeight={"normal"}>
          Sales
        </Heading>
        <Flex gap={".7rem"}>
          <button className="addnewbtn">
            <Flex gap={".5rem"} alignItems={"center"}>
              <CopyPlus />
              Add New
            </Flex>
          </button>
          <button className="deletebtn">Delete (selected)</button>
        </Flex>
      </Flex>
    </Flex>
  );
};
