import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { async } from '@firebase/util'
import { productAPI } from '../redux/api'
import axios from 'axios'
import { addproductaction } from '../redux/cartRedux/action'
import { useRef } from 'react'
import Swal from 'sweetalert2'
import { ProductCard } from './ProductCard'
import { Text,Box, Stack, Flex, Button, useToast } from '@chakra-ui/react'
import { BadgePercent } from 'lucide-react'
import {useNavigate} from 'react-router-dom';

const SingleProductpage = () => {
    // check swal
    const {id}=useParams()
    const [images,setImages]=useState([])
     const [sendcardata,setcarddata]=useState("")
    const [data,setData]=useState()
    const toast =useToast();
    const {isAuth} = useSelector(store=> store.authReducer);
    const AllData=useSelector((store)=>store.productReducer.products)
    const [extraData,setextraData]=useState([])
    const dataproductaddedtotal = useSelector((store) => store.cartReducer.cartproduct)
    const dispatch=useDispatch()
    const myRef = React.createRef();
    const navigate = useNavigate();


    const [index,setindex]=useState(0)
    
    const finding_data=async(id)=>{
        try {
            
            let res = await axios.get(`${productAPI}/${id}`);

            console.log(`${productAPI}/${id}`,"api")
            res = await res.data;
           console.log(res,"res")
           setData(res)
           setcarddata(res)
           store_images(res.category)

        //    finding more data of same category
          let a=AllData.filter((el)=>el.category==res.category)
          setextraData(a)
        } catch (error) {
            console.log(error,"err")
            
        }
            
    }


    const handleAddProduct = () => {
        let flag = false
        if(isAuth){

       
        for (let i = 0; i <= dataproductaddedtotal.length - 1; i++) {
            if (dataproductaddedtotal[i].id === Number(id)) {
                flag = true
                toast({
                    title: "Product is already in cart!",
                    isClosable: true,
                    duration: 9000,
                    status: 'info'
                })
                break;
            }
        }
       
        if (flag === false) {
            toast({
                title: "Product Added to cart!",
                isClosable: true,
                duration: 9000,
                status: 'success'
            })
           
            dispatch(addproductaction({ ...sendcardata, quantity: 1 }))
        }
        }else{
            toast({
                title: "Please login first!",
                isClosable: true,
                duration: 9000,
                status: 'error'
            })
        }
    }

    const store_images=(category)=>{
        let arr = [];
        for(let i=0; i<4;i++){
            let a=`https://source.unsplash.com/featured/600x600?${category},products${i}`
            arr.push(a);
        }
        setImages(arr);

    }
    const handletab=(index)=>{
        setindex(index)
        const imagest=myRef.current.children
        for(let i=0; i<imagest.length; i++){
            imagest[i].className=imagest[i].className.replace("active","");

        }
        imagest[index].className="active"

    } 
// dfdfjdl
  const Custom_color=["red","blue","black","white",'darkgrey']

    useEffect(()=>{
        
       finding_data(id)
      
       
        

    },[id])
   // const {name,category,company,price,color,Highlights}=single_data
   
  return (
    <DIV>
      {data &&
      <div className='DIV'>
        <div className='details'>
            <div className='big-img'>
                <img src={images[index]} alt="" />
            </div>

            <div className='box'>
                <div className='row'>
                    <h2>{data.name}</h2>
                    <span>₹{data.price}</span>
                </div>
                {/* <div className='colors'>
                    {Custom_color.map((colo,index)=>(
                        <button style={{background:colo}} key={index}></button>
                    ))}
                </div>   */}
                <Stack gap={".5em"}>
                    <Text fontWeight={'bold'}>Available offers</Text>
                    <Box>
                    <Flex gap={".2rem"}  alignItems={'flex-start'}><BadgePercent /><Text > Bank Offer5% off on Flipkart Axis Bank Credit Card, up to ₹500 on orders of ₹5,000 and above T&C</Text></Flex>
                    <Flex gap={".2rem"}  alignItems={'flex-start'}><BadgePercent /><Text > Bank Offer5% off on Flipkart Axis Bank Credit Card EMI Txns, up to ₹500 on orders of ₹5,000 and aboveT&C</Text></Flex>
                    <Flex gap={".2rem"}  alignItems={'flex-start'}><BadgePercent /><Text >Bank Offer10% off on ICICI Bank Debit Card, up to ₹750 on orders of ₹5,000 and aboveT&C</Text></Flex>
                    <Flex gap={".2rem"}  alignItems={'flex-start'}><BadgePercent /><Text > Special PriceGet extra ₹6000 off (price inclusive of cashback/coupon)T&C</Text></Flex>
                    </Box>
                </Stack>
                 <ul>
                    {data.Highlights.map((el,ind)=><li key={ind}>{el}</li>)}
                 </ul>
                {/* add p for content */}
                <div className='thumb' ref={myRef}>
                    {
                        images.map((img,index)=>(<img src={img} key={index} alt="" onClick={()=>handletab(index)} />))
                    }
                </div>
                <Button variant={"SimpleBlue"} mt={"2rem"}  style={{ cursor: "pointer" }} onClick={handleAddProduct}>Add to Cart</Button>
                <Button variant={"SimpleGreen"} mt={"2rem"} ml={"1rem"} onClick={()=> navigate("/products/cart")}>View Cart</Button>
            </div>
        </div>
        </div>}
       

       <div className='extra' style={{TextAlign:"center"}}>
        <h3 style={{fontSize:"30px"}}>You May Also Bought</h3>
        <br />
        <div className='extra-card'>
            {extraData.map((el,ind)=>(<ProductCard key={ind} {...el}/>))}
        </div>   
       </div>
      
     </DIV>
  )
}

