import { getProdcutos } from "../fetch/APIproductos.js";
document.addEventListener('DOMContentLoaded',cargaproductos())

async function cargaproductos(){
    const productos = await getProdcutos();
    const tablaproductos = document.querySelector('#productos');
    productos.forEach(element => {
        const {id_producto, nombre_producto, precio_x_dia, stock_producto, nombre_categoria} = element;
        tablaproductos.innerHTML += `
        <tr>
          <th scope="row">${id_producto}</th>
          <td>${nombre_producto}</td>
          <td>${precio_x_dia}</td>
          <td>${stock_producto}</td>
          <td>${nombre_categoria}</td>
        </tr>
        `;
    });
}