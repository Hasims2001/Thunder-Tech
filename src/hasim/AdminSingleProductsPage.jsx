import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Toast,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "./Component/Option";
import { styled } from "styled-components";
import { postEditProduct, postNewProduct } from "../redux/adminRedux/action";
import { useNavigate, useParams } from "react-router-dom";

const init = {
  id: 0,
  name: "",
  category: "",
  price: "",
  color: "",
  company: "",
  Highlights: "",
  image: "",
};
export const AdminSingleProductsPage = ({ text }) => {
  const [data, setData] = useState(init);
  const dispatch = useDispatch();
  const param = useParams();

  const reduxdata = useSelector((store) => store.adminReducer.products);
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [company, setCompany] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();
  const handleCancel = () => {
    navigate("/adminproducts");
  };
  useEffect(() => {
    setProductData(reduxdata);
    if (param.id) {
      setData(reduxdata[param.id - 1]);
    } else {
      setData({ ...data, id: reduxdata.length + 1 });
    }
    let temp = category;
    let temp_color = color;
    let temp_company = company;

    for (let i = 0; i < reduxdata.length; i++) {
      if (!temp.includes(reduxdata[i]["category"])) {
        temp.push(reduxdata[i]["category"]);
      }
      let color_arr = reduxdata[i]["color"];
      for (let i = 0; i < color_arr.length; i++) {
        if (!temp_color.includes(color_arr[i])) {
          temp_color.push(color_arr[i]);
        }
      }

      if (!temp_company.includes(reduxdata[i]["company"])) {
        temp_company.push(reduxdata[i]["company"]);
      }
    }
    setCategory(temp);
    setColor(temp_color);
    setCompany(temp_company);
    // let temp = new Set();
    // reduxdata.map((item) => temp.add(item.category));
    // console.log(temp);
    // temp.forEach((ele) => setCategory([...category, ele]));

    // temp = new Set();
    // reduxdata.map((item) => temp.add(item.company));
    // setCompany(temp);

    // temp = new Set();
    // reduxdata.map((item) => {
    //   let val = item.color;
    //   if (val.length > 0) {
    //     val.map((ele) => temp.add(ele));
    //   }
    // });
    // setColors(temp);
  }, [reduxdata]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "Edit") {
      console.log(data);
      dispatch(postEditProduct(data));
    } else {
      dispatch(postNewProduct(data));
    }
    toast({
      title: `${text} Product Successfully!`,
      status: "success",
      isClosable: true,
    });
    navigate("/adminproducts");
  };
  return (
    <Flex m={"1rem 0"} flexDir={"column"} w={"100%"}>
      <Box>
        <Heading as={"h6"} fontSize={"lg"}>
          {text} Product
        </Heading>
      </Box>
      <Flex alignItems={"center"} justifyContent={"center"} fontSize={"lg"}>
        <TableContainer
          margin={"auto"}
          mt={"3rem"}
          maxW={["84vw", "84vw", "84vw", "84vw", "90vw"]}
        >
          <form onSubmit={handleSubmit}>
            <Table colorScheme="brand.100">
              <Tbody>
                <Tr>
                  <Td
                    border={"1px solid black"}
                    colSpan={2}
                    textAlign={"center"}
                  >
                    {text} Product
                  </Td>
                </Tr>
                <Tr>
                  <Td>Product Id:</Td>
                  <Td>
                    <Input
                      border="1px solid black"
                      type="number"
                      value={data.id}
                      disabled
                      name="id"
                      _focus={{
                        border: "1px solid black",
                      }}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Product Name:</Td>
                  <Td>
                    <Input
                      border="1px solid black"
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                      }}
                      placeholder="Product Name..."
                      _focus={{
                        border: "1px solid black",
                      }}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Category:</Td>
                  <Td>
                    <Select
                      border={"1px solid black"}
                      _focus={"1px solid black"}
                      value={data.category}
                      onChange={(e) =>
                        setData({ ...data, category: e.target.value })
                      }
                    >
                      <option value="">Select Category</option>
                      {category.length > 0 &&
                        category.map(function (ele) {
                          return (
                            <option key={ele} value={ele}>
                              {ele}
                            </option>
                          );
                        })}
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Company:</Td>
                  <Td>
                    <Select
                      border={"1px solid black"}
                      _focus={"1px solid black"}
                      value={data.company}
                      onChange={(e) =>
                        setData({ ...data, company: e.target.value })
                      }
                    >
                      <option value="">Select Company</option>
                      {company.length > 0 &&
                        company.map(function (ele) {
                          return (
                            <option key={ele} value={ele}>
                              {ele}
                            </option>
                          );
                        })}
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Color:</Td>
                  <Td>
                    <Select
                      border={"1px solid black"}
                      _focus={"1px solid black"}
                      value={data.color[0]}
                      onChange={(e) =>
                        setData({ ...data, color: e.target.value })
                      }
                    >
                      <option value="">Select Color</option>
                      {color.length > 0 &&
                        color.map(function (ele) {
                          return (
                            <option key={ele} value={ele}>
                              {ele}
                            </option>
                          );
                        })}
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Highlights:</Td>
                  <Td>
                    <Input
                      border="1px solid black"
                      type="text"
                      name="name"
                      value={data.Highlights}
                      onChange={(e) => {
                        setData({ ...data, Highlights: e.target.value });
                      }}
                      placeholder="Product Highlights..."
                      _focus={{
                        border: "1px solid black",
                      }}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Image:</Td>
                  <Td>
                    <Input
                      border="1px solid black"
                      type="text"
                      value={data.image}
                      name="image"
                      onChange={(e) => {
                        setData({ ...data, image: e.target.value });
                      }}
                      placeholder="Product Image..."
                      _focus={{
                        border: "1px solid black",
                      }}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Price:</Td>
                  <Td>
                    <Input
                      border="1px solid black"
                      type="text"
                      name="price"
                      value={data.price}
                      onChange={(e) => {
                        setData({ ...data, price: e.target.value });
                      }}
                      placeholder="Product Price..."
                      _focus={{
                        border: "1px solid black",
                      }}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td border={"none"} colSpan={2} textAlign={"center"}>
                    <Button
                      onClick={handleCancel}
                      marginRight="1.5rem"
                      variant={"SimpleBlue"}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant={"SimpleGreen"}>
                      Submit
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </form>
        </TableContainer>
      </Flex>
    </Flex>
  );
};
