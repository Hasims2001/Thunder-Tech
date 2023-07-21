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

export const AboutModal = ({text}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['full']

  return (
    <div>
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
          <ModalBody>
           <About />
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
