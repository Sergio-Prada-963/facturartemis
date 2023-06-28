import express from "express";
import {getAll, insert} from "./routes/categorias.routes.js"
import getAllContructora from "./routes/constructora.routes.js"
import getAllCotizaciones from "./routes/cotizaciones.routes.js"
import getAllEmpleados from "./routes/empleados.routes.js"
import getAllProductos from "./routes/productos.routes.js"

const app = express();
app.set("port",3309);

app.use(express.static('front'))

app.use("/api/categorias",getAll)
app.use("/api/insertCategoria",insert)
app.use("/api/constructora",getAllContructora)
app.use("/api/cotizaciones",getAllCotizaciones)
app.use("/api/empleados",getAllEmpleados)
app.use("/api/productos",getAllProductos)

export default app;