import React, { useEffect, useState } from 'react'
import { Accordion,AccordionButton,AccordionItem,AccordionIcon,Box ,AccordionPanel} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom/dist'

const Sidebar = () => {
    const [searchparams,setSearchparams]=useSearchParams()
    let initialcategory=searchparams.getAll("category")
    let initialcompany=searchparams.getAll("company")

    
    const [category,setcategory]=useState(initialcategory||[])
    const [company,setcompany]=useState(initialcompany||[])
    const [order,setorder]=useState(searchparams.get("order")||"")

    useEffect(()=>{
        let obj2={

        }
        if(order){
            obj2={order}
        }
        let params={
            category:category,
            company:company,
            ...obj2
        }

        setSearchparams(params)
    },[category,company,order])

    const handlechangcategory=(e)=>{
        const {value}=e.target

        let newcategory=[...category]
        if(newcategory.includes(value)){
            newcategory=newcategory.filter((el)=>el!==value)
        }else{
            newcategory.push(value)
        }
        setcategory(newcategory)

    }

    const handlechangecompany=(e)=>{
        const {value}=e.target

        let newcompany=[...company]
        if(newcompany.includes(value)){
            newcompany=newcompany.filter((el)=>el!==value)
        }else{
            newcompany.push(value)
        }
        setcompany(newcompany)

    }

    const handleorder=(e)=>{
        const {value}=e.target;
        setorder(value)

    }


  return (
    <div>
       <Accordion defaultIndex={[0, 1, 2]} allowMultiple>

       <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Sort By Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2> 
    <AccordionPanel pb={4}>
    <input onChange={handleorder} value={"asc"} type="radio" name="sort" /> &nbsp;
    <label>Low to High</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
    <input onChange={handleorder} value={"desc"} type="radio" name="sort" />&nbsp;
                <label>High to Low</label>
    </AccordionPanel>
  </AccordionItem>
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
        <input value={"Apple"} onChange={handlechangecompany} checked={company.includes("Apple")} type="checkbox" />
        &nbsp; <label>Apple</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input value={"Samsung"} onChange={handlechangecompany} checked={company.includes("Samsung")} type="checkbox" />
        &nbsp; <label>Samsung</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input value={"Sony"} onChange={handlechangecompany} checked={company.includes("Sony")} type="checkbox" />
        &nbsp; <label>Sony</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input value={"Dell"} onChange={handlechangecompany} checked={company.includes("Dell")} type="checkbox" />
        &nbsp;  <label>Dell</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input value={"Bose"} onChange={handlechangecompany} checked={company.includes("Bose")} type="checkbox" />
        &nbsp; <label>Bose</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input value={"LG"} onChange={handlechangecompany} checked={company.includes("LG")} type="checkbox" />
        &nbsp; <label>LG</label>
     
    </AccordionPanel>
    <AccordionPanel pb={4}>
        <input value={"Canon"} onChange={handlechangecompany} checked={company.includes("Canon")} type="checkbox" />
        &nbsp; <label>Canon</label>
     
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
      <input value={"television"} onChange={handlechangcategory} checked={category.includes("television")} type="checkbox"/>
      &nbsp; <label >Television</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <input  value={"camera"} onChange={handlechangcategory} checked={category.includes("camera")} type="checkbox"/>
      &nbsp;<label >Camera</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <input value={"laptop"} onChange={handlechangcategory} checked={category.includes("laptop")} type="checkbox"/>
      &nbsp;<label >Laptop</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <input value={"mobile"} onChange={handlechangcategory} checked={category.includes("mobile")} type="checkbox"/>
      &nbsp;<label >Mobile</label>
    </AccordionPanel>
    <AccordionPanel pb={4}>
      <input value={"headphones"} onChange={handlechangcategory} checked={category.includes("headphones")} type="checkbox"/>
      &nbsp;<label >Headphone</label>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default Sidebar

