import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export const CustomTable = ({ data }) => {
  return (
    <>
      <TableContainer
        margin={"auto"}
        mt={"3rem"}
        maxW={["84vw", "84vw", "84vw", "84vw", "90vw"]}
      >
        <Table colorScheme="brand.100">
          <Thead bg={"brand.800"}>
            <Tr>
              <Th>
                <Checkbox
                  // isIndeterminate={isIndeterminate}
                  colorScheme="green"
                ></Checkbox>
              </Th>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Company</Th>
              <Th isNumeric>Price</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((product) => {
              return (
                <Tr key={product.id} borderColor={"1px solid black"}>
                  <Td>
                    <Checkbox
                      key={product.id}
                      value={product.id}
                      // onChange={(e) => {}}
                      colorScheme="red"
                    ></Checkbox>
                  </Td>
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.category}</Td>
                  <Td>{product.company}</Td>
                  <Td isNumeric>{product.price}</Td>
                  <Td>
                    <button className="animatedbtn">
                      <span>Edit</span>
                    </button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
