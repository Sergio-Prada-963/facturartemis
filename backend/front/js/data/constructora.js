import { deleteConstructora, getConstructora, newConstructora, updateConstructora } from "../fetch/APIconstructora.js";
document.addEventListener('DOMContentLoaded',cargaCostructora())

async function cargaCostructora(){
    const constructora = await getConstructora();
    const tablaConstructora = document.querySelector('#constructora');
    constructora.forEach(element => {
        const {id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto} = element;
        tablaConstructora.innerHTML += `
        <tr>
          <th scope="row">${id_constructora}</th>
          <td>${nombre_constructora}</td>
          <td>${nit_constructora}</td>
          <td>${nombre_representante}</td>
          <td>${email_contacto}</td>
          <td>${telefono_contacto}</td>
          <td><div class="group-sm group-middle group justify-content-end"><a class="button button-ujarak borrar" href="./" id="${id_constructora}">Borrar</a><a class="button button-primary-outline button-ujarak"  href="#modalCont${id_constructora}" data-toggle="modal">Actualizar</a></div></td>
        </tr>
      <div class="modal fade" id="modalCont${id_constructora}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Actualizar Constructora</h4>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
              <form class="rd-form rd-form-variant-2 rd-mailform" id="nuevaConstructora" data-form-output="form-output-global" data-form-type="contact-modal" method="post">
                <div class="row row-14 gutters-14">
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="nombreConstructora${id_constructora}">Nombre Constructora</label>
                      <input class="form-input" id="nombreConstructora${id_constructora}" type="text" data-constraints="@Required" value="${nombre_constructora}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="nit${id_constructora}">Nit Constructora</label>
                      <input class="form-input" id="nit${id_constructora}" type="number" data-constraints="@Required" value="${nit_constructora}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="representante${id_constructora}">Representante</label>
                      <input class="form-input" id="representante${id_constructora}" type="text" value="${nombre_representante}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="email${id_constructora}">Email</label>
                      <input class="form-input" id="email${id_constructora}" type="email" value="${email_contacto}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="telefono${id_constructora}">Telefono</label>
                      <input class="form-input" id="telefono${id_constructora}" type="number" value="${telefono_contacto}">
                    </div>
                  </div>
                </div>
                <a class="button button-primary button-pipaluk actualizar" type="submit" href="./" id="${id_constructora}">Actualizar</a>
              </form>
            </div>
          </div>
        </div>
      </div>
        `;
    });
}

const opciones = document.querySelector('#constructora');
opciones.addEventListener('click', borrar)
opciones.addEventListener('click', editar)

function borrar(e){
    if(e.target.classList.contains('borrar')){
        const idConst = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteConstructora(idConst);
        }
    }
}

const formulario = document.getElementById('nuevaConstructora');
formulario.addEventListener('submit',nuevaConstructora)
function nuevaConstructora(e){
    const nombre = document.getElementById('nombreConstructora').value;
    const nit = document.getElementById('nit').value;
    const representante = document.getElementById('representante').value;
    const email = document.getElementById('emailContructora').value;
    const telefono = document.getElementById('telefono').value;
    const insert = {
      nombre_constructora: nombre,
      nit_constructora: nit,
      nombre_representante: representante,
      email_contacto: email,
      telefono_contacto: telefono
    }
    console.log(insert);
    newConstructora(insert)
}

function editar(e){
    if(e.target.classList.contains('actualizar')){
        const id = e.target.getAttribute('id');
        const nombre = document.getElementById(`nombreConstructora${id}`).value;
        const nit = document.getElementById(`nit${id}`).value;
        const representante = document.getElementById(`representante${id}`).value;
        const email = document.getElementById(`email${id}`).value;
        const telefono = document.getElementById(`telefono${id}`).value;
        const datos = {
          id_constructora: id,
          nombre_constructora: nombre,
          nit_constructora: nit,
          nombre_representante: representante,
          email_contacto: email,
          telefono_contacto: telefono
        }
        console.log(datos);
        updateConstructora(datos);
    }
}