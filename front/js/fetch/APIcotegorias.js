const urlCategorias = "http://localhost:3309/api/categorias";

export const getCategorias = async ()=>{
    try {
        const categorias = await fetch(urlCategorias);
        const datoCategorias = await categorias.json();
        return datoCategorias;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const deleteCategoria = async idCatego =>{
    try {
        await fetch(`${urlCategorias}/${idCatego}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const newCategoria = async(insert)=>{
    try {
        await fetch(urlCategorias,{
            method: "POST",
            body:JSON.stringify(insert),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}

export const updateCategoria = async (datos) => {
    try {
        await fetch(`${urlCategorias}/${datos.id_categoria}`, {
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