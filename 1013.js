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

let maiorAB= (a + b + Math.abs( a - b )) / 2;

const maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log( maior + " eh o maior");