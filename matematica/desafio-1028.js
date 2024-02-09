var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var casos = Number(lines.shift())
// calcular maximo divisor comum
function gcd(a, b) {
    if (b === 0) {
        return a
    }
    return gcd(b, a % b)
}
for(var i=0; i<casos; i++){
    var valores = lines.shift().split(' ')
    var maior = gcd(valores[0], valores[1] )
    console.log(maior)
}