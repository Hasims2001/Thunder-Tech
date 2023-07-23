import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartcard from "./Cartcard"
import { useNavigate,Link} from "react-router-dom"
import { deleteaction, getCartTotal } from '../redux/cartRedux/action'
import styled from "styled-components"

const Cartpage = () => {

    const getCartData = useSelector((store) => store.cartReducer.cartproduct)
    const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(getCartData,"cart data")



    const handledelete = (id) => {
        dispatch(deleteaction(id))
    }



    let totalamount = 0
    for (let i = 0; i <= getCartData.length - 1; i++) {
        totalamount += getCartData[i].price * getCartData[i].quantity
    }


    const handleCartAmt = () => {
        dispatch(getCartTotal(totalamount))
        navigate("/payment")
        
    }

    return (
        <WRAPPER style={{ position: "relative",marginTop:"50px" }}>
            <div style={{ width: "75%", textAlign: "center", top: "40px", position: "absolute", left: "10%",marginBottom:"50px" }}>
                <h2 style={{marginBottom:"10px"}}><span style={{ color: "green",fontSize:"20px",letterSpacing:"8px" }}> WELCOME !!  TO  YOUR  CART  SECTION </span></h2>
                <h3 >Total <span style={{ color: "red",fontSize:"28px"  , marginBottom:"15px"}}>{getCartData.length}</span> items in your cart</h3>
            </div>
            {
                getCartData.length === 0 ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "25px", width: "40%", position: "absolute", top: "150px", left: "18%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "320px" }} >
                    <img width={"320px"} height={"100%"} src="https://vividparts.com/site_assets/images/empty_cart.gif" alt="" />
                   <Link to={"/products"}><button style={{padding:"15px 40px 15px 15px",borderRadius:"14px",fontWeight:"600",fontSize:"16px", backgroundColor: "#51f351",color:"black",border:"0px",cursor:"pointer",textAlign:"center"}}>Shop Now</button></Link>
                </div>
                    :

                    <div style={{ width: "75%", position: "absolute",  top: "150px", left: "10%" }}>
                        <div style={{ padding: "10px 0px 10px 40px", display: "grid", gridTemplateColumns: "repeat(5,1fr" , backgroundColor:"#377ffd" }}>
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
                        </div>
                        <div style={{ width: "55%", marginTop: "14px",display:"flex",justifyContent:"space-between" }}>
                            <button style={{ padding:"20px 20px 20px 20px",borderRadius: "12px", textAlign: "start", backgroundColor: "rgb(224, 241, 224)", color: "black", marginBottom: "10px" }}>Total Amount: Rs {totalamount}</button>
                            <button className='checkout-btn' style={{ borderRadius: "12px", fontSize: "18px",  width: "150px", textAlign: "center",  padding: "12px 8px", cursor :"pointer" ,fontWeight:"600"}} onClick={handleCartAmt} >Checkout</button>
                        </div>
                    </div>
            }

        </WRAPPER>
    )
}

export default Cartpage

const WRAPPER = styled.div`
   


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


