var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtdCasos = lines.shift()

for(var i =0; i<qtdCasos; i++){
    var qtdNumeros = lines.shift()
    var soma = 0
        if(qtdNumeros%2 === 0){
            soma = 0
        }else{
            soma = 1;
        }
    
    console.log(soma)
}
