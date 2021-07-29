
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
          console.log(error.response.status)
          if (error.response.status === 418) 
            respuesta = false
      })
      return respuesta
}