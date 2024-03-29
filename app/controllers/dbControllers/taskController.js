/* se conecta con vista y modelo */
/*modulos de js (archivos cerrados) . actua similar a objeto ocultando y mostrando metodos (metodos privados y publicos)*/ /*-> cuando no necesito herencias puedo usar modulos */
/*CLASE PARA HACER MVC ORIENTADO A OBJETOS VS. MODULOS */ /*objeto (clase) posible para casos singleton */

const taskModel = require ('../../models/taskModel.js');



async function getAll(req,res){
    /*llamo al modelo para pedirle todas las tareas */
    const rows = await taskModel.getAll();
    res.send(rows);


}

async function get(req, res) {
    //verificaciones.
    const row= await taskModel.get(req.params.id);
    if(row){
        res.send(row);
    }else{
        res.status(404).send(`La tarea con id=${req.params.id} no existe`);
    }

    
    
}


/*con el concepto de modulo (archivo cerrado), con esto exporto y comparto las funciones (metodos publicos en objetos // public - private) */
/*exporto funciones con un json */
module.exports = {
    getAll,
    get
}