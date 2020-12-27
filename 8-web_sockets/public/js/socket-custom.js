var socket = io( );
socket.on( 'connect', function ( ) {
    console.log( 'conectado al server.' );
} );

socket.on( 'disconnect', function ( ) {
    console.log( 'desconectado del server.' );
} );

// Los emit son para enviar información
socket.emit( 'enviarMensaje', {
    usuario: 'Tomás',
    mensaje: 'Me conecte al mundo'
}, function ( res ) {
    console.log( res );
} );

socket.on( 'enviarMensaje', function ( data ) {
    console.log( 'respuestaServer', data );
} );
