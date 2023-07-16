import { getEmpleados, deleteEmpleados, newEmpleado, updateEmpleado } from "../fetch/APIempleado.js";
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
          <td><div class="group-sm group-middle group justify-content-end"><a class="button button-ujarak borrar" href="Home.html" id="${id_empleado}">Borrar</a><a class="button button-primary-outline button-ujarak"  href="#modalEmp${id_empleado}" data-toggle="modal">Actualizar</a></div></td>
        </tr>
      <div class="modal fade" id="modalEmp${id_empleado}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Actualizar Empleado</h4>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
              <form class="rd-form rd-form-variant-2 rd-mailform" data-form-output="form-output-global" data-form-type="contact-modal" method="post">
                <div class="row row-14 gutters-14">
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="nombre">Nombre Empleado</label>
                      <input class="form-input" id="nombre${id_empleado}" type="text" data-constraints="@Required" value="${nombre_empleado}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="email">Email</label>
                      <input class="form-input" id="email${id_empleado}" type="email" data-constraints="@Required" value="${email_empleado}">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="celular">Celualr</label>
                      <input class="form-input" id="celular${id_empleado}" type="number" value="${celular_empleado}" placeholder="Actualice el numero celular">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="contraseña">Contraseña</label>
                      <input class="form-input" id="contraseña${id_empleado}" type="text" value="${password_empleado}" placeholder="Actualice la contraseña">
                    </div>
                  </div>
                </div>
                <a class="button button-primary button-pipaluk actualizar" href="Home.html" type="submit" id="${id_empleado}">Actualizar</a>
            </div>
          </div>
        </div>
      </div>
        `;
    });
}

const opciones = document.querySelector('#empleados');
opciones.addEventListener('click', borrar)
opciones.addEventListener('click', editar)

function borrar(e){
    if(e.target.classList.contains('borrar')){
        const idEmple = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteEmpleados(idEmple);
        }
    }
}

const formulario = document.getElementById('nuevoEmpleado');
formulario.addEventListener('submit',nuevaEmpleado)
function nuevaEmpleado(e){
    const nombre = document.getElementById('nombreEmpleado').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const contraseña = document.getElementById('contraseña').value;
    const insert = {
      nombre_empleado: nombre,
      email_empleado: email,
      celular_empleado: celular,
      password_empleado: contraseña
    }
    console.log(insert);
    newEmpleado(insert)
}

function editar(e){
    if(e.target.classList.contains('actualizar')){
      const id = e.target.getAttribute('id');
      const nombre = document.getElementById(`nombre${id}`).value;
      const email = document.getElementById(`email${id}`).value;
      const celular = document.getElementById(`celular${id}`).value;
      const contraseña = document.getElementById(`contraseña${id}`).value;
        const datos = {
          id_empleado: id,
          nombre_empleado: nombre,
          email_empleado: email,
          celular_empleado: celular,
          password_empleado: contraseña
        }
        console.log(datos);
        updateEmpleado(datos);
    }
}