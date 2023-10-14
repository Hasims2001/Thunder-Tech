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
  Image,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialog,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowUpFromLine, CopyPlus, SearchCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import {
  deleteProduct,
  deleteSales,
  getCustomer,
  getProduct,
  getSales,
} from "../redux/adminRedux/action";
import { Link, useNavigate } from "react-router-dom";
const init = {
  type: "",
  searchVal: "",
};
export const AdminSalesPage = () => {
  const data = useSelector((store) => store.adminReducer.sales);
  const [info, setInfo] = useState(init);
  const { type, searchVal } = info;
  const [checkedItems, setCheckedItems] = useState([]);
  const toast = useToast();
  const [productData, setProductData] = useState(data);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
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
  const handleChange = (e) => {
    if (e.target.checked && !checkedItems.includes(+e.target.id)) {
      setCheckedItems([...checkedItems, Number(e.target.id)]);
    } else {
      let temp = checkedItems.filter((item) => item !== +e.target.id);
      setCheckedItems(temp);
    }
  };
  const handleAllChange = (e) => {
    if (e.target.checked) {
      let temp = data.map((item) => {
        return +item.id;
      });
      setCheckedItems(temp);
    } else {
      setCheckedItems([]);
    }
  };
  const handleDelete = () => {
    if (checkedItems.length > 0) {
      checkedItems.map((id) => {
        dispatch(deleteSales(id));
      });
      toast({
        title: `${checkedItems} products deleted!`,
        status: "error",
        isClosable: true,
      });
      setCheckedItems([]);
    } else {
      toast({
        title: `Please select at least one product!`,
        status: "error",
        isClosable: true,
      });
    }
    onClose();
  };
  const handleAddNew = () => {
    navigate("/adminproducts/new");
  };
  const handleEdit = (id) => {
    navigate(`/adminproducts/edit/${id}`);
  };
  useEffect(() => {
    dispatch(getSales());
    let filtered = data.filter((item) => item.status === "Delivered");
    setProductData(filtered);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);
  return (
    <Flex flexDir={"column"} id="top" mt={"1rem"} w={"100%"}>
      {scrollPosition > 500 && (
        <a href="#top">
          <Box
            bg={"brand.100"}
            padding={"1rem"}
            rounded={"full"}
            position="fixed"
            bottom="20px"
            right={["16px", "84px"]}
            zIndex={1}
          >
            <ArrowUpFromLine color="#fff" />
          </Box>
        </a>
      )}
      <Flex
        flexDir={["column", "column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading as={"h4"} fontSize={"xl"} fontWeight={"normal"}>
          Sales
        </Heading>
        <Flex gap={".7rem"}>
          <button className="addnewbtn" onClick={handleAddNew}>
            <Flex gap={".5rem"} alignItems={"center"}>
              <CopyPlus />
              Add New
            </Flex>
          </button>
          <button
            className="deletebtn"
            onClick={() => {
              checkedItems.length > 0 && onOpen();
            }}
          >
            Delete ({checkedItems.length} selected)
          </button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Product
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure to delete {checkedItems.join(",")} products?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button colorScheme="blue" ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleDelete} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        bg={"brand.800"}
        margin={"1rem auto"}
        p={"1rem"}
      >
        <Accordion defaultIndex={[0]} allowMultiple minW={"70vw"} maxW={"80vw"}>
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
                    <option value="userId">User Id</option>
                    <option value="userEmail">User Email</option>
                    <option value="orderItemId">Order Item Id</option>
                  </Select>
                  <Input
                    type="text"
                    placeholder="Search..."
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
                  onChange={(e) => {
                    handleAllChange(e);
                  }}
                  colorScheme="red"
                ></Checkbox>
              </Th>
              <Th>Id</Th>
              <Th>User Id</Th>
              <Th>User Email</Th>
              <Th>Order Item Id</Th>
              <Th>order Item</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productData.map((product) => {
              return (
                <Tr key={product.id} borderColor={"1px solid black"}>
                  <Td>
                    <Checkbox
                      id={product.id}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      checked={checkedItems.includes(product.id) ? true : false}
                      colorScheme="red"
                    ></Checkbox>
                  </Td>
                  <Td>{product.id}</Td>
                  <Td>{product.userId}</Td>
                  <Td>{product.userEmail}</Td>
                  <Td>{product.orderItemId}</Td>
                  <Td>{product.orderItem}</Td>
                  <Td>
                    <button
                      className="animatedbtn"
                      onClick={() => handleEdit(product.id)}
                    >
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
