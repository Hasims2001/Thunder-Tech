import { Flex, Text } from "@chakra-ui/react";
import {
  HelpCircle,
  LayoutDashboard,
  PackageSearch,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const AdminSideMenu = ({ isOpen }) => {
  const links = [
    { iconName: "LayoutDashboard", name: "Dashboard", path: "/admin" },
    { iconName: "PackageSearch", name: "Catalog", path: "/adminproducts" },
    { iconName: "ShoppingCart", name: "Sales", path: "/adminsales" },
    { iconName: "User", name: "Customers", path: "/admincustomers" },
    { iconName: "HelpCircle", name: "Help", path: "/adminhelp" },
  ];
  const iconComponents = {
    LayoutDashboard: LayoutDashboard,
    ShoppingCart: ShoppingCart,
    PackageSearch: PackageSearch,
    User: User,
    HelpCircle: HelpCircle,
  };
  return (
    <div
      style={{
        height: "90vh",
        backgroundColor: "#cccccc",
        borderRadius: "10px",
      }}
    >
      {links.map(({ iconName, name, path }) => {
        const IconComponent = iconComponents[iconName];
        return (
          <Flex
            key={name}
            justifyContent={"flex-start"}
            fontSize={"lg"}
            fontWeight={"medium"}
            gap=".7rem"
            _hover={{
              backgroundColor: "brand.800",
            }}
            p={".5rem .5rem"}
            alignItems={"center"}
          >
            {!isOpen && <IconComponent />}
            {isOpen && <IconComponent />}
            {isOpen && (
              <Link style={{ marginRight: "5rem" }} to={path}>
                {name}
              </Link>
            )}
          </Flex>
        );
      })}
    </div>
  );
};
