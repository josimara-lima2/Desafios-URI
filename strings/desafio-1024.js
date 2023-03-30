var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = lines.shift();


function check(ch) {
    if (ch >= "A" && ch <= "Z")
        return 'upper'
    else if (ch >= "a" && ch <= "z")
        return 'lower'
    else
        return ''

}

for (var i = 0; i < parseInt(number); i++) {
    var valores = lines.shift();
    var str = ''
    valores.split('').forEach(m => {
        if (check(m) != '') {
            var i = m.charCodeAt(0);
            str += String.fromCharCode(i + 3)

        } else {
            str += m
        }

    });

    str = str.split('').reverse().join("")


    var metade = Math.trunc((str.length / 2))

    var strNova = ''
    str.split('').forEach((m, index) => {
        if (index < metade) return

        var i = m.charCodeAt(0);
        strNova += String.fromCharCode(i - 1)


    });

    console.log(str.slice(0, metade) + strNova)
}

