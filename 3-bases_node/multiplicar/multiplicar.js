'use strict';
const fs = require('fs');

const listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es numerica!');
            return;
        }

        if (!Number(limite)) {
            reject('El limite no es numerico!');
            return;
        }
        const nombreArchivo = `tabla-${base}.txt`;
        fs.readFile(nombreArchivo, (err, data) => {
            if (err) {
                reject(err.message);
                return;
            }
            const dataRows = data.toString().split('\n');
            let dataFiltered = '';
            for (let index = 0; index < limite; index++) {
                dataFiltered += `${dataRows[index]}\n`;
            }
            resolve(dataFiltered);
        });
    });
};

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es numerica!');
            return;
        }
        if (!Number(limite)) {
            reject('El limite no es numerico!');
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        const nombreArchivo = `tabla-${base}.txt`;
        fs.writeFile(nombreArchivo, data, err => {
            if (err) {
                reject(err.message);
                return;
            }
            resolve(nombreArchivo);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};
