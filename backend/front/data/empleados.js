import { getEmpleados } from "../fetch/APIempleado.js";
document.addEventListener('DOMContentLoaded',cargaempleado())

async function cargaempleado(){
    const empleados = await getEmpleados();
    const tablaempleados = document.querySelector('#empleados');
    empleados.forEach(element => {
        const {id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado} = element;
        tablaempleados.innerHTML += `
        <tr>
          <th scope="row">${id_empleado}</th>
          <td>${nombre_empleado}</td>
          <td>${email_empleado}</td>
          <td>${celular_empleado}</td>
          <td>${password_empleado}</td>
        </tr>
        `;
    });
}