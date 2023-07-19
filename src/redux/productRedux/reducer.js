import { ERROR_PRODUCTS, GET_PRODUCTS, LOADING_PRODUCTS } from "../actionType";

const init = {
  products: [],
  isLoading: false,
  isError: "",
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
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