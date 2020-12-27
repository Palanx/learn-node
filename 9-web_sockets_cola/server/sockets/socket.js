const { io } = require( '../server' );
const TicketControl = require( '../classes/ticket-control' );

const ticketControl = new TicketControl();

io.on( 'connection', ( client ) => {
    console.log( 'Usuario conectado' );

    client.on( 'disconnect', () => {
        console.log( 'Usuario desconectado' );
    } );

    actualizarTicket();

    // Escuchar el cliente
    client.on( 'siguienteTicket', () => {
        ticketControl.siguiente();
        actualizarTicket();
    } );

    client.on( 'estadoActual', () => {
        actualizarTicket();
    } );

    client.on( 'atenderTicket', ( data, callback ) => {
        if ( !data.escritorio ) {
            return {
                err: true,
                mensaje: 'El escritorio es necesario'
            };
        }

        callback( ticketControl.atenderTicket( data.escritorio ) );
        actualizarTicket( client );
    } );
} );

const actualizarTicket = () => {
    io.sockets.emit( 'actualizarTicket', {
        ticket: ticketControl.ultimoTicket,
        ultimos4Tickets: ticketControl.ultimos4Tickets
    } );
};
