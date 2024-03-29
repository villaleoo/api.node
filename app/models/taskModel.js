// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const connectionPromise = mysql.createConnection({      /*haciendolo de esta manera, la conexion se dispara una sola vez y guarda el resultado en la constante */
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'db_tareas'
});



function getAll(){
    

    console.log("bienvenido al modelo de tasks - getAll");
}



module.exports={
    getAll,
}