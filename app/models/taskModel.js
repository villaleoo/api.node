//get the client
const mysql = require('mysql2/promise');

//create the connection to database
const connectionPromise = mysql.createConnection({      /*haciendolo de esta manera, la conexion se dispara una sola vez y guarda el resultado en la constante */
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'db-task'
});



async function getAll(){

  const db= await connectionPromise;
  const [rows, fields]= await db.query('SELECT * FROM tasks'); //destructuring

  return rows;


}

async function get(id) {
  const db= await connectionPromise;

  const [[row], fields]= await db.query('SELECT * FROM tasks WHERE id = ?', [id]); 

  return row;
}



module.exports={
    getAll,
    get
}