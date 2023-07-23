import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
import { ButtonComp } from './ButtonComp'
import { About } from '../Pages/About'
import styled from "styled-components"
import { useContext } from 'react'
import { AppContent } from '../Contex/ContextApi'

export const AboutModal = ({text}) => {
  const {theme} = useContext(AppContent)

    const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['full']

  return (
    <DIV theme={theme}>
       {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
        //   key={size}
        //   m={4}
        variant={"unstyled"}
        size="auto"
          isFullWidth
        >
            <ButtonComp text={text} />
        </Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
       
          <ModalCloseButton fontSize={"25px"} fontWeight={"700"} color={"black"}/>
          <ModalBody className='body'>
           <About />
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </DIV>
  )
}

const DIV = styled.div`
 
 .body{
  background-color: ${props => (props.theme === "lightTheme" ? "#f9f9f9" : "#1d1a1a")};
 }

`
