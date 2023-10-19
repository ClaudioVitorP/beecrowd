const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let segundos = parseInt(lines.shift());

let horas = Math.floor(segundos / 3600);
segundos = segundos % 3600;

let minutos = Math.floor(segundos / 60);
segundos = segundos % 60;

console.log(horas + ":" + minutos + ":" + segundos);
