import getConnection from "../db/database.js"

const getProductos = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM productos INNER JOIN categorias ON categorias.id_categoria = productos.categoria_producto")
    res.json(result);
}

export const methodsHTTP = {
    getProductos
}