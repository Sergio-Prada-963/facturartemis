import getConnection from "../db/database.js"

const getProductos = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM productos")
    res.json(result);
}

export const methodsHTTP = {
    getProductos
}