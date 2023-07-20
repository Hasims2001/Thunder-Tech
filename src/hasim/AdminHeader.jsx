import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { X } from "lucide-react";
export const AdminHeader = ({ setIsOpen, isOpen }) => {
  const links = [
    { name: "Home", path: "/admin" },
    { name: "Sales", path: "/sales" },
    { name: "Products", path: "/products" },
    { name: "Logout", path: "/logout" },
  ];
  return (
    <Box p={".5rem 1.5rem"}>
      <Flex justifyContent={"space-between"}>
        <Flex gap={"1rem"} alignItems={"center"}>
          {!isOpen && (
            <HamburgerIcon
              boxSize={7}
              cursor={"pointer"}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
          {isOpen && (
            <X cursor={"pointer"} onClick={() => setIsOpen((prev) => !prev)} />
          )}
          {/* <Image src={logo} width={"3rem"} /> */}
          <Heading fontWeight={"medium"}>Thunder Tech</Heading>
        </Flex>
        <Flex alignItems={"center"} gap={"2rem"} fontSize={"lg"}>
          {/* {links.map((ele) => (
            <Text padding={".3rem"} _hover={{ borderBottom: "1px solid blue" }}>
              <Link to={ele.path}>{ele.name}</Link>
            </Text>
          ))} */}
          <Text>Welcome, Admin!</Text>
          <Text _hover={{ borderBottom: "1px solid blue" }}>
            <Link to={""}>Logout</Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
