import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/CxP.controllers.js";

const getAllCotxPro = Router();

getAllCotxPro.get("/", categoriaCotrollers.getCxP);

export default getAllCotxPro;