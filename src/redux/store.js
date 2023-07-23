import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./productRedux/reducer";
import { reducer as authReducer } from "./authRedux/reducer";
import { reducer as adminReducer } from './adminRedux/reducer';
import {reducer as cartReducer} from "./cartRedux/reducer"
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  productReducer,
  authReducer,
  adminReducer,
  cartReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
