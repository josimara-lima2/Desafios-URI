var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var notas = lines.shift().split(' ')
var soma = 0
var situacao = ''
notas.forEach((nota,index) => {
    switch(index){
        case 0:
            soma += (parseFloat(nota) * 2);
            break;
        case 1:
            soma += (parseFloat(nota) * 3);
            break;
        case 2:
            soma += (parseFloat(nota) * 4);
            break;
        case 3:
            soma += (parseFloat(nota) * 1);
            break;
        default:
            break;
    }
})
var media = soma/10
if(media >= 7.0){
    situacao = 'Aluno aprovado';
}else if(media < 5.0){
    situacao = 'Aluno reprovado';
}else{
    situacao = 'Aluno em exame';
}

console.log(`Media: ${media.toFixed(1)}\n${situacao}.`)
if(situacao === 'Aluno em exame'){
    var notaExame = parseFloat(lines.shift())
    var situacaoExame = notaExame >= 5.0 ? 'Aluno aprovado' : 'Aluno reprovado'
    var mediaFinal = (media + notaExame) /2
    console.log(`Nota do exame: ${notaExame.toFixed(1)}\n${situacaoExame}.\nMedia final: ${mediaFinal.toFixed(1)}`)  
}

