import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/CxP.controllers.js";

const routerCotxPro = Router();

routerCotxPro.get("/", categoriaCotrollers.getCxP);
routerCotxPro.get("/:id", categoriaCotrollers.getCxPId);
routerCotxPro.post("/", categoriaCotrollers.addCxP);
routerCotxPro.delete("/:id", categoriaCotrollers.deleteCxP);
routerCotxPro.put("/:id", categoriaCotrollers.updateCxP);

export default routerCotxPro;