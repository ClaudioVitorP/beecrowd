const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [a, b, c] = lines.shift().split(" ");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let calc = Math.pow(b, 2) - 4 * a * c;

if(calc <0 || a === 0) {
    console.log("Impossivel calcular");
} else {
    let resultado1 = (-b + Math.sqrt(calc)) / (2 * a);
    let resultado2 = (-b - Math.sqrt(calc)) / (2 * a);

    console.log("R1 = " + resultado1.toFixed(5));
    console.log("R2 = " + resultado2.toFixed(5));
}