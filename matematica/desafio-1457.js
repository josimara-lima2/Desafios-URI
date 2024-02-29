var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');



var qtdCasos = Number(lines.shift())
function oracleAlexandria(n,k){
    var total = BigInt(n)
    var i = BigInt(1)
    while( BigInt(n) - (i * BigInt(k)) >= 1){
        total *= BigInt(n) - (i * BigInt(k))
        i += BigInt(1)

    }
    return total
}

for(var i=0; i < qtdCasos; i++){
    value = String(lines.shift())
    
    var index = value.indexOf('!')
    var num = value.slice(0, index)
    var str = value.slice(index)
  
    var qtd = oracleAlexandria(num, str.length)
    
    console.log(qtd.toString())
}
