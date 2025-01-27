const input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const valores = lines.shift().split(" ");

const A = parseInt(valores[0]);
const B = parseInt(valores[1]);
const C = parseInt(valores[2]);

function formaTriangulo(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

const isTriangulo = formaTriangulo(A, B, C);
if (isTriangulo) {
  const area = Number(A) + Number(B) + Number(C);
  console.log(`Área = ${area}`);
} else {
  console.log("Pé");
}
