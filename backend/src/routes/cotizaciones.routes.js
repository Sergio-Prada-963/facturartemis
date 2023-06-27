import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/cotizaciones.controller.js";

const getAllCotizaciones = Router();

getAllCotizaciones.get("/", categoriaCotrollers.getCotizaciones);

export default getAllCotizaciones ;