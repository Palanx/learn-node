const axios = require( 'axios' ).default;

const getClima = async ( dir ) => {
    const request = axios.create( {
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI( dir )}&units=metric&appid=0ab5e47c9eac664714c6702bbc66b02c`,
        timeout: 1000,
        headers: [ ]
    } );

    return ( await request.get( ) ).data.main.temp;
};

module.exports = {
    getClima
};
