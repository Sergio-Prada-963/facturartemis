import { getCotizacioens } from "../fetch/APIcotizaciones.js";
document.addEventListener('DOMContentLoaded',cargaCotizacion())

async function cargaCotizacion(){
    const cotizaciones = await getCotizacioens();
    const tablacotizaciones = document.querySelector('#cotizaciones');
    cotizaciones.forEach(element => {
        const {id_cotizacion, fk_id_empleado, fk_id_constructora, fecha_cotizacion, hora_cotizacion, dia_alquiler, duracion_alquiler} = element;
        tablacotizaciones.innerHTML += `
        <tr>
          <th scope="row">${id_cotizacion}</th>
          <td>${fk_id_empleado}</td>
          <td>${fk_id_constructora}</td>
          <td>${fecha_cotizacion}</td>
          <td>${hora_cotizacion}</td>
          <td>${dia_alquiler}</td>
          <td>${duracion_alquiler}</td>
        </tr>
        `;
    });
}