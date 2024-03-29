"use strict"

const express= require('express'); 
const bodyParse= require("body-parser");
const app = express(); //app es una instancia de express, por lo tanto tiene funciones/metodos (get,post,put,delete)

/*importo el controlador de tareas / importo los controladores de cada recurso o autenticacion que utilice en las rutas*/
const taskController = require('./app/controllers/dbControllers/taskController.js');


const port= process.env.PORT || 3010;

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.get("/", (req, res) => {
    res.send("INICIO API . /tareas para ver todas las tareas");

});

app.get('/tarea/:id',  (req, res) => {
    
    taskController.get(req,res);
   
});


app.get("/tareas", (req, res) => {

    taskController.getAll(req,res);

});





app.listen(port, () =>{

    console.log(`escuchando puerto ${port}`);


});


