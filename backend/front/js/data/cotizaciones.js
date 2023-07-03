import { getCotizacioens, deleteCotizacion, newCotizacion, updateCotizacion } from "../fetch/APIcotizaciones.js";
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
          <td><div class="group-sm group-middle group justify-content-end"><a class="button button-ujarak borrar" href="./" id="${id_cotizacion}">Borrar</a><a class="button button-primary-outline button-ujarak"  href="#modalCot${id_cotizacion}" data-toggle="modal">Actualizar</a></div></td>
        </tr>
      <div class="modal fade" id="modalCot${id_cotizacion}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Actualizar Cotizacion</h4>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
              <form class="rd-form rd-form-variant-2 rd-mailform" id="actualizarCot" data-form-output="form-output-global" data-form-type="contact-modal" method="post">
                <div class="row row-14 gutters-14">
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="nombreEmpleado">Seleccione Nombre Empleado</label>
                      <select id="nombreEmpleado${id_cotizacion}" id="nombreEmpleado" class="form-select" aria-label="Default select example">
                        <option value="">Seleccione el Nombre del Empleado</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="nombreConstructora">Seleccione Nombre Constructora</label>
                      <select id="NombreConstructora${id_cotizacion}" id="nombreConstructora" class="form-select" aria-label="Default select example">
                        <option value="">Seleccione Nombre de la Constructora</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="fecha${id_cotizacion}">Fecha cotizacion</label>
                      <input class="form-input" id="fecha${id_cotizacion}" type="date">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="hora${id_cotizacion}">Hora cotizacion</label>
                      <input class="form-input" id="hora${id_cotizacion}" type="time">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="dia${id_cotizacion}">Seleccione un Dia de Alquiler</label>
                      <select id="dia${id_cotizacion}" class="form-select" aria-label="Default select example">
                        <option value="">Seleccione un Dia de Alquiler</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sabado">Sabado</option>
                        <option value="Domingo">Domingo</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-wrap">
                      <label for="duracion${id_cotizacion}">Duracion del alquiler en dias</label>
                      <input class="form-input" id="duracion${id_cotizacion}" type="number" value="${duracion_alquiler}">
                    </div>
                  </div>
                </div>
                <a class="button button-primary button-pipaluk actualizar" type="submit" href="./" id="${id_cotizacion}" >Agregar</a>
              </form>
            </div>
          </div>
        </div>
      </div>
        `;
    });
}

const opciones = document.querySelector('#cotizaciones');
opciones.addEventListener('click', borrar)
opciones.addEventListener('click', editar)

function borrar(e){
    if(e.target.classList.contains('borrar')){
        const idConstruct = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteCotizacion(idConstruct);
        }
    }
}

const formulario = document.getElementById('nuevaCotizacion');
formulario.addEventListener('submit',nuevaCategoria)
function nuevaCategoria(e){
    const nombre = document.getElementById('NombreEmpleado').value;
    const nombreConstructora = document.getElementById('NombreConstructora').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const dia = document.getElementById('dia').value;
    const duracion = document.getElementById('duracion').value;
    const insert = {
      fk_id_empleado: nombre,
      fk_id_constructora: nombreConstructora,
      fecha_cotizacion: fecha,
      hora_cotizacion: hora,
      dia_alquiler: dia,
      duracion_alquiler: duracion
    }
    console.log(insert);
    newCotizacion(insert)
}

function editar(e){
    if(e.target.classList.contains('actualizar')){
        const id = e.target.getAttribute('id');
        const nombre = document.getElementById(`nombreEmpleado${id}`).value;
        const nombreConstructora = document.getElementById(`NombreConstructora${id}`).value;
        const fecha = document.getElementById(`fecha${id}`).value;
        const hora = document.getElementById(`hora${id}`).value;
        const dia = document.getElementById(`dia${id}`).value;
        const duracion = document.getElementById(`duracion${id}`).value;
        const datos = {
          id_cotizacion: id,
          fk_id_empleado: nombre,
          fk_id_constructora: nombreConstructora,
          fecha_cotizacion: fecha,
          hora_cotizacion: hora,
          dia_alquiler: dia,
          duracion_alquiler: duracion
        }
        console.log(datos);
        updateCotizacion(datos);
    }
}