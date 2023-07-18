import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./productRedux/reducer";
import { reducer as authReducer } from "./authRedux/reducer";
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  productReducer,
  authReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
