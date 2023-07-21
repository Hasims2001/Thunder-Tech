import React from 'react'
import { Image } from '@chakra-ui/react'
import styled from "styled-components"

export const WatchComp = ({image}) => {
    return (
        <DIV className='watchImages'>
            <Image 
                borderRadius='full'
                boxSize='150px'
                src={image}
                alt='Dan Abramov'
            />
        </DIV>
    )
}

const DIV = styled.div`
  .watchImages:hover{
    cursor: pointer;
  }

    
`
