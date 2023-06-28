import { getCategorias } from "../fetch/APIcotegorias.js";
document.addEventListener('DOMContentLoaded',cargaCategorias())

async function cargaCategorias(){
    const categorias = await getCategorias();
    const tablaCategorias = document.querySelector('#categorias');
    categorias.forEach(element => {
        const {id_categoria, nombre_categoria, descripcion_categoria, img_categoria} = element;
        tablaCategorias.innerHTML += `
        <tr>
          <th scope="row">${id_categoria}</th>
          <td>${nombre_categoria}</td>
          <td>${descripcion_categoria}</td>
          <td>${img_categoria}</td>
        </tr>
        `;
    });
}