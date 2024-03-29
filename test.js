"use strict"

const express= require('express'); 
const app = express(); //app es una instancia de express, por lo tanto tiene funciones/metodos (get,post,put,delete)

/*importo el controlador de tareas / importo los controladores de cada recurso o autenticacion que utilice en las rutas*/
const taskController = require('./app/controllers/dbControllers/taskController.js');


const port= 3010;


app.get("/", (req, res) => {

   
    taskController.getAll();
    res.send(`<h1> API 2024 <h1/>`);                    // como hago apirest respondo json . req es un objeto
    
    
    

})



app.listen(port, () =>{

    console.log(`escuchando puerto ${port}`);


});


