/* eslint-disable node/no-callback-literal */
const { io } = require( '../server' );

io.on( 'connection', ( client ) => {
    console.log( 'Usuario conectado.' );
    client.on( 'disconnect', ( ) => {
        console.log( 'Usuario desconectado.' );
    } );
    client.on( 'enviarMensaje', ( data, callback ) => {
        console.log( data );
        /*
        if ( data.usuario ) {
            callback( { status: 'OK' } );
        } else {
            callback( { status: 'FAIL' } );
        }
        */
        client.broadcast.emit( 'enviarMensaje', data );
    } );
    client.emit( 'enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Te conectaste a mi mundo'
    } );
} );
