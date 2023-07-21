import React from 'react'
import { ADD_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCTS, ERROR_ADD_PRODUCTS, ERROR_PRODUCTS, GET_PRODUCTS, LOADING_ADD_PRODUCTS, LOADING_PRODUCTS } from '../actionType'
import { db } from "../../firbase/firebase";
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import axios from 'axios';
import { productAPI } from '../api';


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

        dispatch({ type: ADD_PRODUCTS, payload: res });
    } catch (error) {
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
