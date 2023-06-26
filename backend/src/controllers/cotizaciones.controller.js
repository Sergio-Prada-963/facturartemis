import getConnection from "../db/database.js"

const getCotizaciones = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM cotizaciones")
    res.json(result);
}

export const methodsHTTP = {
    getCotizaciones
}