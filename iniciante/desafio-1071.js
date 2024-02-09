var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numeros = []

for (var i = 0; i < 2; i++) {
    numeros.push(Number(lines.shift()))
}

numeros.sort((a, b) => {
    return a - b
})
var soma = 0
for (var i = numeros[0] + 1; i < numeros[1]; i++) {
    if (i % 2 !== 0) {
        soma += i
    }
}

console.log(soma)