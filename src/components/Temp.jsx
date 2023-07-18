import React, { useEffect, useState } from "react";
import { db } from "../firbase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../redux/productRedux/action";
export const Temp = () => {
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.productReducer.products);
  useEffect(() => {
    dispatch(getProductData());
  }, []);
  return <div>Temp</div>;
};
