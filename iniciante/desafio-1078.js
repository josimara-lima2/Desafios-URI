var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var value = parseInt(lines.shift())

for(var i = 1; i<=10; i++){
    console.log(`${i} x ${value} = ${i*value}`)
}