const fs = require( 'fs' );

let listadoPorHacer = [ ];

const guardarDB = ( ) => {
    const data = JSON.stringify( listadoPorHacer );

    fs.writeFile( 'db/data.json', data, ( err ) => {
        if ( err ) {
            throw new Error( 'No se pudo grabar', err );
        }
    } );
};

const cargarDB = ( ) => {
    try {
        listadoPorHacer = require( '../db/data.json' );
    } catch {
        listadoPorHacer = [ ];
    }
};

const crear = ( descripcion ) => {
    const porHacer = {
        descripcion,
        completado: false
    };

    cargarDB( );
    const index = listadoPorHacer.findIndex( t => t.descripcion === descripcion );
    if ( index >= 0 ) {
        return null;
    }

    listadoPorHacer.push( porHacer );
    guardarDB( );

    return porHacer;
};

const listar = ( ) => {
    cargarDB( );
    return listadoPorHacer;
};

const actualizar = ( descripcion, completado = true ) => {
    cargarDB( );

    const tarea = listadoPorHacer.find( t => t.descripcion === descripcion );
    if ( tarea ) {
        tarea.completado = completado;
        guardarDB( );
        return true;
    }
    return false;
};

const borrar = ( descripcion ) => {
    cargarDB( );
    const index = listadoPorHacer.findIndex( t => t.descripcion === descripcion );
    if ( index >= 0 ) {
        listadoPorHacer.splice( index, 1 );

        guardarDB( );
        return true;
    }
    return false;
};

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
};
