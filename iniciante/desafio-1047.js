var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');
var horaInicio = parseInt(valores[0]);
var minutoInicio = parseInt(valores[1]);
var horaFim = parseInt(valores[2]);
var minutoFim = parseInt(valores[3]);


var tempo = ((horaFim*60)+minutoFim) - ((horaInicio*60)+minutoInicio);
if(tempo <= 0) tempo  += 24*60;

console.log(`O JOGO DUROU ${parseInt(tempo/60)} HORA(S) E ${tempo%60} MINUTO(S)`);
