import { Store } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData } from '../../redux/productRedux/action';
import styled from "styled-components"
import { Card, CardHeader, CardBody, CardFooter, Text, Divider, ButtonGroup, Button, Stack, Heading, Image, Flex } from '@chakra-ui/react'
import { CartComponent } from './CartComponent';

export const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.productReducer.products);

    useEffect(() => {
        dispatch(getProductData());
    }, []);

    console.log("data", data)
    return (
        <DIV>
             
             <div>
            <div class="container">
                <div class="card_box">
                    <span></span>

                    <img src="https://m.media-amazon.com/images/I/71DCZOdq92S._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                </div>
                
            </div>
            <CartComponent text = {"OnePlus Nord 200"} price={"12,587"} />
            </div>


            <div>
            <div class="container">
                <div class="card_box">
                    <span></span>

                    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/f/m/-original-imagna3ezkdusyrz.jpeg?q=70" alt="" />
                </div>
            </div>
            <CartComponent text={"vivo V27 5G"} price={"32,999"}/>
            </div>

           <div>
            <div class="container">
                <div class="card_box">
                    <span></span>

                    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70" alt="" />
                </div>
            </div>
            <CartComponent text={"iPhone 14 Pro"} price={"1,20,999"}/>
            </div>
            
            <div>
            <div class="container">
                <div class="card_box">
                   

                    <img src="https://m.media-amazon.com/images/I/616uMtIWiiL._AC_UL600_FMwebp_QL65_.jpg" alt="" />
                </div>
            </div>
            <CartComponent text={"OnePlus Nord N30 5G"} price={"24,529"}/>
            </div>


            <div>
            <div class="container">
                <div class="card_box">
                    <span></span>

                    <img src="https://m.media-amazon.com/images/I/71SHVwlDf6L._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                </div>
            </div>
            <CartComponent text={"iPhone 13"} price={"89,000"}/>
            </div>


            <div>
            <div class="container">
                <div class="card_box">
                    

                    <img src="https://m.media-amazon.com/images/I/71jvbxyQ2TL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                </div>
            </div>
            <CartComponent  text = {"OnePlus 11 5G"} price={"65,587"}/>
            </div>
























        </DIV>
    )
}


const DIV = styled.div`
/* border: 2px solid black; */
/* display: grid; */
display: flex;
justify-content: space-around;
/* grid-template-columns: repeat(5, 1fr); */

/* gap: 5px; */
background-color: white;
padding: 10px;

img{
    width: 100%;
}

///
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card_box {
  width: 200px;
  height: 250px;
  border-radius: 20px;
  background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);
  position: relative;
  box-shadow: 0 25px 50px rgba(0,0,0,0.55);
  cursor: pointer;
  transition: all .3s;
}

.card_box:hover {
  transform: scale(0.9);
}

.card_box span {
  position: absolute;
  overflow: hidden;
  width: 150px;
  height: 150px;
  top: -10px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card_box span::before {
  content: 'Premium';
  position: absolute;
  width: 150%;
  height: 40px;
  background-image: linear-gradient(45deg, #ff6547 0%, #ffb144  51%, #ff7053  100%);
  transform: rotate(-45deg) translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0,0,0,0.23);
}

.card_box span::after {
  content: '';
  position: absolute;
  width: 10px;
  bottom: 0;
  left: 0;
  height: 10px;
  z-index: -1;
  box-shadow: 140px -140px #cc3f47;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
}

.img{
    border-radius: 10px;
}
   
`