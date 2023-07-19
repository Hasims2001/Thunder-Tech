import React from 'react'
import { Accordion,AccordionButton,AccordionItem,AccordionIcon,Box ,AccordionPanel} from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <div>
       <Accordion defaultIndex={[1]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Filter By Company
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <input type="checkbox" />
        <label>Apple</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input type="checkbox" />
        <label>Samsung</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input type="checkbox" />
        <label>Sony</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input type="checkbox" />
        <label>Dell</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input type="checkbox" />
        <label>Bose</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input type="checkbox" />
        <label>LG</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input type="checkbox" />
        <label>Canon</label>
     
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Filter By Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <input type="checkbox"/>
      <label >Television</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <input type="checkbox"/>
      <label >Camera</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <input type="checkbox"/>
      <label >Laptop</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <input type="checkbox"/>
      <label >Mobile</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <input type="checkbox"/>
      <label >Headphone</label>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default Sidebar

