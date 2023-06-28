import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/empleados.controller.js";

const getAllEmpleados = Router();

getAllEmpleados.get("/", categoriaCotrollers.getEmpleados);

export default getAllEmpleados ;