var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var valor = Number(lines.shift())

for(var i=1; i < 10000; i++){
    if(valor != 0 && (i % valor === 2)){
        console.log(i)
    }
}