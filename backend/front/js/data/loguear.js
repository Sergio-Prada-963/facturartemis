import { getUsuarios, newUsuario } from "../fetch/APIusuarios.js";

const loguear = document.getElementById('login');
loguear.addEventListener('submit',verificar);

async function verificar(e){
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const usuarios = await getUsuarios();
    usuarios.forEach(element => {
        if(element.nombre_usuario === usuario && element.contraseña === contraseña){
            window.location.href = "Home.html";
        }
    });
}

const registrar = document.getElementById('registrar');
registrar.addEventListener('submit',register);

async function register(e){
    e.preventDefault();
    alert("Bienvenido, hora Ingresa!");
    const newUser = document.getElementById('newusuario').value;
    const rango = document.getElementById('rango').value;
    const contraseña = document.getElementById('newContraseña').value;
    const agregar = {
        nombre_usuario: newUser,
        rango: rango,
        contraseña: contraseña
    }
    console.log(agregar);
    newUsuario(agregar);
}