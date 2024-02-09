var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtdMovimentos = lines.shift()
var posicaoInicial = lines.shift()
var posicaoAtual = posicaoInicial

for(var i = 0; i<qtdMovimentos; i++){
    var tipoMovimento = lines.shift()
    switch(tipoMovimento){
        case '1': 
            if(posicaoAtual === 'B'){
                posicaoAtual = 'A'
            }else if(posicaoAtual === 'A'){
                posicaoAtual = 'B'
            }
            break;
        case '2':
            if(posicaoAtual === 'B'){
                posicaoAtual = 'C'
            }else if(posicaoAtual === 'C'){
                posicaoAtual = 'B'
            }
            break;
        case '3': 
            if(posicaoAtual === 'A'){
                posicaoAtual = 'C'
            }else if(posicaoAtual === 'C'){
                posicaoAtual = 'A'
            }
            break;
    }
}

console.log(posicaoAtual)