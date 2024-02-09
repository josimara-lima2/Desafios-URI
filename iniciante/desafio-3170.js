var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var bolinhas = parseInt(lines.shift())
var galhos = parseInt(lines.shift())

if(galhos%2 !== 0){
    galhos -= 1
}
var qtdCerta = galhos/2
var falta = qtdCerta - bolinhas
var string = falta > 0 ? `Faltam ${falta} bolinha(s)` : `Amelia tem todas bolinhas!`
console.log(string)