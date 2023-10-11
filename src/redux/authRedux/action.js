import axios from "axios"
import { usersAPI } from "../api"
import { ERROR, ISAUTH, LOADING } from "../actionType";

export const postRegister = (userData) =>async (dispatch) => {
    dispatch({type:LOADING});
    try {
        let res = await axios.post(usersAPI, userData);
        res = await res?.data;
        dispatch({type: ISAUTH, payload: res});
    } catch (error) {
        dispatch({type:ERROR, payload: error.message});
    }
}

export const getLogin = (userData) =>async (dispatch) => {
    dispatch({type:LOADING});
    try {
        let res = await axios.get(usersAPI);
        res = await res?.data;
        let flag = false;
        for(let obj of res){
            
            if(obj.email === userData.email && obj.password === userData.password){
                flag = true;
                dispatch({type: ISAUTH, payload: res});
            }
        }
        if(!flag){
            dispatch({type: ERROR, payload: "Invalid Credentials!"})
        }
    } catch (error) {
        dispatch({type:ERROR,  payload: error.message});
    }
}
