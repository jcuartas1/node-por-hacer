const argv = require('yargs')
    .command('crear', 'Crear una elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('listar', 'Trae el listado de tareas por hacer', {
        listado: {
            demand: true,
            alias: 'l',
            desc: 'Trae el listado de tareas'
        }
    })
    .command('borrar', 'Borra la tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}