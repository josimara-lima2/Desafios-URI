var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());
var valorInicial = valor
var quantidades = [];


function verificaValor(value, cedula){
    if(value >= cedula){
        quantidades.push(parseInt(value/cedula));
        valor = value - parseInt(value/cedula) * cedula; 
    }else{
        quantidades.push(0);
    }
}
verificaValor(valor, 100);
verificaValor(valor, 50);
verificaValor(valor, 20);
verificaValor(valor, 10);
verificaValor(valor, 5);
verificaValor(valor, 2);
verificaValor(valor, 1);



var string = ``;
quantidades.forEach((item, index) => {
    if(index === 0){
        string +=  `${item} nota(s) de R$ 100,00\n`;
    }else if(index === 1){
        string +=  `${item} nota(s) de R$ 50,00\n`;
    }else if(index === 2){
        string +=  `${item} nota(s) de R$ 20,00\n`;
    }else if(index === 3){
        string +=  `${item} nota(s) de R$ 10,00\n`;
    }else if(index === 4){
        string +=  `${item} nota(s) de R$ 5,00\n`;
    }else if(index === 5){
        string +=  `${item} nota(s) de R$ 2,00\n`;
    }else if(index === 6){
        string +=  `${item} nota(s) de R$ 1,00`;
    }
  
});
console.log(valorInicial);
console.log(`${string}`);