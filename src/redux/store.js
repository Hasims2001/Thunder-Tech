import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./productRedux/reducer";
import { reducer as authReducer } from "./authRedux/reducer";
import { reducer as adminReducer } from './adminRedux/reducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  productReducer,
  authReducer,
  adminReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
