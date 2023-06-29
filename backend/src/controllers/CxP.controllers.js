import getConnection from "../db/database.js"

const getCxP = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM productos_x_cotizaciones INNER JOIN productos ON productos.id_producto = productos_x_cotizaciones.fk_id_producto INNER JOIN cotizaciones ON cotizaciones.id_cotizacion = productos_x_cotizaciones.fk_id_detalle")
    res.json(result);
}

export const methodsHTTP = {
    getCxP
}