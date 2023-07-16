const urlProductos = "http://localhost:3309/api/productos";

export const getProdcutos = async ()=>{
    try {
        const producto = await fetch(urlProductos);
        const datoproducto = await producto.json();
        return datoproducto;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const deleteProductos = async idProd =>{
    try {
        await fetch(`${urlProductos}/${idProd}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const newProducto = async(insert)=>{
    try {
        await fetch(urlProductos,{
            method: "POST",
            body:JSON.stringify(insert),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}

export const updateProducto = async (datos) => {
    try {
        await fetch(`${urlProductos}/${datos.id_producto}`, {
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