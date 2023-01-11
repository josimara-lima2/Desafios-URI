var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


    var number = lines.shift();
    var cont1 = 0;
    var cont2 = 0;
    
    for(var i =0; i< parseInt(number); i++){
        var string = lines.shift();
        var partes = string.split('k');
      
        
        [...partes[0]].map(i => {
            if(i === 'a'){
                cont1++;
            }
        });
        [...partes[1]].map(i => {
            if(i === 'a'){
                cont2++;
            }
        })
        var res = 'k';
        for(var j =0; j< parseInt(cont1 * cont2); j++){
            res+='a';
        }
        console.log(res);
        cont1 = 0;
        cont2 = 0;
    }

