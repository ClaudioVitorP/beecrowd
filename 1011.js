const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let r = lines.shift();
const pi = 3.14159;
let cubo = (r * r * r).toFixed(3);

let volume = (4/3) * pi * cubo;


console.log("VOLUME = " + volume.toFixed(3));
