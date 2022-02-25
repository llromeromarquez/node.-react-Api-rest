const mysql = require("mysql");
const { database } = require("./config.js");
// const { database } = require("./keys");
const pool = mysql.createPool(database);
const { promisify} = require("util");

pool.getConnection((err, connection)=>{

    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("LA CONEXION CON LA BASE DE DATOS FUE CERRADA");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("LA BASE DE DATOS TIENE MAS CONEXIONES");
        }
        if (err.code === "ECONNREFUSED") {
            console.error("CONEXION RECHAZADA");
            
        }
    }

    if (connection) connection.release();
    console.log("CONEXION EXITOSA A LA BASE DE DATOS");
    return;
});

// convirtiendo a promesas los query
pool.query = promisify(pool.query);

module.exports = pool;