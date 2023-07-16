const urlEmpleados = "http://localhost:3309/api/empleados";

export const getEmpleados = async ()=>{
    try {
        const empleado = await fetch(urlEmpleados);
        const datoempleado = await empleado.json();
        return datoempleado;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const deleteEmpleados = async idEmple =>{
    try {
        await fetch(`${urlEmpleados}/${idEmple}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const newEmpleado = async(insert)=>{
    try {
        await fetch(urlEmpleados,{
            method: "POST",
            body:JSON.stringify(insert),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}

export const updateEmpleado = async (datos) => {
    try {
        await fetch(`${urlEmpleados}/${datos.id_empleado}`, {
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