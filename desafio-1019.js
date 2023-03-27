var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var segundos = Number(lines.shift());


var horas = segundos / 3600
var minutos = (segundos / 60) % 60
var segundo = segundos % 60
console.log(`${Math.trunc(horas)}:${Math.trunc(minutos)}:${Math.trunc(segundo)}`)
