/* global io, $ */
const socket = io();
const label = $( 'small' );

const searchParams = new URLSearchParams( window.location.search );

if ( !searchParams.has( 'escritorio' ) ) {
    window.location = 'index.html';
    throw new Error( 'El escritorio es necesario' );
}

const escritorio = searchParams.get( 'escritorio' );

if ( isNaN( Number( escritorio ) ) ) {
    window.location = 'index.html';
    throw new Error( 'El escritorio tiene que ser numerico' );
}
$( 'h1' ).text( `Escritorio ${ escritorio }` );

$( 'button' ).on( 'click', () => {
    socket.emit( 'atenderTicket', { escritorio }, ( ticket ) => {
        if ( ticket.err ) {
            return alert( ticket.mensaje );
        }
        label.text( `Ticket ${ ticket.numero }` );
    } );
} );
