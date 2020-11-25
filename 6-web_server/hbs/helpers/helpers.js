const hbs = require( 'hbs' );

// Se definen funciones que pueden ser llamadas desde el html o hbs
hbs.registerHelper( 'getAnhio', ( ) => new Date( ).getFullYear( ) );
hbs.registerHelper( 'capitalizar', ( txt ) => {
    const palabras = txt.split( ' ' );
    palabras.forEach( ( palabra, idx ) => {
        palabras[ idx ] = `${palabra.charAt( 0 ).toUpperCase( )}${palabra.slice( 1 ).toLowerCase( )}`;
    } );
    return palabras.join( ' ' );
} );
