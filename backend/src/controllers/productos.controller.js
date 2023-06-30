import getConnection from "../db/database.js"

const getProductos = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM productos INNER JOIN categorias ON categorias.id_categoria = productos.categoria_producto")
    res.json(result);
}

const getProductosId = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM productos WHERE id_producto = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addProducto = async (req,res)=>{
    try {
        const {nombre_producto, precio_x_dia, stock_producto, categoria_producto} = req.body
        const producto = {nombre_producto, precio_x_dia, stock_producto, categoria_producto};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO productos SET ?",producto)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteProducto = async (req,res)=>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE id_producto = ?",id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateProducto = async (req,res)=>{
    try {
        const {id} = req.params;
        const {nombre_producto, precio_x_dia, stock_producto, categoria_producto} = req.body
        const producto = {nombre_producto, precio_x_dia, stock_producto, categoria_producto};
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE id_producto = ?",[producto,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getProductos,
    getProductosId,
    addProducto,
    deleteProducto,
    updateProducto
}