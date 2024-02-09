var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var cont = 0;
for(var i=0; i<5; i++){
    var num = parseInt(lines.shift());
    if(num%2 === 0){
        cont++;
    }
}

console.log(`${cont} valores pares`)