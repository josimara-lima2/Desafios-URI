var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tipoCha = lines.shift()
var respostas = lines.shift().split(' ')
console.log(respostas.filter(r => r === tipoCha).length)