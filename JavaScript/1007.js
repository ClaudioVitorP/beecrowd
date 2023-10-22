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
let d = lines.shift();

let diferenca = (a * b - c * d);

console.log("DIFERENCA = " + diferenca);