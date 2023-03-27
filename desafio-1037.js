var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var num = parseFloat(lines.shift());
var saida = 'Fora de intervalo'
if (num >= 0 && num <= 25) {
    saida = 'Intervalo [0,25]'
} else if (num > 25 && num <= 50) {
    saida = 'Intervalo (25,50]'
} else if (num > 50 && num <= 75) {
    saida = 'Intervalo (50,75]'
} else if (num > 75 && num <= 100) {
    saida = 'Intervalo (75,100]'
}

console.log(saida)
