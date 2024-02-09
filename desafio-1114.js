var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var senhaCorreta = 2002;
var senha = 0;

while (senha !== senhaCorreta) {
  senha = Number(lines.shift());

  if (senha === senhaCorreta) {
    console.log("Acesso Permitido");
  } else {
    console.log("Senha Invalida");
  }
}
