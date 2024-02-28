var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var value 

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }


function acm(num) {
    var soma = 0
    var qtdCaracteres = num.length
    var caracteres = num.split('')
    
    for (var i = 0; i < qtdCaracteres; i++) {
        soma +=   Number(caracteres[i]) * factorialize(qtdCaracteres - i)
        
    }
    return soma;
  }
  
while(value !== '0'){
    value = String(lines.shift())
    var qtd = acm(value)
    if(qtd === 0) return
    console.log(qtd)
}