/* global io, $ */
const socket = io();
const label = $( '#lblNuevoTicket' );

socket.on( 'connect', ( user ) => {
    console.log( 'Conectado al Servidor' );
} );

socket.on( 'disconnect', ( user ) => {
    console.log( 'Desconectado del Servidor' );
} );

socket.on( 'actualizarTicket', ( data ) => {
    label.text( data.ticket );
} );

$( 'button' ).on( 'click', () => {
    socket.emit( 'siguienteTicket' );
} );
