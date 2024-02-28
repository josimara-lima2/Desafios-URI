var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

function calculaDeslocamento(velocidade, tempo){
    return parseFloat(velocidade) * parseFloat(tempo)
}

while(lines){
    var valores = lines.shift().split(' ')
    var deslocamento = calculaDeslocamento(valores[0], valores[1] )
    if(valores[0] !== ''){
        var dobroDeslocamento = deslocamento * 2
        if(dobroDeslocamento === -0){
            dobroDeslocamento = Math.abs(dobroDeslocamento)
        }
        console.log(dobroDeslocamento)
    }else{
        return
    }
   
}

