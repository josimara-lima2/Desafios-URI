var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var contPositivos = 0;
var soma = 0;
for(var i=0; i<6; i++){
    var num = parseFloat(lines.shift());
    if(num > 0){
        contPositivos++;
        soma += num;
    }
}
var media = soma/contPositivos;

console.log(`${contPositivos} valores positivos\n${media.toFixed(1)}`);