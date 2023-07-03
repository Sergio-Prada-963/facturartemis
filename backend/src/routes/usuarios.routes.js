import { Router } from "express";
import { methodsHTTP as usuarioCotrollers} from "../controllers/usuarios.controller.js";

const routerUsuarios = Router();

routerUsuarios.get("/", usuarioCotrollers.getUsuarios);
routerUsuarios.post("/", usuarioCotrollers.addUsuario);
routerUsuarios.delete("/:id", usuarioCotrollers.deleteUsuario);
routerUsuarios.put("/:id", usuarioCotrollers.updateUsuario);

export default routerUsuarios;