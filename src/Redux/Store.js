import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import logger from "redux-logger"
import * as API from "../API/APIService"
import * as CLOUDINARY from "../API/Cloudinary"

//constantes tipos acciones
export const USER_SETTED = "USER_SETTED"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const GETTING_TIPOS_MASCOTAS = "GETTING_TIPOS_MASCOTAS"
export const GETTING_TIPOS_MASCOTAS_SUCCESS = "GETTING_TIPOS_MASCOTAS_SUCCESS"
export const GETTING_TIPOS_MASCOTAS_FAILURE = "GETTING_TIPOS_MASCOTAS_FAILURE"
export const SET_TIPOS_MASCOTAS = "SET_TIPOS_MASCOTAS"
export const SET_UPPING_PHOTO = "SET_UPPING_PHOTO"
export const SET_CREATING_MASC = "SET_CREATING_MASC"
export const SET_CREATING_MASC_SUCCESS = "SET_CREATING_MASC_SUCCESS"
export const SET_CREATING_MASC_FAILURE = "SET_CREATING_MASC_FAILURE"
export const SET_FETCHING_MASCOTAS = "SET_FETCHING_MASCOTAS"
export const SET_FETCHING_MASCOTAS_SUCCESS = "SET_FETCHING_MASCOTAS_SUCCESS"
export const SET_FETCHING_MASCOTAS_FAILURE = "SET_FETCHING_MASCOTAS_FAILURE"
export const SET_MASCOTAS = "SET_MASCOTAS"

