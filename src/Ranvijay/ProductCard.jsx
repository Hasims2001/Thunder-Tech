import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom/dist";
import { LeafyGreen } from "lucide-react";

export const ProductCard = ({id,name,image, price, company,category,color}) =>{
   //  console.log(color,"color")
  let disc=Math.floor(price-(price*15)/100);
  let pr=30%
  useEffect(()=>{
   // const rand=Math.random()*30
   // const dis=rand*30;
   // disc=Math.floor(price*rand/100);
    //disc=discount

  },[])
    

//console.log(id,name,image, price, company,category,color,"productcard line 20")
  return (
    <DIV className="product-card">


<Link to={`/products/${id}`}>
<div class="card">
    <div class="card__body">
    <img src={`https://source.unsplash.com/featured/600x600?${name},products`} alt="name" className='product-image'/>
       <h3 className ='product-title'>{name}</h3>
       <p className='product-brand'>{company}</p>
       <h5 style={{ fontWeight: "bold",fontSize:"22px",color:"lightblue" }}>₹{disc}</h5>
       <p style={{textAlign: "center",textDecoration: "line-through",color: "#999", }}>{price} <span style={{color:"green"}}>{pr}</span></p>
       <p className='product-discount'>{category}</p>
    </div>
    <span> View Details</span>
</div>
</Link>
    
     
    
        {/* {color.map((el,ind)=>(
            <div key={ind} style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:el}}>
                
            </div>
        ))} */}
       
     

    </DIV>
  );
};
const DIV=styled.div`
  /* border:  solid black; */
  text-align: center;
 
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

  .product-image{
    width: 100%;
    height: 200px;
    border: 1px solid green;
   
  }
  .product-title{
    /* font-size:30px */
    font-weight:bold
  }

  .card {
  --bg: #f7f7f8;
  --hover-bg: #FFE5F4;
  --hover-text: #E50087;
  border: 1px solid red;
  max-width: 800ch;
  text-align: center;
  background: var(--bg);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.card__body {
  color: #464853;
  line-height: 1.5em;
  font-size: 1em;
  width: 90%;
  border: 1px solid blue;
}

.card > :not(span) {
  transition: .3s cubic-bezier(.6,.4,0,1);
}

.card > strong {
  display: block;
  font-size: 1.4rem;
  letter-spacing: -.035em;
}

.card span {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-text);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
}

.card:hover span {
  top: 0;
  font-size: 1.2em;
}

.card:hover {
  background: var(--hover-bg);
}

.card:hover>div,.card:hover>strong {
  opacity: 0;
}

`