var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtdCasos = lines.shift();

for(var i = 0; i < qtdCasos; i++){
    var valores = lines.shift().split(' ');
    var x = parseInt(valores[0]);
    var y = parseInt(valores[1]);
    var soma = 0;
    var cont = 0;
    while(cont < y){
        if(x%2 !== 0){
            soma += x;
            cont++;
           
        }
        x++;
    }
   
    console.log(soma)
    
}
