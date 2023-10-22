const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let idade = parseInt(lines.shift());

let anos = Math.floor(idade / 365);
idade = idade % 365;

let meses = Math.floor(idade / 30);
idade = idade % 30;

let dias = idade

console.log(anos + " ano(s)\n" + meses + " mes(es)\n" + dias + " dia(s)");