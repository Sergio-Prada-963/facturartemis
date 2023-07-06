import { obtainCategories, nuevaCategoria, deleteCategory, obtenerCategory, editarCategory } from "./APIcategorias.js";

document.addEventListener("DOMContentLoaded", () => {
 listar()
});

/* LISTAR CATEGORIAS  - CRUD (R) */
async function listar(){
    const categorias = await obtainCategories();
    const tabla = document.querySelector('#Categorias');
    categorias.forEach(element => {
        const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = element
        tabla.innerHTML += `
        <tr>
            <td id="idC" >${CategoriaID}</td>
            <td id="newNombre" >${CategoriaNombre}</td>
            <td id="newDescripcion" >${Descripcion}</td>
            <td id="newImg" >${Imagen}</td>
            <td><button type="button" class="btn btn-outline-danger eliminar" id="${CategoriaID}" onClick="window.location.reload();">Eliminar</button></td>
            <td><button type="button" class="btn btn-outline-info actualizar" data-bs-toggle="modal" data-bs-target="#update">Editar</button></td>
        </tr>`;
    });
}

const opciones = document.querySelector('#Categorias');
opciones.addEventListener('click', borrar)
opciones.addEventListener('click', editar)

function borrar(e){
    if(e.target.classList.contains('eliminar')){
        const idCatego = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteCategory(idCatego);
        }
    }
}

const formulario = document.getElementById('nuevo');
formulario.addEventListener('submit',newCategoria)
function newCategoria(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const img = document.getElementById('img').value;
    const categoria = {
        CategoriaNombre: nombre,
        Descripcion: descripcion,
        Imagen: img
    }
    console.log(categoria);
    nuevaCategoria(categoria)
}

function editar(e){
    if(e.target.classList.contains('actualizar')){
        console.log(e.target);
        const catego = e.target.parentElement.parentElement
        console.log(catego);
        const datosV = {
          id: catego.querySelector('#idC').textContent,
          nombre: catego.querySelector('#newNombre').textContent,
          descripcion: catego.querySelector('#newDescripcion').textContent,
          img: catego.querySelector('#newImg').textContent
        }
        console.log(datosV);
        const id = document.getElementById('idC');
        const nombre = document.getElementById(`newNombre`).value;
        const descripcion = document.getElementById(`newDescripcion`).value;
        const img = document.getElementById(`newImg`).value;
        
        console.log(datosV.nombre);
        document.getElementById('Nombre').value = datosV.nombre;
        document.getElementById('Descripcion').value = datosV.descripcion;
    }
}

const actulizarr = document.querySelector('#updatee');
actulizarr.addEventListener('click', update)

function update(e){
  e.preventDefault();
  const up = actulizarr.parentElement;
  console.log(up);
  const datosN = {
    CategoriaID: up.getElementsByClassName('idCategoria'),
    CategoriaNombre: up.getElementsByClassName('Nombre'),
    Descripcion: up.getElementsByClassName('Descripcion'),
    Imagen: up.getElementsByClassName('Imagen'),
  };
  console.log(datosN);
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)

