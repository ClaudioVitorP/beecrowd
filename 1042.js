const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [numero1, numero2, numero3] = lines.shift().split(' ').map(Number);

let list = [numero1, numero2, numero3];
let arr = [numero1, numero2, numero3].sort((a, b) => a - b);

console.log(`${arr[0]}
${arr[1]}
${arr[2]}`);

console.log(`\n${list[0]}
${list[1]}
${list[2]}`);