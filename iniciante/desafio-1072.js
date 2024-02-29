var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var casos = Number(lines.shift())
var quantidades = {
    in:0,
    out: 0,
}
for(var i=0; i< casos; i++){
  var value = parseInt(lines.shift())
  if(value >= 10 && value <=20){
    quantidades.in += 1
  }else{
    quantidades.out += 1
  }
}

console.log(`${quantidades.in} in`)
console.log(`${quantidades.out} out`)