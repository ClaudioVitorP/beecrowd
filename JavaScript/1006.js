const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let a = lines.shift();
let b = lines.shift();
let c = lines.shift();

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let pesoA = 2;
let pesoB = 3;
let pesoC = 5;

const media = (a * pesoA + b * pesoB + c * pesoC) / (pesoA + pesoB + pesoC);

console.log("MEDIA = " + media.toFixed(1));
