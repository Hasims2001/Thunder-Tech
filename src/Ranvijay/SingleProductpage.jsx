import React, { useState } from 'react'
import { styled } from 'styled-components'

const SingleProductpage = () => {
    const [index,setindex]=useState(0)

    const handletab=(index)=>{
        setindex(index)
    }
  return (
    <DIV>
      {ProductCard.map((item)=>(
        <div className='details' key={item.id}>
            <div className='big-img'>
                <img src={item.src[index]} alt="" />
            </div>

            <div className='box'>
                <div className='row'>
                    <h2>{item.name}</h2>
                    <span>${item.price}</span>
                </div>
                <div className='colors'>
                    {item.colors.map((color,index)=>(
                        <button style={{background:color}} key={index}></button>
                    ))}
                </div> 
                <p>{item.description}</p>
                {/* add p for content */}
                <div className='thumb'>
                    {
                        item.src.map((img,index)=>(<img src={img} key={index} alt="" onClick={()=>handletab(index)} />))
                    }
                </div>
                <button className='cart'>Add to Cart</button>
            </div>
        </div>
      )) }  
      
     </DIV>
  )
}

export default SingleProductpage

const DIV=styled.div`
 max-width: 1200px;
 width: 100%;
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
