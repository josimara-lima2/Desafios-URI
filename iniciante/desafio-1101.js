var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var isValid = true;

function sorting(a, b) {
    return a-b;
}
while(isValid){
    var valores = lines.shift().split(' ');
    var sorted = valores.sort(sorting);
    
    var num1 = parseInt(sorted[0]);
    var num2 = parseInt(sorted[1]);
    var soma = 0;
    var arr = [];
    if(num1 <= 0 || num2 <=0){
        isValid = false;
    }else{
      for(var i= num1; i<=num2; i++){
        soma += i;
        arr.push(i);
      }
      console.log(arr.join(' '),`Sum=${soma}`);
    }
}