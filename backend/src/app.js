import express from "express";
import {getAll, insert} from "./routes/categorias.routes.js"
import getAllContructora from "./routes/constructora.routes.js"
import getAllCotizaciones from "./routes/cotizaciones.routes.js"
import getAllCotizaciones from "./routes/cotizaciones.routes.js";

const app = express();

app.set("port",3309);

app.use("/api/categorias",getAll)
app.use("/api/insertCategoria",insert)
app.use("/api/constructora",getAllContructora)
app.use("/api/cotizaciones",getAllCotizaciones)

export default app;