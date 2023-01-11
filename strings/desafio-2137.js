var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var isValid = true;

while(isValid){

    var number = lines.shift();
   
    if(number === undefined){
        isValid = false;
    }
    var arr = [];
    for(var i =0; i< parseInt(number); i++){
        arr.push(lines.shift());
    }
    arr.sort();
    arr.map(i => console.log(i)); 
}