import { Router } from "express";
import { methodsHTTP as categoriaCotrollers} from "../controllers/productos.controller.js";

const routerProductos = Router();

routerProductos.get("/", categoriaCotrollers.getProductos);
routerProductos.get("/:id", categoriaCotrollers.getProductosId);
routerProductos.post("/", categoriaCotrollers.addProducto);
routerProductos.delete("/:id", categoriaCotrollers.deleteProducto);
routerProductos.put("/:id", categoriaCotrollers.updateProducto);

export default routerProductos ;