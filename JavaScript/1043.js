const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [a, b, c] = lines.shift().split(' ');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let newA = b + c > a;
let newB = a + c > b;
let newC = a + b > c;

if(newA && newB && newB) {
    let perimetro = (a + b + c);
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    let area = (a + b) * c / 2.0
    console.log(`Area = ${area.toFixed(1)}`);
}