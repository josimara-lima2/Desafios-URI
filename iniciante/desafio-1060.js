var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numeros = []

for (var i = 0; i < 6; i++) {
    numeros.push(lines.shift())
}
var cont = 0
numeros.map(numero => {
    if (Number(numero) > 0) {
        cont++
    }
})

console.log(`${cont} valores positivos`)