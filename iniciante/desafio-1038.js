var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');
var codigo = valores[0]
var quantidade = parseInt(valores[1])
var value_total = 0
switch (codigo) {
    case '1':
        value_total = 4.00 * quantidade;
        break;
    case '2':
        value_total = 4.50 * quantidade;
        break;
    case '3':
        value_total = 5.00 * quantidade;
        break;
    case '4':
        value_total = 2.00 * quantidade;
        break;
    case '5':
        value_total = 1.50 * quantidade;
        break;
    default:
        break;

}

console.log(`Total: R$ ${value_total.toFixed(2)}`);