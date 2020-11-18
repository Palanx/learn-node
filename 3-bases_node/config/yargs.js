const opts = {
    base: {
        demand: true,
        alias: 'b',
        number: true,
        desc: 'Base de la multiplicación.'
    },
    limite: {
        alias: 'l',
        number: true,
        default: 10,
        desc: 'Limite para multiplicar la base.'
    }
};

const { argv } = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar', opts)
    .help();

module.exports = {
    argv
};
