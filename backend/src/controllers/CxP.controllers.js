import getConnection from "../db/database.js"

const getCxP = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM productos_x_cotizaciones INNER JOIN productos ON productos.id_producto = productos_x_cotizaciones.fk_id_producto INNER JOIN cotizaciones ON cotizaciones.id_cotizacion = productos_x_cotizaciones.fk_id_detalle")
    res.json(result);
}

const getCxPId = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM productos_x_cotizaciones WHERE id_registro = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addCxP = async (req,res)=>{
    try {
        const {fk_id_producto, fk_id_detalle} = req.body
        const cXp = {fk_id_producto, fk_id_detalle};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO productos_x_cotizaciones SET ?",cXp)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteCxP = async (req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos_x_cotizaciones WHERE id_registro = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateCxP = async (req,res)=>{
    try {
        const {id} = req.params;
        const {fk_id_producto, fk_id_detalle} = req.body
        const cXp = {fk_id_producto, fk_id_detalle};
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos_x_cotizaciones SET ? WHERE id_registro = ?",[cXp,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCxP,
    getCxPId,
    addCxP,
    deleteCxP,
    updateCxP
}