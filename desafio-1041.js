var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var coordenadas = lines.shift().split(' ');
var x = parseFloat(coordenadas[0])
var y = parseFloat(coordenadas[1])
var quadrante = ''
if(x === 0.0 && y !== 0.0){
    quadrante = 'Eixo Y'
}else if((x !== 0.0 && y === 0.0)){
    quadrante = 'Eixo X'
}else if(x > 0 && y> 0){
    quadrante = 'Q1'
}else if(x < 0 && y > 0){
    quadrante = 'Q2'
}else if(x < 0 && y < 0){
    quadrante = 'Q3'
}else if(x > 0 && y < 0){
    quadrante = 'Q4'
}else{
    quadrante = 'Origem'
}

console.log(quadrante);