import { getCategorias, deleteCategoria, newCategoria, updateCategoria} from "../fetch/APIcotegorias.js";
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
          <td><img src="${img_categoria}" alt="imagen" style="width: 130px;height: 90px;border-radius: 34px;"></td>
          <td><div class="group-sm group-middle group justify-content-end"><a class="button button-ujarak borrar" href="./" id="${id_categoria}">Borrar</a><a class="button button-primary-outline button-ujarak"  href="#modalCta${id_categoria}" data-toggle="modal">Actualizar</a></div></td>
        </tr>
        <div class="modal fade" id="modalCta${id_categoria}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4>Actualizar Categoria</h4>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              </div>
              <div class="modal-body">
                <form class="rd-form rd-form-variant-2 rd-mailform" data-form-output="form-output-global" data-form-type="contact-modal" method="post">
                  <div class="row row-14 gutters-14">
                    <div class="col-12">
                      <div class="form-wrap">
                        <label for="newNombre">Nombre Categoria</label>
                        <input class="form-input" id="newNombre${id_categoria}" type="text" data-constraints="@Required" value="${nombre_categoria}">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-wrap">
                        <label for="newDescripcion">Descripcion</label>
                        <textarea class="form-input" id="newDescripcion${id_categoria}" type="text">${descripcion_categoria}</textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-wrap">
                        <label for="newImg">Imagen</label>
                        <input class="form-input" id="newImg${id_categoria}" type="url" value="${img_categoria}">
                      </div>
                    </div>
                  </div>
                  <a class="button button-primary button-pipaluk actualizar" href="./" type="submit" id="${id_categoria}">Actualizar</a>
                </form>
              </div>
            </div>
          </div>
        </div>
        `;
    });
}

const opciones = document.querySelector('#categorias');
opciones.addEventListener('click', borrar)
opciones.addEventListener('click', editar)

function borrar(e){
    if(e.target.classList.contains('borrar')){
        const idCatego = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteCategoria(idCatego);
        }
    }
}

const formulario = document.getElementById('nuevo');
formulario.addEventListener('submit',nuevaCategoria)
function nuevaCategoria(e){
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const img = document.getElementById('img').value;
    const insert = {
      nombre_categoria: nombre,
      descripcion_categoria: descripcion,
      img_categoria: img
    }
    console.log(insert);
    newCategoria(insert)
}

function editar(e){
    if(e.target.classList.contains('actualizar')){
        const id = e.target.getAttribute('id');
        const nombre = document.getElementById(`newNombre${id}`).value;
        const descripcion = document.getElementById(`newDescripcion${id}`).value;
        const img = document.getElementById(`newImg${id}`).value;
        const datos = {
          id_categoria: id,
          nombre_categoria: nombre,
          descripcion_categoria: descripcion,
          img_categoria: img
        }
        console.log(datos);
        updateCategoria(datos);
    }
}