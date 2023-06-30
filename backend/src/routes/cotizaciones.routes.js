import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/cotizaciones.controller.js";

const routerCotizaciones = Router();

routerCotizaciones.get("/", categoriaCotrollers.getCotizaciones);
routerCotizaciones.get("/:id", categoriaCotrollers.getCotizacionesId);
routerCotizaciones.post("/", categoriaCotrollers.addCotizacion);
routerCotizaciones.delete("/:id", categoriaCotrollers.deleteCotizacion);
routerCotizaciones.put("/:id", categoriaCotrollers.updateCotizacion);

export default routerCotizaciones ;