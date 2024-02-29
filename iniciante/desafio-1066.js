var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var quantidades = {
     par :0,
     impar :0,
     negativo :0,
     positivo :0,
}
for(var i = 0; i<5; i++){
    var value = Number(lines.shift())
    if(value % 2 === 0){
        quantidades.par += 1
    }else{
        quantidades.impar += 1
    }
   if(value === 0) continue
    if(value > 0){
        quantidades.positivo += 1
    }else{
        quantidades.negativo += 1
    }
}

console.log(`${quantidades.par} valor(es) par(es)`)
console.log(`${quantidades.impar} valor(es) impar(es)`)
console.log(`${quantidades.positivo} valor(es) positivo(s)`)
console.log(`${quantidades.negativo} valor(es) negativo(s)`)