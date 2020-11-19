require( 'colors' );
const { getClima } = require( './weather/weather' );
const { argv } = require( './config/yargs' );

const getInfo = async ( direccion ) => {
    try {
        const temp = await getClima( direccion );
        return `La temperatura actual de ${direccion} es: ${temp} C`;
    } catch ( error ) {
        return `No se pudo determinar el clima de ${direccion}. Motivo: ${error.response.data.message}`;
    }
};

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );
