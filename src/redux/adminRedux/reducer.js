import React from 'react'
import { ADD_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCTS, ERROR_PRODUCTS, GET_PRODUCTS, LOADING_PRODUCTS } from '../actionType'

const init = {
    isLoading: false,
    isError: "",
    products: [],
}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOADING_PRODUCTS:
            return {
                ...state,
                isLoading: true,
            }
        case ERROR_PRODUCTS:
            return {
                ...state,
                isError: payload,
                isLoading: false,
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError: "",
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                isError: "",
                products: [...state.products, payload],
            }
        case EDIT_PRODUCTS:
            console.log(payload);
            return {
                ...state,
                isLoading: false,
                isError: "",
                products: state.products.filter((product) => {
                    if (product.id === payload.id) {
                        return payload;
                    } else {
                        return product;
                    }
                }),
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                isError: "",
                products: state.products.filter((product) => product.id !== payload),
            }
        default: return state;
    }
}
