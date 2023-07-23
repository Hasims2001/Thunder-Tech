import {  ADD_TO_CART, CART_TOTAL, CLEAR_CART, DECREASE_QUANTITY, DELETE_ITEM, INCREASE_QUANTITY } from "./actionType"

export  const addproductaction = (payload) => {
    return { type: ADD_TO_CART, payload }
}


export const incresequantityaction = (id, quantity) => {
    console.log(quantity, "here action")
    return { type: INCREASE_QUANTITY, id, quantity }
}

export const decreasequantityaction = (id, quantity) => {
    return { type: DECREASE_QUANTITY , id, quantity}
}

export const deleteaction =(id)=>{
    return { type: DELETE_ITEM , id}
}


export const getCartTotal = (payload ) => {
    return {type : CART_TOTAL, payload }
}



export const clearcartaction=()=>{
     return {type:CLEAR_CART}
}