import React from 'react'
import { ADD_PRODUCTS, DELETE_CUSTOMERS, DELETE_PRODUCT, DELETE_SALES, EDIT_PRODUCTS, ERROR_ADD_PRODUCTS, ERROR_PRODUCTS, GET_CUSTOMERS, GET_PRODUCTS, GET_SALES, LOADING_ADD_PRODUCTS, LOADING_PRODUCTS, UPDATE_SALES } from '../actionType'
import { db } from "../../firbase/firebase";
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import axios from 'axios';
import { productAPI, saleAPI, usersAPI } from '../api';


export const getProduct = () => async (disptach) => {
    disptach({ type: LOADING_PRODUCTS })
    try {
        let res = await axios.get(productAPI);
        res = await res.data;
        disptach({ type: GET_PRODUCTS, payload: res })
    } catch (error) {
        disptach({ type: ERROR_PRODUCTS, payload: error.message })
    }
}
export const postNewProduct = (newdata) => async (dispatch) => {
    dispatch({ type: LOADING_PRODUCTS })
    try {
        let res = await axios.post(productAPI, newdata);
        res = await res.data;
        console.log(newdata, "newData");
        dispatch({ type: ADD_PRODUCTS, payload: res });
    } catch (error) {
        console.log(error, "Action");
        dispatch({ type: ERROR_PRODUCTS, payload: error.message });
    }
}

export const postEditProduct = (newdata) => async (dispatch) => {
    dispatch({ type: LOADING_PRODUCTS })
    try {
        let res = await axios.patch(`${productAPI}/${newdata.id}`, newdata);
        res = await res.data;

        dispatch({ type: EDIT_PRODUCTS, payload: res });
    } catch (error) {
        dispatch({ type: ERROR_PRODUCTS, payload: error.message });
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    dispatch({ type: LOADING_ADD_PRODUCTS })
    try {
        let res = await axios.delete(`${productAPI}/${id}`);
        console.log(res);
        res = await res.data;
        dispatch({ type: DELETE_PRODUCT, payload: +id });
    } catch (error) {
        dispatch({ type: ERROR_ADD_PRODUCTS, payload: error.message });
    }
}


export const getSales = () => async (disptach) => {
    disptach({ type: LOADING_PRODUCTS })
    try {
        let res = await axios.get(saleAPI);
        res = await res.data;
        disptach({ type: GET_SALES, payload: res })
    } catch (error) {
        disptach({ type: ERROR_PRODUCTS, payload: error.message })
    }
}
export const updateSales = (obj) => async (dispatch) => {
    dispatch({ type: LOADING_ADD_PRODUCTS })
    try {
        let res = await axios.patch(`${saleAPI}/${obj.id}`, {
            status: obj.status
        });
        res = await res.data;
        dispatch({ type: UPDATE_SALES, payload: res });
    } catch (error) {
        dispatch({ type: ERROR_ADD_PRODUCTS, payload: error.message });
    }
}
export const deleteSales = (id) => async (dispatch) => {
    dispatch({ type: LOADING_ADD_PRODUCTS })
    try {
        let res = await axios.delete(`${saleAPI}/${id}`);
        res = await res.data;
        dispatch({ type: DELETE_SALES, payload: +id });
    } catch (error) {
        dispatch({ type: ERROR_ADD_PRODUCTS, payload: error.message });
    }
}



export const getCustomer = () => async (disptach) => {
    disptach({ type: LOADING_PRODUCTS })
    try {
        let res = await axios.get(usersAPI);
        res = await res.data;
        disptach({ type: GET_CUSTOMERS, payload: res })
    } catch (error) {
        disptach({ type: ERROR_PRODUCTS, payload: error.message })
    }
}

export const deleteCustomer = (id) => async (dispatch) => {
    dispatch({ type: LOADING_ADD_PRODUCTS })
    try {
        let res = await axios.delete(`${usersAPI}/${id}`);
        res = await res.data;
        dispatch({ type: DELETE_CUSTOMERS, payload: +id });
    } catch (error) {
        dispatch({ type: ERROR_ADD_PRODUCTS, payload: error.message });
    }
}