const urlConstructora = "http://localhost:3309/api/constructora";


export const getConstructora = async ()=>{
    try {
        const constructora = await fetch(urlConstructora);
        const datoConstructora = await constructora.json();
        return datoConstructora;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const deleteConstructora = async idConst =>{
    try {
        await fetch(`${urlConstructora}/${idConst}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const newConstructora = async(insert)=>{
    try {
        await fetch(urlConstructora,{
            method: "POST",
            body:JSON.stringify(insert),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}

export const updateConstructora = async (datos) => {
    try {
        await fetch(`${urlConstructora}/${datos.id_constructora}`, {
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