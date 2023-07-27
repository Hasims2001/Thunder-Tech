import React from 'react'
import { ADD_PRODUCTS, ADMIN_LOGIN, ADMIN_LOGOUT, DELETE_CUSTOMERS, DELETE_PRODUCT, DELETE_SALES, EDIT_PRODUCTS, ERROR_PRODUCTS, GET_CUSTOMERS, GET_PRODUCTS, GET_SALES, LOADING_PRODUCTS, UPDATE_SALES } from '../actionType'

const init = {
    isLoading: false,
    isError: "",
    products: [],
    sales: [],
    customers: [],
    isAuth: false,
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
        case GET_SALES:
            return {
                ...state,
                sales: payload,
                isLoading: false,
                isError: "",
            }
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: payload,
                isLoading: false,
                isError: "",
            }
        case ADD_PRODUCTS:
            console.log([...state.products, payload]);
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
        case UPDATE_SALES:
            return {
                ...state,
                isLoading: false,
                isError: "",
                sales: state.sales.map((sales) => {
                    if (sales.id === payload.id) {
                        sales.status = payload.status;
                    }
                }),
            }
        case DELETE_SALES:
            return {
                ...state,
                isLoading: false,
                isError: "",
                sales: state.sales.filter((sales) => sales.id !== payload),
            }
        case DELETE_CUSTOMERS:
            return {
                ...state,
                isLoading: false,
                isError: "",
                customers: state.customers.filter((customer) => customer.id !== payload),
            }
        case ADMIN_LOGIN:
            return {
                ...state,
                isAuth: true,
            }
        case ADMIN_LOGOUT:
            return {
                ...state,
                isAuth: false,
            }
        default: return state;
    }
}
