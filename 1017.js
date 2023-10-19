const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let tempoGasto = parseFloat(lines.shift());
let velocidadeMedia = parseFloat(lines.shift());
let kmPorL = 12;

let litrosNecessarios = velocidadeMedia * tempoGasto / kmPorL;

console.log(litrosNecessarios.toFixed(3));