const initialState = {
    usuario: "",
    contrasenia: "",
    login_success: false,
    login_failure: false,
    tiposMascotas: [], 
    gettingTiposMascotas: false,
    gettingTiposMascotasSuccess: false,
    gettingTiposMascotasFailure: false,
    uppingPhoto: false,
    creatingMasc : false,
    creatingMaskSuccess : false,
    creatingMaskFailure : false,
    fetchingMascotas: false,
    fetchingMascotasFailure: false,
    fetchingMascotasSuccess: false,
    mascotas: []
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
                login_failure: true
            }
        }


        case GETTING_TIPOS_MASCOTAS:{
            return {
                ...state,
                gettingTiposMascotas: true
            }
        }
        case GETTING_TIPOS_MASCOTAS_SUCCESS:{
            return {
                ...state,
                gettingTiposMascotasSuccess:true,
                gettingTiposMascotas:false
            }
        }
        case GETTING_TIPOS_MASCOTAS_FAILURE:{
            return {
                ...state,
                gettingTiposMascotasSuccess:false,
                gettingTiposMascotas:false
            }
        }
        case SET_TIPOS_MASCOTAS:{
            return {
                ...state,
                tiposMascotas: action.payload
            }
        }
        case SET_UPPING_PHOTO:{
            return {
                ...state,
                uppingPhoto: action.payload
            }
        }
        case SET_CREATING_MASC:{
            return {
                ...state,
                creatingMasc : true,
            }
        }
        case SET_CREATING_MASC_SUCCESS: {
            return {
                ...state,
                creatingMasc: false,
                creatingMaskSuccess : true,
            }
        }
        case SET_CREATING_MASC_FAILURE: {
            return {
                ...state,
                creatingMasc: false,
                creatingMaskFailure: true
            }
        }
        case SET_FETCHING_MASCOTAS: {
            return {
                ...state,
                fetchingMascotas:true
            }
        }
        case SET_FETCHING_MASCOTAS_SUCCESS: {
            return {
                ...state,
                fetchingMascotasSuccess:true,
                fetchingMascotas: false
            }
        }
        case SET_FETCHING_MASCOTAS_FAILURE: {
            return {
                ...state,
                fetchingMascotasFailure:true,
                fetchingMascotas:false 
            }
        }
        case SET_MASCOTAS: {
            return {
                ...state,
                mascotas: action.payload
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
export const getTiposMascotas = (state) => {
    return state.tiposMascotas
}
export const getMascotas = (state) => {
    return state.mascotas
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
export const setGettingTiposMascotas = () => (
    {
        type: GETTING_TIPOS_MASCOTAS
    }
)
export const setGettingTiposMascotasSuccess = () => (
    {
        type: GETTING_TIPOS_MASCOTAS_SUCCESS
    }
)
export const setGettingTiposMascotasFailure = () => (
    {
        type : GETTING_TIPOS_MASCOTAS_FAILURE
    }
)
export const setTiposMascotas = (tiposMascotas) => (
    {
        type: SET_TIPOS_MASCOTAS,
        payload: tiposMascotas,
    }
)
export const setUppingPhoto = (upping) => (
    {
        type: SET_UPPING_PHOTO,
        payload: upping
    }
    )
export const setCreatingMasc = ()=>(
    {
        type: SET_CREATING_MASC
    }
    )
export const setCreatingMascSuccess = () => (
    {
        type: SET_CREATING_MASC_SUCCESS
    }
)
export const setCreatingMascFailure = () => (
    {
        type: SET_CREATING_MASC_FAILURE
    }
)
export const setFetchingMascotas = () => (
    {
        type: SET_FETCHING_MASCOTAS
    }
)
export const setFetchingMascotasFailure = () => (
    {
        type: SET_FETCHING_MASCOTAS_FAILURE
    }
)
export const setFetchingMascotasSuccess = () => (
    {
        type: SET_FETCHING_MASCOTAS_SUCCESS
    }
)
export const setMascotas = (mascotas) => (
    {
        type: SET_MASCOTAS,
        payload: mascotas
    }
)



//thunk
export function validateUser (user){
    return async function validateUserThunk (dispatch){
        const response = await API.validateUser(user)
        if (response === true){
            dispatch(setUserLoginSuccess())
            dispatch(setUserPassword(user))
        }else{
            dispatch(setUserLoginFailure())
        }
    } 
}

export function tryGetTiposMascotas (){
    return async function tryGetTiposMascotasThunk (dispatch){
        dispatch (setGettingTiposMascotas())
        const response = await API.getTiposMascotas ()
        if(response === []){
            dispatch(setGettingTiposMascotasFailure())
        }
        else{
            dispatch(setGettingTiposMascotasSuccess())
            dispatch(setTiposMascotas(response))
        }
    }
}

export function upMascota (formdata, useremail) {
    return async function upMascotaThunk (dispatch){
        dispatch (setUppingPhoto(true))


        const fdata = new FormData()
        fdata.append("file", formdata.FotoMascota[0])
        fdata.append("upload_preset", "mascotitas")
        fdata.append("cloud_name", "dxneookr1")
        console.log("FDATA EN FORM ")
        console.log(fdata)
        fetch("https://api.cloudinary.com/v1_1/dxneookr1/image/upload",
          {method: "post",
          body:fdata
        })
        .then(resp => resp.json())
        .then(respjson => {

            const data = {
                anionacimiento: formdata.AnioNacimiento,
                descripcion: formdata.Descripcion,
                urlfoto: respjson.url,
                idtipomascota: formdata.IdTipoMascota,
                Nombre: formdata.Nombre,
                CorreoRefugio: useremail
            }
            dispatch(setCreatingMasc())
            API.addMascota(data)
            .then(resp =>{
                console.log(resp)
                if(resp === true){
                    dispatch(setCreatingMascSuccess())
                }else{
                    dispatch(setCreatingMascFailure())
                }
            })
        })
        .catch(err => console.log(err))
        .finally(()=>{ dispatch (setUppingPhoto(false)) })
        
    }
}

export function tryGetMascotasByRefugio(correo){
    return async function tryGetMascotasByRefugioThunk(dispatch){
        dispatch (setFetchingMascotas())
        console.log("CORREO EN THUNK")
        console.log(correo)
        const response = await API.getMascotasByRefugio (correo)

        if(response === []){
            dispatch( setFetchingMascotasSuccess ())
            dispatch( setMascotas(response) )
        }
        else {
            dispatch (setFetchingMascotasFailure ())
            dispatch( setMascotas(response) )
        }
    }
}