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
  const [state, setState] = useState(0);
  return (
    <Box p={".5rem 1.5rem"} bg={"brand.600"} color={'brand.400'}>
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
          <Heading fontWeight={"medium"}>Thunder Tech</Heading>
        </Flex>
        <Flex alignItems={"center"} gap={"2rem"} fontSize={"lg"}>
      
          <Text cursor={"pointer"} onClick={() => setState((prev) => prev + 1)}>
            Welcome, Admin!
          </Text>
          <Text _hover={{ borderBottom: "1px solid blue" }}>
            <Link to={"/"}>Logout</Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
