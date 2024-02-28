var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var value 
function qtdQuadrados(num) {
    var soma = 0
    for (var i = 1; i <= num; i++) {
      soma += i * i;
    }
    return soma;
  }
  
while(value !== 0){
    value = Number(lines.shift())
    var qtd = qtdQuadrados(value)
    if(qtd === 0) return
    console.log(qtd)
}