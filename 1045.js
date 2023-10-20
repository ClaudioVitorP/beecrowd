const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [a, b, c] = lines.shift().split(' ')

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (a < b) [a, b] = [b, a];
if (a < c) [a, c] = [c, a];
if (b < c) [b, c] = [c, b];

if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
        console.log("TRIANGULO RETANGULO");
    }
    if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
        console.log("TRIANGULO EQUILATERO");
    } else if (a === b || a === c || b === c) {
        console.log("TRIANGULO ISOSCELES");
    }
}
