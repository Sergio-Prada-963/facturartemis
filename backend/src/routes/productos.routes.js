import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/productos.controller.js";

const getAllProductos = Router();

getAllProductos.get("/", categoriaCotrollers.getProductos);

export default getAllProductos ;