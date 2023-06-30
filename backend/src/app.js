import express from "express";
import routerCategoria from "./routes/categorias.routes.js";
import routerContructora from "./routes/constructora.routes.js"
import routerCotizaciones from "./routes/cotizaciones.routes.js"
import routerEmpleados from "./routes/empleados.routes.js"
import routerProductos from "./routes/productos.routes.js"
import routerCotxPro from "./routes/CxP.routes.js";

const app = express();
app.set("port",3309);

//middleware F- nativa
app.use(express.json());

app.use("/home",express.static('front'))

app.use("/api/categorias",routerCategoria)
app.use("/api/constructora",routerContructora)
app.use("/api/empleados",routerEmpleados)
app.use("/api/productos",routerProductos)
app.use("/api/cotizaciones",routerCotizaciones)
app.use("/api/CotxPro",routerCotxPro)

export default app;