import getConnection from "../db/database.js"

const getEmpleados = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM empleados")
    res.json(result);
}

const getEmpleadosId = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados WHERE id_empleado = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addEmpleado = async (req,res)=>{
    try {
        const {nombre_empleado, email_empleado, celular_empleado, password_empleado} = req.body
        const empleado = {nombre_empleado, email_empleado, celular_empleado, password_empleado};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO empleados SET ?",empleado)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteEmpleado = async (req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM empleados WHERE id_empleado = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateEmpleado = async (req,res)=>{
    try {
        const {id} = req.params;
        const {nombre_empleado, email_empleado, celular_empleado, password_empleado} = req.body
        const empleado = {nombre_empleado, email_empleado, celular_empleado, password_empleado};
        const connection = await getConnection();
        const result = await connection.query("UPDATE empleados SET ? WHERE id_empleado = ?",[empleado,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getEmpleados,
    getEmpleadosId,
    addEmpleado,
    deleteEmpleado,
    updateEmpleado
}