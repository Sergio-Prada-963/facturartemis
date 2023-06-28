import { getConstructora } from "../fetch/APIconstructora.js";
document.addEventListener('DOMContentLoaded',cargaCostructora())

async function cargaCostructora(){
    const constructora = await getConstructora();
    const tablaConstructora = document.querySelector('#constructora');
    constructora.forEach(element => {
        const {id_constructora, nombre_constructora, fk_id_constructora, nombre_representante, email_contacto, telefono_contacto} = element;
        tablaConstructora.innerHTML += `
        <tr>
          <th scope="row">${id_constructora}</th>
          <td>${nombre_constructora}</td>
          <td>${fk_id_constructora}</td>
          <td>${nombre_representante}</td>
          <td>${email_contacto}</td>
          <td>${telefono_contacto}</td>
        </tr>
        `;
    });
}