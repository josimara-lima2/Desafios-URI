var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtdCases = lines.shift()
for(var i=0; i<qtdCases; i++){
    var num = parseInt(lines.shift());
   console.log(`resposta ${i+1}: ${num}`)
}