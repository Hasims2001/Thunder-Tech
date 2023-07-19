import { Box, Flex, Heading, Input, Select } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Option } from "./Component/Option";

const init = {
  name: "",
  category: "",
  price: "",
  color: "",
  review: "",
  company: "",
  Highlights: "",
  image: "",
};
export const AdminSingleProductsPage = () => {
  const [data, setData] = useState([]);
  const reduxdata = useSelector((store) => store.productReducer.products);
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState(new Set([]));
  const [colors, setColors] = useState(null);
  const [company, setCompany] = useState(null);
  useEffect(() => {
    setProductData(reduxdata);
    console.log(reduxdata);
    let temp = new Set();
    reduxdata.map((item) => setCategory([...category, item.company]));
    // setCategory(temp);

    temp = new Set();
    reduxdata.map((item) => temp.add(item.company));
    setCompany(temp);

    temp = new Set();
    reduxdata.map((item) => {
      let val = item.color;
      if (val.length > 0) {
        val.map((ele) => temp.add(ele));
      }
    });
    setColors(temp);
  }, [reduxdata]);
  console.log(category);
  return (
    <Flex mt={"1rem"} flexDir={"column"} w={"100%"}>
      <Box>
        <Heading as={"h6"} fontSize={"lg"}>
          Add New Product
        </Heading>
      </Box>
      <Flex alignItems={"center"} justifyContent={"center"} fontSize={"lg"}>
        <table>
          <tr>
            <td>Product Name:</td>
            <td>
              <Input
                border="1px solid black"
                type="text"
                name="name"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                placeholder="Product Name..."
                _focus={{
                  border: "1px solid black",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>
              <Select
                value={data.category}
                onChange={(e) => setData({ ...data, category: e.target.value })}
              >
                <option value="">Select Category</option>
                <option value="">Select Category</option>
                {/* {category.length > 0 &&
                  category.map(function (ele) {
                    return <option value={ele}>{ele}</option>;
                  })} */}
              </Select>
            </td>
          </tr>
          <tr>
            <td>Company:</td>
            <td>
              <Input
                border="1px solid black"
                type="text"
                name="name"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                placeholder="Product Name..."
                _focus={{
                  border: "1px solid black",
                }}
              />
            </td>
          </tr>
        </table>
      </Flex>
    </Flex>
  );
};
