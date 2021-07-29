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
    contrasenia: ""
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

//action creators 

export const setUserPassword = (user) => ({
    type: USER_SETTED,
    payload: user,
})
export const setUserLoginSuccess = () => (
    {
        type: 
    }
)


//thunk
export function validateUser (user){
    return async function validateUserThunk (dispatch){
        const response = await API.validateUser(user)
        if (response == true){
            dispatch(setUserPassword(user))

        }
    } 
}