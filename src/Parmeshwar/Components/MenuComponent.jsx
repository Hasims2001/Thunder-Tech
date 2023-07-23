import React from 'react'
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
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Logout } from './Logout'

export const MenuComponent = () => {
  return (
    <div>
      <Menu>
  <MenuButton >
  <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </MenuButton>
  <div style={{position: 'fixed', zIndex: "99"}}>
  <MenuList >
    <MenuItem>Profile</MenuItem>
    <MenuItem>Settings</MenuItem>
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
  )
}
