var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ')
var horaInicio = parseInt(valores[0])
var horaFim = parseInt(valores[1])

var tempo =  horaFim > horaInicio ? horaFim - horaInicio : 24 - horaInicio + horaFim;

console.log(`O JOGO DUROU ${tempo} HORA(S)`)