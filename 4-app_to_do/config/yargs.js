const desc = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea.',
    string: true
};

const comp = {
    demand: true,
    alias: 'c',
    desc: 'Estado de tarea.',
    boolean: true,
    defaul: true
};

const { argv } = require( 'yargs' )
    .command( 'crear', 'Crear una tarea', {
        descripcion: desc
    } )
    .command( 'listar', 'Listar tareas' )
    .command( 'actualizar', 'Actualizar estado de tarea', {
        descripcion: desc,
        completado: comp
    } )
    .command( 'borrar', 'Borrar una tarea', {
        descripcion: desc
    } )
    .help( );

module.exports = {
    argv
};
