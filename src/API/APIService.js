
import axios from 'axios';
import * as LINKS from "./LINKS"

export async function validateUser (user) {
    let respuesta = null
      await axios({
        method: 'post',
        url: LINKS.VALIDATE_USER,
        data: {
            Correo: user.user,
            Contrasenia: user.password
        }
      })
      .then(function (response) {
          respuesta = true
      })
      .catch(function (error) {
          if (error.response.status === 418) 
            respuesta = false
      })
      return respuesta
}

export async function getTiposMascotas (){
  let respuesta = null
  await axios({
    method: "get",
    url: LINKS.GET_ALL_TIPOSMASCOTAS
  })
  .then (function (response){
    respuesta = response.data
  })
  .catch(function (error){
    console.log(error)
    respuesta = []
  })
  return respuesta
}

export async function addMascota (data) {
  let respuesta = null
    await axios({
      method: 'post',
      url: LINKS.POST_NEW_MASCOTA,
      data: {
          anionacimiento: data.anionacimiento ,
          descripcion: data.descripcion ,
          urlfoto: data.urlfoto ,
          idtipomascota: data.idtipomascota ,
          Nombre: data.Nombre ,
          CorreoRefugio: data.CorreoRefugio 
      }
    })
    .then(function (response) {
        respuesta = true
    })
    .catch(function (error) {
        if (error.response.status === 418) 
          respuesta = false
    })
    return respuesta
}