import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/constructora.controller.js";

const getAllConstructora = Router();

getAllConstructora.get("/", categoriaCotrollers.getConstructora);

export default getAllConstructora ;