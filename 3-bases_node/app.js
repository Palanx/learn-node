'use strict';
const {
    crearArchivo: ca,
    listarTabla: lt
} = require('./multiplicar/multiplicar');

const {
    argv
} = require('./config/yargs');

require('colors');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        lt(argv.base, argv.limite)
            .then(data => console.log(data.green))
            .catch(err => console.log(`Error al leer el archivo: ${err}`.red));
        break;
    case 'crear':
        ca(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(err => console.log(`Error al crear el archivo: ${err}`.red));
        break;
    default:
        console.log('Comando no reconocido');
};