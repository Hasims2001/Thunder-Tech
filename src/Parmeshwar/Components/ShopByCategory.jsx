import React from 'react'
import { ButtonComp } from './ButtonComp'
import {
    Menu,
    MenuButton ,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


export const ShopByCategory = () => {
  return (
    <div>
        <Menu>
  <MenuButton  rightIcon={<ChevronDownIcon />}>
    <ButtonComp text={"Category"} />
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    </div>
  )
}
