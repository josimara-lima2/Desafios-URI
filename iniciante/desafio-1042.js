var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');

function sortSimples(array) {
    array.sort((a, b) => {
        return a - b
    })

    return array
}


sortSimples([...valores]).forEach(valor => {
    console.log(Number(valor))
})
console.log('')
valores.forEach(valor => {
    console.log(Number(valor))
})
