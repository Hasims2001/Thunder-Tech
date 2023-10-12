import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartcard from "./Cartcard"
import { useNavigate,Link} from "react-router-dom"
import { deleteaction, getCartTotal } from '../redux/cartRedux/action'
import styled from "styled-components"
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const Cartpage = () => {

    const getCartData = useSelector((store) => store.cartReducer.cartproduct)
    const dispatch = useDispatch()
  const navigate = useNavigate()



    const handledelete = (id) => {
        dispatch(deleteaction(id))
    }



    let totalamount = 0
    for (let i = 0; i <= getCartData.length - 1; i++) {
        totalamount += getCartData[i].price * getCartData[i].quantity
    }


    const handleCartAmt = () => {
        dispatch(getCartTotal(totalamount))
        navigate("/products/payment")
        
    }

    return (
        <WRAPPER >
            <Flex alignItems={'center'} justifyContent={'space-between'} m={"0 5rem"}>
                <Text fontSize={'2xl'}>Cart Items</Text>
                <h3 >Total <span style={{ color: "red",fontSize:"28px"  , marginBottom:"15px"}}>{getCartData.length}</span> items in your cart</h3>
            </Flex>
            {
                getCartData.length === 0 ? <Stack alignItems={'center'} justifyContent={'center'}>
                    <img width={"320px"} height={"100%"} src="https://vividparts.com/site_assets/images/empty_cart.gif" alt="" />
                   <Link to={"/products"}><Button variant={"SimpleGreen"}>Shop Now</Button></Link>
                </Stack>
                    :

                    <div style={{ width: "75%", position: "absolute",  top: "150px", left: "10%" }}>
                        <div style={{ borderRadius: "1rem", padding: "10px 0px 10px 40px", display: "grid", gridTemplateColumns: "repeat(5,1fr" , backgroundColor:"#377ffd" }}>
                            <p style={{color:"white"}}>ITEM</p>
                            <p style={{color:"white"}}>NAME</p>
                            <p style={{color:"white"}}>QUANTITY</p>
                            <p style={{color:"white"}}>SUBTOTAL</p>
                            <p style={{color:"white"}}>REMOVE</p>
                        </div>
                        {/* <hr /> */}
                        <div>

                        </div>



                        <div className='scroll_container' style={{width: "100%", borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "370px", overflowY: "scroll" }} >
                            {
                                getCartData.map((item) => {
                                    return (
                                        <Cartcard {...item} handledelete={handledelete} />
                                    )
                                })
                            }
                           
                             <Flex justifyContent={"space-between"} p={".5rem 2rem"} bg={"rgb(224, 241, 224)"} fontSize={"2xl"} pr={"5rem"}>
                             <Text>Total Amount:</Text>
                             <Text>Rs {totalamount}</Text>
                             </Flex>
                        </div>
                        <div style={{  margin: "2rem 0",display:"flex",justifyContent:"center" }}>
                           
                        <Button variant={"SimpleBlue"} fontSize={"xl"} padding={"1.5rem 2rem"} onClick={handleCartAmt} >Checkout</Button>
                            {/* <button className='checkout-btn' style={{ borderRadius: "12px", fontSize: "18px",  width: "150px", textAlign: "center",  padding: "12px 8px", cursor :"pointer" ,fontWeight:"600"}} onClick={handleCartAmt} >Checkout</button> */}
                        </div>
                    </div>
            }

        </WRAPPER>
    )
}

export default Cartpage

const WRAPPER = styled.div`
     margin-top: 1rem;


    .checkout-btn{
        background-color: rgb(127, 178, 245);
        color: black;
        transition: all 0.2s ease-in-out;
        


    }

    .checkout-btn:hover{
        background-color: "blue";
        color: white;
      
    }

`


