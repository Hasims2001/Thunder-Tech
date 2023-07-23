import React from 'react'
import styled from "styled-components"
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
  HStack,
  Center,
  WrapItem,
  Wrap,
  Avatar,
} from '@chakra-ui/react'
import { Hamberg } from './Hamberg'
import { AboutModal } from './AboutModal'
import { ButtonComp } from './ButtonComp'
import { Theme } from './Theme'
import { CartLogo } from './CartLogo'
import { MenuComponent } from './MenuComponent'

export const DrawerComp = () => {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isAuth = true

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs']

  return (
    <DIV>
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

            <div >
              <HStack className='login' style={{ display: window.innerWidth <= 776 ? 'block' : 'none' }} >
                <Center className='cem' h={"50px"}>

                  {
                    isAuth ? <div >

                      <div >
                        <Wrap>
                          <WrapItem>
                            <MenuComponent />
                          </WrapItem>
                        </Wrap>

                      </div>


                    </div> : <ButtonComp text={"LOGIN"} />
                  }

                </Center>



              </HStack>
            </div>

            <br />

            <div className='themeMode' style={{ display: window.innerWidth <= 994 ? 'block' : 'none', paddingLeft: "110px" }}>
              <HStack>
                <Center>
                  <Theme />
                </Center>
              </HStack>
            </div>

            <br />

            <div className='cart' style={{ display: window.innerWidth <= 994 ? 'block' : 'none', paddingLeft: "110px" }}>
              <HStack >
                <Center>
                  <CartLogo />
                </Center>
              </HStack>
            </div>
            <br />


            <div className='aboutDiv' style={{ paddingLeft: "100px" }}>
              <HStack className='about'>
                <Center>

                  <AboutModal text={"ABOUT"} />
                </Center>
              </HStack>
            </div>
            <br />


            <div style={{ paddingLeft: "100px" }}>
              <HStack>
                <Center className='contact'>
                  <ButtonComp text={"CONTACT"} />
                </Center>
              </HStack>
            </div>



          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DIV>
  )
}

const DIV = styled.div`
 .aboutDiv{
  
  /* border: 2px solid red; */
}
/* 
.themeMode{
  display: none;
}

.cart{
  display: none;
} */

/* @media screen and (max-width: 994px) { */
  /* Your styles for small devices go here */
  /* .themeMode{
    display: block;
  }

  .cart{
    display: block;
  }
} */
  
`
