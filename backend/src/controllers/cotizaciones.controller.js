import getConnection from "../db/database.js"

const getCotizaciones = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM cotizaciones INNER JOIN empleados ON empleados.id_empleado = cotizaciones.fk_id_empleado INNER JOIN constructoras ON constructoras.id_constructora = cotizaciones.fk_id_constructora")
    res.json(result);
}

const getCotizacionesId = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM cotizaciones WHERE id_cotizacion = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addCotizacion = async (req,res)=>{
    try {
        const {fk_id_empleado, fk_id_constructora, fecha_cotizacion, hora_cotizacion, dia_alquiler, duracion_alquiler} = req.body
        const cotiza = {fk_id_empleado, fk_id_constructora, fecha_cotizacion, hora_cotizacion, dia_alquiler, duracion_alquiler};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO cotizaciones SET ?",cotiza)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteCotizacion = async (req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM cotizaciones WHERE id_cotizacion = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateCotizacion = async (req,res)=>{
    try {
        const {id} = req.params;
        const {fk_id_empleado, fk_id_constructora, fecha_cotizacion, hora_cotizacion, dia_alquiler, duracion_alquiler} = req.body
        const cotiza = {fk_id_empleado, fk_id_constructora, fecha_cotizacion, hora_cotizacion, dia_alquiler, duracion_alquiler};
        const connection = await getConnection();
        const result = await connection.query("UPDATE cotizaciones SET ? WHERE id_cotizacion = ?",[cotiza,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCotizaciones,
    getCotizacionesId,
    addCotizacion,
    deleteCotizacion,
    updateCotizacion
}