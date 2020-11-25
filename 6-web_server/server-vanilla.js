const http = require( 'http' );

http.createServer( ( req, res ) => {
    res.writeHead( 200, { 'Content-Type': 'application/json' } );
    const salida = {
        nombre: 'Tomás',
        edad: 26,
        url: req.url
    };
    res.write( JSON.stringify( salida ) );
    res.end( ); // Sin el END el Cliente se quedara esperando infinitamente esperando que se cree el response
} ).listen( 8080 );

console.log( 'Escuchando puerto: 8080' );
