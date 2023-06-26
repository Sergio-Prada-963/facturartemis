import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/categoria.controller.js";

const router = Router();

router.get("/", categoriaCotrollers.getCategoria);

export default router;