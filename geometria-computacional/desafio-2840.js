var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var dados = lines.shift().split(" ");
var PI = 3.1415;

function calcularVolume(raio) {
  var cubo_r = Math.pow(raio, 3);
  return (4 * PI * cubo_r) / 3;
}

var volume = calcularVolume(dados[0]);
var qtdGas = dados[1];
var qtdbaloes = 0;

while (qtdGas > 0) {
  if (qtdGas >= volume) {
    qtdGas -= volume;
    qtdbaloes++;
  } else {
    qtdGas -= volume;
  }
}

console.log(qtdbaloes);
