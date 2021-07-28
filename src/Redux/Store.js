import { createStore } from '@reduxjs/toolkit'


//constantes tipos acciones
export const USER_SETTED = "USER_SETTED"




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
const store = createStore(reducer)
export default store


// selectors



//action creators 

const setUserPassword = (user) => ({
    type: USER_SETTED,
    payload: user,
})