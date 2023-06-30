import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/empleados.controller.js";

const routerEmpleados = Router();

routerEmpleados.get("/", categoriaCotrollers.getEmpleados);
routerEmpleados.get("/:id", categoriaCotrollers.getEmpleadosId);
routerEmpleados.post("/", categoriaCotrollers.addEmpleado);
routerEmpleados.delete("/:id", categoriaCotrollers.deleteEmpleado);
routerEmpleados.put("/:id", categoriaCotrollers.updateEmpleado);

export default routerEmpleados ;