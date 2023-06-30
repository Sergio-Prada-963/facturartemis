import getConnection from "./../db/database.js"

const getCategoria = async (req, res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias")
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCategoriaId = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias WHERE id_categoria = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addCategoria = async (req,res)=>{
    try {
        const {nombre_categoria, descripcion_categoria, img_categoria} = req.body
        const categori = {nombre_categoria, descripcion_categoria, img_categoria};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?",categori)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteCategoria = async (req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE id_categoria = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateCategoria = async (req,res)=>{
    try {
        const {id} = req.params;
        const {nombre_categoria, descripcion_categoria, img_categoria} = req.body
        const categori = {nombre_categoria, descripcion_categoria, img_categoria};
        const connection = await getConnection();
        const result = await connection.query("UPDATE categorias SET ? WHERE id_categoria = ?",[categori,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCategoria,
    addCategoria,
    getCategoriaId,
    deleteCategoria,
    updateCategoria
}