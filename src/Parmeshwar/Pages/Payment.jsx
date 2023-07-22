import React from 'react'
import styled from "styled-components"
import PaymentImage from "../Images/PaymentImage.png"

export const Payment = () => {
  return (
    <DIV>
      <div className='payment'>

          <div style={{border: "2px solid black", display: "flex", justifyContent: "space-evenly"}}>


          <div style={{width: "30%"}}>
            <img src={PaymentImage} alt="" />
          </div>
          </div>




          

         
      </div>
    </DIV>
  )
}

const DIV = styled.div`


display: flex;
justify-content: center;
align-items: center;


.payment{
/* height: 400px; */
width: 100%;
/* border: 2px solid red; */
/* display: flex;
justify-content: center;
align-items: center; */
margin-top: 100px

}


    
`