export default SingleProductpage

const DIV=styled.div`
.DIV{

    /* max-width: 1200px; */
    width: 90%;
    margin: 0 auto;
    /* margin:100px auto; */
    /* box-shadow: 0 0 5px #ccc; */
}

 .details{
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px 0;
 }

 .details .big-img{
    max-width: 500px;
    min-width:290px ;
    overflow: hidden;
    margin: 25px;
    /* box-shadow: 0 0 5px #ccc; */
 }

 .big-img img{
    width: 100%;
    height: 100%;
    max-height: 400px;
    display: block;
    object-fit:cover ;
 }

 .details .box{
    max-width: 500px;
    min-width:290px ;
    margin: 25px;
 }

 .box .row{
    display:flex;
    justify-content: space-between;
    margin-bottom: 2rem;
 }

 .box .row h2{
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
 }

 .box .row span{
    color: #377ffd;
    font-size: 2rem;

 }
 .box ul{
    line-height: 1.5;
    margin: 15px 0;
    margin-bottom:2rem ;
 }
 .box .colors button{
    width: 30px;
    height: 30px;
    border: 1px solid #333;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
 }

 /* .box p{
    line-height: 1.5;
    margin: 15px 0;
 } */

 .thumb{
width: 100%;
height: 100px;
display: flex;
cursor: pointer;
margin: 10px 0;

 }

 .thumb img{
    width: 90px;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 1px solid #ddd;
    margin-right: 5px;
    opacity: 0.7;
     border-radius: 5px;
     transition: 0.5s linear;

 }

 .thumb img.active{
    opacity: 1;
    border: 1px solid lightseagreen;
 }

 .box .cart{
    background:#333 ;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 10px 25px;
    margin-top: 15px;
 }


 /* extra data section */

 .extra-card{
display: grid;
grid-template-columns: repeat(3,1fr);
/* max-width: 1200px;
    width: 90%;
    margin:100px auto;
    box-shadow: 0 0 5px #ccc;
    padding: 30px; */
 }

 .extra{
    max-width: 1200px;
    width: 90%;
    margin:100px auto;
    box-shadow: 0 0 5px #ccc;
    padding: 30px;
 }

 @media (max-width:500px) {
    .thumb{
        height: 50px;
    }
    .thumb img{
        width: 50px;
    }
    
 }

    
`
