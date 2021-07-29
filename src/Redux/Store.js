import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import logger from "redux-logger"
import * as API from "../API/APIService"

//constantes tipos acciones
export const USER_SETTED = "USER_SETTED"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"



const initialState = {
    usuario: "",
    contrasenia: "",
    login_success: false,
    login_failure: false
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case USER_SETTED:{
            return {
                ...state,
                usuario: action.payload.user,
                contrasenia: action.payload.password
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                login_success: true,
                login_failure: false
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                login_success: false,
                login_failure:true
            }
        }
        default:
            return state
    }
}
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(logger, thunk) ) )
export default store


// selectors
export const getUsuario = (state) => {
    return state.usuario
}
export const getContrasenia = (state) => {
    return state.contrasenia
}
export const getLoginSuccess = (state)=>{
    return state.login_success
}
//action creators 

export const setUserPassword = (user) => ({
    type: USER_SETTED,
    payload: user,
})
export const setUserLoginSuccess = () => (
    {
        type: LOGIN_SUCCESS
    }
)
export const setUserLoginFailure = () => (
    {
        type: LOGIN_FAILURE
    }
)


//thunk
export function validateUser (user){
    return async function validateUserThunk (dispatch){
        const response = await API.validateUser(user)
        if (response == true){
            dispatch(setUserLoginSuccess())
            dispatch(setUserPassword(user))
        }else{
            dispatch(setUserLoginFailure())
        }
    } 
}