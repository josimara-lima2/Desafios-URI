var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var caracteristica1 = lines.shift();
var caracteristica2 = lines.shift();
var caracteristica3 = lines.shift();
var tipo = '';
switch(caracteristica1){
    case 'vertebrado':
        if(caracteristica2 === 'ave'){
            tipo = caracteristica3 === 'onivoro' ? 'pomba' : 'aguia';
           
        }else if(caracteristica2 === 'mamifero'){
            tipo = caracteristica3 === 'onivoro' ? 'homem' : 'vaca';   
        }
    case 'invertebrado':
        if(caracteristica2 === 'inseto'){
            tipo = caracteristica3 === 'hematofago' ? 'pulga' : 'lagarta';
          
        }else if(caracteristica2 === 'anelideo'){
            tipo = caracteristica3 === 'hematofago' ? 'sanguessuga' : 'minhoca';
        
        }
}

console.log(tipo);