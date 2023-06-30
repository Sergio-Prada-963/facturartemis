import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/categoria.controller.js";

const routerCategoria = Router();

routerCategoria.get("/", categoriaCotrollers.getCategoria);
routerCategoria.get("/:id", categoriaCotrollers.getCategoriaId);
routerCategoria.post("/", categoriaCotrollers.addCategoria);
routerCategoria.delete("/:id", categoriaCotrollers.deleteCategoria);
routerCategoria.put("/:id", categoriaCotrollers.updateCategoria);

export default routerCategoria;