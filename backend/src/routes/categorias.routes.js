import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/categoria.controller.js";

const getAll = Router();
const insert = Router();

getAll.get("/", categoriaCotrollers.getCategoria);
insert.get("/", categoriaCotrollers.insertCategoria);

export {getAll, insert};