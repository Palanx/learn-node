const { argv } = require( 'yargs' )
    .options( {
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima.',
            demand: true,
            string: true
        }
    } )
    .help( );

module.exports = {
    argv
};
