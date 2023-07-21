import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firbase/firebase";
import { ERROR_PRODUCTS, GET_PRODUCTS, LOADING_PRODUCTS } from "../actionType";
import axios from "axios";
import { productAPI } from "../api";


export const getProductData = () => async (disptach) => {
  disptach({ type: LOADING_PRODUCTS })
  try {
    let res = await axios.get(productAPI);
    res = await res.data;
    disptach({ type: GET_PRODUCTS, payload: res })
  } catch (error) {
    disptach({ type: ERROR_PRODUCTS, payload: error.message })
  }
}
// export const getProductData = () => async (dispatch) => {
//   dispatch({ type: LOADING_PRODUCTS });
//   try {
//     const productData = collection(db, "products");
//     const productSnapshot = await getDocs(productData);
//     const products = productSnapshot.docs.map((doc) => doc.data());
//     // return products;
//     dispatch({ type: GET_PRODUCTS, payload: products });
//   } catch (error) {
//     dispatch({ type: ERROR_PRODUCTS, payload: error.message });
//   }
// };

// export const postProductData = (data) => async (dispatch) => {
//   dispatch({ type: LOADING_PRODUCTS });
//   try {
//     const productData = collection(db, "products");
//     const productSnapshot = await getDocs(productData);
//     const products = productSnapshot.docs.map((doc) => doc.data());
//     dispatch({ type: LOADING_PRODUCTS, payload: products });
//   } catch (error) {
//     dispatch({ type: ERROR_PRODUCTS, payload: error.message });
//   }
// };
