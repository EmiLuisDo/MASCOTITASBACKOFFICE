import axios from 'axios';

const APILINK = "https://api.cloudinary.com/v1_1/dxneookr1/image/upload"


export async function subirFoto (file){

    const fdata = constructRequest(file)
    console.log("FDATAAAAAAA en cloudinaryjs")
    console.log(fdata)
    let respuesta = null
    await axios({
        method:"post",
        url:APILINK,
        data: {
            method: "post",
            body: fdata
        }})
    .then(function (response) {
        respuesta = response
    })
    .catch(err =>{
        console.log(err)
        respuesta = false
    })
    return respuesta
}

const constructRequest = (file) => {
    const fdata = new FormData()
    fdata.append("file", file)
    fdata.append("upload_preset", "mascotitas")
    fdata.append("cloud_name", "dxneookr1")
    return fdata
}


// const onSubmit = (data) => {

//     const fdata = new FormData()
//     fdata.append("file", data.FotoMascota[0])
//     fdata.append("upload_preset", "mascotitas")
//     fdata.append("cloud_name", "dxneookr1")
//     fetch("https://api.cloudinary.com/v1_1/dxneookr1/image/upload",
//     {method: "post",
//      body:fdata
//     })
//     .then(resp => resp.json())
//     .then(data => {console.log(data.url)})
//     .catch(err => console.log(err))
//   }