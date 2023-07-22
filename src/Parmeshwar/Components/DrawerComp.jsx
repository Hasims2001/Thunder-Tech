import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { Hamberg } from './Hamberg'

export const DrawerComp = () => {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs']
    
  return (
    <div>
        {sizes.map((size) => (
        <Button
        variant={"unstyled"}
        size="auto"
          isFullWidth
          onClick={() => handleClick(size)}
          key={size}
          m={4}
        >
          <Hamberg />
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <div>
            Contact Us
            </div>
            
            <div>
            About Us
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
