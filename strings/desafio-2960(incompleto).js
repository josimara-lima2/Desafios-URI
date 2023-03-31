var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numberSelecao = lines.shift();
var palavras = []
for (var i = 0; i <= parseInt(numberSelecao); i++) {
    var qtd = lines.shift();
    var str = ''
    for (var j = 0; j < parseInt(qtd); j++) {
        var valores = lines.shift();
        str += valores.charAt(0)
    }
    palavras.push(str)

}

function isVogal(char) {
    return /^[aeiou]$/i.test(char);
}

var vogais = []
var consoates = []
var linguagem = ''
palavras.forEach(p => {
    linguagem += p.charAt(0)
    console.log(p)
    p.split('').forEach(m => {
        if (isVogal(m)) {
            vogais.push(m)
        } else {
            consoates.push(m)
        }

    })
})


var fVogais = vogais.filter(function (el, i) {
    return vogais.indexOf(el) === i;
});

var fConsoantes = consoates.filter(function (el, i) {
    return consoates.indexOf(el) === i;
});

console.log(fVogais, fConsoantes)

var horas = (consoates.length + vogais.length + vogais.length) / consoates.length

var test = ``
palavras.forEach((p, index) => {
    if (index < palavras.length - 1) {
        test += `${p.toLowerCase()}\n`
    } else {
        test += `${p.toLowerCase()}`
    }
})
console.log(`Nome da Linguagem: ${linguagem.toUpperCase()}`)
console.log(`Lista de Palavras:`)
console.log(test + `Numero de Vogais: ${vogais.length}`)
console.log(`Numero de Consoantes: ${consoates.length}`)
console.log(`Numero Total de Letras: ${consoates.length + vogais.length}`)
if (consoates.length === 0) {
    console.log('Linguagem Ruim')
} else {
    console.log(`Tempo para aprender: ${horas.toFixed(1)} horas`)
}
