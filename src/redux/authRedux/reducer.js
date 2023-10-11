import { ERROR, ERROR_PRODUCTS, GET_PRODUCTS, ISAUTH, LOADING, LOADING_PRODUCTS } from "../actionType";

const init = {
    // products: [],
    isLoading: false,
    isError: "",
    isAuth: false,
    userName: "",
    userEmail: "",

};

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOADING:
            return{
                ...state,
                isLoading: true,
            }
        case ERROR:
            return {
                ...state,
                isError: payload,
                isLoading: false,
            };
        case LOADING_PRODUCTS:
            return {
                ...state,
                isLoading: true,
            };
        case ERROR_PRODUCTS:
            return {
                ...state,
                isError: payload,
                isLoading: false,
            };
        case ISAUTH:
            return {
                ...state,
                isError: "",
                isLoading: false,
                isAuth: true,
                userName: payload.name,
                userEmail: payload.email
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError: "",
            };
        default:
            return state;
    }
};
