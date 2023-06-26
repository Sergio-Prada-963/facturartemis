# Alquilartemis

Servidor local de alquilartemis con rest API de base de datos.

## Instrucciones paso a paso

### Instalacion paquetes y base de datos

1. Base de datos:

   - Importamos la base de datos alquilartemis en phpmyadmin

2. instalacion de paquetes:

   Creamos una carpeta llamada `backend` en la cual vamos a ejecutar los siguientes comandos

   - Instalamos el package.json con el comando: 
      ```bash
      npm i -y
      ```
   - Instalamos *express* con el comando: 
      ```bash
      npm i express
      ```
   - Instalamos *nodemon* para que nos actualice el servidor automaticamente con el comando: 
      ```bash
      npm i -D nodemon
      ```
   - Instalamos *dotenv* con el comando:
      ```bash
      npm i dotenv
      ```
   - Instalamos *promise-mysql* con el comando:
      ```bash
      npm i promise-mysql
      ```

3. Configuramos el package.json:

   - Añadimos debajo de "description":
      ```json
      "type": "module",
      ```

   - Cambiamos la parte de `"scripts"` para que al iniciar se active el nodemon, debe quedar asi: 

      ```json
      "scripts": {
          "dev": "nodemon src/index.js"
       },
      ```

## Carpetas y Archivos

4. Creamos carpetas y archivos:

   - En la carpeta backend creamos un archivo llamado `.env`.

   - Creamos una carpeta llamada `src` dentro de la carpeta `backend`.

   - En la carpeta `src` creamos tres carpetas 
      - controllers
      - db -> en esta debe ir la base de datos
      - routes 

   - Luego creamos tres archivos en la carpeta `src`:
      - app.js
      - config.js
      - index.js

   - Debe quedar asi:
   ![Image](https://cdn2.me-qr.com/image/2023/Jun/25/7594606.jpg)

## Importacion express

   5. Guardamos todo el poder de *express* en una constante

   - Importamos express en el archivo `app.js`

   - Guardamos todo *express* en la variable *app*
   6. Puerto
   - Le asignamos un puerto a *app* y luego exportamos

   - Importamos *app* en el archivo `index.js` y creamos una funcion para que escuche el puerto en todo momento 

## Varibles de entorno y conexion base de datos
   7. Seleccionando la base de datos
   - En nuestro archivo `.env` vamos a poner los datos de nuestra base de datos.
   - En el archivo `config.js` importamos config de dotenv y luego exportamos por default los datos de la base de datos de la siguiente manera 
      ```javascript
      export default {
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
      }
      ```
   - En la carpeta *db* creamos un archivo `database.js` en el cual importamos la promesa mysql *promise-mysql* y importamos a config de `config.js`, Luego creamos una constante que va a ser igual a *mysql.createConnection ({})* en el cual van a ir los datos de la base de datos importados desde config.
   - En el mismo alchivo creamos una arrow function que retorne los valores de la constante anterior y la exportamos por default.

## Controladores y Get datos
   8. Seleccionamos la Tabla de las columnas a mostrar
   - En la carpeta *controllers* creamos un archivo `categorias.controllers.js`, en el cual vamos a importar de `database.js` nuestra constante con los datos de la base de datos.
   - Creamos una constante que va a tener una *arrow function* con *async* y *await* la cual va a llamar a la funcion que exportamos de la base de datos y luego con `.query` vamos a seleccionar todos los datos de la taba de categorias y le decimos que muestre los datos en formato *json*
      ```javascript
      const getCategoria = async (req, res) =>{
          const connection = await getConnection();
         const result = await connection.query("SELECT * FROM categorias")
          res.json(result);
      }
      ```
   - Exportamos una nueva constante llamada `methodsHTTP` que va a tener como objeto a *getCategoria*

## Configuracion rutas
   9. Configuramos la ruta para que nos traga datos especificos.
   - En la carpeta *routes* creamos un archivo `categorias.routes.js` en el cual importamos a *Router* de express y creamos una constante *router* que va a ser igual a *Router()*
   - En el mismo archivo importamos a *methodsHTTP* de *categorias.controllers.js*, luego a nuestra constante *router* le decimos `.get("/",methodsHTTP.getCategoria)` para que nos traiga los datos de la base de datos y exportamos a *router* por default.
   - En app.js importamos desde `categorias.routes.js` y a nuestra constante que contiene todo express le decimos que use *"/api/categorias"* y le añadimos  la constante que importamos anteriormente para que cuando en el navegador porgamos esa direccion de *http://localhost:(puerto)/api/categorias* nos traiga los datos en formato *json* de la base de datos

## Otras tablas
   - para las otras tablas repetir los pasos *Controladores y Get datos (8), Configuracion de rutas(9)*