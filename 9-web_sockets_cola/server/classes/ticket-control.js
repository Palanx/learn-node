const { writeFileSync } = require( 'fs' );

class Ticket {
    numero;
    escritorio;

    constructor( numero, escritorio ) {
        this.numero = numero;
        this.escritorio = escritorio;
    }
}

module.exports = class TicketControl {
    #ultimo;
    #hoy;
    #tickets;
    #ultimos4Tickets;

    constructor() {
        this.#ultimo = 0;
        this.#hoy = new Date().getDate();
        this.#tickets = [];
        this.#ultimos4Tickets = [];
        const data = require( '../data/data.json' );

        if ( data.hoy === this.#hoy ) {
            this.#ultimo = data.ultimo || 0;
            this.#tickets = data.tickets || [];
            this.#ultimos4Tickets = data.ultimos4Tickets || [];
        } else {
            this.reiniciarConteo();
        }
    }

    siguiente() {
        this.#ultimo++;
        this.#tickets.push( new Ticket( this.#ultimo, null ) );
        this.grabarArchivo();

        return `Ticket ${ this.#ultimo }`;
    }

    get ultimoTicket() {
        return `Ticket ${ this.#ultimo }`;
    }

    get ultimos4Tickets() {
        return this.#ultimos4Tickets;
    }

    atenderTicket( numEscritorio ) {
        if ( this.#tickets.length === 0 ) {
            return {
                err: true,
                mensaje: 'No hay tickets'
            };
        }
        const numTicket = this.#tickets[ 0 ].numero;
        this.#tickets.shift();
        this.#ultimos4Tickets.unshift( new Ticket( numTicket, numEscritorio ) );

        if ( this.#ultimos4Tickets.length > 4 ) {
            this.#ultimos4Tickets.splice( -1, 1 );
        }

        this.grabarArchivo();

        return this.#ultimos4Tickets[ 0 ];
    }

    reiniciarConteo() {
        this.#ultimo = 0;
        this.#tickets = [];
        this.#ultimos4Tickets = [];
        console.log( 'Se ha inicializado el sistema.' );
        this.grabarArchivo();
    }

    grabarArchivo() {
        const jsonData = {
            ultimo: this.#ultimo,
            hoy: this.#hoy,
            tickets: this.#tickets,
            ultimos4Tickets: this.#ultimos4Tickets
        };

        writeFileSync( './server/data/data.json', JSON.stringify( jsonData ) );
    }
};
