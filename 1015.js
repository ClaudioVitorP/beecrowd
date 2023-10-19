const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [x1, y1] = lines[0].split(" ");
let [x2, y2] = lines[1].split(" ");

x1 = parseFloat(x1);
y1 = parseFloat(y1);
x2 = parseFloat(x2);
y2 = parseFloat(y2);

let distancia = Math.sqrt(Math.pow(x2 -  x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));