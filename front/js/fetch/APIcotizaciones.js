const urlCotizaciones = "http://localhost:3309/api/cotizaciones";

export const getCotizacioens = async ()=>{
    try {
        const cotizacion = await fetch(urlCotizaciones);
        const datocotizacion = await cotizacion.json();
        return datocotizacion;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const deleteCotizacion = async idCot =>{
    try {
        await fetch(`${urlCotizaciones}/${idCot}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const newCotizacion = async(insert)=>{
    try {
        await fetch(urlCotizaciones,{
            method: "POST",
            body:JSON.stringify(insert),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}

export const updateCotizacion = async (datos) => {
    try {
        await fetch(`${urlCotizaciones}/${datos.id_cotizacion}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
}