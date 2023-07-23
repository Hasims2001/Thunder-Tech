import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { styled } from "styled-components";
import axios from "axios";
import { getProduct } from "../redux/productRedux/action";
import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom/dist";



export const ProductList = () => {
  const [searchparams]=useSearchParams()
  const dispatch = useDispatch()
  const data = useSelector((store) => store.productReducer.products);
 
   let paramsObj={
    params:{
    category:searchparams.getAll("category"),
    company:searchparams.getAll("company"),
    _sort: searchparams.get("order") && "price",
    _order: searchparams.get("order")
     }
   }
 

 useEffect(() => {
   
    dispatch(getProduct(paramsObj));

  }, [searchparams]);

  return (
    <DIV >
        <div className="rt_filter_card">
            <div className="rt_filter">
            <Sidebar/>
            </div>
        <div className="rt_card_sort">
      
        <hr />
        <div className="rt_card_section">
      
      {data.map((item)=><ProductCard key={item.id} {...item} />)}
      </div>
      </div>
      </div>
    </DIV>
  );
};

const DIV=styled.div`


.rt_filter_card{
    display: flex;
    margin: auto;
    margin-top: 50px;
    
}

.rt_filter{
    margin-left: 20px;
    border: 1px solid black;
    width: 15%;
}

.rt_card_sort{
   
    margin: auto 140px auto auto;
    
}


.rt_card_section{
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 20px;
margin: auto;
margin-top: 40px;


}

/* @media (min-width:300px) {
    .rt_card_section{
        display: grid;
       grid-template-columns: 1;  
       grid-template-rows: 1;

    }
    
} */

@media (max-width:750px) {
    .rt_card_section{
        display: grid;
grid-template-columns: repeat(2,1fr);  
    }
    
}

@media (max-width:450px) {
    .rt_card_section{
        display: grid;
grid-template-columns: repeat(1,1fr);  
    }
    
}


  
`