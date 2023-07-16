import {getCategorias} from './fetch/APIcotegorias.js';
import { getProdcutos } from './fetch/APIproductos.js';
import { getEmpleados } from './fetch/APIempleado.js';
import { getConstructora} from './fetch/APIconstructora.js';
import { getCotizacioens } from './fetch/APIcotizaciones.js';

document.addEventListener('DOMContentLoaded',()=>{
    selectProductos();
    selecCotizaciones();
})

//modal de Productos
async function selectProductos(){
    const productos = await getProdcutos();
    const categorias = await getCategorias();
    const categoriasP = document.getElementById('categoriaProducto');
    categorias.forEach(catego => {
        categoriasP.innerHTML +=`<option value="${catego.id_categoria}">${catego.nombre_categoria}</option>`;
    });
    productos.forEach(productos => {
        const updateSelect = document.getElementById(`CategoriaProductos${productos.id_producto}`);
        categorias.forEach(categoria => {
            updateSelect.innerHTML += `<option value="${categoria.id_categoria}">${categoria.nombre_categoria}</option>`;
        });
    });
}

//modal cotizaciones
async function selecCotizaciones(){
    const empleados = await getEmpleados();
    const constructora = await getConstructora();
    const cotizaciones = await getCotizacioens();
    const nombreEm = document.getElementById('NombreEmpleado');
    const nombreCons = document.getElementById('NombreConstructora');
    empleados.forEach(nombre => {
        nombreEm.innerHTML += `<option value="${nombre.id_empleado}">${nombre.nombre_empleado}</option>` ;
    });
    constructora.forEach(cosntruct =>{
        nombreCons.innerHTML += `<option value="${cosntruct.id_constructora}">${cosntruct.nombre_constructora}</option>`;
    });
    cotizaciones.forEach(cot=>{
        const selectEmp = document.getElementById(`nombreEmpleado${cot.id_cotizacion}`);
        const selecConst = document.getElementById(`NombreConstructora${cot.id_cotizacion}`);
        empleados.forEach(emple =>{
            selectEmp.innerHTML += `<option value="${emple.id_empleado}">${emple.nombre_empleado}</option>`;
        });
        constructora.forEach(constructora =>{
            selecConst.innerHTML +=`<option value="${constructora.id_constructora}">${constructora.nombre_constructora}</option>`;
        });
    })
}