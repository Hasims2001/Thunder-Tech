import React from 'react'
import styled from "styled-components"
import { CartComponent } from './CartComponent'

export const Desktop = ({image, text, price}) => {
    return (
        <DIV>
            <div class="card">
                <img src={image} alt='' />

            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
            <CartComponent text={`${text}`} price={`${price}`} />
            </div>
        </DIV>
    )
}

const DIV = styled.div`

.card {
  width: 315px;
  height: 205px;

  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
  margin-bottom: 10px;
}

img{
 
}

.card:hover {
  transform: scale(1.09);
}









`


