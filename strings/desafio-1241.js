var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = lines.shift();
for(var i =0; i< parseInt(number); i++){
    var valores = lines.shift().split(' ');
  
    var final = valores[0].substring(valores[0].length - valores[1].length);
    if(final === valores[1]){
        console.log('encaixa');
    }else{
        console.log('nao encaixa');
    }
   
}
