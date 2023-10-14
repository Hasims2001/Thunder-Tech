import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AdminHeader } from "./AdminHeader";
import { AdminSalesPage } from "./AdminSalesPage";
import { AdminProductsPage } from "./AdminProductsPage";
import { AdminSideMenu } from "./AdminSideMenu";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Select,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Table,
  useToast,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AdminSingleProductsPage } from "./AdminSingleProductsPage";
import "./Style/buttonAnimation.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSales,
  getProduct,
  getSales,
  updateSales,
} from "../redux/adminRedux/action";
import { ArrowUpFromLine, CopyPlus, SearchCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const init = {
  type: "",
  searchVal: "",
};

export const AdminPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const {
    onOpen: onEditOpen,
    isOpen: isEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const dispatch = useDispatch();
  const sales = useSelector((store) => store.adminReducer.sales);
  const [checkedItems, setCheckedItems] = useState([]);
  const [status, setStatus] = useState({ id: 0, currstatus: null });
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [changeStatus, setChangeStatus] = useState(status.currstatus || "");

  const cancelRef = React.useRef();
  const [productData, setProductData] = useState(sales || []);
  const [info, setInfo] = useState(init);
  const { type, searchVal } = info;

  const [orderData, setOrderData] = useState({
    pending: 0,
    shipped: 0,
    inTransit: 0,
    delivered: 0,
  });
  const getCardData = (data) => {
    let pendingCount = 0;
    let shippedCount = 0;
    let inTransitCount = 0;
    let deliveredCount = 0;
    data.map((item) => {
      if (item.status !== undefined) {
        switch (item.status) {
          case "Pending":
            ++pendingCount;
            break;
          case "Shipped":
            ++shippedCount;
            break;
          case "In Transit":
            ++inTransitCount;
            break;
          case "Delivered":
            ++deliveredCount;
            break;
          default:
            break;
        }
      }
    });
    console.log(pendingCount, shippedCount, inTransitCount, deliveredCount);
    setOrderData({
      pending: pendingCount,
      shipped: shippedCount,
      inTransit: inTransitCount,
      delivered: deliveredCount,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { type, searchVal } = info;

    if (searchVal === "") {
      setProductData(sales);
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
        } else if (val === "number" && val === searchVal) {
          return item;
        }
      });
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
      let temp = sales.map((item) => {
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
        title: `${checkedItems} orders deleted!`,
        status: "error",
        isClosable: true,
      });
      setCheckedItems([]);
    } else {
      toast({
        title: `Please select at least one order!`,
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
    // navigate(`/adminproducts/edit/${id}`);
  };
  useEffect(()=>{
    if(sales.length === 0){
      dispatch(getSales());
    }
  },[])
  useEffect(() => {
    setProductData(sales);
    getCardData(sales);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sales]);

  return (
    <Box m={"1rem"} >
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
        flexDir={"row"}
        fontSize={"2xl"}
        gap={"2.5rem"}
        color={"#fff"}
        fontWeight={"bold"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"fit-content"}
      >
        <Box p={"2rem"} borderRadius={"1rem"} bg={"#ff0021"}>
          <Text>Pending Orders</Text>
          <Text>{orderData.pending}</Text>
        </Box>
        <Box p={"2rem"} borderRadius={"1rem"} bg={"orange"}>
          <Text>Shipped Orders</Text>
          <Text>{orderData.shipped}</Text>
        </Box>
        <Box p={"2rem"} borderRadius={"1rem"} bg={"orange"}>
          <Text>In Transit Orders</Text>
          <Text>{orderData.inTransit}</Text>
        </Box>
        <Box p={"2rem"} borderRadius={"1rem"} bg={"brand.600"}>
          <Text>Delivered Orders</Text>
          <Text>{orderData.delivered}</Text>
        </Box>
      </Flex>
      <Box m={"2rem 0"}>
        <Flex
          flexDir={["column", "column", "column", "row", "row"]}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading as={"h4"} fontSize={"xl"} fontWeight={"normal"}>
            Orders
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
                    <Button
                      colorScheme="blue"
                      ref={cancelRef}
                      onClick={onClose}
                    >
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
      </Box>

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
                    <option value="status">Status</option>
                    <option value="orderId">User Id</option>
                    <option value="email">Email</option>
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

      <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              value={changeStatus}
              onChange={(e) => setChangeStatus(e.target.value)}
            >
              <option value="">select status</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="SimpleBlue"
              mr={3}
              onClick={() => {
                if (status.currstatus !== changeStatus) {
                  dispatch(
                    updateSales({ id: status.id, status: changeStatus })
                  );
                }
                onEditClose();
              }}
            >
              Update
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <TableContainer
        margin={"auto"}
        mt={"3rem"}
        maxW={["84vw", "84vw", "84vw", "84vw", "90vw"]}
      > */}
        <Table  mt={"3rem"} colorScheme="brand.100">
          <Thead bg={"brand.800"} textAlign={'center'}>
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
              <Th>quantity</Th>
              <Th>Status</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productData.length > 0 &&
              productData.map((product) => {
                return (
                  <Tr key={product.id} >
                    <Td>
                      <Checkbox
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        checked={
                          checkedItems.includes(product.id) ? true : false
                        }
                        colorScheme="red"
                      ></Checkbox>
                    </Td>
                    <Td >{product.id}</Td>
                    <Td >{product.userId}</Td>
                    <Td>{product.userEmail}</Td>
                    <Td >{product.quantity}</Td>
                    <Td>{product.status}</Td>
                    <Td>
                      <button
                        className="animatedbtn"
                        onClick={() => {
                          onEditOpen();
                          setStatus({
                            id: product.id,
                            currstatus: product.status,
                          });
                        }}
                      >
                        <span>Edit</span>
                      </button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      {/* </TableContainer> */}
    </Box>
  );
};
