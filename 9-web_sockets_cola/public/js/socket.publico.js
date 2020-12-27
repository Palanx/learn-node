/* global io, $ */
const socket = io();

const lblTickets = [ $( '#lblTicket1' ), $( '#lblTicket2' ), $( '#lblTicket3' ), $( '#lblTicket4' ) ];
const lblEscritorios = [ $( '#lblEscritorio1' ), $( '#lblEscritorio2' ), $( '#lblEscritorio3' ), $( '#lblEscritorio4' ) ];

socket.on( 'connect', ( user ) => {
    console.log( 'Conectado al Servidor' );
} );

socket.on( 'disconnect', ( user ) => {
    console.log( 'Desconectado del Servidor' );
} );

socket.on( 'actualizarTicket', ( ticket ) => {
    let auxTicket;
    const audio = new Audio( 'audio/new-ticket.mp3' );
    audio.play();
    for ( let i = 0; i < 4; i++ ) {
        auxTicket = ticket.ultimos4Tickets[ i ];
        if ( auxTicket ) {
            lblTickets[ i ].text( `Ticket ${ auxTicket.numero }` );
            lblEscritorios[ i ].text( `Escritorio ${ auxTicket.escritorio }` );
        } else {
            lblTickets[ i ].text( 'Ticket -' );
            lblEscritorios[ i ].text( 'Escritorio -' );
        }
    }
} );
