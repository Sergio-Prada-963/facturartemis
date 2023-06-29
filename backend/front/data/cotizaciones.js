import { getCotizacioens } from "../fetch/APIcotizaciones.js";
document.addEventListener('DOMContentLoaded',cargaCotizacion())

async function cargaCotizacion(){
    const cotizaciones = await getCotizacioens();
    const tablacotizaciones = document.querySelector('#cotizaciones');
    cotizaciones.forEach(element => {
        const {id_cotizacion, nombre_empleado, nombre_constructora, fecha_cotizacion, hora_cotizacion, dia_alquiler, duracion_alquiler} = element;
        tablacotizaciones.innerHTML += `
        <tr>
          <th scope="row">${id_cotizacion}</th>
          <td>${nombre_empleado}</td>
          <td>${nombre_constructora}</td>
          <td>${fecha_cotizacion}</td>
          <td>${hora_cotizacion}</td>
          <td>${dia_alquiler}</td>
          <td>${duracion_alquiler}</td>
        </tr>
        `;
    });
}