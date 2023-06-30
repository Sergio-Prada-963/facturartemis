import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/constructora.controller.js";

const routerConstructora = Router();

routerConstructora.get("/", categoriaCotrollers.getConstructora);
routerConstructora.get("/:id", categoriaCotrollers.getConstructoraId);
routerConstructora.post("/", categoriaCotrollers.addConstructora);
routerConstructora.delete("/:id", categoriaCotrollers.deleteConstructora);
routerConstructora.put("/:id", categoriaCotrollers.updateConstructora);

export default routerConstructora ;