const urlUsuarios = "http://localhost:3309/api/usuarios";

export const getUsuarios = async ()=>{
    try {
        const usuarios = await fetch(urlUsuarios);
        const datoUsuario = await usuarios.json();
        return datoUsuario;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const deleteUsuario = async idUsuario =>{
    try {
        await fetch(`${urlUsuarios}/${idUsuario}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const newUsuario = async(insert)=>{
    try {
        await fetch(urlUsuarios,{
            method: "POST",
            body:JSON.stringify(insert),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}

export const updateUsuario = async (datos) => {
    try {
        await fetch(`${urlUsuarios}/${datos.id_usuario}`, {
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