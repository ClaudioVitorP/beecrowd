const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let nota1 = lines.shift();
let nota2 = lines.shift();

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);

let peso1 = 3.5;
let peso2 = 7.5;

const media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);

console.log("MEDIA = " + media.toFixed(5));
