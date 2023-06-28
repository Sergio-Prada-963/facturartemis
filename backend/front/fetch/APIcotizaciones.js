const urlCotizaciones = "http://localhost:3309/api/cotizaciones";
// const urlNew = "http://localhost/ArTeM02-062/php/restApi%20con%20js%20y%20php/clase2/backend/controllers/clientes.php?op=insert";

export const getCotizacioens = async ()=>{
    try {
        const cotizacion = await fetch(urlCotizaciones);
        const datocotizacion = await cotizacion.json();
        return datocotizacion;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

// export const nuevoCliente = async(registro)=>{
//     try {
//         await fetch(urlNew,{
//             method: "POST",
//             body:JSON.stringify(registro),
//             headers:{'Content-Type':'application/json'}
//         })
//     } catch (error) {
//         console.log(error,"No Funshion :(");
//     }
// }