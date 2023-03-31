var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var soma = 0;
var valores = [300, 1500, 600, 1000, 150]
for (var i = 0; i < 5; i++) {
    var qtd = Number(lines.shift())
    soma += qtd * valores[i]
}

console.log(soma + 225)