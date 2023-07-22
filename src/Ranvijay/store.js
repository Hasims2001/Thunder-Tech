import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./redux/productReducer";

export const store=legacy_createStore(reducer)