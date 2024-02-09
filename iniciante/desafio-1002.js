var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var raio = lines.shift()
var PI = 3.14159
var area = PI * Math.pow(parseFloat(raio),2)
console.log(`A=${area.toFixed(4)}`)