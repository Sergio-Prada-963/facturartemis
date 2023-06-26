import getConnection from "../db/database.js"

const getConstructora = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM constructoras")
    res.json(result);
}

export const methodsHTTP = {
    getConstructora
}