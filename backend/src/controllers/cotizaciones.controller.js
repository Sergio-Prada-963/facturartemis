import getConnection from "../db/database.js"

const getCotizaciones = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM cotizaciones INNER JOIN empleados ON empleados.id_empleado = cotizaciones.fk_id_empleado INNER JOIN constructoras ON constructoras.id_constructora = cotizaciones.fk_id_constructora")
    res.json(result);
}

export const methodsHTTP = {
    getCotizaciones
}