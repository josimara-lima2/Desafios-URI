var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = Number(lines.shift());
var cont = 0

while (cont <= 5) {
    if (valor % 2 !== 0) {
        console.log(valor)
        cont++
    }

    valor++
}