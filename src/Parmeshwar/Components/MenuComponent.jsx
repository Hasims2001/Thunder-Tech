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
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ButtonComp } from './ButtonComp'
import { Hamberg } from './Hamberg'


export const MenuComponent = () => {
    return (
        <div>
            <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Hamberg}>
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
        </div>
    )
}
