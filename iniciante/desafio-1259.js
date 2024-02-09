var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtdCasos = lines.shift();
var pares = [];
var impares = [];

for(var i = 0; i < qtdCasos; i++){
    var num = parseInt(lines.shift())
    if(num%2 === 0){
        pares.push(num);
    }else{
        impares.push(num)
    }
}
let sorted_pares = pares.slice();
let sorted_impares = impares.slice();

sorted_pares = sorted_pares.sort(function(a, b) {
  return a-b
});

sorted_impares = sorted_impares.sort(function(a, b) {
    return a-b
  });
sorted_impares.reverse()
sorted_pares.forEach(item => console.log(`${item}`))
sorted_impares.forEach(item => console.log(`${item}`))



