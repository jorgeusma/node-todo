const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descipcion de la tarea por hacer'

};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea'

};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Elimiina una tarea', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}