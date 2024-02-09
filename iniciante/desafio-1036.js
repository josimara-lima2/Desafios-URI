var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');
var A = parseFloat(valores[0])
var B = parseFloat(valores[1])
var C = parseFloat(valores[2])
var delta = (Math.pow(B, 2) - (4 * A * C))

if (A === 0 || delta <= 0) {
    console.log('Impossivel calcular')
} else {
    var r1 = (-B + Math.sqrt(delta)) / (2 * A)
    var r2 = (-B - Math.sqrt(delta)) / (2 * A)
    console.log(`R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`)

}
