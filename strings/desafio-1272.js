var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

 var number = lines.shift();
 for(var i =0; i< parseInt(number); i++){
    var string = lines.shift()
    var words = string.split(' ');
   
    var palavraOculta = ''
    words.map(word => {
        if(word.charAt() != ''){
            palavraOculta += word.charAt()
        }
        
    })
    console.log(palavraOculta);
    palavraOculta = ''
}