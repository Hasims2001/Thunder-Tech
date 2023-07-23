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

const SingleProductpage = () => {
    // check swal
    const {id}=useParams()
    const [images,setImages]=useState([])
     const [sendcardata,setcarddata]=useState("")
    const [data,setData]=useState()
    const dataproductaddedtotal = useSelector((store) => store.cartReducer.cartproduct)
    const dispatch=useDispatch()
    const myRef = React.createRef();



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
        } catch (error) {
            console.log(error,"err")
            
        }
            
    }


    const handleAddProduct = () => {
        let flag = false
        for (let i = 0; i <= dataproductaddedtotal.length - 1; i++) {
            if (dataproductaddedtotal[i].id === Number(id)) {
                flag = true
            Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Product already in cart',

})
                break;
            }
        }

        if (flag === false) {
            Swal.fire(
          'Good job!',
        'Product Added to cart',
        'success'
            )
            console.log("checking")
            console.log({ ...sendcardata, quantity: 1 },"checking2")
            dispatch(addproductaction({ ...sendcardata, quantity: 1 }))
        }
    }
    console.log(sendcardata,"cart data2 single")

    const store_images=(category)=>{
        let arr = [];
        for(let i=0; i<4;i++){
            let a=`https://source.unsplash.com/featured/600x600?${category},products${i}`
            arr.push(a);
        }
        setImages(arr);

    }
    console.log(images,"images")
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
        <div className='details'>
            <div className='big-img'>
                <img src={images[index]} alt="" />
            </div>

            <div className='box'>
                <div className='row'>
                    <h2>{data.name}</h2>
                    <span>₹{data.price}</span>
                </div>
                <div className='colors'>
                    {Custom_color.map((colo,index)=>(
                        <button style={{background:colo}} key={index}></button>
                    ))}
                </div>  
                 <ul>
                    {data.Highlights.map((el,ind)=><li key={ind}>{el}</li>)}
                 </ul>
                {/* add p for content */}
                <div className='thumb' ref={myRef}>
                    {
                        images.map((img,index)=>(<img src={img} key={index} alt="" onClick={()=>handletab(index)} />))
                    }
                </div>
                <button className='cart' style={{ cursor: "pointer" }} onClick={handleAddProduct}>Add to Cart</button>
            </div>
        </div>}
      
      
     </DIV>
  )
}

export default SingleProductpage

const DIV=styled.div`
 max-width: 1200px;
 width: 90%;
 margin:100px auto;
 box-shadow: 0 0 5px #ccc;

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
    justify-content: space-around;
    margin-bottom: 15px;
 }

 .box .row h2{
    text-transform: uppercase;
    letter-spacing: 2px;
 }

 .box .row span{
    color: crimson;
 }

 .box .colors button{
    width: 30px;
    height: 30px;
    border: 1px solid #333;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
 }

 .box p{
    line-height: 1.5;
    margin: 15px 0;
 }

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

 @media (max-width:500px) {
    .thumb{
        height: 50px;
    }
    .thumb img{
        width: 50px;
    }
    
 }

    
`
