/* se conecta con vista y modelo */
/*modulos de js (archivos cerrados) . actua similar a objeto ocultando y mostrando metodos (metodos privados y publicos)*/ /*-> cuando no necesito herencias puedo usar modulos */
/*CLASE PARA HACER MVC ORIENTADO A OBJETOS VS. MODULOS */ /*objeto (clase) posible para casos singleton */

const taskModel = require ('../../models/taskModel.js');



function getAll(){
    /*llamo al modelo para pedirle todas las tareas */
    console.log('bienvenido al controlador task - getall');
    taskModel.getAll();

}


/*con el concepto de modulo (archivo cerrado), con esto exporto y comparto las funciones (metodos publicos en objetos // public - private) */
/*exporto funciones con un json */
module.exports = {
    getAll,
}