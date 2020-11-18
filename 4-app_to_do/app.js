const { argv } = require( './config/yargs' );
require( 'colors' );
const { crear, listar, actualizar, borrar } = require( './to_do/to_do' );

const comando = argv._[ 0 ];

switch ( comando ) {
    case 'crear':
        if ( crear( argv.descripcion ) ) {
            console.log( 'Tarea creada'.green );
        } else {
            console.log( 'Tarea ya se encuentra creada'.red );
        }

        break;
    case 'listar':
        for ( const tarea of listar( ) ) {
            console.log( '<===============Tarea===============>'.green );
            console.log( tarea.descripcion );
            console.log( `Terminado: ${tarea.completado}` );
            console.log( '<===================================>'.green );
        }
        break;
    case 'actualizar':
        if ( actualizar( argv.descripcion, argv.completado ) ) {
            console.log( 'La tarea ha sido actualizada'.green );
        } else {
            console.log( 'No se encontro una tarea con esa descripción.'.red );
        }
        break;
    case 'borrar':
        if ( borrar( argv.descripcion ) ) {
            console.log( 'La tarea ha sido borrada'.green );
        } else {
            console.log( 'No se encontro una tarea con esa descripción.'.red );
        }
        break;
    default:
        console.log( 'Comando no valido'.red );
        break;
}
