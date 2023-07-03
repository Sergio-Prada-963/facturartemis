import { getProdcutos, deleteProductos, newProducto, updateProducto } from "../fetch/APIproductos.js";
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
          <td><div class="group-sm group-middle group justify-content-end"><a class="button button-ujarak borrar" href="./" id="${id_producto}">Borrar</a><a class="button button-primary-outline button-ujarak"  href="#modalProd${id_producto}" data-toggle="modal">Actualizar</a></div></td>
        </tr>
      <div class="modal fade" id="modalProd${id_producto}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Actualizar Producto</h4>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
              <form class="rd-form rd-form-variant-2 rd-mailform" data-form-output="form-output-global" data-form-type="contact-modal" method="post">
                <div class="row row-14 gutters-14">
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="updateProducto${id_producto}">Nombre Producto</label>
                      <input class="form-input" id="updateProducto${id_producto}" type="text" data-constraints="@Required" value="${nombre_producto}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="updatePrecioDia${id_producto}">Precio por Dia</label>
                      <input class="form-input" id="updatePrecioDia${id_producto}" type="number" data-constraints="@Required" value="${precio_x_dia}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="NewStock${id_producto}">Cantidad en Stock</label>
                      <input class="form-input" id="newStock${id_producto}" type="number" value="${stock_producto}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="CategoriaProductos${id_producto}">Seleccione la categoria del producto</label>
                      <select id="CategoriaProductos${id_producto}" class="form-select" aria-label="Default select example">
                        <option value="">Seleccione una categoria</option>
                      </select>
                    </div>
                  </div>
                </div>
                <a class="button button-primary button-pipaluk actualizar" id="${id_producto}" type="submit" href="./" >Actualizar</a>
              </form>
            </div>
          </div>
        </div>
      </div>
      `;
    });
}

const opciones = document.querySelector('#productos');
opciones.addEventListener('click', borrar)
opciones.addEventListener('click', editar)

function borrar(e){
    if(e.target.classList.contains('borrar')){
        const idProd= e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteProductos(idProd);
        }
    }
}

const formulario = document.getElementById('nuevoProducto');
formulario.addEventListener('submit',nuevoProducto)
function nuevoProducto(e){
    const nombre = document.getElementById('nombreProducto').value;
    const precioDia = document.getElementById('precioDia').value;
    const stock = document.getElementById('stock').value;
    const categoriaProducto = document.getElementById('categoriaProducto').value;
    const insert = {
      nombre_producto: nombre,
      precio_x_dia: precioDia,
      stock_producto: stock,
      categoria_producto: categoriaProducto
    }
    console.log(insert);
    newProducto(insert);
}

function editar(e){
    if(e.target.classList.contains('actualizar')){
        const id = e.target.getAttribute('id');
        const nombre = document.getElementById(`updateProducto${id}`).value;
        const precioDia = document.getElementById(`updatePrecioDia${id}`).value;
        const stock = document.getElementById(`newStock${id}`).value;
        const categoriaProducto = document.getElementById(`CategoriaProductos${id}`).value;
        const datos = {
          id_producto: id,
          nombre_producto: nombre,
          precio_x_dia: precioDia,
          stock_producto: stock,
          categoria_producto: categoriaProducto
        }
        console.log(datos);
        updateProducto(datos);
    }
}