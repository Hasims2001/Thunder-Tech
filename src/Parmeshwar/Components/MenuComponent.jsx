import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Logout } from "./Logout";

export const MenuComponent = () => {
  const name = JSON.parse(localStorage.getItem("username"));

  return (
    <div>
      <Menu>
        <MenuButton>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>
        <div style={{ position: "fixed", zIndex: "99" }}>
          <MenuList>
            {/* <MenuItem>Profile</MenuItem> */}
            <MenuItem>{name}</MenuItem>
            <MenuItem>Privacy</MenuItem>
            <MenuItem>Help</MenuItem>
            <MenuItem>Delete Account</MenuItem>
            <MenuItem>
              <Logout />
            </MenuItem>
          </MenuList>
        </div>
      </Menu>
    </div>
  );
};
