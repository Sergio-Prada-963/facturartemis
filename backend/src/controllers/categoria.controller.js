import getConnection from "./../db/database.js"

const getCategoria = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM categorias")
    res.json(result);
}

const insertCategoria = async (req,res)=>{
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO categorias(nombre_categoria, descripcion_categoria, img_categoria) VALUES ('nombre de prueva', 'descripcion de prueva', 'imagendeprueva.jpg' )")
    res.json(result);
}

export const methodsHTTP = {
    getCategoria,
    insertCategoria
}