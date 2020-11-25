const path = require( 'path' );
const express = require( 'express' );
const app = express( );
const hbs = require( 'hbs' );
require( './hbs/helpers/helpers' );

// Acceder a las variables de entorno globales de Heroku
const port = process.env.PORT || 8080; // Si no encuentra la variable usa el valor 8080

// Expone una ruta
app.use( express.static( path.join( __dirname, '/public' ) ) );

// Define ruta donde estan definidos los archivos parciales
hbs.registerPartials( path.join( __dirname, '/views/partials' ) );
// Express HBS Engine
app.set( 'view engine', 'html' );
app.engine( 'html', require( 'hbs' ).__express );

// Response a Request Get en /
app.get( '/', ( req, res ) => {
    /*
    res.header( { 'Content-Type': 'application/json' } );
    const salida = {
        nombre: 'Tomás',
        edad: 26,
        url: req.url
    };
    res.send( JSON.stringify( salida ) );
    */
    res.render( 'home', {
        nombre: 'tomás muñiz'
    } );
} );

app.get( '/about', ( req, res ) => {
    res.render( 'about' );
} );

app.listen( port, ( ) => {
    console.log( `Escuchando puerto: ${port}` );
} );
