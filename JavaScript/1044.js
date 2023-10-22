const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [a, b] = lines.shift().split(' ')

a = parseInt(a);
b = parseInt(b);

if (b % a === 0 || a % b === 0 ){
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}