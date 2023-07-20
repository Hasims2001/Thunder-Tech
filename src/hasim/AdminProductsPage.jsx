import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Input,
  Select,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Table,
  Tfoot,
  Th,
  Thead,
  Tr,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { CopyPlus, SearchCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const init = {
  type: "",
  searchVal: "",
};
export const AdminProductsPage = () => {
  const data = useSelector((store) => store.productReducer.products);
  const [productData, setProductData] = useState([]);
  const [info, setInfo] = useState(init);
  const { type, searchVal } = info;
  const [checkedItems, setCheckedItems] = useState([{}]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    let { type, searchVal } = info;

    if (searchVal === "") {
      setProductData(data);
    } else {
      if (type === "") {
        type = "name";
      }

      let filtered = productData.filter((item) => {
        let val = item[type];
        if (
          typeof val === "string" &&
          val.toLowerCase().includes(searchVal.toLowerCase())
        ) {
          return item;
        }
      });
      console.log(filtered);
      setProductData(filtered);
    }
  };
  useEffect(() => {
    setProductData(data);
  }, [data]);

  return (
    <Flex flexDir={"column"} mt={"1rem"} w={"100%"}>
      <Flex
        flexDir={["column", "column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading as={"h4"} fontSize={"xl"} fontWeight={"normal"}>
          Products
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

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        bg={"brand.800"}
        margin={"1rem auto"}
        p={"1rem"}
      >
        <Accordion defaultIndex={[0]} allowMultiple minW={"80vw"} maxW={"80vw"}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Flex
                  letterSpacing={"wide"}
                  gap=".5rem"
                  flex="1"
                  textAlign="left"
                >
                  <SearchCheck />
                  Search
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <form onSubmit={handleSubmit}>
                <Flex gap="1rem">
                  <Select
                    display={"inline-block"}
                    cursor={"pointer"}
                    value={type}
                    onChange={(e) => {
                      setInfo({ ...info, type: e.target.value });
                    }}
                    w={"fit-content"}
                    border={"1px solid black"}
                    _focus={{
                      border: "1px solid black",
                    }}
                  >
                    <option value="">Search by</option>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                    <option value="company">Company</option>
                  </Select>
                  <Input
                    type="text"
                    placeholder="Product Name"
                    value={searchVal}
                    onChange={(e) => {
                      setInfo({ ...info, searchVal: e.target.value });
                    }}
                    w={"auto"}
                    border={"1px solid black"}
                    _focus={{
                      border: "1px solid black",
                    }}
                  />
                  <Input
                    type="submit"
                    value="Search"
                    w={"auto"}
                    cursor={"pointer"}
                    _focus={{
                      backgroundColor: "brand.100",
                    }}
                    bg={"brand.100"}
                    color={"brand.400"}
                  />
                </Flex>
              </form>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
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
                  isIndeterminate={isIndeterminate}
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
            {productData.map((product) => {
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
    </Flex>
  );
};

// data = useSelector();

// let company = searchparam.getAll("company");

// let filteredData;
// const filtercompany = () => {
//   if (company !== null) {
//     for (let i = 0; i < company.length; i++) {
//       let filtered = data.filter((item) => item.company === company[i]);
//       setFilterData(...filteredData, filtered);
//     }
//     setProdcutList(filteredData);
//   }
// };
