import getConnection from "../db/database.js"

const getUsuarios = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios")
    res.json(result);
}

const addUsuario = async (req,res)=>{
    try {
        const {nombre_usuario, rango, contraseña} = req.body
        const nuevo = {nombre_usuario, rango, contraseña};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuarios SET ?",nuevo)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteUsuario = async (req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE id_usuario = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateUsuario = async (req,res)=>{
    try {
        const {id} = req.params;
        const {nombre_usuario, rango, contraseña} = req.body
        const update = {nombre_usuario, rango, contraseña};
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE id_usuario = ?",[update,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getUsuarios,
    addUsuario,
    deleteUsuario,
    updateUsuario
}