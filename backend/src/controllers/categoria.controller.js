import getConnection from "./../db/database.js"

const getCategoria = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM categorias")
    res.json(result);
}

export const methodsHTTP = {
    getCategoria
}