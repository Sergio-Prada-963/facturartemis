import getConnection from "../db/database.js"

const getConstructora = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM constructoras")
    res.json(result);
}

const getConstructoraId = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM constructoras WHERE id_constructora = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addConstructora = async (req,res)=>{
    try {
        const {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto} = req.body
        const construct = {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO constructoras SET ?",construct)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteConstructora = async (req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM constructoras WHERE id_constructora = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateConstructora= async (req,res)=>{
    try {
        const {id} = req.params;
        const {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto} = req.body
        const construct = {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto};
        const connection = await getConnection();
        const result = await connection.query("UPDATE constructoras SET ? WHERE id_constructora = ?",[construct,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getConstructora,
    getConstructoraId,
    addConstructora,
    deleteConstructora,
    updateConstructora
}